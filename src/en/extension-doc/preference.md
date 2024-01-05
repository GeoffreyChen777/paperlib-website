# User Preference

## Default Preference

When creating an extension class, we can provide default extension preferences, which will be used when the user installs the extension for the first time.

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

Each preference is a key-value pair, the key is the ID of the preference, and the value is an object that contains various information about the preference:

- The `id` field is required, it specifies the ID of the preference. This is used to access the value of the preference later.
- The `type` field is required, it specifies the type of the preference.
- The `name` field is required, it specifies the name of the preference displayed in the UI.
- The `description` field is required, it specifies the description of the preference displayed in the UI.
- The `value` field is required, it specifies the default value of the preference.
- The `order` field is optional, it specifies the display order of the preference.
- The `options` field is optional, it is only needed when the preference type is `options`, it specifies the options of the option type preference.

# Preference Type

As shown above, we provide four types of preferences:

- `string`: String type preference, the user can enter any string.
- `boolean`: Boolean type preference, the user can choose `true` or `false`.
- `options`: Option type preference, the user can select one from the predefined options. The `options` field must be provided, and each key-value pair in it is an option. The `key` is the identical value of the option, and the `value` is the display name of the option.
- `pathpicker`: Path picker type preference, the user can select a file or folder.

Different types of preferences will display different components in Paperlib.

## Access Preference

To access the value of a preference in an extension, we can use `PLExtAPI.extensionPreferenceService.get`. For example:

```typescript
PLExtAPI.extensionPreferenceService.get(this.id, "lang")
```

By doing so, we can get the value of the `lang` preference. Note that we need to provide the ID of the extension (`this.id`) so that the `ExtensionPreferenceService` knows which extension's preference we want to access.

# Set Preference

We can set the value of a preference by using `PLExtAPI.extensionPreferenceService.set`. For example:

```typescript
PLExtAPI.extensionPreferenceService.set(this.id, {"lang": "en"})
```

Here we provide a `patch object`` to modify the preferences. The `patch object`` is a key-value pair, where each key-value pair is a modification of a preference. The key is the ID of the preference, and the value is the new value of the preference. You can pass in modifications for multiple preferences at the same time.

## Listen Preference Change

We can listen to the change of a preference by using `PLExtAPI.extensionPreferenceService.onPreferenceChange`. For example:

```typescript
PLExtAPI.extensionPreferenceService.onChanged(
    `${this.id}:lang`, 
    (changes: {key: string, value: string}) => {
        console.log(changes) // {key: "lang", value: "en"}
    }
)
```

> ⚠️ Please note that listening to a setting of an extension must be in the form of `extID:preferenceKey` to form the ID of the event to be listened to. Because `extensionPreferenceService` need to distinguish the preferences of different extensions.

By doing so, we can listen to the modification of the `lang` preference. When the user modifies the value of the `lang` in the preferences interface, we will run the callback function passed in. The function receives an Object as an argument , where the `key` field is the ID of the preference, and the `value` field is the new value of the preference.

> ⚠️ Please note that all listener registrations must be cancelled in the `dispose` function of the extension to avoid memory leaks.

## Cancel Preference Change Listener

When the extension is uninstalling or reloading, Paperlib will call the `dispose` function of the extension. In this function, we need to cancel all listener registrations to avoid memory leaks.

When you are listening for changes to a preference, `PLExtAPI.extensionPreferenceService.onChanged / on` will return a function. Running this function will cancel the listener.

For example:

```typescript
// Listen
const disposeCallback = PLExtAPI.extensionPreferenceService.onChanged(
    `${this.id}:lang`, 
    (changes: {key: string, value: string}) => {
        console.log(changes) // {key: "lang", value: "en"}
    }
)

// Cancel
disposeCallback()
```

## Storing and Accessing Passwords

Paperlib also provides storage and retrieval of password items. Regular preferences are stored in a `.json` files near the extension directory, while password items are stored in different keychains depending on the platform. For example, the Keychain on macOS, the Credential Manager on Windows, etc.


```typescript
await PLExtAPI.extensionPreferenceService.setPassword(
    this.id, "password-key", "your-password"
)

const password = await PLExtAPI.extensionPreferenceService.getPassword(
    this.id, "password-key"
)

```

## Preference File

In Paperlib, the user's preferences are stored in a `.json` file. 

- macOS: `~/Library/Application Support/paperlib/extensions/<extension-id>.json`
- Windows: `%APPDATA%/paperlib/extensions/<extension-id>.json`
- Linux: `~/.config/paperlib/extensions/<extension-id>.json`

