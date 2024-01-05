# ScrapeService

## Call

```typescript
import { PLAPI } from "paperlib-api/api";

PLAPI.scrapeService.methodname(...);
```

## Avaliable Methods

### `scrape`

```typescript
/**
 * Scrape a data source's metadata.
 * @param payloads - data source payloads.
 * @param specificScrapers - list of metadata scrapers.
 * @param force - force scraping metadata.
 * @returns List of paper entities. */
scrape(payloads: any[], specificScrapers: string[], force?: boolean): Promise<PaperEntity[]>;
```

### `scrapeEntry`

```typescript
/**
 * Scrape all entry scrapers to transform data source payloads into a PaperEntity list.
 * @param payloads - data source payloads.
 * @returns List of paper entities. */
scrapeEntry(payloads: any[]): Promise<PaperEntity[]>;
```

### `scrapeMetadata`

```typescript
/**
 * Scrape all metadata scrapers to complete the metadata of PaperEntitys.
 * @param paperEntityDrafts - list of paper entities.
 * @param scrapers - list of metadata scrapers.
 * @param force - force scraping metadata.
 * @returns List of paper entities. */
scrapeMetadata(paperEntityDrafts: PaperEntity[], scrapers: string[], force?: boolean): Promise<PaperEntity[]>;
```