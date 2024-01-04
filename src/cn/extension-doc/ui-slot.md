# UI 插槽

本文介绍了 Paperlib 中提供的可以使用，修改的 UI 插槽。

## 论文详情面板插槽

在论文的详情面板，我提供三个插槽：

- `paperDetailsPanelSlot1`: 在论文发表时间之下。
- `paperDetailsPanelSlot2`: 在论文的评分之下。
- `paperDetailsPanelSlot3`: 在论文的补充材料之下。

### 插槽内容

```typescript
{
    title: string,
    content: string
}
```

### 插槽更新

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