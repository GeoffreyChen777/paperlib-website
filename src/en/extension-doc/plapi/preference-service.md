# PreferenceService

## Call

```typescript
import { PLAPI } from "paperlib-api";

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

interface IPreferenceStore {
  preferenceVersion: number;
  windowSize: { height: number; width: number };

  appLibFolder: string;
  deleteSourceFile: boolean; // deprecated, use sourceFileOperation = 'cut'
  sourceFileOperation: "cut" | "copy" | "link";

  showSidebarCount: boolean;
  isSidebarCompact: boolean;

  showMainYear: boolean;
  showMainPublication: boolean;
  showMainPubType: boolean;
  showMainRating: boolean;
  showMainFlag: boolean;
  showMainTags: boolean;
  showMainFolders: boolean;
  showMainNote: boolean;
  showMainAddTime: boolean;

  mainTitleWidth: number;
  mainAuthorsWidth: number;
  mainYearWidth: number;
  mainPublicationWidth: number;
  mainPubTypeWidth: number;
  mainRatingWidth: number;
  mainFlagWidth: number;
  mainTagsWidth: number;
  mainFoldersWidth: number;
  mainNoteWidth: number;
  mainAddTimeWidth: number;

  feedTitleWidth: number;
  feedAuthorsWidth: number;
  feedYearWidth: number;
  feedPublicationWidth: number;
  feedPubTypeWidth: number;
  feedAddTimeWidth: number;

  preferedTheme: "light" | "dark" | "system";
  invertColor: boolean;
  sidebarSortBy: "name" | "count" | "color";
  sidebarSortOrder: "asce" | "desc";
  renamingFormat: "full" | "short" | "authortitle" | "custom";
  customRenamingFormat: string;

  language: string;

  enableExportReplacement: boolean;
  exportReplacement: Array<{ from: string; to: string }>;

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

  scrapers: Record<string, IScraperPreference>;
  downloaders: Array<IDownloaderPreference>;

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

  sidebarWidth: number;
  detailPanelWidth: number;
  mainviewSortBy: string;
  mainviewSortOrder: "desc" | "asce";
  mainviewType: string;

  pluginLinkedFolder: string;

  selectedPDFViewer: string;
  selectedPDFViewerPath: string;

  selectedCSLStyle: string;
  importedCSLStylesPath: string;

  showPresettingLang: boolean;
  showPresettingDB: boolean;
  showPresettingScraper: boolean;
}


```

## Events

| Event ID | Callback Value | Description |
| --- | --- | --- |
| any preference key listed above | `{key: prefKey, value: newValue}` | When preference is changed |

