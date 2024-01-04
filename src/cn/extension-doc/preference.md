# 用户设置

## 默认插件设置

在创建插件类时，我们可以提供默认的插件设置，这些设置将在用户第一次安装插件时被使用。

```typescript
class PaperlibHelloworldExtension extends PLExtension {
    constructor() {
        super({
        id: "...",
        defaultPreference: {
            [id: string]: {
                type: "string" | "boolean" | "options" | "pathpicker", 
                name: string,
                description: string,
                value: string | boolean,
                order？: number,
                options?: { [key: string]: string }, // only for options type
            },
            ...
        },
        });
    }
}
```

每一个设置项都是一个键值对，键是设置项的 ID，值是一个对象，包含了设置项的各种信息。

其中:

- `id` 字段是必须的，它指定了设置项的 ID。这被用来后续访问设置项的值。
- `type` 字段是必须的，它指定了设置项的类型。
- `name` 字段是必须的，它指定了设置项显示在 UI 的名称。
- `description` 字段是必须的，它指定了设置项显示在 UI 的描述。
- `value` 字段是必须的，它指定了设置项的默认值。
- `order` 字段是可选的，它指定了设置项的显示顺序。
- `options` 字段是可选的，它只有在设置项类型为 `options` 时才需要，它指定了选项类型的设置项的选项。


## 设置项类型

如上所示，我们可以定义四种类型的设置项：

- `string`：字符串类型的设置项，用户可以输入任意字符串。
- `boolean`：布尔类型的设置项，用户可以选择 `true` 或 `false`。
- `options`：选项类型的设置项，用户可以从预定义的选项中选择一个。必须提供 `options` 字段，其中的每个键值对，都是一个选项。键是选项的值，值是选项的显示名称。
- `pathpicker`：路径选择器类型的设置项，用户可以选择一个文件或文件夹。

不同的设置项类型，Paperlib 会显示不同的组件用于方便用户设置。

## 访问设置项

在插件中访问设置项的值，可以通过 `PLExtAPI.extensionPreferenceService.get` 来获取。例如：

```typescript
PLExtAPI.extensionPreferenceService.get(this.id, "lang")
```

这样，我们就可以获取到 `lang` 这个设置项的值。注意，我们需要提供插件的 ID （`this.id`） 以让 `ExtensionPreferenceService` 知道我们要访问哪个插件的设置项。

## 修改设置项

除了用户在设置界面中修改设置项的值，插件也可以通过 `PLExtAPI.extensionPreferenceService.set` 来修改设置项的值。例如：

```typescript
PLExtAPI.extensionPreferenceService.set(this.id, {"lang": "en"})
```

在这里我们提供一个 `patch object` 来修改设置。`patch object` 是一个键值对，其中的每个键值对，都是一个设置项的修改。键是设置项的 ID，值是设置项的新值。你可以同时传入多个设置项的修改。

## 监听设置项的修改

在插件中，我们可以通过 `PLExtAPI.extensionPreferenceService.onChanged / on` 来监听设置项的修改。例如：

```typescript
PLExtAPI.extensionPreferenceService.onChanged(
    `${this.id}:lang`, 
    (changes: {key: string, value: string}) => {
        console.log(changes) // {key: "lang", value: "en"}
    }
)
```

> **⚠️ 请注意，监听插件某个设置，必须以 `extID:preferenceKey` 的形式，来组成监听的事件的 ID。以便区分不同插件的设置项。**

这样，我们就可以监听到 `lang` 这个设置项的修改。当用户在设置界面中修改了 `lang` 这个设置项的值时，我们就会运行传入的回调函数。该函数收到的参数是一个 Object，其中的 `key` 字段是设置项的 ID，`value` 字段是设置项的新值。

> ⚠️ 请注意，所有的监听注册，必须在插件的 `dispose` 函数中取消，来避免内存泄漏。

## 取消监听设置项的修改

在插件卸载或者重载时，Paperlib 会调用插件的 `dispose` 函数。在这个函数中，我们需要取消所有的监听注册，来避免内存泄漏。

当你在监听设置项的修改时，`PLExtAPI.extensionPreferenceService.onChanged / on` 会返回一个函数。运行此函数你可以取消监听。

例如：

```typescript
// 监听
const disposeCallback = PLExtAPI.extensionPreferenceService.onChanged(
    `${this.id}:lang`, 
    (changes: {key: string, value: string}) => {
        console.log(changes) // {key: "lang", value: "en"}
    }
)

// 取消监听
disposeCallback()
```

## 存取密码

Paperlib 还提供密码项的存取。普通设置都存在插件目录附近的 `.json` 文件中，密码项则根据不同平台存在不同的钥匙串中。如 macOS 上的钥匙串，Windows 上的凭据管理器等。

```typescript
await PLExtAPI.extensionPreferenceService.setPassword(
    this.id, "password-key", "your-password"
)

const password = await PLExtAPI.extensionPreferenceService.getPassword(
    this.id, "password-key"
)

```

## 设置存储文件路径

在 Paperlib 中，插件的设置存储在插件目录附近的 `.json` 文件中。

- macOS: `~/Library/Application Support/paperlib/extensions/<extension-id>.json`
- Windows: `%APPDATA%/paperlib/extensions/<extension-id>.json`
- Linux: `~/.config/paperlib/extensions/<extension-id>.json`

