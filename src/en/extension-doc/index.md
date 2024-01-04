# Extension System

We are pleased to announce that in Paperlib 3.0, we will introduce an extension system, which means you can develop extensions for feature expansion in Paperlib! 🎉🎉🎉

The extension system is nearly complete and is in the testing phase. We will release the extension system to all users when the 3.0 official version is released. Before that, we sincerely invite interested extension developers to try it out.

## Preface

This article introduces the overall design of the extension system to facilitate understanding of each part that may be involved in the development process. If you just want to develop a simple extension, you can skip this article. If you are developing a relatively complex extension, please read this article.

## Process and Extension Runtime Environment

To compromise multi-platform development, Paperlib chooses to be based on Electron. Therefore, in the entire Paperlib, we have three main processes:

- Main Process: Responsible for managing the entire program's lifecycle and interacting with the system, such as context menus, etc.
- Renderer Process: Responsible for rendering the interface and most of the program logic.
- Extension Process: Responsible for extension management and operation.

Each extension runs in the extension process, and the code is executed in a separate [node VM](https://nodejs.org/api/vm.html). Therefore, the crash of a extension will not cause Paperlib to crash, and each extension does not interfere with each other. The environment in which each extension runs is a `node` environment, without `html` and other related environments.

## Inter-process Communication

In addition to running the extension's code, the extension process is also responsible for extension downloading, updating, loading, uninstalling, and preference settings. Most of the logic code runs in the main or rendering process. Therefore, Paperlib extends `MessagePort` to implement `Remote Procedure Calling` to expose the methods of various services in the main/rendering process for extension calls.

Each cross-process method will be internally converted into a `json` string and sent to the corresponding process. This includes the method to be called, the input parameters, and other necessary information. After the corresponding process receives the message, it will parse the `json`, run the corresponding method, get the result and return it to the process where the caller is located. In addition, we have also implemented cross-process event listening to make development more convenient. For specific implementation details, please visit [Github](https://github.com/Future-Scholars/paperlib/tree/dev-3.0.0/app/base/rpc).

## Service

In each process, there are many services that provide various methods to complete the functions of Paperlib. For example, the `ContextMenuService` of the main process is responsible for the right-click menu related functions, and the `PaperService` in the rendering process is responsible for the main paper-related additions, deletions, modifications, and queries. The relevant implementation can be found on [Github](https://github.com/Future-Scholars/paperlib/tree/dev-3.0.0/app/renderer/services).

Almost all methods of the services in Paperlib are exposed to the extension process for calling. Almost all parts of Paperlib can be operated in the extension process.

## Service Event

Almost all services are `Eventable`. This means that each service will emit some events at different times. Other codes/processes can listen for corresponding events to execute their own code. For example, you can listen to the user's selected paper changes and then run your method.

## Cross-process Call API

For convenience of development, we have exposed the services of the main process, rendering process, and extension process to the extension process, and have concentrated them in three corresponding APIs. You will often encounter these three APIs in the following documents:

- `PLMainAPI`: Contains all the main process services.
- `PLAPI`: Contains all the rendering process services.
- `PLExtAPI`: Contains all the extension process services.

When you want to call a method of a service corresponding to a process, you only need to write the following in your extension code:

```ts
const papers = await PLAPI.paperService.load(...)
```

Because it is a cross-process call, we need to use `await` to wait for the return of asynchronous results.

## Extension Types

We have designed five different forms of extensions:

- Simple Extension: Simple functions, run some things on their own.
- Command Extension: Users run commands through the command bar in Paperlib 3.0, and then the extension runs the corresponding functions.
- Hook Extension: Register hooks at different hook points in the Paperlib life cycle to intercept and modify the pipeline.
- UI Extension: Modify parts of the UI interface.
- New Window Extension: Create a completely new window to implement completely customized complex functions.

These five types of extensions cover most extension scenarios and can be mixed with each other. We provide corresponding examples and will explain in detail later.

## Extension Publishing and Downloading

Each extension is an `npm` package, similar to publishing an `npm` package when published. We will explain the restrictions later.

In the Paperlib's preference interface's extension page, extensions can be loaded through a local path or downloaded by searching the extension marketplace. Our extension marketplace relies on `npmjs.com`.

## Conclusion

In summary, a extension is some code in the form of an `npm` package that runs in a separate process and operates Paperlib through the APIs we expose. Next, we recommend reading the development environment settings to start developing your extension!