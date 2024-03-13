# Getting Started

This article introduces how to use Paperlib.

## Library Folder

Open the preference window, choose a folder to store all your paper PDF files and the local database files. 

> ⚠️ If you are going to use the cloud sync feature, we recommend you to choose a shared folder such as Onedrive, Dropbox etc.

> ⚠️ If you use WebDAV to sync your library, this folder is used as the cache folder.

![](/assets/images/getting-started/library-folder.png)

## Metadata Scrapers

We build a data pipeline to scrape the metadata from many databases for each paper. We achieve this via an extension `paperlib-metadata-scrape-extension`. You can select your preferred scrapers in the preference window.

> ⚠️ Please choose a proper scraper combination for the best retrieval rate.

![](/assets/images/getting-started/scraper.png)

## Import New Papers

Drag and drop PDF files onto the main view of Paperlib. You can also import a paper from a website by clicking the [browser extension](./extensions/browser-extension).

The `.bib` file and the `.csv` file exported from Zotero are also supported.

![](/assets/images/getting-started/add.png)

## Metadata Retrieval

The metadata of each imported paper will be automaticlly scraped. Some papers may match nothing in the databases, thereby resulting in an empty/wrong paper item. You can manually edit its metadata by pressing `CTRL/CMD + E` or by clicking the edit button. Providing one of the title / DOI / arxivID and click the `Scrape` button to complete the rest is enough for most cases.

## Open / Preview a Paper

- Open a paper: double click an item in the main view. 
- Preview a paper: press `Space` or switch to the Table and Reader view.
- For Windows / Linux users, please install the `paperlib-preview-extension` from our extension marketplace.

![](/assets/images/getting-started/preview.png)

## Tags / Folders
- Add: open the edit view, add or create your preferred tags. You can also drag-drop an item to a tag/folder in the sidebar to add it to the tag/folder. In the left sidebar, you can also create a new tag or folder by clicking the `+` button.
- Colorize: right click a tag or a folder in the sidebar list can change its color.

> By default, the `tag` is the inherent attributes of a paper such as `computer-vision`. The `folder` indicates the attributes given by users such as `good-writing`. But you can use them in any way you like. In Paperlib 3.0, we provide hierarchical folders.

![](/assets/images/getting-started/edit.png)

## Attach Supplementary Files

Drag and drop some files onto the detail view (right panel) of a paper to attach supplementaries.

![](/assets/images/getting-started/addsup.png)

## Locate Available PDF

For a paper without a PDF file, click the button called 'Locate' in the details panel to download the PDF file from internet. Please install the `paperlib-paper-locate-extension` to use it.

Paperlib provides some PDF downloaders such as arXiv, Unpaywall etc.. For xxx-hub (that very famous paper download website XD), we cannot directly provide it because of the legal issue. You can manually input the URL of it in the `preference - downloader` to use it.

![](/assets/images/getting-started/locate.png)

## Search

Paperlib provides three search modes: `general`, `fulltext`, and `advanced` mode. You can use `\search`, `\search_fulltext`, and `\search_advanced` in the command bar to switch between them.

## Quick Copy-paste Plugin

When you are writing a paper, you can use the Quick Copy-paste Plugin to copy-paste the BibTex of a paper in your library. Just press `CTRL/CMD+SHIFT+I`, search a paper, and press `Enter`. Now, the BibTex is copied to your clipboard. You can also link this plugin to a folder. All papers copied by this plugin will be added to that folder. Thus, you can export all the BibTex once you finish writing your draft paper.

<img style="box-shadow: none" src="/assets/images/getting-started/plugin.png" />

See [Quick Copy-paste Plugin](./quick-copy-paste-plugin/) for more details.

## Subscribe to RSS Feeds

You can subscribe to RSS feeds to get the latest papers in your research topic. To add a new RSS feed, switch to the `Feeds` view and click the `+` button in the sidebar.

> How to use the arXiv RSS?
> 
> https://arxiv.org/help/rss
> 
> https://arxiv.org/help/api/user-manual#search_query_and_id_list

Many journals provide RSS feeds. Please refer to their official website to learn how to use RSS.

![](/assets/images/getting-started/feedadd.png)

## Cloud Sync

See [Cloud Sync](./cloud-sync/setup) for more details.