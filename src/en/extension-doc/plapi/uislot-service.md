# UISlotService

## Call

```typescript
import { PLAPI } from "paperlib-api";

PLAPI.uiSlotService.methodname(...);
```

## Avaliable Methods

```typescript
/**
 * Update a slot with the given patch
 * @param slotID - The slot to update
 * @param patch - The patch to apply to the slot
 * @returns
 */
updateSlot(slotID: keyof IUISlotState, patch: {
  [id: string]: any;
}): Promise<void>;
```

## Avaliable Slots

```typescript

interface IUISlotState {
  paperDetailsPanelSlot1: {
    [id: string]: { title: string; content: string };
  };
  paperDetailsPanelSlot2: {
    [id: string]: { title: string; content: string };
  };
  paperDetailsPanelSlot3: {
    [id: string]: { title: string; content: string };
  };
}

```


## Events

| Event ID | Callback Value | Description |
| --- | --- | --- |
| `paperDetailsPanelSlot1` | `{key: paperDetailsPanelSlot1, value: newSlotState}` | When slot `paperDetailsPanelSlot1` is updated |
| `paperDetailsPanelSlot2` | `{key: paperDetailsPanelSlot2, value: newSlotState}` | When slot `paperDetailsPanelSlot2` is updated |
| `paperDetailsPanelSlot3` | `{key: paperDetailsPanelSlot3, value: newSlotState}` | When slot `paperDetailsPanelSlot3` is updated |

