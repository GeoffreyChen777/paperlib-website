# 元数据搜寻器

## 新导入论文的数据流

当你导入新的论文的时候，数据流如下：

```
Drag and Drop a PDF File

          |
          v

Create paperEntityDraft

          |
          v

for scraper of scraperList:
    paperEntityDraft = scraper.scrape(paperEntityDraft)

          |
          v

Insert paperEntityDraft into database

          |
          v

Move PDF file to the library folder
```

## Design
一个搜寻器主要由三个函数组成：
- `preProcess` : 返回值包含:
    1.  `scrapeURL` : the URL to request.
    2.  `headers` : the headers of the request.
    3.  `enable` : whether to enable the scraper.
- `parsingProcess` : 解析 `scrapeURL` 的返回值，根据返回值修改 `paperEntityDraft`. `paperEntityDraft` 会依次经过所有的搜寻器并最终被插入更新到数据库。
- `scrapeImpl`: 首先调用 `preProcess`, 之后执行网络请求，最后调用 `parsingProcess`。


## scrapeImpl

默认的 `scrapeImpl` 函数体：

```javascript
  // Args: (paperEntityDraft, force = false)

  const { scrapeURL, headers, enable } = this.preProcess(
    paperEntityDraft
  );

  if (enable || force) {
    const response = (await window.networkTool.get(
      scrapeURL,
      headers
    ));
    return this.parsingProcess(response, paperEntityDraft);
  } else {
    return paperEntityDraft;
  }
```

## preProcess

用 [built-in DOI scraper](https://github.com/GeoffreyChen777/paperlib/blob/67a6e2611054c23089338a6718db66e3287129f3/app/repositories/scraper-repository/scrapers/doi.ts#L9) 作为例子： 

```javascript
    // Args: (paperEntityDraft)

    const enable =
      paperEntityDraft.doi !== "" &&
      this.getEnable("doi") &&
      this.isPreprint(paperEntityDraft);
    const doiID = formatString({
      str: paperEntityDraft.doi,
      removeNewline: true,
      removeWhite: true,
    });
    const scrapeURL = `https://dx.doi.org/${doiID}`;
    const headers = {
      Accept: "application/json",
    };

    if (enable) {
      this.stateStore.logState.processLog = `Scraping metadata by DOI ...`;
    }
    return { scrapeURL, headers, enable };
```

这个函数首先确定是否启用此搜刮器。在这里如果 `paperEntityDraft` 有 `doi` 属性，你启用了这个搜刮器，并且本论文是一个预印本论文，`enable` 为 `true`。

之后我们构建 `scrapeURL`。

一些 API 需要特定的 HTTP `header`，我们设置 `header`。

最后发送一个提示信息。

## parsingProcess

```javascript
    // Args: (rawResponse, paperEntityDraft)

    if (rawResponse.body.startsWith("<")) {
      return paperEntityDraft;
    }

    const response = JSON.parse(rawResponse.body) as {
      title: string;
      author: { given?: string; family?: string; name?: string }[];
      published: {
        "date-parts": { "0": string[] };
      };
      type: string;
      "container-title": string | string[];
      publisher: string;
      page: string;
      volume: string;
      issue: string;
      subtitle: string[];
    };
    const title = [response.title, response.subtitle.join(' ')].filter(t => t !== '').join(" - ");
    const authors = response.author
      .map((author) => {
        if (author.name) {
          return author.name;
        } else {
          return author.given?.trim() + " " + author.family?.trim();
        }
      })
      .join(", ");
    const pubTime = response.published["date-parts"]["0"][0];
    let pubType;
    if (response.type == "proceedings-article") {
      pubType = 1;
    } else if (response.type == "journal-article") {
      pubType = 0;
    } else if (response.type.includes("book") || response.type.includes("monograph")) {
      pubType = 3;
    } else {
      pubType = 2;
    }

    let publication
    if (response.type.includes('monograph')) {
      publication = response.publisher.replaceAll('&amp;', '&');
    } else {
      publication = response["container-title"];
      if (Array.isArray(publication)) {
        publication = publication.join(', ').replaceAll('&amp;', '&');
      } else {
        publication = publication.replaceAll('&amp;', '&');
      }
    }

    paperEntityDraft.setValue("title", title);
    paperEntityDraft.setValue("authors", authors);
    paperEntityDraft.setValue("pubTime", `${pubTime}`);
    paperEntityDraft.setValue("pubType", pubType);
    paperEntityDraft.setValue("publication", publication);
    if (response.volume) {
      paperEntityDraft.setValue("volume", response.volume);
    }
    if (response.issue) {
      paperEntityDraft.setValue("number", response.issue);
    }
    if (response.page) {
      paperEntityDraft.setValue("pages", response.page);
    }
    if (response.publisher) {
      paperEntityDraft.setValue(
        "publisher",
        response.publisher ===
          "Institute of Electrical and Electronics Engineers (IEEE)"
          ? "IEEE"
          : response.publisher
      );
    }
    this.uploadCache(paperEntityDraft, "doi");
    return paperEntityDraft;
```

`parsingProcess` 解析 `rawResponse` 设置 `paperEntityDraft` 对应的值。