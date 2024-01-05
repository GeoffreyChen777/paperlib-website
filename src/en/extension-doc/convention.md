# Development Conventions

A Paperlib extension is essentially an `npm` package. Therefore, the development of a Paperlib extension is similar to the development of an `npm` package. However, there are some restrictions. This section will explain the restrictions and conventions:

1. The extension must be able to be packaged as an `npm` package that conforms to the `commonjs` specification.
2. The extension must be able to be packaged as a single `js` file, and it is recommended to `minify` to reduce the download size. (Except for `New Window` extensions)
3. Use the appropriate tools to remove the `import` statements of `PLAPI, PLMainAPI, PLExtAPI`, and keep the usage statements of `PLAPI, PLMainAPI, PLExtAPI` in the code after packaging. This ensures the normal operation of the extension in Paperlib. In our provided development environment, we use the `rollup-extension-modify` extension to achieve this. The reason for this constraint is that the `PLAPI, PLMainAPI, PLExtAPI` provided by the `paperlib-api/api` package are only used for code type autocompletion during development, do not contain any functionality, and should not appear in the final code of a extension. After a extension is loaded, the `PLAPI, PLMainAPI, PLExtAPI` objects will be automatically globally injected into its `VM` for directly using.
4. The `main` field must be included in `package.json`, pointing to the entry file of the extension.
5. The `manifest_version` field must be included in `package.json` to indicate the API version used by the extension.
6. The keywords in `package.json` must contain `paperlib` so that it can be searched in the extension marketplace.
7. The `name` field in `package.json` must be consistent with the `id` field in the main code of the extension.
8. The `version` field in `package.json` must comply with the `semver` specification.
9. The `description` field in `package.json` must contain a brief description of the extension.
10. The `author` field in `package.json` must contain the author information of the extension.
11. The `dependencies` field in `package.json` does not contain dependencies. That is, all dependencies are `devDependencies`. Please package the related functions in the dependencies into the `.js` file of the extension through any bundling tool.
12. It is recommended to correctly set the `files` field in `package.json` to only include the release files.

