# SmartFilterService

## Call

```typescript
import { PLAPI } from "paperlib-api/api";

PLAPI.smartFilterService.methodname(...);
```

## Avaliable Methods

### `load`

```typescript
/**
 * Load smartfilters.
 * @param type - The type of the smartfilter
 * @param sortBy - Sort by
 * @param sortOrder - Sort order
 * @returns
 */
load(type: PaperSmartFilterType, sortBy: string, sortOrder: string): Promise<IPaperSmartFilterCollection>;
```

### `loadByIds`

```typescript
/**
 * Load smartfilters by ids.
 * @param ids - The ids of the smartfilters
 * @returns
 */
loadByIds(ids: OID[]): Promise<IPaperSmartFilterCollection>;
```

### `delete`

```typescript
/**
 * Delete a smartfilter.
 * @param type - The type of the smartfilter
 * @param ids - The ids of the smartfilters
 * @param smartfilters - The smartfilters
 */
delete(type: PaperSmartFilterType, ids?: OID[], smartfilters?: IPaperSmartFilterCollection): Promise<void>;
```

### `colorize`

```typescript
/**
 * Colorize a smartfilter.
 * @param id - The id of the smartfilter.
 * @param color - The color.
 * @param type - The type of the smartfilter.
 * @returns
 */
colorize(id: OID, color: Colors, type: PaperSmartFilterType): Promise<void>;
```

### `rename`
```typescript
 /**
 * Rename a smartfilter.
 * @param id - The id of the smartfilter.
 * @param name - The new name of the smartfilter.
 * @param type - The type of the smartfilter.
 * @returns
 */
rename(id: OID, name: string, type: PaperSmartFilterType): Promise<void>;
```

### `update`
```typescript
/**
 * Update/Insert a smartfilter.
 * @param type - The type of the smartfilter
 * @param smartfilter - The smartfilter
 * @param parentSmartfilter - The parent smartfilter
 * @returns
 */
update(type: PaperSmartFilterType, smartfilter: PaperSmartFilter, parentSmartfilter?: PaperSmartFilter): Promise<IPaperSmartFilterCollection>;
```



## Events

| Event ID | Callback Value | Description |
| --- | --- | --- |
| `updated` | `{key: updated}` | When PaperSmartFilter database is updated |
