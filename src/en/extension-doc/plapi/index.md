# PLAPI

In this group of APIs, there are many services and their provided methods in the main renderer process.

In your extension, you can call them by: 

```typescript
import { PLAPI } from "paperlib-api/api";

const results = await PLAPI.serviceName.methodName(...)
```

## Services

- `logService`: Log service, used to record information, warnings, logs. You can pop up notifications in the lower left corner of the notification center to inform users.
- `cacheService`: Cache service, used to cache some data, such as the full text of the paper, thumbnails, etc.
- `categorizerService`: Categorizer service, used to manage tags and groups.
- `commandService`: Command service, used to register and execute commands.
- `databaseService`: Database service, used to initialize the database.
- `feedService`: RSS service, used to operate RSS-related content.
- `fileService`: File service, used to operate files.
- `hookService`: Hook service, used to register and execute hooks.
- `paperService`: Paper service, used to operate papers.
- `referenceService`: Reference service, used to export references.
- `renderService`: Render service, used to render PDF, markdown, etc.
- `scrapeService`: Scrape service, used to convert data sources to `PaperEntity`, search for paper metadata.
- `smartFilterService`: Smart filter service, used to operate smart filters.
- `uiStateService`: UI state service, used to operate UI state.
- `preferenceService`: Preference service, used to operate preferences.
- `uiSlotService`: UI slot service, used to operate UI slots.