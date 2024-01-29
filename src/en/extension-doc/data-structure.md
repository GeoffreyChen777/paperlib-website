# Important Data Structures

In Paperlib, we have some important data structures, which are widely used in Paperlib, so we provide them to developers. You can import them from `paperlib-api/model` package.

Here we will briefly introduce these data structures.

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

This is the most important data structure in Paperlib. Each paper is a `PaperEntity` object. You can use it in your extension like this:

```typescript

```typescript
import { PaperEntity } from 'paperlib-api/model';

const draft = new PaperEntity({ title: '123' })
draft.authors = "xxx, yyy"
```


## `Categorizer`: `PaperTag` and `PaperFolder`

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
    children: PaperFolder[]; // Readonly. Cannot be used when create or update.
}
```

This is the categorizer in Paperlib, that is, tags and folders. They are the same in data structure, but have different names in the database. You can use it like `PaperEntity`.

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

This is the smart filter in Paperlib. Smart filters are a special kind of tags, which will automatically fill in the content of the search bar. You can use it like we show in the example of `PaperEntity`.


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

This is the RSS feed in Paperlib. You can use it like we show in the example of `PaperEntity`.

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

This is the RSS feed item in Paperlib. You can use it like we show in the example of `PaperEntity`.

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

This is the `PaperEntity` filter options in Paperlib. You can filter out different papers by passing in different options. For example:
    
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

This is the `FeedEntity` filter options in Paperlib. You can filter out different RSS feed items by passing in different options. You can use it like `PaperFilterOptions`.