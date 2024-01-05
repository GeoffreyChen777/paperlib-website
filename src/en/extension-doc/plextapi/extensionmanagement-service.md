# ExtensionManagementService

## Call

```typescript
import { PLExtAPI } from "paperlib-api/api";

PLExtAPI.extensionManagementService.methodname(...);
```

## Avaliable Methods

### `loadInstalledExtensions`
```typescript
/**
 * Load all installed extensions.
 */
loadInstalledExtensions(): Promise<void>;
```

### `install`
```typescript
/**
 * Install an extension from the given path or extensionID.
 * @param extensionIDorPath - extensionID or path to the extension
 * @param notify - whether to show notification, default to true
 */
install(extensionIDorPath: string, notify?: boolean): Promise<void>;
```

### `uninstall`
```typescript
/**
 * Uninstall an extension.
 * @param extensionID - extensionID to uninstall
 */
uninstall(extensionID: string): Promise<void>;
```

### `clean`
```typescript
/**
 * Clean the extension related files, preference, etc.
 * @param extensionIDorPath - extensionID or path to the extension
 */
clean(extensionIDorPath: string): Promise<void>;
```

### `reload`
```typescript
/**
 * Reload an extension.
 * @param extensionID - extensionID to reload
 */
reload(extensionID: string): Promise<void>;
```

### `reloadAll`
```typescript
/**
 * Reload all installed extensions.
 */
reloadAll(): Promise<void>;
```

### `installedExtensions`
```typescript
/**
 * Get all installed extensions.
 */
installedExtensions(): Promise<{
    [key: string]: IExtensionInfo;
}>;
```

### `listExtensionMarketplace`

```typescript
/**
 * Get extensions from marketplace.
 * @param query - Query string
 * @returns A map of extensionID to extension info.
 */
listExtensionMarketplace(query: string): Promise<{
    [id: string]: {
        id: string;
        name: string;
        version: string;
        author: string;
        verified: boolean;
        description: string;
    };
}>;
```

### `callExtensionMethod`
```typescript
/**
 * Call a method of an extension class.
 * @param extensionID - extensionID to call method
 * @param methodName - method name to call
 * @param args - arguments to pass to the method
 * @returns
 */
callExtensionMethod(extensionID: string, methodName: string, ...args: any): Promise<any>;
```