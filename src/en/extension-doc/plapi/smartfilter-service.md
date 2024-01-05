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
 * @param color - The color
 * @param type - The type of the smartfilter
 * @param id - The id of the smartfilter
 * @param smartfilter - The smartfilter
 */
colorize(color: Colors, type: PaperSmartFilterType, id?: OID, smartfilter?: PaperSmartFilter): Promise<void>;
```

### `insert`
```typescript
/**
 * Insert a smartfilter.
 * @param smartfilter - The smartfilter
 * @param type - The type of the smartfilter
 */
insert(smartfilter: PaperSmartFilter, type: PaperSmartFilterType): Promise<void>;
```



## Events

| Event ID | Callback Value | Description |
| --- | --- | --- |
| `updated` | `{key: updated}` | When PaperSmartFilter database is updated |

