# Command Extension

The main feature of this type of extension is that it can register some commands in the command bar of Paperlib. When a user selects a command in Paperlib, the extension will receive a event and then execute the code in the extension.

## Extension Class Structure

Here we provide an example structure, of course, you can modify it according to your needs.

```typescript
class CommandExtension extends PLExtension {
  constructor() {
    // You can set the id of the extension here, the default preference etc.
    super(...)
  }

  async initialize() {
    // Register event listener here
    this.disposeCallbacks.push(
      await PLAPI.commandService.on(...)
    );

    // Register commands here, it is recommended to listen to events before registering
    this.disposeCallbacks.push(
      PLAPI.commandService.registerExternel(...)
    );

    ...
  }

  async dispose() {
    // Cancel command registration and event listening here
    for (const disposeCallback of this.disposeCallbacks) {
      disposeCallback();
    }
  }
}
```

## Command Registration

We can use the `PLAPI.commandService.registerExternel` method to register external commands used by your extension.

> ⚠️  Do not use the `PLAPI.commandService.register` method, this method is used to register internal commands of Paperlib.

The arguments of this method are as follows:

```typescript
PLAPI.commandService.registerExternel({
  id: string,
  description: string,
  event: string,
})
```

- `id`: The id of the command, which must be unique. You can use the format `extensionID.commandid`, for example `paperlib-helloworld.print`.
- `description`: The description of the command, used for display in the command panel.
- `event`: The event when the command is triggered. You can use the format `extensionID.eventid`, for example `paperlib-helloworld.print-event`.

## Command Event

When a user selects a command in Paperlib, the extension will receive an event. We can use the `PLAPI.commandService.on` method to listen to this event. This event listener also needs to run `disposeCallback` when the extension is destroyed to cancel the registration.

The arguments of this method are as follows:

```typescript
PLAPI.commandService.on({
  event: string,
  callback: (event: {key: string, value: string[]}) => void,
})
```

- `event`：Event when the command is triggered, the same as the `event` argument when registering the command.
- `callback`：The callback function when the command is triggered, this function receives an `event` argument, the `key` property of this argument is the id of the command, and the `value` property is the argument list of the command. For example, when the corresponding command is selected in the command panel, followed by the argument `test`, then the value of `event` is `{key: "your-event-name", value: ["test"]}`.

## Cancel Command Registration

We need to cancel the command registration when the extension is destroyed, otherwise it will cause memory leaks. It is the same as other similar event listening operations. When the extension uses the `PLAPI.commandService.registerExternel` method to register the command, the method will return a `disposeCallback`, we can save it in the extension class, and then call it when the extension is destroyed.

```typescript
// Register command
const disposeCallback = await PLAPI.commandService.registerExternel(...);
// Call disposeCallback when the extension is destroyed
disposeCallback();
```