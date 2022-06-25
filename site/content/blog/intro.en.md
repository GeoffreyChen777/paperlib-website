---
title: How to Use Paperlib
date: 2022-02-04T17:04:41+06:00
author: Geo
description: "This is meta description"
---

This article introduces how to use Paperlib.

### 0. Select a library folder

Firstly, open the preference window, choose a folder to store all your paper PDF files and the local database files.

### 1. Add new paper to Paperlib

Drag and drop PDF files onto the main view of Paperlib. The metadata will be automaticlly fetched from arXiv, doi.org, DBLP, openreview.net, IEEE, Google Scholar etc. Some papers may match nothing in these database, thereby resulting in an empty paper item. You can manually edit its metadata in the edit window and rescrape it.

![](/images/blog/intro/add.png)

-----

### 2. Scrapers

Paperlib provides some scrapers to fetch metadata from various sources. For example, you can use arXiv scraper to fetch metadata from arXiv.org. Those scrapers are used to build a data pipeline for each paper to fetch the metadata as accurate as possible.

-----

### 3. Open a paper managed by Paperlib

Just double click an item in the main view. You can also press Space to preview a paper.

-----

### 4. Edit metadata, add tags and folders

Click the edit button in the menu, modify the metadata and add or create your preferred tags and folders. Right click tags or folders in the sidebar list can change their colors. The 'tag' is the inherent attributes of a paper such as classification, detection. The 'folder' indicates the attributes given by the user. For example, a paper may be placed in a folder group called 'good writing'.

![](/images/blog/intro/edit.png)

-----

### 5. Add supplementary files

Drag and drop PDF files onto the detail view (right panel) of a paper. It can be any files such as the supplementary of a paper, or your markdown notes.

-----

### 6. Search

Paperlib provides three search modes: general, fulltext, and advanced mode. Click the button in the search bar to switch between them.

![](/images/blog/intro/search.png)

------

### 7. Easy copy-paste plugin

When you are writing a paper, you can use the easy copy-paste plugin to copy-paste the BibTex of a paper in your library. Just press `cmd/ctrl+shift+I`, select a paper and press `Enter`. Now, the BibTex is in your clipboard.

![](/images/blog/intro/plugin.png)


-----

### 8. Cloud Sync

To use the cloud sync feature, please refer to the [How to use Cloud Sync](/en/blog/sync/)
