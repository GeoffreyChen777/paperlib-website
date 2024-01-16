# PLExtAPI

这组 API 中，包含了大部分在插件进程里面的服务和他们的方法。

因为插件和 `PLExtAPI` 中的服务运行在同一个进程中，所以有的方法是同步的，有的是异步的。具体请在使用时参考类型提示。

在插件中，可以直接使用：

```typescript
import { PLExtAPI } from "paperlib-api/api";

const syncResults = PLExtAPI.serviceName.methodName(...)
const asyncResults = await PLExtAPI.serviceName.methodName(...)
```

## 可用的服务

- `extensionManagementService`：插件管理服务，负责插件安装、载入、卸载等。
- `extensionPreferenceService`：插件偏好设置服务，负责插件偏好设置的读取和写入。
- `networkTool`：网络工具，提供 `get`，`post`，`download` 等方法。