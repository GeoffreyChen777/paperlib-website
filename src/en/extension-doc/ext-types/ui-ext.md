# UI Extension

This type of extension can display additional information in some panels of Paperlib. For example, in the paper detail panel, display the citation count of the paper.

## Extension Class Structure

Here we provide an example structure, of course, you can modify it according to your needs.

```typescript
class UIExtension extends PLExtension {
  constructor() {
    // You can set the id of the extension here, the default preference etc.
    super(...)
  }

  async initialize() {
    // Listen to events and modify UI here
      this.disposeCallbacks.push(
          PLAPI.uiStateService.onChanged("...", (newValues) => {
              PLAPI.uiSlotService.updateSlot(...);
          }),
      );
      ...
  }

  async dispose() {
    // Cancel event listening here
    for (const disposeCallback of this.disposeCallbacks) {
      disposeCallback();
    }
  }
}
```

## Others

If the current slot cannot meet the development needs of your extension, please go to [GitHub Discussions](https://github.com/Future-Scholars/paperlib/discussions) to submit your needs, we will consider adding new slots in future versions.