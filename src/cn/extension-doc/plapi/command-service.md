# CommandService

## Call

```typescript
import { PLAPI } from "paperlib-api/api";

PLAPI.commandService.methodname(...);
```

## Avaliable Methods

### `getRegisteredCommands`

```typescript
/**
* Get registered commands.
* @param filter - Filter string
* @returns - Sorted array of filtered commands
*/
getRegisteredCommands(filter?: string): Promise<ICommand[]>;
```

### `run`

```typescript
/**
* Run command.
* @param id - Command ID
* @param args - Command arguments
*/
run(id: string, ...args: any[]): Promise<void>;
```

### `registerExternel`

```typescript
/**
* Register externel command.
* @param command - Externel command
*/
registerExternel(command: IExternelCommand): () => Promise<void>;
```


## Events

| Event ID | Callback Value | Description |
| --- | --- | --- |
| `your-registed-command-event` | `{key: 'your-registed-command-event', value: someargs}` | When Tags database are updated |