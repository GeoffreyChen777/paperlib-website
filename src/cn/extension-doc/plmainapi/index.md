# PLMainAPI

这组 API 中，包含了大部分在主进程里面的服务和他们的方法。

在插件中，可以直接使用：

```typescript
import { PLMainAPI } from "paperlib-api/api";

const results = await PLMainAPI.serviceName.methodName(...)
```

## 可用的服务

- `contextMenuService`：右键菜单服务。
- `fileSystemService`：文件系统服务，获取一些默认的文件夹路径，以及控制路径选择框，预览文件等。
- `menuService`：菜单服务。包含大部分快捷键。
- `windowProcessManagementService`：窗口管理服务，用于管理窗口。