# ReferenceService

## Call

```typescript
import { PLAPI } from "paperlib-api/api";

PLAPI.referenceService.methodname(...);
```

## Avaliable Methods

### `replacePublication`

```typescript
/**
 * Abbreviate the publication name according to the abbreviation list set in the preference interface.
 * @param source - The source paper entity.
 * @returns The paper entity with publication name abbreviated.
 */
replacePublication(source: PaperEntity): PaperEntity;
```

### `toCite`

```typescript
/**
 * Convert paper entity to citationjs object.
 * @param source - The source paper entity.
 * @returns The cite object.
 */
toCite(source: PaperEntity | PaperEntity[] | string): any;
```

### `exportBibTexKey`

```typescript
/**
 * Export BibTex key.
 * @param cite - The cite object.
 * @returns The BibTex key.
 */
exportBibTexKey(cite: Cite): string;
```

### `exportBibTexBody`

```typescript
/**
 * Export BibTex body string.
 * @param cite - The cite object.
 * @returns The BibTex body string.
 */
exportBibTexBody(cite: Cite): string;
```

### `exportBibTex`

```typescript
/**
 * Export plain text.
 * @param cite - The cite object.
 * @returns The plain text.
 */
exportPlainText(cite: Cite): Promise<string>;
```

### `exportCSV`
```typescript
/**
 * Export papers as csv string.
 * @param papers - The PaperEntity array.
 * @returns The CSV string.
 */
exportCSV(papers: PaperEntity[]): Promise<string>;
```

### `exportBibTexKeyInFolder`
```typescript
/**
 * Export BibTex body string in folder.
 * @param folderName - The folder name.
 */
exportBibTexBodyInFolder(folderName: string): Promise<string>;
```

### `exportBibTexBodyInFolder`
```typescript
/**
 * Export plain text in folder.
 * @param folderName - The folder name.
 */
exportPlainTextInFolder(folderName: string): Promise<string>;
```

### `export`

```typescript
/**
 * Export paper entities.
 * @param paperEntities - The paper entities.
 * @param format - The export format: "BibTex" | "BibTex-Key" | "PlainText"
 */
export(paperEntities: PaperEntity[], format: string): Promise<void>;
```