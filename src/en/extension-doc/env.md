# Setting Up Development Environment

This article explains how to set up a local development environment for building Paperlib extensions.

We provide a foundational development environment that supports the development of most extensions. This environment includes tools such as `typescript`, `vue`, `vite`, and more.

Since a Paperlib extension is essentially an `npm` package, developers who are very familiar with `web/node` development can use their own development environment, build tools, etc., for development. Just follow some [conventions](#development-conventions).

## Download Development Environment

We provide a basic development environment that you can use as a starting point for your development. This environment includes tools like `typescript`, `vue`, `vite`, and more.

You can download it using the following command:

```shell
git clone https://github.com/Future-Scholars/paperlib-extension-develop-env.git
```

## Install Dependencies

```shell
cd paperlib-extension-develop-env
npm install
```

We provide a paperlib-api package to supply API interface type definitions for autocompletion, along with some commonly used utility functions and the base class for extensions. Ensure it is updated to the latest version with the following command:

```shell
npm install paperlib-api@latest -D
```

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

Run the following code to build the extension and output the extension code to the `dist` directory.

```shell
npm run build
```

## Load Extension for Testing

In the extension tab of the Paperlib preference interface, you can load local extensions for testing. Click the `Load from Local` button and select the extension directory (the folder where `package.json` is located) to load the extension.

After the extension is loaded, you can see the extension information in the extension tab of Paperlib. Click the `Reload` button of the extension to reload the extension for testing after modifying the extension. Please note that before reloading after modifying the code, you need to build the extension first.

> For extension developers, you can open the developer mode in the about section of the Paperlib preference interface to reload the extension directly in the developer tools of the main interface.

## Publish Extension

Each extension is an `npm` package, similar to publishing an `npm` package when published. We will explain the restrictions later.

In the Paperlib's preference interface's extension page, extensions can be loaded through a local path or downloaded by searching the extension marketplace. Our extension marketplace relies on `npmjs.com`.

## Development Conventions

A Paperlib extension is essentially an `npm` package. Therefore, the development of a Paperlib extension is similar to the development of an `npm` package. However, there are some restrictions. This section will explain the restrictions and conventions:

1. The extension must be able to be packaged as an `npm` package that conforms to the `commonjs` specification.
2. The extension must be able to be packaged as a single `js` file, and it is recommended to `minify` to reduce the download size. (Except for `New Window` extensions)
3. Use the appropriate tools to remove the `import` statements of `PLAPI, PLMainAPI, PLExtAPI`, and keep the usage statements of `PLAPI, PLMainAPI, PLExtAPI` in the code after packaging. This ensures the normal operation of the extension in Paperlib. In our provided development environment, we use the `rollup-extension-modify` extension to achieve this.
4. The `main` field must be included in `package.json`, pointing to the entry file of the extension.
5. The keywords in `package.json` must contain `paperlib` so that it can be searched in the extension marketplace.
6. The `name` field in `package.json` must be consistent with the `id` field in the main code of the extension.
7. The `version` field in `package.json` must comply with the `semver` specification.
8. The `description` field in `package.json` must contain a brief description of the extension.
9. The `author` field in `package.json` must contain the author information of the extension.
10. The `dependencies` field in `package.json` does not contain dependencies. That is, all dependencies are `devDependencies`. Please package the related functions in the dependencies into the `.js` file of the extension through any bundling tool.
11. It is recommended to correctly set the `files` field in `package.json` to only include the release files.

