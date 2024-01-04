# PLExtAPI

In this group of APIs, most of the services and their methods in the extension process are included.

In your extension, you can call them by:

```typescript
import { PLExtAPI } from "paperlib-api";

const results = await PLExtAPI.serviceName.methodName(...)
```

## 可用的服务

- `extensionManagementService`: Extension management service, responsible for extension installation, loading, unloading, etc.
- `extensionPreferenceService`: Extension preference service, responsible for reading and writing extension preferences.