# UIStateService

## Call

```typescript
import { PLAPI } from "paperlib-api";

PLAPI.uiStateService.methodname(...);
```

## Avaliable Methods

### `setState`

```typescript
/**
 * Set the state of the UI service. Many UI components are controlled by the UI states.
 * @param patch - patch to the state. It can be a single state, a partial state or a full state.
 */
setState(patch: Partial<IUIStateServiceState>): Promise<void>;
```

### `getState`

```typescript
/**
 * Get the UI state.
 * @param stateKey - key of the state
 * @returns The state
 */
getState(stateKey: keyof IUIStateServiceState): Promise<any>;
```

### `getStates`

```typescript
/**
 * Get all UI states.
 * @returns The state
 */
getStates(): Promise<Store<string, IUIStateServiceState>>;
```

### `resetState`

```typescript
/**
 * Reset all UI states to default.
 */
resetStates(): Promise<void>;
```

## Avaliable States

```typescript

interface IUIStateServiceState {
  // =========================================
  // Main Paper/Feed panel
  contentType: string;  // "library" | "feed"
  mainViewFocused: boolean;
  editViewShown: boolean;
  feedEditViewShown: boolean;
  paperSmartFilterEditViewShown: boolean;
  preferenceViewShown: boolean;
  deleteConfirmShown: boolean;
  renderRequired: number; // When assign a new value to this state, the rendering of some components, such as the PDF preview, will be triggered.

  entitiesReloaded: number;

  // selectedIndex: contains the index of the selected papers in the dataview.
  // It should be the only state that is used to control the selection.
  selectedIndex: Array<number>;
  // selectedIds: contains the ids of the selected papers in the current dataview.
  // It can be accessed in any component. But it is read-only. It can be only changed by the event listener of selectedIndex in the dataview.
  selectedIds: Array<string>;
  // selectedPaperEntities/selectedFeedEntities: contains the selected paper/feed entities in the current dataview.
  // It can be accessed in any component. But it is read-only. It can be only changed by the event listener of selectedIndex in the dataview.
  selectedPaperEntities: Array<PaperEntity>;
  selectedFeedEntities: Array<FeedEntity>;
  selectedCategorizer: string;
  selectedFeed: string;

  dragingIds: Array<string>;

  // =========================================
  // Command / Search Bar
  commandBarText: string;
  commandBarSearchMode: string;  // "general" | "advanced" | "fulltext"
}

```

## Events

| Event ID | Callback Value | Description |
| --- | --- | --- |
| any state key listed above | `{key: stateKey, value: newValue}` | When state is changed |

