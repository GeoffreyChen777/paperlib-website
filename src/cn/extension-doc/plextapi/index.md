# PLExtAPI

这组 API 中，包含了大部分在插件进程里面的服务和他们的方法。

在插件中，可以直接使用：

```typescript
import { PLExtAPI } from "paperlib-api";

const results = await PLExtAPI.serviceName.methodName(...)
```

## 可用的服务

- `extensionManagementService`：插件管理服务，负责插件安装、载入、卸载等。
- `extensionPreferenceService`：插件偏好设置服务，负责插件偏好设置的读取和写入。