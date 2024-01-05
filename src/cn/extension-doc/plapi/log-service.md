# LogService

## Call

```typescript
import { PLAPI } from "paperlib-api/api";

PLAPI.logService.methodname(...);
```

## Avaliable Methods

### `log`

```typescript
/**
 * Log info to the console and the log file.
 * @param {string} level - Log level
 * @param {string} msg - Message to log
 * @param {string?} additional - Additional message to log
 * @param {boolean?} notify - Show notification in the notification bar, default: false
 * @param {string?} id - ID of the log, usually indicates who log this info */
log(level: "info" | "warn" | "error", msg: string, additional?: string, notify?: boolean, id?: string): Promise<void>;
```

### `info`

```typescript
/**
 * Log info to the console and the log file.
 * @param {string} msg - Message to log
 * @param {string?} additional - Additional message to log
 * @param {boolean?} notify - Show notification, default: false
 * @param {string?} id - ID of the log */
info(msg: string, additional?: string, notify?: boolean, id?: string): Promise<void>;
```

### `warn`

```typescript
/**
 * Log warning to the console and the log file.
 * @param {string} msg - Message to log
 * @param {string?} additional - Additional message to log
 * @param {boolean?} notify - Show notification, default: false
 * @param {string?} id - ID of the log */
warn(msg: string, additional?: string, notify?: boolean, id?: string): Promise<void>;
```

### `error`
```typescript
/**
 * Log error to the console and the log file.
 * @param {string} msg - Message to log
 * @param {string?} additional - Additional message to log
 * @param {boolean?} notify - Show notification, default: false
 * @param {string?} id - ID of the log */
error(msg: string, additional?: string | Error, notify?: boolean, id?: string): Promise<void>;
```

### `progress`

```typescript
/**
 * Log progress to the console and the log file.
 * @param {string} msg - Message to log
 * @param {number?} value - Progress value
 * @param {boolean?} notify - Show notification, default: false
 * @param {string?} id - ID of the log */
progress(msg: string, value: number, notify?: boolean, id?: string, progressId?: string): Promise<void>;
```

### `getLogFilePath`

```typescript
/**
 * Get log file path.
 * @returns {string} Log file path */
getLogFilePath(): Promise<string>;
```

## Events

| Event ID | Callback Value | Description |
| --- | --- | --- |
| `infoLogMessage` | `{key: 'infoLogMessage', value: msg}` | When a new info message is logged |
| `warnLogMessage` | `{key: 'warnLogMessage', value: msg}` | When a new warning message is logged |
| `errorLogMessage` | `{key: 'errorLogMessage', value: msg}` | When a new error message is logged |
| `progressLogMessage` | `{key: 'progressLogMessage', value: percent}` | When a new progress is logged |

