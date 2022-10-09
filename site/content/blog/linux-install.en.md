---
title: Use Paperlib on Linux
date: 2022-10-09T17:04:41+06:00
author: Geo
description: "This is meta description"
---

We use AppImage to distribute Paperlib on Linux rather than .deb. The reason is that AppImage can run on almost any Linux distribution without installing any dependencies and can perform automatic update detection.

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