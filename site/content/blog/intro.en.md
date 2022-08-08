---
title: How to Use Paperlib
date: 2022-02-04T17:04:41+06:00
author: Geo
description: "This is meta description"
---

This article introduces how to use Paperlib.

### 0. Select a library folder

Firstly, open the preference window, choose a folder to store all your paper PDF files and the local database files.

-----

### 1. Add new paper to Paperlib

Drag and drop PDF files onto the main view of Paperlib. The metadata will be automaticlly fetched from arXiv, doi.org, DBLP, openreview.net, IEEE, Google Scholar etc. Some papers may match nothing in these databases, thereby resulting in an empty paper item. You can manually edit its metadata by pressing `CTRL/CMD + E` or by clicking the edit button.

![](/images/blog/intro/add.png)

-----

### 2. Open / Preview a paper managed by Paperlib

To open a paper, just double click an item in the main view. You can also press `Space` to preview a paper.

![](/images/blog/intro/preview.png)


-----

### 3. Metadata, tags and folders

Paperlib provides some scrapers to fetch metadata from various sources. For example, you can use arXiv scraper to fetch metadata from arXiv.org. Those scrapers are used to build a data pipeline for each paper to fetch the metadata as accurate as possible when you import it. You can also develop your own scraper to fetch metadata from other sources. Please refer to the [custrom scraper](https://github.com/GeoffreyChen777/paperlib/wiki) for more details.

If you have manually edited some key identifiers of a paper, such as `arxiv_id`, `doi`, then you can use the scrape button to re-fetch its metadata.

Click the edit button in the menubar or press `CTRL/CMD + E`, modify the metadata and add or create your preferred tags and folders. Right click tags or folders in the sidebar list can change their colors. The 'tag' is the inherent attributes of a paper such as classification, detection. The 'folder' indicates the attributes given by the user. For example, a paper may be placed in a folder group called 'good writing'.

![](/images/blog/intro/edit.png)

-----

### 4. Attach supplementary files

Drag and drop some files onto the detail view (right panel) of a paper. It can be any files such as the supplementary of a paper, or your markdown note file.

![](/images/blog/intro/addsup.png)


-----

### 5. Search

Paperlib provides three search modes: general, fulltext, and advanced mode. Click the button in the search bar to switch between them.

------

### 6. BibTex copy-paste plugin

When you are writing a paper, you can use the BibTex copy-paste plugin to copy-paste the BibTex of a paper in your library. Just press `CTRL/CMD+SHIFT+I`, search a paper, and press `Enter`. Now, the BibTex is copied to your clipboard.

![](/images/blog/intro/plugin.png)

-----

### 7. Subscribe to RSS feeds

You can subscribe to RSS feeds to get the latest papers in your research topic. To add a new RSS feed, switch to the 'Feeds' view and click the `+` button in the sidebar.

How to use the arXiv RSS?

https://arxiv.org/help/rss

https://arxiv.org/help/api/user-manual#search_query_and_id_list


![](/images/blog/intro/feedadd.png)

-----

### 8. Cloud Sync

To use the cloud sync feature, please refer to [How to use Cloud Sync](/en/blog/sync/)
