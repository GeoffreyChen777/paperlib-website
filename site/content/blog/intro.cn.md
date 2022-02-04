---
title: 如何使用 Paperlib
date: 2022-02-04T17:04:41+06:00
author: Geo
description: "This is meta description"
---

本文对 Paperlib 的基础使用方法进行介绍。

### 0. 选择一个文件夹作为论文库

首先打开设置界面，在 General 选项卡中选择一个文件夹，用于存放所有论文 PDF 和数据库文件。建议选择一个可同步的文件夹，如 Onedrive，Dropbox 文件夹等。
### 1. 添加新论文到 Paperlib

拖动 PDF 到 Paperlib 的主视图，或者在 arXiv 网站上点击 Chorme 扩展。论文的元数据会从 arXiv, doi.org, DBLP, and IEEE 自动获取。一些论文可能在这些数据库中无法找到匹配的, 因此会导致导入一个空的论文条目。 你可以手动编辑他，或者填入标题之后，重新匹配。

![](/images/blog/intro/add.png)

#### # arXiv
我们使用 arXiv ID (如果存在) 来获取论文标题和作者。

#### # doi.org
如果 DOI 存在，会从 doi.org 获取精确的论文发表信息。

#### # DBLP
DBLP 是一个包含计算机领域大量会议期刊的数据库. 我们使用标题和作者匹配的方式在 DBLP 里进行元数据匹配.

#### # IEEE xplore
IEEE 的 API key 每日请求数量有限, 因此预设的 Key 只在作者的朋友间共享， 你可以在这里自己申请: [IEEE Developer](https://developer.ieee.org/apps/mykeys)

#### # 我们的在线引擎
我们开发了一个在线的 PDF 标题提取引擎来帮助 Paperlib 提取论文标题，以便在没有任何识别码，比如没有任何 arXiv ID 或者 DOI 时，也可以 DBLP 中进行检索。

-----

### 2. 打开一个论文 

双击表里的条目 (只支持 windows， fxxk swiftui) 或者在详情面板中双击预览图。

-----

### 3. 添加删除一个标签或者文件夹

点击菜单中的标签或者文件夹按钮, 输入名称，以 ';' 分割。文件夹是不同于普通标签的一种特殊标签。普通标签代表了这个论文的自有属性，比如该论文属于 classification，detection 等。文件夹代表了用户赋予的属性，比如 cvpr-ref，代表了在此文件夹里的论文是我为CVPR写作所组织的引用。

删除一个标签或者文件夹只需要编辑该论文并在标签字符串里去掉相应的名字即可。将某标签或文件夹从所有论文上移除只需要右键点击左侧列表中的对应标签或文件夹选择删除。

![](/images/blog/intro/tag.png)

-----

### 4. 添加补充材料

将补充材料拖到右侧详情面板即可。

-----

### 5. 云同步

- 打开设置面板
- 在 Sync 页面中，输入你的同步 API Key，然后勾选同步。

<br/>

*目前，同步功能还在 BETA 测试中，请联系 Paperlib 作者索要 API key. 云数据库只存储你的论文索引，标签，笔记等内容，不存 PDF 文件 (因为我很穷，如果存 PDF，付不起云数据库的钱 = =)。*
**永远不要与他人共享 API key，因为这是访问你云数据库的唯一凭证。**


![](/images/blog/intro/sync.png)


#### # 在不同设备间同步

打开云同步功能，确保你的本地库路径选择是一致的。例如，你可以使用 Onedrive 在不同设备间来同步本地库。在设备 A, 选择对应路径 `C:/Onedrive/mypaperlib` 作为库路径. 在设备 B, 选择对应的 `/user/xxx/Onedrive/mypaperlib`。