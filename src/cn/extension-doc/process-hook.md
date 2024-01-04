# 流程与钩子

本文介绍了 Paperlib 中重要的流程，以及在这些流程中，可用的钩子。

## 钩子介绍

在 Paperlib 中，我们在不同的地方，放置了不同名字的钩子点。一个钩子插件可以注册到对应的钩子点来介入 Paperlib 的运行流程。一共有两种类型的钩子点。

### Modify 钩子点

- **目的**：这种类型的钩子点，用于修改钩子点传来的参数，或者参数内的变量，而不能改变类型，最后返回修改后的参数。

- **回调返回值类型**：该类钩子要求回调函数的返回值必须是一个数组，数组的每个元素，对应着传入的参数数组。比如，钩子点传入的参数为 `(arg1: string, arg2: {value: number})`，在钩子的回调函数中可以修改 `arg1` 为别的字符串，修改 `arg2.value` 为别的数字，但是不能修改 `arg1` 的类型为数字，或者修改 `arg2` 的类型为别的类型。回调函数的返回值必须为修改后的参数组成的数组：`[arg1, arg2]`。
  
  **注意，即使传入参数仅为一个，也需要返回元素数量为1的数组。因为传入参数永远被视作一个数组。在接下来的文章中，我们使用 *参数数组<...>* 来表示。**
  

### Transform 钩子点

- **目的**：这种类型的钩子点，可以修改 Paperlib 的运行流程中的数据流。用于把传入参数转换为其他形式的数据，然后返回。
- **回调返回值类型**：可以为其他类型，但是通常不同钩子点有期望的返回值类型。比如，`scrapeEntry` 钩子点，期望的返回值类型为 `PaperEntity` 数组。

关于如何注册钩子，以及如何编写钩子插件，请参考 [钩子插件](./ext-types/hook-ext)。

## 论文导入流程

无论是从文件拖动导入，还是从浏览器插件导入，在组成相应的 `source payload` 后，都会进入到论文导入流程。论文导入流程的图示如下：

<img src="/assets/images/extension-doc/process-hook/import-process.svg" style="box-shadow:none"/>

该流程中，主要的钩子点都在 `ScrapeService` 的 `scrapeEntry()` 和 `scrapeMetadata()` 方法中。

---

### `scrapeEntry()`

`scrapeEntry()` 的主要任务就是把这些来自不同类型的源的数据，转换为 Paperlib 内部的数据结构 `PaperEntity`，并尽可能填充 `PaperEntity` 的重要字段（例如：`title`, `doi`, `arxivID` 等），以便之后的 `scrapeMetadata()` 方法搜寻补全其论文 metadata。

在接受到论文源的导入之后，我们首先调用 `scrapeEntry()`。他的主要参数是 `SourcePayload` 的数组，即论文源的数据。`source payload` 包含指示源的类型的 `type` 字段，以及源的数据：

```typescript
interface SourcePayload {
  type: "file" | "webcontent";
  // 对于 file 类型，value 为文件路径的字符串
  // 对于 webcontent 类型，value 为 WebContentSourcePayload
  value: string | WebContentSourcePayload;
}

interface WebContentSourcePayload {
  url: string;             // 源网页的 url
  document: string;        // 源网页的 html              
  cookies?: string;        // 有的网页包含 cookies
}
```

`scrapeEntry()` 的返回值类型为 `PaperEntity` 的数组，因为即使传入的 `SourcePayload` 数组只包含一个 `source payload`，它也可能包含多个论文。例如，从文件拖动导入，可能拖入的是一个 BibTex 文件，其中包含多个论文的信息。

---

### `scrapeMetadata()`
`scrapeEntry()` 的返回值，会被传入到 `scrapeMetadata()` 方法中。`scrapeMetadata()` 的主要任务是从网络各种数据库上搜寻论文的 metadata，并补全 `PaperEntity` 中所有字段。`scrapeMetadata()` 的返回值类型也是 `PaperEntity`的数组。

---

如图中所示，在这个流程中，有六个钩子点可以，五个 `Modify` 类型的钩子点，以及一个 `Transform` 类型的钩子点。

### `beforeScrapeEntry`

| 参数 | 值 |
| --- | --- |
| 类型 | `Modify` |
| 位置 | `scrapeEntry()` 方法的最开始，还未转换为 `PaperEntity` 之前 |
| Callback 参数 | `SourcePayload[]` |
| Callback 返回值 |  参数数组<`SourcePayload[]`> |

### `scrapeEntry`

| 参数 | 值 |
| --- | --- |
| 类型 | `Transform` |
| 位置 | `scrapeEntry()` 的主要钩子点，接受 `SourcePayload` 数组 转换为 `PaperEntity` 数组输出 |
| Callback 参数 | `SourcePayload[]` |
| Callback 返回值 | `PaperEntity[]` |

### `afterScrapeEntry`

| 参数 | 值 |
| --- | --- |
| 类型 | `Modify` |
| 位置 | `scrapeEntry()` 方法的最后，已经转换为 `PaperEntity` 之后 |
| Callback 参数 | `PaperEntity[]` |
| Callback 返回值 |  参数数组<`PaperEntity[]`> |

### `beforeScrapeMetadata`

| 参数 | 值 |
| --- | --- |
| 类型 | `Modify` |
| 位置 | `scrapeMetadata()` 方法的最开始，还未搜寻 metadata 之前 |
| Callback 参数 | `paperEntities: PaperEntity[]`, `scrapers: string[]`, `force: boolean` |
| Callback 返回值 | 参数数组<`paperEntities: PaperEntity[]`, `scrapers: string[]`, `force: boolean`> |

其中，`scrapers` 是一个字符串数组，如果不为空，则代表用户选择用特定的搜寻器进行搜寻。`force` 表示是否强制搜寻，如果为 `true`，则会忽略 `PaperEntity` 中已经存在的 metadata，强制搜寻。


### `scrapeMetadata`

| 参数 | 值 |
| --- | --- |
| 类型 | `Modify` |
| 位置 | `scrapeMetadata()` 的主要钩子点，接受 `PaperEntity` 数组，可修改每一个的属性后返回 |
| Callback 参数 | `paperEntities: PaperEntity[]`, `scrapers: string[]`, `force: boolean` |
| Callback 返回值 | 参数数组<`paperEntities: PaperEntity[]`, `scrapers: string[]`, `force: boolean`> |

### `afterScrapeMetadata`

| 参数 | 值 |
| --- | --- |
| 类型 | `Modify` |
| 位置 | `scrapeMetadata()` 方法的最后，已经搜寻 metadata 之后 |
| Callback 参数 | `paperEntities: PaperEntity[]`, `scrapers: string[]`, `force: boolean` |
| Callback 返回值 | 参数数组<`paperEntities: PaperEntity[]`, `scrapers: string[]`, `force: boolean`> |

## 论文 PDF 搜寻流程

当一个论文没有对应的 PDF 文件时，Paperlib 会在详情面板显示一个按钮用于在网络资源搜索可用的 PDF 并下载。这个按钮点击后，会进入到论文 PDF 搜寻流程。论文 PDF 搜寻流程的主要函数是 `FileService` 的 `locateFileOnWeb()` 方法。在这个流程里可用的钩子有一个。

### `locateFile`

| 参数 | 值 |
| --- | --- |
| 类型 | `Modify` |
| 位置 | `locateFileOnWeb()` 方法中 |
| Callback 参数 | `PaperEntity[]` |
| Callback 返回值 | 参数数组<`PaperEntity[]`> |

