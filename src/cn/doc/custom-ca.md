# 自定义根证书

一些网络，需要使用自定义的根证书才能访问网络资源。这种情况下，你需要将自定义的根证书添加到指定路径：

- macOS: `~/Library/Application Support/paperlib/`
- Windows: `%APPDATA%/paperlib/extensions/`
- Linux: `~/.config/paperlib/extensions/`

在这个目录下，请重命名所需要的文件为：

- `ca.crt`
- `ca.cer`
- `ca.pem`
- `client.key`
- `client.crt`
