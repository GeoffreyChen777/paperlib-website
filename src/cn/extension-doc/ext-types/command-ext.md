# Command 插件

这种类型的插件主要特点是可以在 Paperlib 的命令面板中注册一些命令，当用户在 Paperlib 中选择该命令时，插件会收到通知，从而执行插件中的代码。

## 插件类结构

在这里我们给出一个示例结构，当然你可以根据自己的需要进行修改。

```typescript
class CommandExtension extends PLExtension {
  constructor() {
    // 你可以在这里设置插件的 id，默认设置
    super(...)
  }

  async initialize() {
    // 在这里监听命令触发事件
    this.disposeCallbacks.push(
      await PLAPI.commandService.on(...)
    );

    // 在这里注册命令，推荐先监听事件再注册
    this.disposeCallbacks.push(
      PLAPI.commandService.registerExternel(...)
    );

    ...
  }

  async dispose() {
    // 在这里取消命令注册，事件监听
    for (const disposeCallback of this.disposeCallbacks) {
      disposeCallback();
    }
  }
}
```

## 命令注册

我们可以通过 `PLAPI.commandService.registerExternel` 方法来注册插件所使用的外部命令。

> ⚠️  请勿使用 `PLAPI.commandService.register` 方法，该方法用于注册 Paperlib 内部的命令。

该方法的参数如下：

```typescript
PLAPI.commandService.registerExternel({
  id: string,
  description: string,
  event: string,
})
```

- `id`：命令的 id，必须唯一，可以使用 `插件id.命令id` 的格式，例如 `paperlib-helloworld.print`。
- `description`：命令的描述，用于在命令面板中显示。
- `event`：命令触发时的事件，可以使用 `插件id.事件id` 的格式，例如 `paperlib-helloworld.print-event`。


## 命令触发事件

当用户在 Paperlib 中选择了某个命令时，插件会收到一个事件通知，我们可以通过 `PLAPI.commandService.on` 方法来监听该事件。该事件监听同样需要在插件销毁时运行 `disposeCallback` 来取消注册。

该方法的参数如下：

```typescript
PLAPI.commandService.on({
  event: string,
  callback: (event: {key: string, value: string[]}) => void,
})
```

- `event`：命令触发时的事件，与注册命令时的 `event` 参数相同。
- `callback`：命令触发时的回调函数，该函数接收一个 `event` 参数，该参数的 `key` 属性为命令的 id，`value` 属性为命令的参数列表。比如在命令面板中选择了相应命令，后面跟上了参数 `test`，那么 `event` 的值为 `{key: "your-event-name", value: ["test"]}`。

## 命令取消注册

我们需要在插件销毁时取消命令注册，否则会造成内存泄漏。他的方式与其他类似的事件监听等操作相同。当插件使用 `PLAPI.commandService.registerExternel` 方法注册命令时，该方法会返回一个 `disposeCallback`，我们可以将其保存在插件类中，然后在插件销毁时调用。

```typescript
// 注册
const disposeCallback = await PLAPI.commandService.registerExternel(...);
// 取消注册
disposeCallback();
```