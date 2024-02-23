# Setting Up Development Environment

This article explains how to set up a local development environment for Paperlib extensions.

We provide a basic development environment that supports the development of most extensions. This environment includes tools such as `typescript`, `vue`, `vite`, and more.

Since a Paperlib extension is essentially an `npm` package, developers who are very familiar with `web/node` development can use their own development environment, build tools, etc., for development. Just follow some [conventions](./convention).

## Download Development Environment

We provide a basic development environment that you can use as a starting point for your development. This environment includes tools like `typescript`, `vue`, `vite`, and more.

You can download it using the following command:

```shell
git clone https://github.com/Future-Scholars/paperlib-extension-dev-env.git
```

## Install Dependencies

```shell
cd paperlib-extension-dev-env
npm install
```

We have a `paperlib-api` package to provide API interface type definitions for autocompletion, along with some commonly used utility functions and the base class for extensions. Ensure it is updated to the latest version with the following command:

```shell
npm install paperlib-api@latest -D
```

## `paperlib-api` Package

In this package, we provide API type hints, commonly used data structures, some utility functions, and the base class for extensions. They are in different sub-modules of the `paperlib-api` package:

- `paperlib-api/api`: API type definitions, and the base class `PLExtension` for extensions.
- `paperlib-api/model`: Commonly used data structures.
- `paperlib-api/utils`：Commonly used utility functions.
- `paperlib-api/rpc`: RPC service for communication between New Window extensions.

## File Structure

```
├── dist             // The directory where the packaged files are located
├── src              // Source code directory
│   ├── main.ts      // Extension entry file
│   ├── ...
│── vite.config.ts   // vite configuration file
├── tsconfig.json    // typescript configuration file
├── package.json     // npm package configuration file

```

## Build Extension

Run the following command to build the extension and output the extension code to the `dist` directory.

```shell
npm run build
```

## Load Extension for Testing

In the extension tab of the Paperlib preference interface, you can load local extensions for testing. Click the `Load from Local` button and select the extension directory (the folder where `package.json` is located) to load the extension.

After the extension is loaded, you can see the extension information in the extension tab of Paperlib. Click the `Reload` button of the extension to reload the extension for testing after modifying the extension. Please note that before reloading, you need to build the extension first after modifying the code.

> For extension developers, you can open the developer mode in the about tab of the Paperlib preference interface to reload the extension directly in the developer tools shown on the main interface.

## Publish Extension

Our extension marketplace relies on `npmjs.com`.

Each extension is an `npm` package, Publishing an extension is similar to publishing an `npm` package. Please make sure your extension follows the conventions listed in [Conventions](./convention).

## Development Conventions

Please refer to [Conventions](./convention).
