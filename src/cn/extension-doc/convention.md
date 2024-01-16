# 开发规范与约定

一个可以被 Paperlib 加载的插件必须遵守以下规范：

1. 在监听事件回调中，不要使用 `floating promise`，即，如果你的回调函数中包含 `AsyncFunction`，请务必 `await`，或者 `.catch` 异常。因为 `floating promise` 中的异常无法在 Paperlib 中被捕获，会导致插件崩溃。
2. 插件必须可以可以打包为 `commonjs` 规范的 `npm` 包。
3. 非 `New Window` 插件打包为单个 `js` 文件，并推荐 `minify` 以减小下载体积。
4. 使用相应的工具，移除 `PLAPI, PLMainAPI, PLExtAPI` 的 `import` 语句,保留代码中的 `PLAPI, PLMainAPI, PLExtAPI` 的使用语句后打包。这样可以保证插件在 Paperlib 的正常运行。在我们提供的开发环境中，我们使用了 `rollup-plugin-modify` 插件来实现这一功能。此约束设置的原因是，`paperlib-api` 包提供的 `PLAPI, PLMainAPI, PLExtAPI` 类型定义仅用于开发时的代码提示，不包含任何功能，不应该出现在插件的最终代码中。当插件加载后，在其 `VM` 中会自动全局注入 `PLAPI, PLMainAPI, PLExtAPI` 对象，插件可以直接使用这些对象。
5. `package.json` 中必须包含 `manifest_version` 字段，指示插件使用的 API 版本。请与你实际安装的 `paperlib-api` 包的版本保持一致。我们推荐始终使用最新的 API 版本。
6. `package.json` 中必须包含 `main` 字段，指向插件的入口文件。
7. `package.json` 中关键字必须包含 `paperlib` 字段，以便在插件市场可以搜索到。
8. `package.json` 中的 `name` 字段必须与插件主代码中的 `id` 字段一致。
9. `package.json` 中的 `version` 字段必须符合 `semver` 规范。
10. `package.json` 中的 `description` 字段必须包含插件的简要描述。
11. `package.json` 中的 `author` 字段必须包含插件的作者信息。
12. `package.json` 中的 `dependencies` 字段不包含依赖。即所有依赖都是 `devDependencies`。依赖中的相关功能请通过打包工具打包至插件的 `.js` 文件中。
13. `package.json` 中的 `files` 字段推  荐正确设置，以只包含发布文件。