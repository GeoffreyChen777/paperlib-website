# 使用指南

本文对 Paperlib 的基础使用方法进行介绍。

## 库文件夹

首先打开设置界面，在通用选项卡中选择一个文件夹，用于存放所有论文 PDF 和数据库文件。

> ⚠️ 建议如果之后有多端同步需求，选择一个可同步的文件夹，如 Onedrive，Dropbox 文件夹等。

> ⚠️ 如果之后你设置 WebDAV，那么本文件夹将会是你的本机缓存路径。

![](/assets/images/getting-started/library-folder.png)

## 元数据抓取器

我们使用所有抓取器为每一个导入的论文创建了数据流以尽可能准确的为它们匹配元数据。尤其是对于没有 DOI 号的会议论文等。这对于计算机学科至关重要。插件 `paperlib-metadata-scrape-extension` 配合 `paperlib-entry-scrape-extension` 实现这一功能。请在插件的设置界面中选择你需要的抓取器。

> ⚠️ 请选择合适的抓取起组合以及先后顺序，来获得最佳的抓取效果。

![](/assets/images/getting-started/scraper.png)

## 添加新论文

对于 PDF 文件，直接拖动到 Paperlib 的主视图。如果你在浏览网页，那么在网页上点击浏览器扩展，如果该网站支持导入，那么就会导入。详见 [浏览器扩展](./extensions/browser-extension)。

同样也支持导入 `.bib` 文件, zotero 导出的 `.csv` 文件。

![](/assets/images/getting-started/add.png)

## 元数据抓取

论文的元数据会通过各种数据库搜寻器自动获取。这也是 Paperlib 不同于其他所有文献管理软件的地方。

一些论文可能在这些数据库中无法找到匹配的, 因此会导致导入一个空的论文条目。 你可以点击`CTRL/CMD + E`或者菜单栏的编辑按钮手动编辑之后重新匹配。对于一个自动匹配失败的论文，如果你手动修改了它的如 `title`, `arxiv_id` 或者 `doi` 任意一个属性，将会大大增加匹配成功率。

## 打开/预览一个论文 

- 双击列表里的条目或者在详情面板中双击预览图就可以通过 PDF 阅读器打开文件
- 如果你只是想快速预览一下 PDF，可以按空格打开预览。或者在软件右上角三种视图中切换到第三个视图。
- 对于 Window / Linux 用户，请安装 `paperlib-preview-extension`。


![](/assets/images/getting-started/preview.png)

## 标签 和 组

- 添加/删除一个论文的标签只需要编辑该论文并在标签里添加/去掉相应的即可。另外，你也可以拖动主视图列表里的条目到侧边栏对应的标签来直接添加。在左侧边栏，你也可以点击 `+` 按钮来创建一个新的标签或者组。
- 彩色: 右键侧边栏的标签或者组可以更改颜色。

> 组是不同于普通标签的一种特殊标签。他在配合 快速复制粘贴插件 时非常有用。普通标签代表了这个论文的自有属性，比如该论文属于 classification，detection 等。组代表了用户赋予的属性，比如 cvpr-ref，代表了在此组里的论文是我为 CVPR 写作所组织的引用。当然你可以按照自己的习惯使用。我们提供层级组，你可以将其组织成树状结构。组支持层级结构，而标签为原子性的，不支持层级结构。

![](/assets/images/getting-started/edit.png)

## 添加补充材料

将补充材料拖到右侧详情面板对应位置即可。它可以是论文的 Supplementary，可以是你自己的 markdown 笔记，可以是任何文件。

![](/assets/images/getting-started/addsup.png)

## 搜寻可用的 PDF

如果你添加的论文条目没有 PDF，那么你将在右侧面板看到搜寻 PDF 的按钮。我们提供一个插件 `paperlib-paper-locate-extension`，来下载论文 PDF。比如：arXiv，Unpaywall 等。

![](/assets/images/getting-started/locate.png)

## 搜索

我们提供了三种搜索方式：普通搜索，全文搜索，和高级搜索。在命令栏分别使用 `\search`, `\search_fulltext` 和 `\search_advanced` 来调用。

## 快速复制粘贴插件

当你写论文的时候，如果你使用 LaTex，你可以使用快速复制插件快速复制粘贴 BibTex 字符串。只需要点击`CMD/CTRL+SHIFT+I`, 搜索选择一个论文按 `Enter` 或者 `SHIFT + Enter` 来复制 BibTex 或者 BibTex 键值。你可以把插件链接到一个组，该组将会存放你所有复制的论文。当你完成写作之后，你可以一次性复制这个组的所有 BibTex 字符串。

一个理想的写作流程是：1）首先将插件链接到一个组，2）写作过程中不断搜索，复制 BibTex 键值到你的 LaTex 文件中，3）写作完成，打开插件，复制全部 BibTex 到 `.bib` 文件中。

<img style="box-shadow: none" src="/assets/images/getting-started/plugin.png" />

## 订阅 RSS 流

订阅一个 RSS 流来获取你的领域内的最新论文。你可以一键将论文添加到你的库里，从此不错过新的论文。切换到 'Feeds' 界面，侧边栏点击 `+` 按钮。例如，

> 对于 arxiv.org 具体订阅方式详见：
> 
> https://arxiv.org/help/rss
> 
> https://arxiv.org/help/api/user-manual#search_query_and_id_list

大部分期刊都提供 RSS 源，请参照对应的网站。

![](/assets/images/getting-started/feedadd.png)

## 云同步

详见 [云同步](./cloud-sync/setup)。