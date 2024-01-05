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

### `create`

```typescript
/**
 * Update a categorizer.
 * @param type - The type of categorizer.
 * @param categorizer - The categorizer.
 * @returns
 */
create(type: CategorizerType, categorizer: Categorizer): Promise<ICategorizerRealmObject | (Categorizer & Realm.Object<unknown, never>)>;
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
 * @param color - The color.
 * @param type - The type of the categorizer.
 * @param name - The name of the categorizer.
 * @param categorizer - The categorizer.
 * @returns
 */
colorize(color: Colors, type: CategorizerType, id?: OID, categorizer?: ICategorizerObject): Promise<void>;
```

### `rename`

```typescript
/**
 * Rename a categorizer.
 * @param oldName - The old name.
 * @param newName - The new name.
 * @param type - The type of the categorizer.
 * @returns
 */
rename(oldName: string, newName: string, type: CategorizerType): Promise<void>;
```

## Events

| Event ID | Callback Value | Description |
| --- | --- | --- |
| `tagsUpdated` | `{key: 'tagsUpdated'}` | When Tags database are updated |
| `foldersUpdated` | `{key: 'foldersUpdated'}` | When Folders database are updated |