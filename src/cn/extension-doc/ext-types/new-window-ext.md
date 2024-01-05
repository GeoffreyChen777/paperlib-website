# New Window 插件

这种类型的插件是最为复杂的插件。它创建一个新的窗口，在窗口内，将会是一个全新的渲染进程。这要求你自己创建相应的 `RPC` 服务，来与主进程、渲染进程、插件进程沟通，以获得暴露的 `API`。

在新窗口内，你可以使用 `React`、`Vue` 等任何喜欢的框架进行开发 UI。只需要使用合适的打包工具，将你的代码构建打包为 `.js` 和 `.html` 文件即可。

为了示范这类插件的开发，我们提供一个示例插件，你可以在 [GitHub](https://github.com/Future-Scholars/paperlib-preview-extension) 上找到它。该插件的功能是在 Windows，Linux 系统中，按下空格后，会弹出一个新窗口，显示当前选中 PDF 的首页预览。

在接下来的章节中，我们使用这个插件作为例子。


## 开发环境

类似的，我们提供一个基础的开发环境。你可以在 [GitHub](https://github.com/Future-Scholars/paperlib-extension-dev-env) 上的 `new-window` 分支找到它。该环境使用 `Vue` 进行 UI 开发，使用 `vite` 进行打包。当然你可以创建你喜欢的环境。

项目结构如下：

```
├── dist                 // 打包后的文件目录
├── ext                  // 插件主程序源代码目录
│   ├── src/main.ts          // 插件入口文件
│   │── vite.config.ts   // 插件主程序的 vite 配置文件
│   ├── ...
├── view                 // UI 源代码目录
│   ├── src              // UI 源代码目录
│   ├── index.html       // UI 入口文件
│   ├── vite.config.ts   // UI 的 vite 配置文件
│   ├── ...
├── tsconfig.json        // typescript 配置文件
├── package.json         // npm 包配置文件

```

在构建时，会将 `ext` 和 `view` 目录下的代码分别打包到 `dist/main.js` 和 `dist/view` 目录下。你可以在 `ext/main.ts` 中看到，我们使用 `./view/index.html` 来加载新窗口的 UI 文件。

## 插件入口

New Window 插件仍需要编写插件入口文件，其中包含了插件类。这些代码和其他类型插件一样，都是运行在插件进程内。新窗口的创建也是在这里进行。

### 插件类结构

```typescript
class PaperlibPreviewExtension extends PLExtension {
  disposeCallbacks: (() => void)[];

  constructor() {
    super({
      id: "@future-scholars/paperlib-preview-extension",
      defaultPreference: {},
    });

    this.disposeCallbacks = [];
  }

  private async _createPreviewWindow() {
    ...
  }

  async initialize() {
    ...

    try {
      await this._createPreviewWindow();
    } catch (error) {
      PLAPI.logService.error(
        "Failed to create preview window",
        error as Error,
        true,
        "Preview",
      );
    }

    ...
  }

  async dispose() {
    ...
  }
}
```

### 创建新窗口

在插件初始化时，我们调用了 `_createPreviewWindow` 方法来创建新窗口。在这个方法中，我们使用了 `PLMainAPI.windowProcessManagementService` 来创建新窗口。这个服务提供了一些方法来创建新窗口。

```typescript
private async _createPreviewWindow() {
    const screenSize =
        await PLMainAPI.windowProcessManagementService.getScreenSize();
    await PLMainAPI.windowProcessManagementService.create(
        "paperlib-preview-extension-window",
        {
          entry: path.resolve(__dirname, "./view/index.html"),
          title: "Paper Preview",
          width: Math.floor(screenSize.height * 0.8 * 0.75),
          height: Math.floor(screenSize.height * 0.8),
          minWidth: Math.floor(screenSize.height * 0.8 * 0.75),
          minHeight: Math.floor(screenSize.height * 0.8),
          useContentSize: true,
          center: true,
          resizable: false,
          skipTaskbar: true,
          webPreferences: {
              webSecurity: false,
              nodeIntegration: true,
              contextIsolation: false,
          },
          frame: false,
          show: false,
        },
    );
}
```

`PLMainAPI.windowProcessManagementService.create` 方法的第一个参数，是新窗口的 `id`。这个 `id` 用于标识这个窗口，同时也是窗口对应的进程的 ID。第二个参数是一个对象，包含了新窗口的一些配置。这些配置和 `electron` 的 `BrowserWindow` 的配置相同。你可以在 [electron 文档](https://www.electronjs.org/docs/api/browser-window#new-browserwindowoptions) 中找到这些配置的详细说明。

在上面的例子里，我们通过获取屏幕的尺寸，来规范了新窗口的大小。注意这里，我们使用 `./view/index.html` 来指定新窗口的 UI 入口文件。

### 窗口事件监听

窗口通常会发生一些事件，比如关闭、最小化、最大化、失去焦点等。我们可以通过 `PLMainAPI.windowProcessManagementService.on` 来监听这些事件。

```typescript
PLMainAPI.windowProcessManagementService.on(
    "paperlib-preview-extension-window" as any,
    (newValues: { value: string }) => {
        if (newValues.value === "blur") {
            PLMainAPI.windowProcessManagementService.hide(
                "paperlib-preview-extension-window",
            );
        }
    },
)
```

该方法的第一个参数，是窗口的 `id`。第二个参数是一个回调函数，当窗口发生事件时，会调用这个回调函数。回调函数的参数是一个对象，包含了事件的类型。比如这里，我们监听了 `blur` 事件，当窗口失去焦点时，我们将其隐藏。

关于窗口事件的类型，你可以在 `PLMainAPI.windowProcessManagementService` 的文档中找到。

### 窗口操作

我们提供了一系列方法，来操作窗口，比如隐藏，最小化，关闭等等。你可以在 `PLMainAPI.windowProcessManagementService` 的文档中找到这些方法。

在这个例子中，我们监听了用户触发了菜单栏中的 Preview 按钮，之后我们显示我们的新窗口：

```typescript
PLMainAPI.menuService.onClick("View-preview", async () => {
    PLMainAPI.windowProcessManagementService.show(
      "paperlib-preview-extension-window",
    );
})
```



## 新窗口 UI

在本例子中，我们使用 `Vue` 作为 UI 开发框架。请保证你熟悉基本的 `Vue` 开发知识再继续阅读。

### UI 入口文件

在 `view/index.html` 中，我们设置了一个 `id` 为 `app` 的 `div` 标签，用于挂载 `Vue` 应用。

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="./favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      http-equiv="Content-Security-Policy"
      content="script-src 'self' 'unsafe-inline' 'unsafe-eval';"
    />
    <title>Paperlib Preview</title>
    <link rel="stylesheet" href="./css/style.css" />
  </head>
  <body style="overflow: hidden">
    <div id="app"></div>
    <script type="module" src="./src/index.ts"></script>
  </body>
</html>
```

UI 的逻辑代码文件入口则是 `view/src/index.ts`。

### UI 逻辑代码

在 `view/src/index.ts` 中，我们使用 `Vue` 的 `createApp` 方法创建了一个 `Vue` 应用。在 `createApp` 方法中，我们传入了一个 `AppView` 组件，这个组件是我们的 UI 的根组件。

```typescript
import { createApp } from "vue";
import AppView from "./app.vue";

async function initialize() {
  const app = createApp(AppView);
  ...
  app.mount("#app");
}

initialize();
```

在上述初始化函数中，最重要的部分是建立本进程的 `RPC` 服务：

```typescript
import { createApp } from "vue";

import AppView from "./app.vue";
import { RendererRPCService } from "paperlib-api/rpc";
import { PreviewService } from "./services/preview-service";

async function initialize() {
  const app = createApp(AppView);

  // ============================================================
  // 1. Initilize the RPC service for current process
  const rpcService = new RendererRPCService("paperlib-preview-extension-window");
  // ============================================================
  // 2. Start the port exchange process.
  await rpcService.initCommunication();

  // ============================================================
  // 3. Wait for the main process to expose its APIs (PLMainAPI)
  const mainAPIExposed = await rpcService.waitForAPI(
    "mainProcess",
    "PLMainAPI",
    5000
  );

  if (!mainAPIExposed) {
    throw new Error("Main process API is not exposed");
  } else {
    console.log("Main process API is exposed");
  }

  // 4. Wait for the renderer process to expose its APIs (PLRendererAPI)
  const rendererAPIExposed = await rpcService.waitForAPI(
    "rendererProcess",
    "PLAPI",
    5000
  );

  if (!rendererAPIExposed) {
    throw new Error("Renderer process API is not exposed");
  } else {
    console.log("Renderer process API is exposed");
  }

  app.mount("#app");
}

initialize();
```

在上述代码中，我们首先创建了一个 `RendererRPCService` 的实例。这会在当前进程中创建一个 `RPC` 服务。之后，我们调用了 `rpcService.initCommunication()` 方法，该方法会通知其他进程，建立相应的 `MessagePort` 通信通道，暴露相应的 `API`。具体实现方法请参考 Paperlib 中的 RPC 服务。

第一个参数，必须与创建新窗口时传入的 ID 相同。

在 `rpcService.initCommunication()` 方法执行完毕后，我们就可以通过 `rpcService.waitForAPI` 方法来等待其他进程暴露相应的 `API`。在这里，我们等待了主进程和渲染进程暴露了 `PLMainAPI` 和 `PLAPI`。如果你也需要访问插件进程的相应服务，比如 `PLExtAPI.extensionPreferenceService`，你也可以在这里等待插件进程暴露 `PLExtAPI`：
  
```typescript
const extAPIExposed = await rpcService.waitForAPI(
  "extensionProcess", // 进程 ID
  "PLExtAPI", // API 名称
  5000 // 等待时间
);

if (!extAPIExposed) {
  throw new Error("Ext process API is not exposed");
} else {
  console.log("Ext process API is exposed");
}
```

至此，你可以在新窗口的进程中，通过 `PLAPI, PLMainAPI, PLExtAPI` 访问其他进程暴露的服务了。


### UI 内功能

实现怎样的功能，完全由开发者决定。在这里几乎没有任何限制，就像开发任何 WebAPP 一样。

在我们的示例插件中，我们取得了用户选择的论文，得到了 PDF 文档的路径，之后将其渲染到了新窗口中。你可以在 `services/preview-service.ts` 中找到这部分代码。