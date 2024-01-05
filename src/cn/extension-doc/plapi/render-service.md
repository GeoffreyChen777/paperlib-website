# RenderService

## Call

```typescript
import { PLAPI } from "paperlib-api/api";

PLAPI.renderService.methodname(...);
```

## Avaliable Methods


### `renderPDF`

```typescript
/**
 * Render PDF file to canvas
 * @param fileURL - File url
 * @param canvasId - Canvas id
 * @returns Renderer blob: {blob: ArrayBuffer | null, width: number, height: number}
 */
renderPDF(fileURL: string, canvasId: string): Promise<{
    blob: ArrayBuffer | null;
    width: number;
    height: number;
}>;
```

### `renderPDFCache`

```typescript
/**
 * Render PDF cache to canvas
 * @param cachedThumbnail - Cached thumbnail
 * @param canvasId - Canvas id
 */
renderPDFCache(cachedThumbnail: ThumbnailCache, canvasId: string): Promise<void>;
```

### `renderMarkdown`

```typescript
/**
 * Render Markdown to HTML
 * @param content - Markdown content
 * @param renderFull - Render full content or not, default is false. If false, only render first 10 lines.
 * @returns Rendered string: {renderedStr: string, overflow: boolean}
 */
renderMarkdown(content: string, renderFull?: boolean): Promise<{
    renderedStr: string;
    overflow: boolean;
}>;
```

### `renderMarkdownFile`

```typescript
/**
 * Render Markdown file to HTML
 * @param url - File url
 * @param renderFull - Render full content or not, default is false. If false, only render first 10 lines.
 * @returns Rendered string: {renderedStr: string, overflow: boolean}
 */
renderMarkdownFile(url: string, renderFull?: boolean): Promise<{
    renderedStr: string;
    overflow: boolean;
}>;
```

### `renderMath`

```typescript
/**
 * Render Math to HTML
 * @param content - Math content
 * @returns Rendered HTML string
 */
renderMath(content: string): Promise<string>;
```