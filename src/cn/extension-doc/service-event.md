# 服务事件

API 里的几乎所有的服务都是 `Eventable`` 的。这意味着每个服务都会在不同时机触发一些事件。在其他代码位置、进程可以监听对应的事件触发，来执行自己的代码。比如你可以监听用户选择的论文变化了，然后运行你的方法等等。

## 监听事件

监听事件的方法是 `on`，它接受两个参数，第一个是事件名，第二个是回调函数。回调函数的参数是事件触发时传递的参数。

```typescript
import { PLAPI } from 'paperlib-api/api';


PLAPI.serviceName.on('event-id', (newValue: {key: string, value: any}) => {
    ...
});
```

回调函数接收的参数通常是一个对象，包含了 `key` 和 `value` 两个字段。`key` 是事件 ID，`value` 是对应的新值。

你可以给多个事件注册同一个回调函数：

```typescript
PLAPI.serviceName.on(
    ['event-id-1', 'event-id-2'],
    (newValue: {key: string, value: any}) => {
    ...
    }
);
```

此时，`key` 字段将会有助于你判断是哪个事件触发了。

**在监听事件回调中，不要使用 `floating promise`，即，如果你的回调函数中包含 `AsyncFunction`，请务必 `await`，或者 `.catch` 异常。因为 `floating promise` 中的异常无法在 Paperlib 中被捕获，会导致插件崩溃：**

```typescript
// 永远不要做如下:
PLAPI.serviceName.on('event-id', (newValue: {key: string, value: any}) => {
    asyncFunction();
});

async function asyncFunction() {
    throw new Error('error'); // 这个错误将无法被 Paperlib 捕获，会导致插件崩溃。
}
```

## 取消监听

请注意，你需要保存 `on` 方法返回的函数，以便在不需要监听时取消监听。

```typescript
const cancel = PLAPI.serviceName.on('event-id', (newValue: {key: string, value: any}) => {
    ...
});

// 取消监听
cancel();
```

## 监听别名

对于部分服务，我们提供了一些 `on()` 函数的别名，以便更舒服地编写代码。

比如，在 `preferenceService` 中，我们提供 `onChanged()` 方法，它的效果和 `on()` 一样，仅仅只是一个别名。

## 事件列表

不同的服务有不同的事件，具体的事件列表请参考对应的服务文档。