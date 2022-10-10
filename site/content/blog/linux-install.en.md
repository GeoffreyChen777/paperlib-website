---
title: Use Paperlib on Linux
date: 2022-10-09T17:04:41+06:00
author: Geo
description: "This is meta description"
---

We use AppImage to distribute Paperlib on Linux rather than .deb. The reason is that AppImage can run on almost any Linux distribution without installing any dependencies and can perform automatic update detection.

---

## Requirements

`GLIBCXX >= 3.4.26`

For example: Ubuntu 18.04 or later, Debian 11 or later, Deepin 23 or later.

To check if your system meets the requirements, run the following command:

```
strings /usr/lib/x86_64-linux-gnu/libstdc++.so.6 | grep GLIBCXX
```

---

## Download and Run

Download the latest AppImage file.

```
curl -L https://paperlib.app/distribution/electron-linux/Paperlib_latest.AppImage -o Paperlib.AppImage
```

Then give it execute permission.

```
chmod +x Paperlib.AppImage
```

Finally, run it.

```
./Paperlib.AppImage
```

---

## Automatic Update

AppImage will automatically detect updates and if there is a new version, it will automatically download and install it. Please make sure that you don't put it in a directory that your current user doesn't have permission to, such as `/usr/bin/`. You can put it in `~/.local/bin/` to ensure that it can run in any directory.