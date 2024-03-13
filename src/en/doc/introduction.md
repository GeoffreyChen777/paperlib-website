---
title: "Highlights"
---

# Paperlib

<div style="display: flex; margin-top: 15px">
<img style="margin-right: 10px; border-radius: 0px !important;" src="https://img.shields.io/badge/dynamic/json?label=Release&query=version&url=https://raw.githubusercontent.com/GeoffreyChen777/paperlib/master/package.json" />
<img style="margin-right: 10px; border-radius: 0px !important;" src="https://img.shields.io/github/license/GeoffreyChen777/paperlib" />
<img style="margin-right: 10px; border-radius: 0px !important;" src="https://img.shields.io/github/stars/GeoffreyChen777/paperlib" />
</div>


An open-source academic paper management tool.

## Introduction

I'm a computer science PhD student. Conference papers are in major in my research community, which is different from other disciplines. Without DOI, ISBN, metadata of a lot of conference papers are hard to look up (e.g., NIPS, ICLR etc.). When I cite a publication in a draft paper, I need to manually search the publication information of it in Google Scholar or DBLP over and over again.

**Why not Zotero, Mendely?**

- A good metadata scraping capability is one of the core functions of a paper management tool. Unfortunately, no software in this world does this well, not even commercial software.

- A modern UI. No extra useless features.

What we need may be to: import a paper, scrape the metadata of it as accurately as possible, simply organise the library, and export it to BibTex when we are writing our papers.

That is Paperlib.


## Highlights
-   Scrape paper’s metadata with many scrapers. Support writing your metadata scrapers. Tailored for many disciplines (still growing):
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
-   Fulltext and advanced search.
-   Rating, flag, tag, folder and markdown/plain text note.
-   RSS feed subscription to follow the newest publications on your research topic.
-   Locate and download PDF files from the web.
-   macOS spotlight-like plugin to copy-paste references easily when writing a draft paper. Also supports MS Word.
-   Cloud sync, supports macOS, Linux, and Windows.
-   Beautiful and clean UI.
-   Extensible