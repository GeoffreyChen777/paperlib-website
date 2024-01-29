# 重要数据结构

在 Paperlib 中，我们定义了一些重要的数据结构，这些数据结构在 Paperlib 中被广泛使用，因此我们将其提供给开发者使用。你可以在 `paperlib-api/model` 包引入。

在这里我们将会简单介绍这些数据结构。

## `OID`

```typescript
type OID = ObjectId | string;
```

## `PaperEntity`

```typescript
interface PaperEntity {
    _id: OID;
    id: OID;
    _partition?: string;  // For Realm Cloud Sync.
    addTime: Date;
    title: string;
    authors: string;  // Split by comma and a space.
    publication: string;
    pubTime: string;
    pubType: number;
    doi: string;
    arxiv: string;
    mainURL: string;
    supURLs: string[];
    rating: number;
    tags: Categorizer[];
    folders: Categorizer[];
    flag: boolean;
    note: string;
    codes: string[];
    pages: string;
    volume: string;
    number: string;
    publisher: string;
}
```

这是 Paperlib 中最重要的数据结构。每一个论文条目，实际上就是一个 `PaperEntity` 对象。你可以在插件中这样使用：

```typescript
import { PaperEntity } from 'paperlib-api/model';

const draft = new PaperEntity({ title: '123' })
draft.authors = "xxx, yyy"
```


## `Categorizer`: `PaperTag` 和 `PaperFolder`

```typescript

interface Categorizer {
    _id: OID;
    _partition: string;
    name: string;
    count: number;
    color?: string;
    children: Categorizer[]; // Readonly. Cannot be used when create or update.
}

interface PaperTag {
    _id: OID;
    _partition: string;
    name: string;
    count: number;
    color?: string;
    children: PaperTag[]; // Readonly. Cannot be used when create or update.
}

interface PaperFolder {
    _id: OID;
    _partition: string;
    name: string;
    count: number;
    color?: string;
    children: PaperFolder[]; // Readonly. Cannot be used when create or update.;
}
```

这是 Paperlib 中的分类器，即标签和组。在数据结构上他们是相同的，只是在数据库里有不同的名字。使用方法和 `PaperEntity` 类似。

## `PaperSmartFilter`

```typescript
interface IPaperSmartFilter {
    _id: OID;
    _partition: string;
    name: string;
    filter: string;
    color?: string;
    children: PaperSmartFilter[]; // Readonly. Cannot be used when create or update.
}
```

这是 Paperlib 中的智能过滤器。智能过滤器是一种特殊的标签，点击时自动将 `filter` 字段的内容填入搜索框。使用方法和 `PaperEntity` 类似。


## `Feed`

```typescript
interface Feed {
    _id: OID;
    id: OID;
    _partition: string;
    name: string;
    count: number;
    color?: string;
    url: string;
}
```

这是 Paperlib 中的 RSS 订阅源。使用方法和 `PaperEntity` 类似。

## `FeedEntity`

```typescript
interface FeedEntity {
    _id: OID;
    id: OID;
    _partition?: string;
    addTime: Date;
    feed: Feed;
    feedTime: Date;
    title: string;
    authors: string;
    abstract: string;
    publication: string;
    pubTime: string;
    pubType: number;
    doi: string;
    arxiv: string;
    mainURL: string;
    pages: string;
    volume: string;
    number: string;
    publisher: string;
    read: boolean;
}
```

这是 Paperlib 中的 RSS 订阅源的条目。使用方法和 `PaperEntity` 类似。


## `PaperFilterOptions`

```typescript
interface IPaperFilterOptions {
    search?: string;
    searchMode?: "general" | "fulltext" | "advanced";
    flaged?: boolean;
    tag?: string;
    folder?: string;
    limit?: number;
}
```

这是 Paperlib 中的 `PaperEntity` 过滤器选项。传入不同的选项，可以过滤出不同的论文条目。比如：
    
```typescript
import { PaperFilterOptions, PLAPI } from 'paperlib-api/api';

const options: PaperFilterOptions = {
    search: 'LLM',
    searchMode: 'general',
    flaged: true,
    tag: 'tag1',
}

// We can use this options to filter out the papers we want.
// The results are papers that contain 'LLM' in their title,
// and are flaged, and have tag 'tag1'.
const results = await PLAPI.paperService.load(options.toString(), ...)
```

## `FeedEntityFilterOptions`

```typescript
interface IFeedEntityFilterOptions {
  search?: string;
  searchMode?: "general" | "fulltext" | "advanced";
  feedNames?: string[];
  unread?: boolean;
  title?: string;
  authors?: string;
}
```

这是 Paperlib 中的 `FeedEntity` 过滤器选项。传入不同的选项，可以过滤出不同的 RSS 订阅源条目。使用方法和 `PaperFilterOptions` 类似。
