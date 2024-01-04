# UI 插件

这种类型的插件主要特点是可以在 Paperlib 的一些面板中显示额外信息。比如在论文详情面板中，显示论文的引用量。

## 插件类结构

在这里我们给出一个示例结构，当然你可以根据自己的需要进行修改。

```typescript
class UIExtension extends PLExtension {
  constructor() {
    // 你可以在这里设置插件的 id，默认设置
    super(...)
  }

  async initialize() {
    // 在这里监听事件，修改 UI
      this.disposeCallbacks.push(
          PLAPI.uiStateService.onChanged("...", (newValues) => {
              PLAPI.uiSlotService.updateSlot(...);
          }),
      );
      ...
  }

  async dispose() {
    // 在这里取消事件监听
    for (const disposeCallback of this.disposeCallbacks) {
      disposeCallback();
    }
  }
}
```

## 额外 UI 插槽

如果目前的插槽无法满足您插件的开发需求，请前往 [GitHub Discussions](https://github.com/Future-Scholars/paperlib/discussions) 提出您的需求，我们会考虑在未来的版本中添加新的插槽。