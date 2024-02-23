# 开发环境准备

本文介绍如何在本地搭建插件开发环境。

我们提供一个基础开发环境，大部分插件都可以在此基础上进行开发。该环境包括：`typescript`, `vue`, `vite` 等相关工具。

因为 Paperlib 插件实际上是一个 `npm` 包，因此对于非常熟悉 `web / node` 开发的开发者，可以使用自己的开发环境，打包工具等进行开发。只需要遵守一些[规范](./convention)即可。

## 下载开发环境

我们提供了一个基础的开发环境，可以在此基础上进行开发。该环境包括：`typescript`, `vue`, `vite` 等相关工具。

你可以通过以下命令下载：

```shell
git clone https://github.com/Future-Scholars/paperlib-extension-dev-env.git
```

## 安装依赖

```shell
cd paperlib-extension-dev-env
npm install
```

我们提供了一个 `paperlib-api` 包，来提供 API 接口的类型定义自动补全，以及一些常用的工具函数，以及插件的基类。你可以通过以下命令保证其更新到最新版：

```shell
npm install paperlib-api@latest -D
```

## `paperlib-api` 包

这个包，我们提供了 API 类型提示，常用的数据结构，以及一些常用的工具函数，以及插件的基类。他们被分别在 `paperlib-api` 包的不同子包中：

- `paperlib-api/api`：API 类型定义，以及插件基类 `PLExtension`。
- `paperlib-api/model`: 常用数据结构。
- `paperlib-api/utils`：常用的工具函数。
- `paperlib-api/rpc`: RPC 服务，用于 New Window 类型插件的通信。


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

请首先确保构建成功，功能测试通过。之后检查你的项目是否符合我们的[规范](./convention)。如果符合规范，你可以通过以下命令发布插件：

```shell
npm publish
```

## 开发规范与约定

请参考[开发规范与约定](./convention)。
