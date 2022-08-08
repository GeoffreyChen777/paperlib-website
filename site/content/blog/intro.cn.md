---
title: 如何使用 Paperlib
date: 2022-02-04T17:04:41+06:00
author: Geo
description: "This is meta description"
---

本文对 Paperlib 的基础使用方法进行介绍。

### 0. 选择一个文件夹作为论文库

首先打开设置界面，在 General 选项卡中选择一个文件夹，用于存放所有论文 PDF 和数据库文件。建议如果之后有多端同步需求，选择一个可同步的文件夹，如 Onedrive，Dropbox 文件夹等。

所有的论文 PDF 在存入这个文件夹之前会根据一定的规则进行重命名，Paperlib 提供了三种重命名规则。可以在 Renaming Format 选型进行选择。

-----

### 1. 添加新论文到 Paperlib

拖动 PDF 到 Paperlib 的主视图，或者在网站上点击 Chorme 扩展。论文的元数据会首先从 arXiv, doi.org, DBLP, openreview.net，IEEE，Google Scholar 等处自动获取。一些论文可能在这些数据库中无法找到匹配的, 因此会导致导入一个空的论文条目。 你可以点击`CTRL/CMD + E`或者菜单栏的编辑按钮手动编辑之后重新匹配。

![](/images/blog/intro/add.png)

你也可以拖动 PDF 到对应的标签或者文件夹，就可以导入的时候直接打上对应标签文件夹了。

-----

### 2. 打开/预览一个论文 

双击表里的条目或者在详情面板中双击预览图。可以按空格打开预览。

![](/images/blog/intro/preview.png)


-----

### 3. 元数据抓取，添加删除一个标签或者文件夹

我们提供很多抓取器来从不同的数据源搜索论文原数据。比如，arXiv 抓取器可以从 arXiv.org 获取数据。我们使用所有抓取器为每一个导入的论文创建了数据流以尽可能准确的为它们匹配元数据。当然你也可以编写你自己的 scraper，详情请参考 [这里](https://github.com/GeoffreyChen777/paperlib/wiki)。

对于一个自动匹配失败的论文，如果你手动修改了它的如 `arxiv_id` 或者 `doi` 这样的识别码，你可以手动点击重新匹配按钮匹配精准的元数据信息。

点击`CTRL/CMD + E`或者菜单栏的编辑按钮打开编辑界面。文件夹是不同于普通标签的一种特殊标签。普通标签代表了这个论文的自有属性，比如该论文属于 classification，detection 等。文件夹代表了用户赋予的属性，比如 cvpr-ref，代表了在此文件夹里的论文是我为CVPR写作所组织的引用。在主界面左侧的列表右键可以更改颜色或者删除整个标签/文件夹。删除一个论文的标签或者文件夹只需要编辑该论文并在标签里去掉相应的即可。另外，你也可以拖动主视图列表里的条目到侧边栏对应的标签或者文件夹。

![](/images/blog/intro/edit.png)

-----

### 4. 添加补充材料

将补充材料拖到右侧详情面板即可。它可以是论文的 Supplementary，可以是你自己的 markdown 笔记，可以是任何文件。

![](/images/blog/intro/addsup.png)

-----

### 5. 搜索

我们提供了三种搜索方式：普通搜索，全文搜索，和高级搜索。点击搜索栏的按钮进行切换。

-----

### 6. 快速复制粘贴 BibTex 插件

当你写论文的时候，你可以使用 BibTex 复制插件快速复制粘贴 BibTex 字符串。只需要点击`CMD/CTRL+SHIFT+I`, 搜索选择一个论文按 `Enter`.

![](/images/blog/intro/plugin.png)


-----

### 7. 订阅 RSS 流

订阅一个 RSS 流来获取你的领域内的最新论文。切换到 'Feeds' 界面，侧边栏点击 `+` 按钮。具体订阅方式详见：

https://arxiv.org/help/rss

https://arxiv.org/help/api/user-manual#search_query_and_id_list

![](/images/blog/intro/feedadd.png)

-----

### 8. 云同步

请参照 [如何使用云同步](/cn/blog/sync/)
