# New Window Extension

This type of extension is the most complex. It creates a new window, within which there will be a brand new rendering process. This requires you to create the corresponding `RPC` service to communicate with the main process, rendering process, and extension process to get the exposed `API`.

Inside the new window, you can use `React`, `Vue`, or any other framework you like to develop the UI. You just need to use an appropriate packaging tool to build and package your code into `.js` and `.html` files.

To demonstrate the development of this type of extension, we provide a sample extension, which you can find on [GitHub](https://github.com/Future-Scholars/paperlib-preview-extension). The function of this extension is that in Windows and Linux systems, pressing the space will pop up a new window displaying the preview of the first page of the currently selected PDF.

In the following sections, we will use this extension as an example.

## Development Environment

Similarly, we provide a basic development environment. You can find it on the `new-window` branch on [GitHub](https://github.com/Future-Scholars/paperlib-extension-dev-env). This environment uses `Vue` for UI development and `vite` for packaging. Of course, you can create the environment you like.

The project structure is as follows:


```
├── dist                 // packaged files
├── ext                  // extension source code directory
│   ├── src/main.ts          // extension entry file
│   │── vite.config.ts   // vite configuration file for extension
│   ├── ...
├── view                 // UI source code directory
│   ├── src              // UI source code directory
│   ├── index.html       // UI entry file
│   ├── vite.config.ts   // vite configuration file for UI
│   ├── ...
├── tsconfig.json        // typescript configuration file
├── package.json         // npm configuration file

```

When building, the code in the `ext` and `view` directories will be packaged into `dist/main.js` and `dist/view` respectively. You can see in `ext/main.ts` that we use `./view/index.html` to load the UI file of the new window.


## Extension Entry

New Window extensions still need to create an extension entry file, which contains the extension class. These codes are the same as other types of extensions, and they all run in the extension process. The creation of the new window is also done there.

### Extension Class Structure

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

### Create a New Window

When the extension is initializing, we call the `_createPreviewWindow` method to create a new window. In this method, we use `PLMainAPI.windowProcessManagementService` to create a new window. This service provides some methods to manage windows.

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

The first argument of the `PLMainAPI.windowProcessManagementService.create` method is the `id` of the new window. This `id` is used to identify the window, and it is also the ID of the process corresponding to the window. The second argument is an object that contains some configurations of the new window. These configurations are the same as the options of `electron`'s `BrowserWindow`. You can find the detailed description of these options in the [electron document](https://www.electronjs.org/docs/api/browser-window#new-browserwindowoptions).

In the above example, we get the size of the screen to limit the size of the new window. Note that here, we use `./view/index.html` to specify the UI entry file of the new window.

### Listen to Window Events

A window usually emits some events, such as close, blur, etc. We can use `PLMainAPI.windowProcessManagementService.on` to listen to these events.

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

The first argument of this method is the `id` of the window. The second argument is a callback function, which will be called when the window emits an event. The argument of the callback function is an object, which contains the type of the event. For example, here, we listen to the `blur` event, when the window loses focus, we hide it.

For the window events, you can find them in the documentation of `PLMainAPI.windowProcessManagementService`.

### Window Control

We provide a series of methods to operate the window, such as hide, minimize, close, etc. You can find these methods in the documentation of `PLMainAPI.windowProcessManagementService`.

In this example, we listen to the user pressing the Preview button in the menu bar, and then we show our new window:

```typescript
PLMainAPI.menuService.onClick("View-preview", async () => {
    PLMainAPI.windowProcessManagementService.show(
      "paperlib-preview-extension-window",
    );
})
```

## New Window UI

In this example, we use `Vue` as the UI development framework. Please make sure that you are familiar with the basic `Vue` development knowledge before continuing to read.

### UI Entry File

In `view/index.html`, we set a `div` tag with an `id` of `app` to mount the `Vue` application.

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

The entry file of the UI logic code is `view/src/index.ts`.

### UI Logic Code

In `view/src/index.ts`, we use the `createApp` method of `Vue` to create a `Vue` application. In the `createApp` method, we pass in an `AppView` component, which is the root component of our UI.

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

In the above initialization function, the most important part is to create the `RPC` service of this process:

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

In the above code, we first created an instance of `RendererRPCService`. This will create an `RPC` service in the current process. Then, we called the `rpcService.initCommunication()` method, which will notify other processes and establish the corresponding `MessagePort` communication channel to expose the corresponding `API`. Please refer to `services/rpc-service.ts` for more.

The first argument must be consistant with the ID passed in when creating the new window.

When the `rpcService.initCommunication()` method is executed, we can use the `rpcService.waitForAPI` method to wait for other processes to expose their corresponding `API`. Here, we wait for the main process and the rendering process to expose `PLMainAPI` and `PLAPI`. If you also need to access the corresponding service of the extension process, such as `PLExtAPI.extensionPreferenceService`, you can also wait for the extension process to expose `PLExtAPI` here:
  
```typescript
const extAPIExposed = await rpcService.waitForAPI(
  "extensionProcess", // Process ID
  "PLExtAPI", // API name
  5000 // Timeout
);

if (!extAPIExposed) {
  throw new Error("Ext process API is not exposed");
} else {
  console.log("Ext process API is exposed");
}
```

So far, you can access the services exposed by other processes through `PLAPI, PLMainAPI, PLExtAPI` in the process of the new window.


### Service in New Window

In the new window, we can implement any function we want. There are almost no restrictions here, just like developing an WebAPP.

In our demo extension, we get the selected paper, get the path of the PDF document, and then render it to the new window. You can find this part of the code in `services/preview-service.ts`.