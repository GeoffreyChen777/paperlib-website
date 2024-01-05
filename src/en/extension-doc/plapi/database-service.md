# DatabaseService

## Call

```typescript
import { PLAPI } from "paperlib-api/api";

PLAPI.databaseService.methodname(...);
```

## Avaliable Methods

### `initialize`
    
```typescript
/**
* Initialize the database.
* @param reinit - Whether to reinitialize the database. */
initialize(reinit?: boolean): Promise<void>;
```

### `pauseSync`
    
```typescript
/**
* Pause the synchronization of the cloud database. */
pauseSync(): Promise<void>;
```

### `resumeSync`
    
```typescript
/**
* Resume the synchronization of the cloud database. */
resumeSync(): Promise<void>;
```

## Events

| Event ID | Callback Value | Description |
| --- | --- | --- |
| `dbInitializing` | `{key: 'dbInitializing'}` | When database is initilizing |
| `dbInitialized` | `{key: 'dbInitialized'}` | When database is initialized |