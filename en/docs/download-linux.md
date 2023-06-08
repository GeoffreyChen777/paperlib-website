# Linux Install

We use AppImage to distribute Paperlib on Linux rather than .deb. The reason is that AppImage can run on almost any Linux distribution without installing any dependencies and can perform automatic update detection.

## Requirements

`GLIBCXX >= 3.4.26`

For example: Ubuntu 18.04 or later, Debian 11 or later, Deepin 23 or later.

To check if your system meets the requirements, run the following command:

```
strings /usr/lib/x86_64-linux-gnu/libstdc++.so.6 | grep GLIBCXX
```

You may also need to install:

```
Debian/Ubuntu: sudo apt-get install libsecret-1-dev
Red Hat-based: sudo yum install libsecret-devel
Arch Linux: sudo pacman -S libsecret
```


## Download and Run

Download the latest AppImage file.

```
curl -L https://distribution.paperlib.app/electron-linux/Paperlib_latest.AppImage -o Paperlib.AppImage
```

Then give it execute permission.

```
chmod +x Paperlib.AppImage
```

Finally, run it.

```
./Paperlib.AppImage
```

## Automatic Update

AppImage will automatically detect new release, will automatically download and install it. Please make sure that you don't put Paperlib in a folder that your current user doesn't have write permission, such as `/usr/bin/`.
