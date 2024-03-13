# Extension System

We are pleased to announce that in Paperlib 3.0, which means you can develop extensions for feature expansion in Paperlib! 🎉🎉🎉

## Preface

This article introduces the overall design of the extension system to facilitate understanding of each part that may be involved in the development process. If you just want to develop a simple extension, you can skip this article. If you are developing a relatively complex extension, we highly recommend reading this article.

## Process and Extension Runtime Environment

To compromise multi-platform development, Paperlib chooses to be based on Electron. Therefore, in the entire Paperlib, we have three main processes:

- Main Process: Responsible for managing the entire program's lifecycle and interacting with the system, such as context menus, etc.
- Renderer Process: Responsible for rendering the interface and most of the program logic.
- Extension Process: Responsible for extension management and operation.

Each extension runs in the extension process, and the code is executed in a separate [node VM](https://nodejs.org/api/vm.html). Therefore, the crash of an extension will not cause Paperlib to crash, and each extension does not interfere with each other. Each extension runs in a `node` environment, without `html` and other related web environments (New Window Extension is an exception).

## Inter-process Communication

In addition to running the extension's code, the extension process is also responsible for extension downloading, updating, loading, uninstalling, and preference settings. Most of the logic code of Paperlib runs in the main or rendering process. Therefore, we extends `MessagePort` to implement `Remote Procedure Calling (RPC)` to expose the methods of various services in the main/rendering process for calling in the extension process.

Each cross-process method will be internally convert into a `json` string and sent to the corresponding process. This includes the method to be called, the arguments, and other necessary information. After the corresponding process receives the message, it will parse the `json`, run the corresponding method, get the result and return it to the process where the caller is located. In addition, we also implement cross-process event listening to make development more convenient. For specific implementation details, please refer to [Github](https://github.com/Future-Scholars/paperlib/tree/dev-3.0.0/app/base/rpc).

## Service

In each process, there are many services that provide various methods to complete the functions of Paperlib. For example, the `ContextMenuService` of the main process is responsible for the right-click menu related functions, and the `PaperService` in the rendering process is responsible for the main paper-related additions, deletions, modifications, and queries. The relevant implementation can be found on [Github](https://github.com/Future-Scholars/paperlib/tree/dev-3.0.0/app/renderer/services).

Almost all methods of the services in Paperlib are exposed to the extension process for calling. Almost all parts of Paperlib can be operated in the extension process.

## Service Event

Almost all services are `Eventable`. This means that each service will emit some events at different stages. Other codes/processes can listen for corresponding events to execute their own code. For example, you can listen to the user's selected paper changes and then run your method.

## Cross-process Call API

For convenience of development, we expose the services of the main process, rendering process, and extension process to the extension process, and concentrate them in three corresponding APIs. You will often encounter these three API groups in the following documents:

- `PLMainAPI`: Contains all the main process services.
- `PLAPI`: Contains all the rendering process services.
- `PLExtAPI`: Contains all the extension process services.

When you call a method of a service in a specific process, you only need to write code as following in your extension:

```ts
// const result = await APIGroup.serviceName.methodName(...)
const papers = await PLAPI.paperService.load(...)
```
Because it is a cross-process call, we need to use `await` to wait for the return of asynchronous results. If you are calling `PLExtAPI`, because it is the same process as your extenstion's, whether it is synchronous or asynchronous depends on the situation, please refer to the type autocompletion when developing.

## Extension Types

We have five different types of extensions:

- Simple Extension: Simple functions, run some things on their own.
- Command Extension: Users run commands through the command bar introduced by Paperlib 3.0, and then the extension runs the corresponding functions.
- Hook Extension: Register hooks at different hook points in the Paperlib life cycle to intercept and modify the pipeline.
- UI Extension: Modify parts of the UI interface.
- New Window Extension: Create a completely new window to implement customized complex functions.

These five types of extensions cover most extension scenarios and can be mixed with each other. We provide corresponding examples and will explain in detail later.

## Extension Publishing and Downloading

Each extension is an `npm` package, publishing is similar to other `npm` packages. We will explain the restrictions later.

In the Paperlib's preference interface's extension page, extensions can be loaded through a local path or downloaded by searching the extension marketplace. Our extension marketplace relies on `npmjs.com`.

## Conclusion

In summary, an extension is some code in the form of an `npm` package that runs in a separate process and operates Paperlib through the APIs we expose. Next, we recommend reading the [Development Prepare](./env) to start developing your extension!