# Simple 插件

这种类型的插件是最简单的，它只需要创建一个插件类，继承自 `PLExtension`，实现 `initialize`, `dispose`，插件入口文件的 export 包含一个叫做 `initialize` 的函数即可：

```typescript

import { PLAPI, PLExtAPI, PLExtension, PLMainAPI } from "paperlib-api/api";

class PaperlibHelloworldExtension extends PLExtension {
  disposeCallbacks: (() => void)[];

  constructor() {
    super({
      id: "...",
      defaultPreference: {
        ...
      },
    });

    this.disposeCallbacks = [];
  }

  async initialize() {
    await PLExtAPI.extensionPreferenceService.register(
      this.id,
      this.defaultPreference,
    );

    this.printSomething();

  }

  async dispose() {
    PLExtAPI.extensionPreferenceService.unregister(this.id);

    for (const disposeCallback of this.disposeCallbacks) {
      disposeCallback();
    }
  }

  printSomething() {
    console.log("Hello world from extension!");
  }
}

async function initialize() {
  const extension = new PaperlibHelloworldExtension();
  await extension.initialize();

  return extension;
}

export { initialize };

```