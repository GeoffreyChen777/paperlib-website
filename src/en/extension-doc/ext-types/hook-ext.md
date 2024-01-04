# Hook Extension

This type of extension mainly intervene in the running process of Paperlib, modify the arguments and data flow in the process. For example, when a user drags a paper PDF into Paperlib, Paperlib will search for the metadata of the file and generate a PaperEntity in the database. We can use the Hook extension to intervene in this process, for example, after completing the metadata of a PaperEntity, we modify a part of the metadata.

In fact, in Paperlib 3.0, all official Metadata Scrapers are implemented in extensions.

## Extension Class Structure

Here we provide an example structure, of course, you can modify it according to your needs.

```typescript
class HookExtension extends PLExtension {
  constructor() {
    // You can set the id of the extension here, the default preference etc.
    super(...)
  }

  async initialize() {
    // Register hook points here
    this.disposeCallbacks.push(
      PLAPI.hookService.hookModify(
        "scrapeEntryBefore",
        this.id,
        "modifyPayloads",
      ),
    );

    ...
  }

  async dispose() {
    // Cancel registration and event listening here
    for (const disposeCallback of this.disposeCallbacks) {
      disposeCallback();
    }
  }

  async modifyPayloads(payloads: SourcePayload[]) {
    // Modify payloads here
    ...

    return [payloads]
  }
}
```

## Hook Points

In Paperlib, we have placed hooks with different names in different places. A hook extension can be registered to the corresponding hook point to intervene in the operation flow of Paperlib. There are two types of hook points in total.

### Modify Hook Points

- **Purpose**: This type of hook point is used to modify the arguments passed by the hook point, or the variables within the argument objects, but cannot change the type, and finally returns the modified arguments.

- **Type of Callback Return Value**:  Modify Hook requires the return value of the callback function to be an array, each element of which corresponds to the input argument array. For example, if the arguments passed by the hook point are `(arg1: string, arg2: {value: number})`, you can modify `arg1` to another string and `arg2.value` to another number in the callback function of the hook, but you cannot change the type of `arg1` to a number, or change the type of `arg2` to another type. The return value of the callback function must be an array composed of modified arguments: `[arg1, arg2]`. **Note that even if only one argument is passed in, an array with one element needs to be returned. Because the input arguments are always treated as an arguments array**

### Transform Hook Points

- **Purpose**: This type of hook point can modify the data flow in the operation process of Paperlib. It is used to transform the input arguments into other forms of data and then return.
- **Callback Return Value Type**: It can be other types, but usually different hook points have expected return value types. For example, the `scrapeEntry` hook point expects the return value type to be an array of `PaperEntity`.


## Avaliable hook points:

The operation flows of Paperlib and the detailed introduction of hook points, please refer to [Operation Flows and Hooks](../process-hook).

## Hook Registration

We can use the `PLAPI.hookService.hookModify` method to register to a `Modify` hook point used by the extension, or use the `PLAPI.hookService.hookTransform` method to register to a `Transform` hook point used by the extension:

```typescript
PLAPI.hookService.hookModify(
  hookPoint: string,
  extensionId: string,
  callbackFuncName: string,
)

PLAPI.hookService.hookTransform(
  hookPoint: string,
  extensionId: string,
  callbackFuncName: string,
)
```

- `hookPoint`：Paperlib 提供的钩子点的 id，Hook point id provided by Paperlib, where you want to set the hook.
- `extensionId`：插件的 id，用于标识插件。Extension id, used to identify the extension.
- `callbackFuncName`：The name of the callback function in the extension, used to be find the callback function when the hook point is triggered.

## Hook Callback Function

The name of the hook callback function needs to be consistent with the `callbackFuncName` when registering. The form of the arguments and return values of the hook callback function vary according to the different hook positions and hook types. For details, please refer to [Operation Flows and Hooks](../process-hook).

In the [Hook Points](#Hook-Points) section, we generally described the forms of the two types of hook callback functions. Here we don't repeat them.

## Timeout Limitation

Because hook extensions will intervene in the running process of Paperlib, we need to limit the running time of the hook callback function. If the running time of the hook callback function exceeds the preset time, Paperlib will forcibly bypass the running of the callback function:

- `modifyHookPoint`：5s
- `transformHookPoint`：15s

## Others

Although our hook mechanism supports us to place hooks almost anywhere, because of the intrusiveness of hook extensions, we are very cautious about placing hook points. If the current hook point cannot meet the development needs of your extension, please go to [GitHub Discussions](https://github.com/Future-Scholars/paperlib/discussions) to submit your requirements, we will consider adding new hook points in future versions.