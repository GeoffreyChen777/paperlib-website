# PaperService

## Call

```typescript
import { PLAPI } from "paperlib-api/api";

PLAPI.paperService.methodname(...);
```

## Avaliable Methods

### `load`

```typescript
/**
 * Load paper entities with filter and sort.
 * @param filterOptions - filter object
 * @param sortBy - Sort by
 * @param sortOrder - Sort order
 * @returns Paper entities
 */
load(filterOptions: PaperFilterOptions, sortBy: string, sortOrder: "asce" | "desc"): Promise<IPaperEntityCollection>;
```

### `loadByIds`

```typescript
/**
 * Load paper entities by IDs.
 * @param ids - Paper entity ids
 * @returns Paper entities
 */
loadByIds(ids: OID[]): Promise<never[] | Realm.Results<PaperEntity & Realm.Object<unknown, never>>>;
```

### `update`

```typescript
/**
 * Update paper entities.
 * @param paperEntityDrafts - paper entity drafts
 * @returns Updated paper entities
 */
update(paperEntityDrafts: IPaperEntityCollection): Promise<IPaperEntityCollection>;
```

### `updateWithCategorizer`

```typescript
/**
 * Update paper entities with a categorizer.
 * @param ids - The list of paper IDs.
 * @param categorizer - The categorizer.
 * @param type - The type of the categorizer.
 */
updateWithCategorizer(ids: OID[], categorizer: Categorizer, type: CategorizerType): Promise<void>;
```

### `delete`

```typescript
/**
 * Delete paper entities.
 * @param ids - Paper entity ids
 * @param paperEntity - Paper entities
 */
delete(ids?: OID[], paperEntities?: PaperEntity[]): Promise<void>;
```

### `deleteSup`

```typescript
/**
 * Delete a suplementary file.
 * @param paperEntity - The paper entity.
 * @param url - The URL of the supplementary file.
 */
deleteSup(paperEntity: PaperEntity, url: string): Promise<void>;
```

### `create`

```typescript
/**
    * Create paper entity from file URLs.
    * @param urlList - The list of URLs.
    * @returns The list of paper entity drafts.
    */
create(urlList: string[]): Promise<IPaperEntityCollection>;
```

### `createIntoCategorizer`

```typescript
/**
 * Create paper entity from a URL with a given categorizer.
 * @param urlList - The list of URLs.
 * @param categorizer - The categorizer.
 * @param type - The type of categorizer.
 * @returns The list of paper entity drafts.
 */
createIntoCategorizer(urlList: string[], categorizer: Categorizer, type: CategorizerType): Promise<IPaperEntityCollection>;
```

### `scrape`

```typescript
/**
 * Scrape paper entities.
 * @param paperEntities - The list of paper entities.
 * @param specificScrapers - The list of specific scrapers.
 */
scrape(paperEntities: IPaperEntityCollection, specificScrapers?: string[]): Promise<void>;
```

### `scrapePreprint`

```typescript
/**
 * Scrape preprint paper entities.
 */
scrapePreprint(): Promise<void>;
```

### `renameAll`

```typescript
/**
 * Rename all paper entities.
 */
renameAll(): Promise<void>;
```


## Events

| Event ID | Callback Value | Description |
| --- | --- | --- |
| `updated` | `{key: 'updated'}` | When PaperEntity database is updated |
| `count` | `{key: 'count', value: count | When FeedEntity database count is changed |

