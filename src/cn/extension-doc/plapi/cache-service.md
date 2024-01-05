# CacheService

## Call

```typescript
import { PLAPI } from "paperlib-api/api";

PLAPI.cacheService.methodname(...);
```

## Avaliable Methods

### `fullTextFilter`

```typescript
/**
 * Filter the fulltext cache of the provided papers by the given query.
 * @param query - The query to filter the fulltext cache by.
 * @param paperEntities - The paper entities to filter.
 * @returns The filtered paper entities. */
fullTextFilter(query: string, paperEntities: IPaperEntityCollection): Promise<Results<IPaperEntityObject>>;
```

### `loadThumbnail`

```typescript
/**
 * Get the thumbnail of the paper entity.
 * @param paperEntity - The paper entity to get the thumbnail of.
 * @returns The thumbnail of the paper entity. */
loadThumbnail(paperEntity: PaperEntity): Promise<ThumbnailCache | null>;
```

### `updateFullTextCache`

```typescript
/**
 * Update the fulltext cache of the provided paper entities.
 * @param paperEntities - The paper entities to update the fulltext cache of.
 */
updateFullTextCache(paperEntities: IPaperEntityCollection): Promise<void>;
```

### `updateThumbnailCache`

```typescript
/**
 * Update the thumbnail cache
 * @param paperEntity - PaperEntity
 * @param thumbnailCache - Cache of thumbnail
 */
updateThumbnailCache(paperEntity: PaperEntity, thumbnailCache: ThumbnailCache): Promise<void>;
```

### `updateCache`

```typescript
/**
 * Update the cache of the provided paper entities.
 * @param paperEntities - The paper entities.
 * @returns
 */
updateCache(paperEntities: IPaperEntityCollection): Promise<void>;
```

### `delete`

```typescript
/**
 * Delete the cache of the provided paper entity ids.
 * @param ids - The ids of the paper entities to delete the cache of.
 */
delete(ids: OID[]): Promise<void>;
```