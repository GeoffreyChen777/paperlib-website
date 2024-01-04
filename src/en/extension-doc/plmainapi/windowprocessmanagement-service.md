# WindowProcessManagementService

## Call

```typescript
import { PLMainAPI } from "paperlib-api";

PLMainAPI.windowProcessManagementService.methodname(...);
```

## Avaliable Methods

### `create`

```typescript
/**
 * Create Process with a BrowserWindow
 * @param id - window id
 * @param options - window options
 * @param eventCallbacks - callbacks for events
 */
create(id: string, options: WindowOptions, eventCallbacks?: Record<string, (win: BrowserWindow) => void>): Promise<void>;
```

### `destroy`

```typescript
/**
 * Destroy the window with the given id.
 * @param windowId - The id of the window to be destroyed
 */
destroy(windowId: string): Promise<void>;
```

### `fireServiceReady`

```typescript
/**
 * Fire the serviceReady event. This event is fired when the service of the window is ready to be used by other processes.
 * @param windowId - The id of the window that fires the event
 */
fireServiceReady(windowId: string): Promise<void>;
```

### `show`

```typescript
/**
 * Show the window with the given id.
 * @param windowId - The id of the window to be shown
 */
show(windowId: string): Promise<void>;
```

### `hide`

```typescript
/**
 * Hide the window with the given id.
 * @param windowId - The id of the window to be hidden
 */
hide(windowId: string, restoreFocus?: boolean): Promise<void>;
```

### `minimize`

```typescript
/**
 * Minimize the window with the given id.
 * @param windowId - The id of the window to be minimized
 */
minimize(windowId: string): Promise<void>;
```

### `maximize`

```typescript
/**
 * Maximize the window with the given id.
 * @param windowId - The id of the window to be maximized
 */
maximize(windowId: string): Promise<void>;
```

### `close`

```typescript
/**
 * Close the window with the given id.
 * @param windowId - The id of the window to be closed
 */
close(windowId: string): Promise<void>;
```

### `forceClose`

```typescript
/**
 * Force close the window with the given id.
 * @param windowId - The id of the window to be force closed
 */
forceClose(windowId: string): Promise<void>;
```

### `changeTheme`

```typescript
/**
 * Change the theme of the app.
 * @param theme - The theme to be changed to
 */
changeTheme(theme: APPTheme): Promise<void>;
```

### `isDarkMode`
```typescript
/**
 * Check if the app is in dark mode.
 * @returns Whether the app is in dark mode
 */
isDarkMode(): Promise<boolean>;
```

### `resize`

```typescript
/**
 * Resize the window with the given id.
 * @param windowId - The id of the window to be resized
 * @param width - The width of the window
 * @param height - The height of the window
 */
resize(windowId: string, width: number, height: number): Promise<void>;
```

### `getScreenSize`

```typescript
/**
 * Get the size of the screen.
 * @returns The size of the screen
 */
getScreenSize(): Promise<{
    width: number;
    height: number;
}>;

```

## Events

| Event ID | Callback Value | Description |
| --- | --- | --- |
| `serviceReady` | `{key: 'serviceReady', value: windowId}` | When the service of the window is ready to be used by other processes |
| `requestPort` | `{key: 'requestPort', value: senderProcessId}` | When a process is requesting MessagePort |
| `destroyed` | `{key: 'destroyed', value: windowId}` | When the window is destroyed |
| any window ID | `{key: windowId, value: event}` | event: `ready-to-show`, `blur`, `focus`, `close`, `show`, `created` |

The main renderer window's ID is `rendererProcess`. If you want to listen to the `blur` event of the main renderer window, you can do this:

```typescript
import {PLMainAPI} from "paperlib-api";

PLMainAPI.windowProcessManagementService.on("rendererProcess", (event) => {
    if (event.value === "blur") {
        // do something
    }
});
```