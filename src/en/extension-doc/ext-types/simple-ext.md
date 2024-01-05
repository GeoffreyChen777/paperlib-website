# Simple Extension

This type of extension is the simplest. You only needs to create an extension class that inherits from `PLExtension` and implements `initialize` and `dispose`. And the export of the extension entry file contains a function called `initialize`:

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