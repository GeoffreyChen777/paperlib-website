# 示例插件开发

本文提供一个示例插件的开发过程。代码可以在 [Github](https://github.com/Future-Scholars/paperlib-demo-helloworld-extension) 上找到。

对于其他类型的插件，我们也提供了相应的示例插件，可以在 [Github](https://github.com/orgs/Future-Scholars/repositories) 上找到。

## 开发环境

接下来的所有示例，以 [示例](https://github.com/Future-Scholars/paperlib-demo-helloworld-extension) 上的示例插件为例。请先将其克隆到本地。按照 [开发环境](./env) 的说明进行配置。

## 插件入口

插件入口文件是 `src/main.ts`，该文件导出一个函数 `initialize`：

```typescript
export { initialize }
```

这是所有插件都必须提供的一个函数，Paperlib 会在插件加载时调用该函数，来初始化插件和获得插件类对象。

## 插件 `initialize` 函数

该函数的主要任务是创建一个插件类对象，进行插件初始化，并将其返回。

```typescript
// src/main.ts

async function initialize() {
  const extension = new PaperlibHelloworldExtension();
  await extension.initialize();

  return extension;
}
```

在这个例子中，我们创建了一个 `PaperlibHelloworldExtension` 类的对象，并调用了其 `initialize` 函数。

## 插件类

插件类是插件的核心，它负责插件的初始化、生命周期管理、以及提供插件的功能。该插件类必须继承 `PLExtension` 类。

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
    // 初始化插件
    ...
  }

  async dispose() {
    // 释放插件, 例如取消监听事件等
    ...
  }

  // 插件的其他函数
  ...
}

```

`PLExtension` 类中有一些必要的检查，防止插件开发过程中出现问题。例如，插件必须提供一个 `id`，插件的配置必须遵循一些规范。这些都会在 `PLExtension` 类中进行检查。

在插件类中，我们需要定义两个函数：`initialize` 和 `dispose`。这两个函数分别在插件加载和卸载时被调用。在 `initialize` 函数中，我们可以进行插件的初始化，例如注册事件监听器，注册插件设置等。在 `dispose` 函数中，我们可以进行插件的释放，例如取消事件监听器等。除此之外，插件其他的函数，成员变量，都可以自由定义。

接下来，我们详细介绍这两个函数。

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

在 `initialize` 函数中，我们通过 `PLExtAPI.extensionPreferenceService.register` 首先注册了插件的设置。这样，用户就可以在 Paperlib 的设置界面中看到插件的设置，并进行修改。

之后，我们调用了 `printSomething` 函数，该函数会在 Paperlib 的控制台中打印一些信息。这是一个例子，意味着你可以在这里做任何你需要的事情。

之后，我们分别运行了三个函数，用于三种类型的插件。我们将在下面详细介绍这三种类型的插件开发。在这里，我们以 `registerSomeCommands()` 为例:

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

在这个例子中，我们想达成的功能是，当用户在 `Command Bar` 中选择一个命令运行时，我们收到这个指令，并运行一些函数。

1. 首先，我们通过 `PLAPI.commandService.on` 注册了一个事件监听器，当用户选择运行命令时，我们就会收到这个事件。在这个事件监听器中，我们的响应非常简单，即通过 `PLExtAPI.extensionPreferenceService.get` 获取了插件设置中的一些信息，然后通过 `PLAPI.logService.info` 打印了一些信息。

2. 之后，我们通过 `PLAPI.commandService.registerExternel` 注册了一个命令。这样这个命令就会出现在用户的 `Command Bar` 中。当用户选择运行这个命令时，我们就会收到上面注册的事件。我们需要提供命令的 `id`，`description`，以及 `event`。其中，`id` 是命令的唯一标识符，`description` 是命令的描述，`event` 是命令运行时会触发的事件。可以看到，这个事件就是我们上面注册监听的事件。

3. 所有事件的监听，以及注册等方法，都需要在插件卸载的时候进行 `dispose`，以防止内存泄漏。这些方法都会返回一个函数，调用这个函数，就可以进行相应的 `dispose`。我们将这些函数保存在 `disposeCallbacks` 中，以便在 `dispose` 函数中调用。

4. 另外关于事件的监听，回调中，不要使用 `floating promise`，即，如果你的回调函数中包含 `AsyncFunction`，请务必 `await`，或者 `.catch` 异常。因为 `floating promise` 中的异常无法在 Paperlib 中被捕获，会导致插件崩溃。

这就是一个 `Command Extension` 的主要代码。你可以在事件监听的地方，调用你的其他方法，做任何你需要的事等等。

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

这是一个必须存在的函数。Paperlib 会在重载，卸载等时候，调用插件的这个函数。在 `dispose` 函数中，我们首先取消了插件设置的注册。之后，我们调用了 `disposeCallbacks` 中保存的所有 `dispose` 函数，以释放插件的所有资源。如取消事件监听器等。如果你的插件还有额外的资源需要释放，请在这里进行释放。


### 插件设置

在上面的例子中，我们通过 `PLExtAPI.extensionPreferenceService.register` 注册了插件的设置。这样，用户就可以在 Paperlib 的设置界面中看到插件的设置，并进行修改。

这个设置的默认值，是在构建 `PaperlibHelloworldExtension` 类对象时，传入的 `defaultPreference`。这个 `defaultPreference` 是一个对象，其中的每个键值对，都是一个设置项。例如：

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

在这个例子中，我们定义了三个设置项：`msg`，`signature`，`lang`。其中，`msg` 是一个字符串类型的设置项，`signature` 是一个布尔类型的设置项，`lang` 是一个选项类型的设置项。这些设置项的默认值，分别是 `Hello from the extension process`，`false`，`en`。这些设置项的顺序分别是 `0`，`1`，`2`。在 Paperlib 的设置界面中，这些设置项会按照顺序排列，并根据类型的不同，展现出不同的组件，方便用户进行更改。详细的设置项类型，可以参考[插件设置](./preference)

在插件中访问设置项的值，可以通过 `PLExtAPI.extensionPreferenceService.get` 来获取。例如：

```typescript
PLExtAPI.extensionPreferenceService.get(this.id, "lang")
```

这样，我们就可以获取到 `lang` 这个设置项的值。

---

至此，我们已经完成了一个 `Demo Command Extension` 的开发。接下来，我们将介绍 `Hook Extension` 和 `UI Extension` 的开发。

## 数据结构

在 Paperlib 中，我们定义了一些重要的数据结构，这些数据结构在 Paperlib 中被广泛使用，因此我们将其提供给开发者使用。你可以在 `paperlib-api/model` 包引入：

```typescript
import { 
    PaperEntity,
    PaperTag,
    PaperFolder,
    Feed,
    FeedEntity,
    OID
} from 'paperlib-api/model';

```

如果你的插件涉及到数据结构的处理，请使用这些数据结构。这些数据结构的详细说明，请见 [数据结构](./data-structure)。

## 其他例子

### Hook 插件

该类插件的主要针对那些需要对 Paperlib 的生命周期进行干预的插件。例如，我们想开发一个新的元数据搜刮器，在用户导入一个论文的时候，自动从网络上搜刮元数据。事实上，在 Paperlib 3.0 中，默认的所有搜刮器都已经是以插件的形式存在了。这些插件的代码可以在 [Github (Entry)](https://github.com/Future-Scholars/paperlib-entry-scrape-extension) [Github (Metadata)](https://github.com/Future-Scholars/paperlib-metadata-scrape-extension) 上找到。这些插件的代码，可以作为 `Hook 插件` 的参考。

详细的 `Hook 插件` 的开发，可以参考 [Hook 插件](./ext-types/hook-ext)。在这里，我们使用一个简单的例子来说明 `Hook 插件` 的开发。

该部分的主要功能为，当用户在导入一个新文件时，我们打印一些信息。在这里你可以对这些信息进行修改并返回给 Paperlib，以修改 Paperlib 接下来流程中的数据。

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

在这个例子中，我们首先通过 `PLAPI.hookService.hookModify` 注册了一个 `modify` 类型的钩子。这个钩子点是 `scrapeEntryBefore`，这个钩子会在 Paperlib 进行元数据检索前触发。关于钩子类型和钩子点，请见 [Hook 插件](./ext-types/hook-ext)。 在这个钩子中，我们注册了 `modifyPayloads` 函数的名字，这个函数会在这个钩子触发时被调用。

在这个 `modifyPayloads` 函数中，我们首先打印了一些信息，然后你可以对 `payloads` 进行修改，并返回了修改后的 `payloads`。

这样，我们就完成了一个 `Hook 插件` 的开发。

### UI 插件

该类插件的主要针对那些需要修改 Paperlib 的 UI 界面的插件。例如，我们想在 Paperlib 的论文详情界面中，添加它的引用次数，添加其他与论文相关的信息等。

详细的 `UI 插件` 的开发，可以参考 [Hook 插件](./ext-types/hook-ext)。在这里，我们使用一个简单的例子来说明 `UI 插件` 的开发。


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

在这个例子里，我们首先监听用户的选择论文是否变化了。因为只有当用户选择了一篇论文时，我们才会展示详情面板。

此时，我们通过 `PLAPI.uiSlotService.updateSlot` 更新了 `paperDetailsPanelSlot1` 这个 UI 插槽。这个插槽是 Paperlib 的论文详情面板的第一个插槽。我们在这个插槽中添加了一个 `demo_section_id` 为 ID 的插槽项，其中的 `title` 是插槽项的标题，`content` 是插槽项的内容。这样，我们就在论文详情面板中添加了一个有标题和内容的小节。Paperlib 提供的插槽请见 [UI 插件](./ext-types/ui-ext)。

### New Window 插件

这一类插件会创建一个全新的窗口，来实现一些复杂的功能。例如，我们想开发一个新的论文阅读界面，来实现一些复杂的功能，例如，论文的阅读，笔记的编辑，论文的标注等。

我们开发了一个论文预览插件来给 Windows 和 Linux 用户提供像 Mac 用户一样的论文预览功能。这个插件的代码可以在 [Github](https://github.com/Future-Scholars/paperlib-preview-extension) 上找到。这个插件的代码，可以作为 `New Window 插件` 的参考。

关于 `New Window 插件` 的开发，可以参考 [New Window 插件](./ext-types/new-window-ext)。
