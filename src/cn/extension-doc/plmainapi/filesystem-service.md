# FileSystemService

## Call

```typescript
import { PLMainAPI } from "paperlib-api/api";

PLMainAPI.fileSystemService.methodname(...);
```

## Avaliable Methods

### `getSystemPath`

```typescript
/**
 * Get the path of the given key.
 * @param {string} key - The key to get the path of.
 * @returns {string} - The path of the given key.
 */
getSystemPath(key: "home" | "appData" | "userData" | "sessionData" | "temp" | "exe" | "module" | "desktop" | "documents" | "downloads" | "music" | "pictures" | "videos" | "recent" | "logs" | "crashDumps", windowId: string): Promise<string>;
```

### `showFilePicker`

```typescript
/**
 * Show a file picker.
 * @returns {Promise<OpenDialogReturnValue>} The result of the file picker.
 */
showFilePicker(): Promise<OpenDialogReturnValue>;
```

### `showFolderPicker`

```typescript
/**
 * Show a folder picker.
 * @returns {Promise<OpenDialogReturnValue>} The result of the folder picker.
 */
showFolderPicker(): Promise<OpenDialogReturnValue>;
```

### `showSaveDialog`

```typescript
/**
 * Preview a file.
 * @param {string} fileURL - The URL of the file to preview.
 */
preview(fileURL: string): Promise<void>;
```