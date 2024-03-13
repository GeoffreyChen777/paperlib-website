---
title: "亮点"
---

# Paperlib

<div style="display: flex; margin-top: 15px">
<img style="margin-right: 10px; border-radius: 0px !important;" src="https://img.shields.io/badge/dynamic/json?label=Release&query=version&url=https://raw.githubusercontent.com/GeoffreyChen777/paperlib/master/package.json" />
<img style="margin-right: 10px; border-radius: 0px !important;" src="https://img.shields.io/github/license/GeoffreyChen777/paperlib" />
<img style="margin-right: 10px; border-radius: 0px !important;" src="https://img.shields.io/github/stars/GeoffreyChen777/paperlib" />
</div>

开源文献管理软件。

## Introduction

我是一个计算机专业的博士生，会议论文在我的研究领域里占主要地位。很多会议例如：NIPS，ICLR，并没有 DOI 编码。因此现有的文献管理软件几乎无法匹配他们的发表信息元数据。在我写论文的时候，我不得不一次次得搜索 Google Scholar，DBLP 来确保引文的发表信息无误。

**对比于 Zotero, Mendely?**

- 一个好的文献管理软件应该能够自动匹配文献的发表信息，而不是需要用户手动输入。这样可以大大减少用户的工作量。

- 现代 UI，没有无用的功能。

也许我们需要的只是：导入论文，自动匹配发表信息，简单管理文献库，写论文的时候方便地生成参考文献。

这就是 Paperlib。


## 亮点
- 为多学科定制元数据搜索器，支持自己编写。：
    -  **General**
        -  `arXiv`
        -  `doi.org`
        -  `Semantic Scholar`
        -  `Crossref`
        -  `Google Scholar`
        -  `Springer`
        -  `Elseivier Scopus`
    -  **Computer Science and Electronic Engineering**
        -  `openreview.net`
        -  `IEEE`
        -  `DBLP`
        -  `Paper with Code (scrape available in the code repository)`
    -  **Earth Science**
    -  **Physics**
        -  `NASA Astrophysics Data System`
        -  `SPIE: Inte. Society for Optics and Photonics`
    -  **Chemistry**
        -  `ChemRxiv`
    -  **Biology**
        -  `BioRxiv / MedRxiv`

    - ...
-  全文搜索，高级搜索.
-  评价，星标，标签，组，markdown 纯文本笔记等。
-  订阅 RSS 获取最新论文。
-  搜索网络可用的 PDF，下载 PDF。
-  macOS spotlight 一样的快速复制粘贴引用插件， MS Word 插件。
-  云同步，三平台支持：macOS, Windows, Linux。
-  干净整洁的 UI。
-  支持插件。
