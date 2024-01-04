# 开发环境准备

本文介绍如何在本地搭建插件开发环境。

我们提供一个开发基础环境，大部分插件都可以在此基础上进行开发。该环境包括：`typescript`, `vue`, `vite` 等相关工具。

因为 Paperlib 插件实际上是一个 `npm` 包，因此对于非常熟悉 `web / node` 开发的开发者，可以使用自己的开发环境，打包工具等进行开发。只需要遵守一些[规范](#开发规范与约定)即可。

## 下载开发环境

我们提供了一个基础的开发环境，可以在此基础上进行开发。该环境包括：`typescript`, `vue`, `vite` 等相关工具。

你可以通过以下命令下载：

```shell
git clone https://github.com/Future-Scholars/paperlib-extension-develop-env.git
```

## 安装依赖

```shell
cd paperlib-extension-develop-env
npm install
```

我们提供了一个 `paperlib-api` 包，来提供 API 接口的类型定义自动补全，以及一些常用的工具函数，以及插件的基类。你可以通过以下命令保证其更新到最新版：

```shell
npm install paperlib-api@latest -D
```

## 文件结构

```
├── dist             // 打包后的文件目录
├── src              // 源代码目录
│   ├── main.ts      // 插件入口文件
│   ├── ...
│── vite.config.ts   // vite 配置文件
├── tsconfig.json    // typescript 配置文件
├── package.json     // npm 包配置文件

```

## 构建插件

运行如下代码，就可以执行构建打包，输出插件代码至 `dist` 目录。
```shell
npm run build
```

## 插件测试载入

在 Paperlib 的设置界面中的插件选项卡中，可以载入本地插件进行测试。点击 `载入自本地` 按钮，选择插件目录（`package.json`所在的文件夹）即可载入插件。

插件载入后，可以在 Paperlib 的插件选项卡中看到插件的信息。点击插件的 `重载` 按钮，即可重新载入插件，以便测试修改后的插件。请注意，在每次修改代码后重载前，你需要首先构建插件。

> 对于插件开发者，可以打开 Paperlib 设置界面关于中的开发者模式，以便在主界面的开发者工具中直接重载插件。

## 插件发布

请首先确保构建成功，功能测试通过。之后检查你的项目是否符合我们的[规范](#开发规范与约定)。如果符合规范，你可以通过以下命令发布插件：

```shell
npm publish
```

## 开发规范与约定

一个可以被 Paperlib 加载的插件必须遵守以下规范：

1. 插件必须可以可以打包为 `commonjs` 规范的 `npm` 包。
2. 非 `New Window` 插件打包为单个 `js` 文件，并推荐 `minify` 以减小下载体积。
3. 使用相应的工具，移除 `PLAPI, PLMainAPI, PLExtAPI` 的 `import` 语句,保留代码中的 `PLAPI, PLMainAPI, PLExtAPI` 的使用语句后打包。这样可以保证插件在 Paperlib 的正常运行。在我们提供的开发环境中，我们使用了 `rollup-plugin-modify` 插件来实现这一功能。
4. `package.json` 中必须包含 `main` 字段，指向插件的入口文件。
5. `package.json` 中关键字必须包含 `paperlib` 字段，以便在插件市场可以搜索到。
6. `package.json` 中的 `name` 字段必须与插件主代码中的 `id` 字段一致。
7. `package.json` 中的 `version` 字段必须符合 `semver` 规范。
8. `package.json` 中的 `description` 字段必须包含插件的简要描述。
9. `package.json` 中的 `author` 字段必须包含插件的作者信息。
10. `package.json` 中的 `dependencies` 字段不包含依赖。即所有依赖都是 `devDependencies`。依赖中的相关功能请通过打包工具打包至插件的 `.js` 文件中。
11. `package.json` 中的 `files` 字段推  荐正确设置，以只包含发布文件。