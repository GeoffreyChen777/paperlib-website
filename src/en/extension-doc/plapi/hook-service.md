# HookService

## Call

```typescript
import { PLAPI } from "paperlib-api/api";

PLAPI.hookService.methodname(...);
```

## Avaliable Methods

### `hasHook`

```typescript
/**
 * Check if a hook point exists.
 * @param hookName - Name of the hook point
 * @returns Whether the hook point exists
 */
hasHook(hookName: string): false | "modify" | "transform";
```

### `hookModify`

```typescript
/**
 * Hook a modify hook point.
 * @param hookName - Name of the hook point
 * @param extensionID - ID of the extension
 * @param callbackName - Name of the callback function
 * @returns A function to dispose the hook
 */
hookModify(hookName: string, extensionID: string, callbackName: string): () => void;
```

### `hookTransform`

```typescript
/**
 * Hook a transform hook point.
 * @param hookName - Name of the hook point
 * @param extensionID - ID of the extension
 * @param callbackName - Name of the callback function
 * @returns A function to dispose the hook
 */
hookTransform(hookName: string, extensionID: string, callbackName: string): () => void;
```

