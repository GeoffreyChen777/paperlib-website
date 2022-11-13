# Custom Scraper

This page introduce how to create your custom scraper.

## Add a Custom Scraper

Open the preference window, click the `scrapers` tab, click the `+` button, and open the setting window of the custom scraper.

![](/assets/images/guide/metadata-scrapers/1.png)

## Implement an Auto Tagger

We implement an auto tagger to automatically tag your newly-imported papers as an example to introduce how to create a custom scraper.

### Name
`auto-tagger`

### Args
```json
{"semi-supervised":"semi-supervised", "segmentation":"segmentation", "detection":"detection"}
```

You can define your own rules as: `{"keywords":"tag name"}`

### preProcess

If the `paperEntityDraft` has no tag, we enable this scraper:

```javascript
enable = paperEntityDraft.tags.length === 0 && this.getEnable("auto-tagger");
```

### Parsing Process

`tagMap` is the previous-defined `args`. We obtain it from the preference store.

if the `title` contains the `key`, we add an instance of tagClass of name `tag` to the `paperEntityDraft`.

```javascript
const tagMap = JSON.parse(this.preference.get("scrapers")["auto-tagger"].args);

const title = paperEntityDraft.title.toLowerCase();
    
let autoTags = []
for (const [key, tag] of Object.entries(tagMap)) {

  if (title.includes(key.toLowerCase())) {
    autoTags.push(new this.tagClass(tag, 1))
  }
}

paperEntityDraft.setValue("tags", autoTags);
```

### ScrapeImpl

```javascript

const { scrapeURL, headers, enable } = this.preProcess(
  paperEntityDraft
);

if (enable) {
  return this.parsingProcess('', paperEntityDraft);
} else {
  return paperEntityDraft;
}

```


Finally, click the `save` button to save the custom scraper.