# PreferenceService

## Call

```typescript
import { PLAPI } from "paperlib-api/api";

PLAPI.preferenceService.methodname(...);
```

## Avaliable Methods

### `get`

```typescript
/**
 * Get the value of the preference
 * @param key - Key of the preference
 * @returns Value of the preference
 */
get(key: keyof IPreferenceStore): Promise<any>;
```

### `set`

```typescript
/**
 * Set the value of the preference
 * @param patch - Patch object
 */
set(patch: Partial<IPreferenceStore>): Promise<void>;
```

### `getPassword`

```typescript
/**
 * Get the password
 * @param key - Key of the password
 * @returns Password
 */
getPassword(key: string): Promise<string | null>;
```

### `setPassword`

```typescript
/**
 * Set the password
 * @param key - Key of the password
 * @param pwd - Password
 */
setPassword(key: string, pwd: string): Promise<void>;
```


## Avaliable Preferences

```typescript
declare interface IPreferenceStore {
    preferenceVersion: number;
    windowSize: {
        height: number;
        width: number;
    };
    appLibFolder: string;
    sourceFileOperation: "cut" | "copy" | "link";
    showSidebarCount: boolean;
    isSidebarCompact: boolean;
    mainTableFields: IDataViewField[];
    feedFields: IDataViewField[];
    preferedTheme: "light" | "dark" | "system";
    invertColor: boolean;
    sidebarSortBy: "name" | "count" | "color";
    sidebarSortOrder: "asce" | "desc";
    renamingFormat: "full" | "short" | "authortitle" | "custom";
    customRenamingFormat: string;
    language: string;
    enableExportReplacement: boolean;
    exportReplacement: Array<{
        from: string;
        to: string;
    }>;
    useSync: boolean;
    syncCloudBackend: string;
    isFlexibleSync: boolean;
    syncAPPID: "";
    syncAPIKey: string;
    syncEmail: string;
    syncFileStorage: string;
    webdavURL: string;
    webdavUsername: string;
    webdavPassword: string;
    allowRoutineMatch: boolean;
    lastRematchTime: number;
    lastFeedRefreshTime: number;
    allowproxy: boolean;
    httpproxy: string;
    httpsproxy: string;
    lastVersion: string;
    lastDBVersion: number;
    shortcutPlugin: string;
    shortcutPreview: string;
    shortcutOpen: string;
    shortcutCopy: string;
    shortcutScrape: string;
    shortcutEdit: string;
    shortcutFlag: string;
    shortcutCopyKey: string;
    shortcutDelete: string;
    sidebarWidth: number;
    detailPanelWidth: number;
    mainviewSortBy: string;
    mainviewSortOrder: "desc" | "asce";
    mainviewType: string;
    mainviewShortAuthor: boolean;
    pluginLinkedFolder: string;
    selectedPDFViewer: string;
    selectedPDFViewerPath: string;
    selectedCSLStyle: string;
    importedCSLStylesPath: string;
    showPresetting: boolean;
    fontsize: "normal" | "large" | "larger";
}

```

## Events

| Event ID | Callback Value | Description |
| --- | --- | --- |
| any preference key listed above | `{key: prefKey, value: newValue}` | When preference is changed |
