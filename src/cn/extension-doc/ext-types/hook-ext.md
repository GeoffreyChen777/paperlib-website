# Hook 插件

这种类型的插件主要特点是可以介入 Paperlib 的运行流程，修改流程里面的参数，数据流等。比如，当用户拖入一个论文 PDF 时，Paperlib 会搜索该文件的元数据，生成一个 PaperEntity 存在数据库中。我们可以通过 Hook 插件来介入这个过程，比如在生成 PaperEntity 之后，我们将元数据中的某部分进行修改。

实际上，在 Paperlib 3.0 中，官方所有的 Metadata Scraper 都是用插件来实现的。

## 插件类结构

在这里我们给出一个示例结构，当然你可以根据自己的需要进行修改。

```typescript
class HookExtension extends PLExtension {
  constructor() {
    // 你可以在这里设置插件的 id，默认设置
    super(...)
  }

  async initialize() {
    // 在这里注册 Hook 点
    this.disposeCallbacks.push(
      PLAPI.hookService.hookModify(
        "scrapeEntryBefore",
        this.id,
        "modifyPayloads",
      ),
    );

    ...
  }

  async dispose() {
    // 在这里取消注册，事件监听
    for (const disposeCallback of this.disposeCallbacks) {
      disposeCallback();
    }
  }

  async modifyPayloads(payloads: SourcePayload[]) {
    // 在这里修改 payloads
    ...

    return [payloads]
  }
}
```

## 钩子点

在 Paperlib 中，我们在不同的地方，放置了不同名字的钩子点。一个钩子插件可以注册到对应的钩子点来介入 Paperlib 的运行流程。一共有两种类型的钩子点。

### Modify 钩子点

- **目的**：这种类型的钩子点，用于修改钩子点传来的参数，或者参数内的变量，而不能改变类型，最后返回修改后的参数。

- **回调返回值类型**：该类钩子要求回调函数的返回值必须是一个数组，数组的每个元素，对应着传入的参数数组。比如，钩子点传入的参数为 `(arg1: string, arg2: {value: number})`，在钩子的回调函数中可以修改 `arg1` 为别的字符串，修改 `arg2.value` 为别的数字，但是不能修改 `arg1` 的类型为数字，或者修改 `arg2` 的类型为别的类型。回调函数的返回值必须为修改后的参数组成的数组：`[arg1, arg2]`。**注意，即使传入参数仅为一个，也需要返回元素数量为1的数组。因为传入参数永远被视作一个数组**
  

### Transform 钩子点

- **目的**：这种类型的钩子点，可以修改 Paperlib 的运行流程中的数据流。用于把传入参数转换为其他形式的数据，然后返回。
- **回调返回值类型**：可以为其他类型，但是通常不同钩子点有期望的返回值类型。比如，`scrapeEntry` 钩子点，期望的返回值类型为 `PaperEntity` 数组。


### 可用钩子点

- **modifyHookPoint**
  - beforeScrapeEntry - 在论文 payload 进入 scrape 流程之前。
  - afterScrapeEntry - 在论文 payload 完成 scrape 流程转换为了 `PaperEntity` 草稿之后。
  - beforeScrapeMetadata - 在论文草稿进入 scrape metadata 流程之前。
  - scrapeMetadata - 在论文草稿进行 scrape metadata 流程时。
  - afterScrapeMetadata - 在论文草稿完成 scrape metadata 流程之后。
  - locateFile - 在论文草稿进行 locate file 流程时。

- **transformhookPoint**
  - scrapeEntry - 在论文 payload 进入 scrape 流程，转换为 PaperEntity 时。

Paperlib 的详细流程和钩子点的详细介绍，请参考 [运行流程与钩子](../process-hook)。

## 钩子注册

我们可以通过 `PLAPI.hookService.hookModify` 方法来注册插件所使用的 `Modify` 钩子点，或者使用 `PLAPI.hookService.hookTransform` 方法来注册插件所使用的 `Transform` 钩子点：

```typescript
PLAPI.hookService.hookModify(
  hookPoint: string,
  extensionId: string,
  callbackFuncName: string,
)

PLAPI.hookService.hookTransform(
  hookPoint: string,
  extensionId: string,
  callbackFuncName: string,
)
```

- `hookPoint`：Paperlib 提供的钩子点的 id，想要设置钩子的位置。
- `extensionId`：插件的 id，用于标识插件。
- `callbackFuncName`：插件中的回调函数的名称，用于在钩子点触发时调用。

## 钩子回调函数

钩子回掉函数的名字，需要和注册时的 `callbackFuncName` 保持一致。钩子回调函数的参数，以及返回值的形式，根据钩子位置不同，以及钩子类型不同，会有所不同。详细介绍请参考 [运行流程与钩子](../process-hook)。

在[钩子点](#钩子点)小节中我们总体上描述了两类钩子回调函数的形式。在此不再赘述。

## 超时限制

因为钩子类插件会侵入 Paperlib 的运行流程，所以我们需要对钩子回调函数的运行时间进行限制。如果钩子回调函数运行时间超过了预设时间，Paperlib 会强制绕过该回调函数的运行：

- `modifyHookPoint`：默认超时时间为 5 秒。
- `transformHookPoint`：默认超时时间为 15 秒。

## 额外钩子点

尽管我们的钩子机制支持我们几乎在任何地方放置钩子，但是因为钩子类插件的侵入性，我们非常谨慎的开放钩子点。如果目前的钩子点无法满足您插件的开发需求，请前往 [GitHub Discussions](https://github.com/Future-Scholars/paperlib/discussions) 提出您的需求，我们会考虑在未来的版本中添加新的钩子点。