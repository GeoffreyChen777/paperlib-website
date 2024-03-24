# Custom Root CA

In some cases, you may need to use a custom root CA to access the network. You can put the custom root CA file in the following directory:

- macOS: `~/Library/Application Support/paperlib/`
- Windows: `%APPDATA%/paperlib/extensions/`
- Linux: `~/.config/paperlib/extensions/`

In this directory, please rename the required files to:

- `ca.crt`
- `ca.cer`
- `ca.pem`
- `client.key`
- `client.crt`
