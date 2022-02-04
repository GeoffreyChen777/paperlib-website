---
title: How to Use Paperlib
date: 2022-02-04T17:04:41+06:00
author: Geo
description: "This is meta description"
---

This article introduces how to use Paperlib.

### 0. Select a library folder

Firstly, open the setting window, choose a folder to store all your paper PDF files and the local database files.

### 1. Add new paper to Paperlib

Drag and drop PDF files onto the main view of Paperlib. The metadata will be automaticlly fetched from arXiv, doi.org, DBLP, and IEEE. Some papers may match nothing from these database, thereby resulting in a empty paper item. You can manually edit it, or type the title and manually rematch.

![](/images/blog/intro/add.png)

#### # arXiv
We use the arXiv ID (if avaliable) to get the title and authors information from the arXiv API.

#### # doi.org
If the DOI identity is avaliable, the exact metadata can be obtained from doi.org.

#### # DBLP
DBLP is a database cotains numerous conference and journal publications of computer science. We use the title and authors of each paper to query the metadata from DBLP.

#### # IEEE xplore
Since the query number for one API key is limited, the predefined key is only avaliable to the author's friends. For others, the API Key can be applied from here: [IEEE Developer](https://developer.ieee.org/apps/mykeys)

#### # Our online engine
We developed a online title extraction engine to help Paperlib extract the title when there is no identity (e.g., arXiv id or doi).

-----

### 2. Open a paper managed by Paperlib

Double click the item in the main view (only support windows) or the preview image in the details view.

-----

### 3. Add tags and folders

Click the tag or folder button in the menu, type the tag or folder names splited by ';'.

![](/images/blog/intro/tag.png)

-----

### 4. Add supplementary files

Drag and drop PDF files onto the detail view (right panel) of a paper.

-----

### 5. Cloud Sync
- Open the setting window, cmd+, on mac or click the setting button on windows.   
- In sync tab, type your sync key and tick the cloud sync checkbox.

<br/>

*Currently the cloud sync is in BETA. Please ask Paperlib's author for the sync API key. The cloud database can only store all your data except the PDF files (I'm poor, cannot afford such expensive online database space if put all PDFs online. :( ).*
**Never share your API key with others. It is the only certification for your library's access**

![](/images/blog/intro/sync.png)


#### # Sync between different devices

Just ture on the cloud sync and make sure the library folder is correct. For example, You can use onedrive (or dropbox etc.) to share your PDF files between two devices. On device A, choose `C:/Onedrive/mypaperlib` as your library folder. On the other device B, choose `/user/xxx/Onedrive/mypaperlib` as the library folder.