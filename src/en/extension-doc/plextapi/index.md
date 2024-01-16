# PLExtAPI

In this group of APIs, most of the services and their methods in the extension process are included.

As the services in PLExtAPI are running in the same process as the extension, some methods are synchronous, and some are asynchronous.

In your extension, you can call them by:

```typescript
import { PLExtAPI } from "paperlib-api/api";

const syncResults = PLExtAPI.serviceName.methodName(...)
const asyncResults = await PLExtAPI.serviceName.methodName(...)
```

## 可用的服务

- `extensionManagementService`: Extension management service, responsible for extension installation, loading, unloading, etc.
- `extensionPreferenceService`: Extension preference service, responsible for reading and writing extension preferences.
- `networkTool`: Network tool, provides methods such as `get`, `post`, `download`.