# Example Extension Development

This article provides a guide for developing an example extension. The source code can be found on [Github](https://github.com/Future-Scholars/paperlib-demo-helloworld-extension).

For other types of extensions, we also provide corresponding example extensions, which can be found on [Github](https://github.com/orgs/Future-Scholars/repositories).

## Development Environment

All the following examples are based on the example extension on [Github](https://github.com/Future-Scholars/paperlib-demo-helloworld-extension). Please clone it to your local first. Setup according to the instructions in [Development Environment](./env).

## Extension Entry

The extension entry file is `src/main.ts`, which exports a function `initialize`:

```typescript
export { initialize }
```

The main task of this function is to create an extension class instance, initialize the extension, and return it.

```typescript
// src/main.ts

async function initialize() {
  const extension = new PaperlibHelloworldExtension();
  await extension.initialize();

  return extension;
}
```

In this example, we created an instance of the `PaperlibHelloworldExtension` class and called its `initialize` function.

## Extension Class

The extension class is the core of the extension. It is responsible for the initialization of the extension, lifecycle management, and providing the functionality of the extension. This extension class must inherit from the `PLExtension` class.


```typescript
// src/main.ts

import { PLExtension } from "paperlib-api/api";

class PaperlibHelloworldExtension extends PLExtension {
  disposeCallbacks: (() => void)[] = [];

  constructor() {
    super({
      id: "the-name-in-package.json",
      defaultPreference: { ... },
    });
    ...
  }

  async initialize() {
    // initialize the extension
    ...
  }

  async dispose() {
    // dispose the extension, remove some event listeners, etc.
    ...
  }

  // other methods
  ...
}

```

The `PLExtension` class includes some necessary checks to prevent issues during extension development. For example, an extension must provide an `id`, and the extension's default preferences must follow certain standards.

In the extension class, we need to define two functions: `initialize` and `dispose`. These two functions are called respectively when the extension is loading and unloading/uninstalling. In the `initialize` function, we can initialize the extension, such as registering event listeners, registering extension preferences, etc. In the `dispose` function, we can release the extension, such as canceling event listeners, etc. Besides, other functions and member variables of the extension can be freely defined.

Next, we will detail these two functions.

### `async initialize()`

```typescript
// src/main.ts

async initialize() {
    await PLExtAPI.extensionPreferenceService.register(
      this.id,
      this.defaultPreference,
    );

    this.printSomething();

    // 1. Command Extension Example
    this.registerSomeCommands();

    // 2. UI Extension Example
    this.modifyPaperDetailsPanel();

    // 3. Hook Extension Example
    this.hookSomePoints();
}
```

In the `initialize` function, we first registered the extension preferences through `PLExtAPI.extensionPreferenceService.register`. This way, users can see and modify the extension preferences in the Paperlib preferences interface.

Then, we called the `printSomething` function, which will print some information in the Paperlib console. This is an example, meaning you can do anything you need here.

After that, we ran three functions respectively for three types of extensions. We will detail the development of these three types of extensions below. Here, we take `registerSomeCommands()` as an example:


```typescript
// src/main.ts

registerSomeCommands() {
    // When the user choose to run the command, the PLAPI.commandService will
    // emit a "command_echo_event" event.
    // we get the message from the preference of this extension by calling PLExtAPI.extensionPreferenceService.get()
    //
    this.disposeCallbacks.push(
        PLAPI.commandService.on("command_echo_event" as any, () => {
        let msg = PLExtAPI.extensionPreferenceService.get(this.id, "msg");
        if (PLExtAPI.extensionPreferenceService.get(this.id, "signature")) {
            if (
            PLExtAPI.extensionPreferenceService.get(this.id, "lang") === "zh"
            ) {
            msg += ` - 来自 SimpleCMD 扩展`;
            } else {
            msg += ` - from SimpleCMD Extension`;
            }
        }

        PLAPI.logService.info(
            "Hello from the extension process",
            msg,
            true,
            this.id,
        );
        }),
    );

    // Register a command with event "command_echo_event".
    this.disposeCallbacks.push(
        PLAPI.commandService.registerExternel({
        id: "command_echo",
        description: "Hello from the extension process",
        event: "command_echo_event",
        }),
    );
}

```

In this example, the functionality we want to achieve is that when a user selects a command to run in the `Command Bar`, we receive this instruction and run some functions.

1. First, we registered an event listener through `PLAPI.commandService.on`. When a user chooses to run a command, we will receive this event. In this event listener, our response is very simple, that is, we get some information from the extension preferences through `PLExtAPI.extensionPreferenceService.get`, and then print some information through `PLAPI.logService.info`.

2. Then, we registered a command through `PLAPI.commandService.registerExternel`. This way, this command will appear in the user's `Command Bar`. When the user chooses to run this command, we will receive the event registered above. We need to provide the command's `id`, `description`, and `event`. `id` is the unique identifier of the command, `description` is the description of the command, and `event` is the event that will be emitted when the command is run. As you can see, this event is the one we registered to listen to above.

3. All event listening, registration, etc., need to be `disposed` when the extension is unloaded to prevent memory leaks. These methods will return a function, calling this function can perform the corresponding `dispose`. We save these functions in `disposeCallbacks` so that they can be called in the `dispose` function.

4. Notablly, in the callback of the event listener, please avoid `floating promise`. That is, if your callback function contains any `AsyncFunction`, please be sure to `await` or `.catch` the error exception. Because the error in the `floating promise` cannot be caught in Paperlib, it will cause the extension to crash.

This is the main code of a `Command Extension`. You can call your other methods, do anything you need, etc., at the place where you listen to events.

### `async dispose()`

```typescript
// src/main.ts

async dispose() {
    PLExtAPI.extensionPreferenceService.unregister(this.id);

    for (const disposeCallback of this.disposeCallbacks) {
      disposeCallback();
    }
}

```

This is a function that must exist. Paperlib will call this function of the extension when reloading, unloading, etc. In the `dispose` function, we first cancel the registration of the extension preferences. Then, we call all the `dispose` functions saved in `disposeCallbacks` to release all resources of the extension, such as canceling event listeners, etc. If your extension has additional resources that need to be released, please release them here.

### Extension Preferences

In the above example, we registered the extension preferences through `PLExtAPI.extensionPreferenceService.register`. This way, users can see and modify the extension preferences in the Paperlib preferences interface.

The default value of this preference is the `defaultPreference` passed in when constructing the `PaperlibHelloworldExtension` class instance. This `defaultPreference` is an instance, each key-value pair in it is a preference item. For example:


```typescript
// src/main.ts

class PaperlibHelloworldExtension extends PLExtension {
    constructor() {
        super({
        id: "...",
        defaultPreference: {
            msg: {
                type: "string",
                name: "Message",
                description: "Message to show when echo",
                value: "Hello from the extension process",
                order: 0,
            },
            signature: {
                type: "boolean",
                name: "Signature",
                description: "Show signature in the message",
                value: false,
                order: 1,
            },
            lang: {
                type: "options",
                name: "Language",
                description: "Language of the message",
                options: { en: "English", zh: "Chinese" },
                value: "en",
                order: 2,
            },
        },
        });
    }
}

```

In this example, we defined three preferences: `msg`, `signature`, `lang`. Among them, `msg` is a string type preference, `signature` is a boolean type preference, and `lang` is an option type preference. The default values of these preferences are `Hello from the extension process`, `false`, and `en` respectively. The order of these preferences is `0`, `1`, `2` respectively. In the Paperlib preferences interface, these preferences will be arranged in order and display different components according to different types, making it convenient for users to make changes. For detailed preference types, you can refer to [Extension Preferences](./preference).

To access the value of a preference in the extension, you can get it through `PLExtAPI.extensionPreferenceService.get`. For example:


```typescript
PLExtAPI.extensionPreferenceService.get(this.id, "lang")
```

As a result, we can get the value of the `lang` preference.

---

So far, we have completed the development of a `Command Extension`. Next, we will introduce the development of `Hook Extension` and `UI Extension`.

## Data Structure

In Paperlib, we have some important data structures, which are widely used in Paperlib, so we provide them to developers. You can import them from `paperlib-api/model` package:

```typescript
import { 
    PaperEntity,
    PaperTag,
    PaperFolder,
    Feed,
    FeedEntity,
    OID,
} from 'paperlib-api/model';

```

If your extension trying to deal with such data structures, please use we provided above. For more, please refer to [Data Structure](./data-structure)。

## Other Examples

### Hook Extension

This type of extension mainly targets those that need to intervene in the lifecycle of Paperlib. For example, we want to develop a new metadata scraper that automatically scrapes metadata from the internet when a user imports a paper. In fact, in Paperlib 3.0, all default scrapers already exist in the form of extensions. The code for these extensions can be found on [Github (Entry)](https://github.com/Future-Scholars/paperlib-entry-scrape-extension) [Github (Metadata)](https://github.com/Future-Scholars/paperlib-metadata-scrape-extension). They can serve as demos for `Hook Extensions`.

For detailed development of `Hook Extensions`, you can refer to [Hook Extensions](./ext-types/hook-ext). Here, we use a simple example to illustrate the development of `Hook Extensions`.

The main function of this part is that when a user imports a new file, we print some information. Here you can modify this information and return it to Paperlib to modify the data in the subsequent process of Paperlib.


```typescript
// src/main.ts

hookSomePoints() {
    this.disposeCallbacks.push(
        PLAPI.hookService.hookModify(
        "scrapeEntryBefore",
        this.id,
        "modifyPayloads",
        ),
    );
}

modifyPayloads(payloads: any[]) {
    PLAPI.logService.info("modifyPayloads", `${payloads}`, true, this.id);

    // Modify the payloads here
    // ...

    // Return the modified payloads
    // For modify hook, the return value should be an array of args.
    // For example, the original args array is [payloads: SomeType], then the return value should be also [payloads: SomeType]
    return [payloads];
}

```

In this example, we first registered a `modify` type hook through `PLAPI.hookService.hookModify`. This hook point is `scrapeEntryBefore`, which will be triggered before Paperlib performs metadata retrieval. For information about hook types and hook points, please see [Hook Extensions](./ext-types/hook-ext). In this hook, we registered the name of the `modifyPayloads` function, which will be called when this hook is triggered.

In this `modifyPayloads` function, we first printed some information, then you can modify `payloads` and return the modified `payloads`.

Now, we have completed the development of a `Hook Extension`.

### UI Extension

This type of extension mainly targets those that need to modify the UI interface of Paperlib. For example, we want to add its citation count in the paper details panel of Paperlib, add other information related to the paper, etc.

For detailed development of `UI Extensions`, you can refer to [UI Extensions](./ext-types/ui-ext). Here, we use a simple example to illustrate the development of `UI Extensions`.


```typescript
// src/main.ts

modifyPaperDetailsPanel() {
    this.disposeCallbacks.push(
        PLAPI.uiStateService.onChanged("selectedPaperEntities", (newValues) => {
            const selectedPaperEntities = newValues.value;

            if (selectedPaperEntities.length === 0) {
                return;
            }

            if (selectedPaperEntities.length === 1) {
                const paperEntity = selectedPaperEntities[0];

                PLAPI.uiSlotService.updateSlot("paperDetailsPanelSlot1", {
                    demo_section_id: {
                        title: "Demo Section",
                        content: `Any string here - ${Math.random()} - ${
                            paperEntity.title
                        }}`,
                    },
                });
            }
        }),
    );
}

```

In this example, we first listen to whether the user's selected paper has changed. Because only when the user selects one paper, we will display the detail panel.

At this time, we updated the `paperDetailsPanelSlot1` UI slot through `PLAPI.uiSlotService.updateSlot`. This slot is the first slot of Paperlib's paper details panel. We added a slot item with `demo_section_id` as the ID in this slot, where `title` is the title of the slot item, and `content` is the content of the slot item. In this way, we added a section with a title and content in the paper details panel. For slots provided by Paperlib, please see [UI Extensions](./ext-types/ui-ext).

### New Window Extension

This type of extension will create a brand new window to implement some complex functions. For example, we want to develop a new paper reading interface to implement some complex functions, such as reading papers, editing notes, annotating papers, etc.

We developed a paper preview extension to provide Windows and Linux users with the same paper preview as Mac users. The code for this extension can be found on [Github](https://github.com/Future-Scholars/paperlib-preview-extension). This code can serve as a reference for `New Window Extensions`.

For the development of `New Window Extensions`, you can refer to [New Window Extensions](./ext-types/new-window-ext).


