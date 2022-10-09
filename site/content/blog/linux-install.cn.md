---
title: 在 Linux 上安装 
date: 2022-10-09T17:04:41+06:00
author: Geo
description: "This is meta description"
---

我们使用 AppImage 来分发 Paperlib 的 Linux 版本， 而不是 .deb 等包。 这是因为 AppImage 可以在几乎任何 Linux 发行版上运行，而不需要安装任何依赖项，且可以完成自动检测更新。

---

## 下载使用

下载最新的 AppImage 文件。

```
curl -L https://paperlib.app/distribution/electron-linux/Paperlib_latest.AppImage -o Paperlib.AppImage
```

然后给它执行权限。

```
chmod +x Paperlib.AppImage
```

最后，运行它。

```
./Paperlib.AppImage
```

---

## 自动更新

AppImage 会自动检测更新，如果有新版本，它会自动下载并安装。请确保不要把它放在您当前用户无权限的目录，比如`/usr/bin/`。您可以将其放在`~/.local/bin/`，来确保在任意目录下都可以运行。