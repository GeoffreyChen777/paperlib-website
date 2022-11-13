# Metadata Scrapers

## Data Pipeline of a Newly-imported Paper

When you import a paper, the data pipeline is as follows:

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
A metadata scraper consists of three main functions: 
- `preProcess` : the return value usually consists of three elements:
    1.  `scrapeURL` : the URL to request.
    2.  `headers` : the headers of the request.
    3.  `enable` : whether to enable the scraper.
- `parsingProcess` : parses the response of the request url `scrapeURL` and assigns the response metadata to `paperEntityDraft`. This `paperEntityDraft` will go through all enabled scrapers and finally be inserted or updated to the Paperlib database.
- `scrapeImpl`: firstly calls the `preProcess`, then does the network requesting, and finally calls the `parsingProcess`.


## scrapeImpl

The default `scrapeImpl` function body is:

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
Usually, it is unnecessary to modify this function.

## preProcess

Let's use the [built-in DOI scraper](https://github.com/GeoffreyChen777/paperlib/blob/67a6e2611054c23089338a6718db66e3287129f3/app/repositories/scraper-repository/scrapers/doi.ts#L9) as an example. 

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

This function firstly determines whether this scraper should be enabled or not. Here, if the `paperEntityDraft` has a valid `doi` property, you enabled this scraper in the preference window, and this is a preprint paper. the `enable` would be `true`.

After that, we construct the `scrapeURL`. 

Some API requires specific HTTP `header`, then we set it.

Finally, we send a message to Paperlib that your scraper are going to scrape the metadata of this paper.

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

The `parsingProcess` is very easy to understand. It just parses the `rawResponse` and set corresponding values of the `paperEntityDraft`.

