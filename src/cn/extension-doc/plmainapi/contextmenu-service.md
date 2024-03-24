# ContextMenuService

## Call

```typescript
import { PLMainAPI } from "paperlib-api/api";

PLMainAPI.contextMenuService.methodname(...);
```

## Avaliable Methods

### `registerScraperExtension`
```typescript
/**
 * Registers a scraper extension. It will be shown in the context menu.
 */
registerScraperExtension(extID: string, scrapers: {
    [id: string]: string;
}): Promise<void>;
```

### `unregisterScraperExtension`
```typescript
/**
 * Unregisters a scraper extension.
 * @param {string} extID - The ID of the extension.
 */
unregisterScraperExtension(extID: string): Promise<void>;
```

### `registerContextMenu`
```typescript
/**
 * Registers context menus form extensions.
 * @param extID - The id of the extension to register menus
 * @param items - The menu items to be registered
 */
registerContextMenu(extID: string, items: {
    id: string;
    label: string;
}[]): void;
```

### `unregisterContextMenu`
```typescript
/**
 * Registers context menus form extensions.
 * @param extID - The id of the extension to unregister menu items
 */
unregisterContextMenu(extID: string): void;
```



## Events

| Event ID | Callback Value | Description |
| --- | --- | --- |
| `dataContextMenuScrapeFromClicked` | `{key: 'dataContextMenuScrapeFromClicked', value: scraperID}` | When `Scrape From` is clicked in the context menu of a paper in the library |
| `dataContextMenuOpenClicked` | `{key: 'dataContextMenuOpenClicked'}` | When `Open` is clicked in the context menu of a paper in the library |
| `dataContextMenuShowInFinderClicked` | `{key: 'dataContextMenuShowInFinderClicked'}` | When `Show in Finder` is clicked in the context menu of a paper in the library |
| `dataContextMenuEditClicked` | `{key: 'dataContextMenuEditClicked'}` | When `Edit` is clicked in the context menu of a paper in the library |
| `dataContextMenuScrapeClicked` | `{key: 'dataContextMenuScrapeClicked'}` | When `Scrape` is clicked in the context menu of a paper in the library |
| `dataContextMenuDeleteClicked` | `{key: 'dataContextMenuDeleteClicked'}` | When `Delete` is clicked in the context menu of a paper in the library |
| `dataContextMenuFlagClicked` | `{key: 'dataContextMenuFlagClicked'}` | When `Flag` is clicked in the context menu of a paper in the library |
| `dataContextMenuExportBibTexClicked` | `{key: 'dataContextMenuExportBibTexClicked'}` | When `Export BibTex` is clicked in the context menu of a paper in the library |
| `dataContextMenuExportBibTexKeyClicked` | `{key: 'dataContextMenuExportBibTexKeyClicked'}` | When `Export BibTex Key` is clicked in the context menu of a paper in the library |
| `dataContextMenuExportPlainTextClicked` | `{key: 'dataContextMenuExportPlainTextClicked'}` | When `Export Plain Text` is clicked in the context menu of a paper in the library |
| `dataContextMenuExportCSVClicked` | `{key: 'dataContextMenuExportCSVClicked'}` | When `Export CSV` is clicked in the context menu of a paper in the library |
| `feedContextMenuAddToLibraryClicked` | `{key: 'feedContextMenuAddToLibraryClicked'}` | When `Add to Library` is clicked in the context menu of a feed in the library |
| `feedContextMenuToggleReadClicked` | `{key: 'feedContextMenuToggleReadClicked'}` | When `Toggle Read` is clicked in the context menu of a feed in the library |
| `sidebarContextMenuFeedRefreshClicked` | `{key: 'sidebarContextMenuFeedRefreshClicked', value: {data: feedID}}` | When `Refresh` is clicked in the context menu of a feed in the sidebar |
| `sidebarContextMenuEditClicked` | `{key: 'sidebarContextMenuEditClicked', value: {data: id, type: Categorizer or Feed}}` | When `Edit` is clicked in the context menu of a feed in the sidebar |
| `sidebarContextMenuColorClicked` | `{key: 'sidebarContextMenuColorClicked', value: {data: id, type: Categorizer or Feed, color: color}}` | When `Color` is clicked in the context menu of a feed in the sidebar |
| `sidebarContextMenuDeleteClicked` | `{key: 'sidebarContextMenuDeleteClicked', value: {data: id, type: Categorizer or Feed}}` | When `Delete` is clicked in the context menu of a feed in the sidebar |
| `supContextMenuDeleteClicked` | `{key: 'supContextMenuDeleteClicked'}` | When `Delete` is clicked in the context menu of a supplementary file in the library |
| `thumbnailContextMenuReplaceClicked` | `{key: 'thumbnailContextMenuReplaceClicked'}` | When `Replace` is clicked in the context menu of a thumbnail in the library |
| `thumbnailContextMenuRefreshClicked` | `{key: 'thumbnailContextMenuRefreshClicked'}` | When `Refresh` is clicked in the context menu of a thumbnail in the library |
| `linkToFolderClicked` | `{key: 'linkToFolderClicked'}` | When `Link to Folder` is clicked in Quickpaste UI |
| `dataContextMenuFromExtensionsClicked` | `{ extID: string; itemID: string}` | When a context menu item from an extension is clicked |
