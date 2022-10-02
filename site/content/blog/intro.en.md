---
title: How to Use Paperlib
date: 2022-02-04T17:04:41+06:00
author: Geo
description: "This is meta description"
---

This article introduces how to use Paperlib.

### 0. Select a library folder

Firstly, open the preference window, choose a folder to store all your paper PDF files and the local database files. If you may use the cloud sync feature, we recommend you to choose a shared folder such as Onedrive, Dropbox etc.

All PDF files will be renamed when they are moved to your library folder. We provide some predifined renaming formats. You can also create your own custom format.

-----

### 1. Add new papers to Paperlib

Drag and drop PDF files onto the main view of Paperlib. You can also insert a paper from a website by our browser extension. Please contact us if our extension doesn't support your website.

![](/images/blog/intro/add.png)

### 2. Metadata Retrieval

The metadata will be automaticlly scraped from many metadata databases. This is a key feature of Paperlib. For a conference paper without DOI, none of other software can retrieve the metadata. But that is very important for some disciplines such as computer science. We build a data pipeline to scrape the metadata from many databases that can yield a high retrieval rate. We provide many metadata scrapers. Please choose the best combination for your research topic.

Some papers may match nothing in these databases, thereby resulting in an empty paper item. You can manually edit its metadata by pressing `CTRL/CMD + E` or by clicking the edit button. Providing one of the title / DOI / arxivID is enough for most cases.

You can also develop your own scraper to fetch metadata from other sources. Please refer to the [custrom scraper](https://github.com/GeoffreyChen777/paperlib/wiki) for more details.

-----

### 3. Open / Preview a Paper Managed by Paperlib

To open a paper, just double click an item in the main view. You can choose your prefered PDF viewer in the preference view. You can also press `Space` or switch to the Table and Reader view to preview a paper.

![](/images/blog/intro/preview.png)


You can also add a paper with a tag/folder by drag-droping it onto one tag/folder in the sidebar.


-----

### 4. Organise Your Library

Click the edit button in the menubar or press `CTRL/CMD + E`, modify the metadata and add or create your preferred tags and folders. Right click tags or folders in the sidebar list can change their colors. The 'tag' is the inherent attributes of a paper such as classification, detection. The 'folder' indicates the attributes given by the user. For example, a paper may be placed in a folder group called 'good writing'. You can also drag-drop an item to a tag/folder in the sidebar to add it to the tag/folder.

![](/images/blog/intro/edit.png)

-----

### 5. Attach Supplementary Files

Drag and drop some files onto the detail view (right panel) of a paper to add supplementaries. Supplementaries can be any files such as the supplementary of a paper, or your markdown note file.

![](/images/blog/intro/addsup.png)


-----

### 6. Locate Available PDF

If you have a paper in your library without a PDF file, you can see a button called 'Locate' in the details panel. Click it and Paperlib will try to download the PDF file from internet. We provide some PDF downloaders such as arXiv, Unpaywall. For xxx-hub (that very famous website), we cannot directly provide it because of the legal issue. You can manually input the URL of it in the preference view to use it.

-----


### 7. Search

Paperlib provides three search modes: general, fulltext, and advanced mode. Click the button in the search bar to switch between them.

------

### 8. Quick Copy-paste Plugin

When you are writing a paper, you can use the Quick Copy-paste Plugin to copy-paste the BibTex of a paper in your library. Just press `CTRL/CMD+SHIFT+I`, search a paper, and press `Enter`. Now, the BibTex is copied to your clipboard. You can also link this plugin with a folder. All papers copied by this plugin will be added to the folder. Thus, you can export all the BibTex once you finish writing your draft paper.

The Microsoft Word plugin is comming soon.

![](/images/blog/intro/plugin.png)

-----

### 9. Subscribe to RSS Feeds

You can subscribe to RSS feeds to get the latest papers in your research topic. To add a new RSS feed, switch to the 'Feeds' view and click the `+` button in the sidebar.

How to use the arXiv RSS?

https://arxiv.org/help/rss

https://arxiv.org/help/api/user-manual#search_query_and_id_list

Many journals provide RSS feeds. Please refer to their official website to learn how to use RSS.

![](/images/blog/intro/feedadd.png)

-----

### 10. Cloud Sync

To use the cloud sync feature, please refer to [How to use Cloud Sync](/en/blog/sync/)
