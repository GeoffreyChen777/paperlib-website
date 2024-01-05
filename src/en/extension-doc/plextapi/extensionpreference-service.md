# ExtensionPreferenceService

## Call

```typescript
import { PLExtAPI } from "paperlib-api/api";

PLExtAPI.extensionPreferenceService.methodname(...);
```

## Avaliable Methods

### `register`

```typescript
/**
 * Register a preference store.
 * @param extensionID - extension ID
 * @param defaultPreference - default preference
 */
register<T extends {
    [key: string]: any;
}>(extensionID: string, defaultPreference: T): Promise<void>;
```

### `unregister`

```typescript
/**
 * Unregister a preference store.
 * @param extensionID - extension ID
 */
unregister(extensionID: string): Promise<void>;
```

### `get`

```typescript
/**
 * Get the value of the preference
 * @param extensionID - extension ID
 * @param key - key of the preference
 * @returns value of the preference or null
 */
get(extensionID: string, key: any): Promise<any>;
```

### `getAll`

```typescript
/**
 * Get the value of all preferences
 * @param extensionID - extension ID
 * @returns value of all preferences
 */
getAll(extensionID: string): Promise<Map<string, any>>;
```

### `getMetadata`

```typescript
/**
 * Get the metadata of the preference
 * @param extensionID - extension ID
 * @param key - key of the preference
 * @returns metadata of the preference or null
 */
getMetadata(extensionID: string, key: any): Promise<any>;
```

### `getAllMetadata`

```typescript
/**
 * Get the metadata of all preferences
 * @param extensionID - extension ID
 * @returns metadata of all preferences
 */
getAllMetadata(extensionID: string): Promise<Map<string, any>>;
```

### `set`

```typescript
/**
 * Set the value of the preference
 * @param extensionID - extension ID
 * @param patch - patch object
 * @returns
 */
set(extensionID: string, patch: any): Promise<void>;
```

### `getPassword`

```typescript
/**
 * Get the password
 * @param extensionID - extension ID
 * @param key - key of the password
 * @returns - password
 */
getPassword(extensionID: string, key: string): Promise<string | null>;
```

### `setPassword`

```typescript
/**
 * Set the password
 * @param extensionID - extension ID
 * @param key - key of the password
 * @param pwd - password
 */
setPassword(extensionID: string, key: string, pwd: string): Promise<void>;
```

## Events

| Event ID | Callback Value | Description |
| --- | --- | --- |
| `extensionID:prefKey` | `{key: 'extensionID:prefKey', value: prefValue}` | When the preference is changed |

## Example

```typescript
import { PLExtAPI } from "paperlib-api/api";

PLExtAPI.extensionPreferenceService.onChanged(
    'extensionID:prefKey',
    (newValue: {key: string, value: any}) => {
    console.log(newValue.value);
});