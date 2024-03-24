# FileService

## Call

```typescript
import { PLAPI } from "paperlib-api/api";

PLAPI.fileService.methodname(...);
```

## Avaliable Methods


### `initialize`

```typescript
/**
* Initialize the file backend.
*/
initialize(): Promise<void>;
```

### `startWatch`

```typescript
/**
 * Start watching file changes. (Only for WebDAV file backend)
 */
startWatch(): Promise<void>;
```

### `stopWatch`

```typescript
/**
 * Stop watching file changes. (Only for WebDAV file backend)
 */
stopWatch(): Promise<void>;
```

### `check`

```typescript
/**
 * Check if the file backend is available.
 * @returns Whether the file backend is available.
 */
check(): Promise<boolean | undefined>;
```

### `move`

``` typescript
/**
 * Move files of a paper entity to the library folder
 * @param paperEntity - Paper entity to move
 * @param moveMain - Move the main file
 * @param moveSups - Move the supplementary files
 * @returns
 */
move(paperEntity: PaperEntity, moveMain?: boolean, moveSups?: boolean): Promise<PaperEntity>;
```

### `moveFile`

``` typescript
/**
 * Move a file
 * @param sourceURL - Source file URL
 * @param targetURL - Target file URL
 * @returns The target file URL
 */
moveFile(sourceURL: string, targetURL: string): Promise<string>;
```

### `remove`

```typescript
/**
    * Remove files of a paper entity
    * @param paperEntity - Paper entity to remove
    */
remove(paperEntity: PaperEntity): Promise<void>;
```

### `removeFile`

```typescript
/**
 * Remove a file
 * @param url - Url of the file to remove
 */
removeFile(url: string): Promise<void>;
```

### `listAllFiles`

```typescript
/**
 * List all files in a folder
 * @param folderURL - Url of the folder
 * @returns List of file names
 */
listAllFiles(folderURL: string): Promise<string[]>;
```

### `locateFileOnWeb`

```typescript
/**
 * Locate the paper files, such as the PDF, of paper entities.
 * @param paperEntities - The paper entities.
 * @returns The paper entities with the located file URLs.
 */
locateFileOnWeb(paperEntities: PaperEntity[]): Promise<PaperEntity[]>;
```

### `access`

```typescript
/**
    * Return the real and accessable path of the URL.
    * If the URL is a local file, return the path of the file.
    * If the URL is a remote file and `download` is `true`, download the file and return the path of the downloaded file.
    * If the URL is a web URL, return the URL.
    * @param url
    * @param download
    * @returns The real and accessable path of the URL.
    */
access(url: string, download: boolean): Promise<string>;
```

### `open`

```typescript
/**
 * Open the URL.
 * @param url - URL to open
 */
open(url: string): Promise<void>;
```

### `showInFinder`

```typescript
/**
 * Show the URL in Finder / Explorer.
 * @param url - URL to show
 */
showInFinder(url: string): Promise<void>;
```

### `preview`

```typescript
/**
 * Preview the URL only for MacOS.
 * Other platforms should install an extension.
 * @param url - URL to preview
 */
preview(url: string): Promise<void>;

```

### `inferRelativeFileName`
```typescript
/**
 * Infer the relative path of a paper entity.
 * @param paperEntity - Paper entity to infer the relative path
 */
inferRelativeFileName(paperEntity: PaperEntity): Promise<string>;
```


## Events

| Event ID | Callback Value | Description |
| --- | --- | --- |
| `backend` | `{key: 'backend', value: backendName}` | When file backend is changed |
| `available` | `{key: 'available', value: available}` | When file backend available status is changed |
| `backendInitializing` | `{key: 'backendInitializing'}` | When file backend is initializing |
| `backendInitialized` | `{key: 'backendInitialized'}` | When file backend is initialized |