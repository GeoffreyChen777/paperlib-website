# CategorizerService

## Call

```typescript
import { PLAPI } from "paperlib-api/api";

PLAPI.categorizerService.methodname(...);
```

## Avaliable Methods

### `load`

```typescript
/**
 * Load categorizers.
 * @param type - The type of the categorizer.
 * @param sortBy - Sort by
 * @param sortOrder - Sort order
 * @returns
 */
load(type: CategorizerType, sortBy: string, sortOrder: string): Promise<ICategorizerCollection>;
```

### `loadByIds`

```typescript
/**
 * Load categorizers by ids.
 * @param type - The type of the categorizer.
 * @param ids - The ids of the categorizers.
 * @returns
 */
loadByIds(type: CategorizerType, ids: OID[]): Promise<ICategorizerCollection>;
```

### `create`

```typescript
/**
 * Update a categorizer.
 * @param type - The type of categorizer.
 * @param categorizer - The categorizer.
 * @param parent - The parent categorizer.
 * @returns
 */
create(type: CategorizerType, categorizer: Categorizer, parent?: Categorizer): Promise<ICategorizerCollection>;
```

### `delete`

```typescript
/**
 * Delete a categorizer.
 * @param type - The type of categorizer.
 * @param name - The name of categorizer.
 * @param categorizer - The categorizer.
 * @returns
 */
delete(type: CategorizerType, ids?: OID[], categorizers?: ICategorizerCollection): Promise<void>;
```

### `colorize`

```typescript
/**
 * Colorize a categorizer.
 * @param id - The id of the categorizer.
 * @param color - The color.
 * @param type - The type of the categorizer.
 * @returns
 */
colorize(id: OID, color: Colors, type: CategorizerType): Promise<void>;
```

### `rename`

```typescript
/**
 * Rename a categorizer.
 * @param id - The id of the categorizer.
 * @param name - The new name of the categorizer.
 * @param type - The type of the categorizer.
 * @returns
 */
rename(id: OID, name: string, type: CategorizerType): Promise<void>;
```

### `update`

```typescript
/**
 * Update/Insert a categorizer.
 * @param type - The type of the categorizer.
 * @param categorizer - The categorizer.
 * @param parentCategorizer - The parent categorizer to insert.
 * @returns
 */
update(
    type: CategorizerType, 
    categorizer: Categorizer, 
    parentCategorizer?: Categorizer
): Promise<ICategorizerCollection>;
```

## Events

| Event ID | Callback Value | Description |
| --- | --- | --- |
| `tagsUpdated` | `{key: 'tagsUpdated'}` | When Tags database are updated |
| `foldersUpdated` | `{key: 'foldersUpdated'}` | When Folders database are updated |