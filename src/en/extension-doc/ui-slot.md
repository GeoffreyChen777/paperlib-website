# UI Slots

In this article, we will introduce the UI slots that can be used and modified in Paperlib.

## Slot in the Paper Details Panel

In the Paper Details Panel, we have three slots:

- `paperDetailsPanelSlot1`: Under the publication date of the paper.
- `paperDetailsPanelSlot2`: Under the rating of the paper.
- `paperDetailsPanelSlot3`: Under the supplementary materials of the paper.

### Slot Content

```typescript
{
    title: string,
    content: string
}
```

### Update Slot

```typescript
PLAPI.uiSlotService.updateSlot(
    "paperDetailsPanelSlot1", 
    {
        [id: string]: {
            title: string,
            content: string
        }
    }
);

```