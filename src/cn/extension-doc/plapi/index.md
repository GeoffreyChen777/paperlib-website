# PLAPI

这组 API 中，包含了大部分在渲染进程里面的服务和他们的方法。

在插件中，可以直接使用：

```typescript
import { PLAPI } from "paperlib-api/api";

const results = await PLAPI.serviceName.methodName(...)
```

## 可用的服务

- `logService`：日志服务，用于记录信息、警告、日志。可以在左下角通知中心弹出通知告知用户。
- `cacheService`：缓存服务，用于缓存一些数据，例如论文的全文、缩略图等。
- `categorizerService`：标签和组的服务，用于管理标签和组。
- `commandService`：命令服务，用于注册和执行命令。
- `databaseService`：数据库服务，用于初始化数据库等。
- `feedService`：RSS 服务，用于操作 RSS 相关的内容。
- `fileService`：文件服务，用于操作文件。
- `hookService`：钩子服务，用于注册和执行钩子。
- `paperService`：论文服务，用于操作论文。
- `referenceService`：引用服务，用于导出引用等。
- `renderService`：渲染服务，用于渲染 PDF，markdown 等。
- `scrapeService`：搜寻服务，用于转换数据源到`PaperEntity`，搜寻论文元数据。
- `smartFilterService`：智能过滤器服务，用于操作智能过滤器。
- `uiStateService`：UI 状态服务，用于操作 UI 状态。
- `preferenceService`：设置服务，用于操作设置。
- `uiSlotService`：UI 插槽服务，用于操作 UI 插槽。
