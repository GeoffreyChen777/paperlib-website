# PLMainAPI

In this group of APIs, most of the services and their methods in the main process are included.

In your extension, you can call them by:

```typescript
import { PLMainAPI } from "paperlib-api/api";

const results = await PLMainAPI.serviceName.methodName(...)
```

## Services

- `contextMenuService`:  Context menu service.
- `fileSystemService`: File system service, get some default folder paths, and control path selection boxes, preview files, etc.
- `menuService`: Menu service. Contains most of the shortcuts.
- `windowProcessManagementService`: Window management service for managing windows (and their corresponding process).