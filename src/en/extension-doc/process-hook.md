# Operation Flows and Hooks

This article introduces the important flows in Paperlib, as well as the hooks available in these operation flows.

## Introduction to Hooks

In Paperlib, we have placed hooks with different names in different places. A hook extension can register to the corresponding hook point to intervene in the operation flow of Paperlib. There are two types of hook points.

### Modify Hook Points

- **Purpose**: This type of hook point is used to modify the arguments passed by the hook point, or the variables within the argument objects, but cannot change the type, and finally returns the modified arguments.

- **Type of Callback Return Value**:  Modify Hook requires the return value of the callback function to be an array, each element of which corresponds to the input argument array. For example, if the arguments passed by the hook point are `(arg1: string, arg2: {value: number})`, you can modify `arg1` to another string and `arg2.value` to another number in the callback function of the hook, but you cannot change the type of `arg1` to a number, or change the type of `arg2` to another type. The return value of the callback function must be an array composed of modified arguments: `[arg1, arg2]`. **Note that even if only one argument is passed in, an array with one element needs to be returned. Because the input arguments are always treated as an arguments array**

### Transform Hook Points

- **Purpose**: This type of hook point can modify the data flow in the operation process of Paperlib. It is used to transform the input arguments into other forms of data and then return.
- **Callback Return Value Type**: It can be other types, but usually different hook points have expected return value types. For example, the `scrapeEntry` hook point expects the return value type to be an array of `PaperEntity`.

For information on how to register hooks and how to write hook extensions, please refer to [Hook extensions](./ext-types/hook-ext).

## Paper Import Process

Whether it is imported by dragging files or imported from browser extensions, after forming the corresponding `source payload`, it will enter the paper import process. The diagram of the paper import process is as follows:

<img src="/assets/images/extension-doc/process-hook/import-process.svg" style="box-shadow:none"/>

In this process, the main hook points are in the `scrapeEntry()` and `scrapeMetadata()` methods of `ScrapeService`.

---

### `scrapeEntry()`

The main task of `scrapeEntry()` is to convert these data from different types of sources into the internal data structure `PaperEntity` of Paperlib, and fill in the important fields of `PaperEntity` as much as possible (such as: `title`, `doi`, `arxivID`, etc.) for the subsequent `scrapeMetadata()` method to search and complete its paper metadata.

After receiving the import of the paper source, we first call `scrapeEntry()`. Its main argument is an array of `SourcePayload`, that is, the data of the paper source. `source payload` contains the `type` field indicating the type of source, and the data of the source:

```typescript
interface SourcePayload {
  type: "file" | "webcontent";
  // For file type, value is the path of the file
  // For webcontent type, value is WebContentSourcePayload
  value: string | WebContentSourcePayload;
}

interface WebContentSourcePayload {
  url: string;             // Source page's url
  document: string;        // Source page's html              
  cookies?: string;        // Some pages may contain cookies
}
```

The return type of `scrapeEntry()` is an array of `PaperEntity`, because even if the `SourcePayload` array only contains one `source payload`, it may contain multiple papers. For example, when importing by dragging files, the dragged file might be a BibTex file, which contains information about multiple papers.

---

### `scrapeMetadata()`

The return value of `scrapeEntry()` will be passed into the `scrapeMetadata()` method. The main task of `scrapeMetadata()` is to search for the paper's metadata from various databases on the internet and complete all fields in `PaperEntity`. The return type of `scrapeMetadata()` is also an array of `PaperEntity`.

---

As shown in the diagram, there are six hook points in this operation flow, five of the `Modify` type and one of the `Transform` type.


### `beforeScrapeEntry`

| Parameter | Value |
| --- | --- |
| Type | `Modify` |
| Location | At the very beginning of the `scrapeEntry()` method, before the SourcePayload being converted to `PaperEntity` |
| Callback arguments | `SourcePayload[]` |
| Callback Return Value | `ArgumentArray<SourcePayload[]>` |


### `scrapeEntry`

| Parameter | Value |
| --- | --- |
| Type | `Transform` |
| Location | The main hook point of `scrapeEntry()`, accepts `SourcePayload` 数组 and outputs `PaperEntity` 数组 |
| Callback arguments | `SourcePayload[]` |
| Callback Return Value | `PaperEntity[]` |

### `afterScrapeEntry`

| Parameter | Value |
| --- | --- |
| Type | `Modify` |
| Location | At the end of the `scrapeEntry()` method, after the SourcePayload being converted to `PaperEntity` |
| Callback arguments | `PaperEntity[]` |
| Callback Return Value | `ArgumentArray<PaperEntity[]>` |

### `beforeScrapeMetadata`

| Parameter | Value |
| --- | --- |
| Type | `Modify` |
| Location | At the very beginning of the `scrapeMetadata()` method, before searching for metadata |
| Callback arguments | `paperEntities: PaperEntity[]`, `scrapers: string[]`, `force: boolean` |
| Callback Return Value | ArgumentArray<`paperEntities: PaperEntity[]`, `scrapers: string[]`, `force: boolean`> |

Here, `scrapers` is an array of strings. If it is not empty, it means that the user has chosen to search with specific scrapers. `force` indicates whether to force the search. If `true`, it will ignore the existing metadata in `PaperEntity` and force the search.

### `scrapeMetadata`

| Parameter | Value |
| --- | --- |
| Type | `Modify` |
| Location | The main hook point of `scrapeMetadata()`, accepts an array of `PaperEntity`, can modify each property and return |
| Callback arguments | `paperEntities: PaperEntity[]`, `scrapers: string[]`, `force: boolean` |
| Callback Return Value | ArgumentArray<`paperEntities: PaperEntity[]`, `scrapers: string[]`, `force: boolean`> |

### `afterScrapeMetadata`

| Parameter | Value |
| --- | --- |
| Type | `Modify` |
| Location | At the end of the `scrapeMetadata()` method, after searching for metadata |
| Callback arguments | `paperEntities: PaperEntity[]`, `scrapers: string[]`, `force: boolean` |
| Callback Return Value | ArgumentArray<`paperEntities: PaperEntity[]`, `scrapers: string[]`, `force: boolean`> |

## Paper PDF Locating

When a paper does not have a corresponding PDF file, Paperlib will display a button in the detail panel to locate for available PDFs on the internet and download them. After clicking this button, it will enter the paper PDF locating process. The main function of the paper PDF locating process is the `locateFileOnWeb()` method of `FileService`. There is one available hook in this process.


### `locateFile`

| Parameter | Value |
| --- | --- |
| Type | `Modify` |
| Location | Inside the `locateFileOnWeb()` method |
| Callback arguments | `PaperEntity[]` |
| Callback Return Value | ArgumentArray<`PaperEntity[]`> |