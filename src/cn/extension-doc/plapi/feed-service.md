# FeedService

## Call

```typescript
import { PLAPI } from "paperlib-api/api";

PLAPI.feedService.methodname(...);
```

## Avaliable Methods

### `load`

```typescript
/**
    * Load feeds.
    * @param sortBy - Sort by.
    * @param sortOrder - Sort order.
    * @returns Feeds.
    */
load(sortBy: string, sortOrder: string): Promise<IFeedCollection>;
```

### `loadEntities`

```typescript
/**
    * Load feed entities from the database.
    * @param filter - Filter.
    * @param sortBy - Sort by.
    * @param sortOrder - Sort order.
    * @returns Feed entities.
    */
loadEntities(filter: FeedEntityFilterOptions, sortBy: string, sortOrder: "asce" | "desc"): Promise<IFeedEntityCollection>;
```

### `update`

```typescript
/**
    * Update feeds.
    * @param feeds - Feeds.
    * @returns Updated feeds.
    */
update(feeds: IFeedCollection): Promise<IFeedObject[]>;
```

### `updateEntities`

```typescript
/**
    * Update feed entities.
    * @param feedEntities - Feed entities
    * @param ignoreReadState - Ignore read state. Default: false.
    * @returns Updated feed entities.
    */
updateEntities(feedEntities: IFeedEntityCollection, ignoreReadState?: boolean): Promise<IFeedEntityObject[] | undefined>;
```

### `create`

```typescript
/**
    * Create feeds.
    * @param feeds - Feeds
    */
create(feeds: Feed[]): Promise<void>;
```

### `refresh`

```typescript
/**
    * Refresh feeds.
    * @param ids - Feed ids
    * @param feeds - Feeds
    * @returns
    */
refresh(ids?: OID[], feeds?: IFeedCollection): Promise<void>;
```

### `colorize`

```typescript
/**
    * Colorize a feed.
    * @param color - Color
    * @param id - Feed ID
    * @param feed - Feed
    */
colorize(color: Colors, id?: OID, feed?: IFeedObject): Promise<void>;
```

### `delete`

```typescript
/**
    * Delete a feed.
    * @param ids - Feed IDs
    * @param feeds - Feeds
    */
delete(ids?: OID[], feeds?: IFeedCollection): Promise<void>;
```

### `addToLib`

```typescript
/**
    * Add feed entities to library.
    * @param feedEntities - Feed entities
    */
addToLib(feedEntities: IFeedEntityCollection): Promise<void>;
```

## Events

| Event ID | Callback Value | Description |
| --- | --- | --- |
| `updated` | `{key: 'updated'}` | When Feed database is updated |
| `entitiesUpdated` | `{key: 'entitiesUpdated'}` | When FeedEntity database is initialized |
| `entitiesCount` | `{key: 'entitiesCount', value: count}` | When FeedEntity database count is changed |

