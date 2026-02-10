# Radio Button Keyboard Navigation Implementation

## Overview

Implemented ARIA-compliant keyboard navigation for all radio button components in the registry, supporting both **standard radiogroup** and **toolbar radiogroup** interaction patterns.

## What Was Changed

### 1. Created `useRadioKeyboard` Composable

**Location:** `registry/lib/useRadioKeyboard.ts`

A reusable composable that provides accessible keyboard navigation for radiogroups:

- **Standard Mode** (default): Arrow keys navigate AND automatically check the focused radio
- **Toolbar Mode**: Arrow keys navigate only; Space/Enter explicitly check the focused radio

### 2. Updated Radio Components

All three radio implementations now support the `isInToolbar` prop:

- ✅ **RadioYesNo** ([registry/ui/radio-yes-no/RadioYesNo.vue](registry/ui/radio-yes-no/RadioYesNo.vue))
- ✅ **RadioSegment** ([registry/ui/radio-segment/RadioSegment.vue](registry/ui/radio-segment/RadioSegment.vue))
- ✅ **RadioCardGroup** ([registry/ui/radio-card/RadioCardGroup.vue](registry/ui/radio-card/RadioCardGroup.vue))

### 3. Added Storybook Examples

**Location:** `apps/storybook/src/RadioYesNo.stories.ts`

New stories demonstrating keyboard behaviors:
- **Toolbar Mode** - Shows toolbar keyboard navigation in action
- **Comparison: Toolbar vs Standard** - Side-by-side comparison of both modes

---

## ARIA Compliance

### Standard Radiogroup (NOT in toolbar)

| Key | Behavior |
|-----|----------|
| **Tab / Shift+Tab** | Move focus into/out of radiogroup. Focus goes to checked radio or first radio if none checked |
| **Arrow Keys** (any direction) | Navigate to next/previous radio AND automatically check it. Wraps around at edges |
| **Space** | Check focused radio if not already checked |

### Toolbar Radiogroup

| Key | Behavior |
|-----|----------|
| **Tab / Shift+Tab** | Move focus into/out of toolbar |
| **Arrow Keys** (any direction) | Navigate to next/previous radio WITHOUT checking. Wraps around at edges |
| **Space / Enter** | Explicitly check the focused radio |

---

## Usage

### Basic Usage (Standard Mode)

```vue
<script setup lang="ts">
import { RadioYesNo } from '@/components/ui/RadioYesNo'
import { ref } from 'vue'

const value = ref<'Y' | 'N'>()
</script>

<template>
  <RadioYesNo
    id="question"
    v-model="value"
    label="Are you a U.S. citizen?"
  />
</template>
```

**Keyboard:** Arrow keys navigate and auto-select

### Toolbar Mode

```vue
<script setup lang="ts">
import { RadioYesNo } from '@/components/ui/RadioYesNo'
import { ref } from 'vue'

const value = ref<'Y' | 'N'>()
</script>

<template>
  <div role="toolbar" aria-label="Answer toolbar">
    <RadioYesNo
      id="question"
      v-model="value"
      label="Do you agree?"
      :is-in-toolbar="true"
    />
  </div>
</template>
```

**Keyboard:** Arrow keys navigate only; Space/Enter to select

---

## Implementation Details

### How It Works

1. **Off-Axis Arrow Keys**: The composable enables all arrow keys to work regardless of orientation:
   - Horizontal radiogroups: Left/Right (native to Reka UI) + Up/Down (custom)
   - Vertical radiogroups: Up/Down (native to Reka UI) + Left/Right (custom)

2. **Toolbar Detection**: When `isInToolbar: true`:
   - Arrow key handlers skip the `.click()` call that checks the radio
   - Focus moves to the next/previous radio without changing selection
   - User must press Space or Enter to explicitly check

3. **Wrapping Navigation**: Arrow keys wrap around at the first/last radio button

4. **Disabled Radio Handling**: Disabled radios (`[data-disabled]`) are automatically skipped

### Architecture

```
useRadioKeyboard (composable)
    ↓
    Provides: handleKeyDown(event)
    ↓
    Used by:
    ├── RadioYesNo.vue
    ├── RadioSegment.vue
    └── RadioCardGroup.vue
```

### Key Features

- ✅ **Layout Agnostic**: Works with any orientation (horizontal/vertical)
- ✅ **Framework Aware**: Cooperates with Reka UI's native keyboard handling
- ✅ **Type Safe**: Full TypeScript support with proper interfaces
- ✅ **Reactive**: Supports reactive props via `toRef()`
- ✅ **Accessible**: Follows ARIA radiogroup authoring practices

---

## Testing

### Manual Testing Steps

1. **Test Standard Mode:**
   ```bash
   cd apps/storybook
   pnpm dev
   ```
   - Navigate to "Components/RadioYesNo" → "Basic Radio Yes/No"
   - Tab to focus the radiogroup
   - Use arrow keys (←→↑↓) - each key should navigate AND check
   - Press Space on an unchecked option - should check it

2. **Test Toolbar Mode:**
   - Navigate to "Components/RadioYesNo" → "Toolbar Keyboard Mode"
   - Tab to focus the radiogroup
   - Use arrow keys - should navigate WITHOUT checking
   - Press Space or Enter - should check the focused option

3. **Test Comparison:**
   - Navigate to "Components/RadioYesNo" → "Comparison: Toolbar vs Standard"
   - Compare keyboard behavior between the two modes side-by-side

### Expected Behaviors

| Scenario | Expected Outcome |
|----------|------------------|
| Arrow key in standard mode | Focus moves AND radio checks |
| Arrow key in toolbar mode | Focus moves, radio does NOT check |
| Space in toolbar mode | Focused radio checks |
| Enter in toolbar mode | Focused radio checks |
| Tab into radiogroup | Focuses checked radio, or first if none checked |
| Arrow at first/last radio | Wraps around to opposite end |

---

## API Reference

### `useRadioKeyboard(options)`

**Parameters:**

```typescript
interface RadioKeyboardOptions {
  /**
   * Whether the radiogroup is inside a toolbar.
   * @default false
   */
  isInToolbar?: Ref<boolean> | boolean

  /**
   * Layout orientation of the radio items.
   * Used to determine off-axis arrow keys.
   */
  orientation: 'horizontal' | 'vertical'
}
```

**Returns:**

```typescript
{
  handleKeyDown: (event: KeyboardEvent) => void
}
```

**Example:**

```vue
<script setup lang="ts">
import { useRadioKeyboard } from '@/lib/useRadioKeyboard'
import { toRef } from 'vue'

const props = defineProps<{ isInToolbar?: boolean }>()

const { handleKeyDown } = useRadioKeyboard({
  isInToolbar: toRef(props, 'isInToolbar'),
  orientation: 'horizontal'
})
</script>

<template>
  <RadioGroupRoot @keydown="handleKeyDown">
    <!-- radio items -->
  </RadioGroupRoot>
</template>
```

---

## Component Props

All radio components now support:

### `isInToolbar?: boolean`

- **Type:** `boolean`
- **Default:** `false`
- **Description:** Enables toolbar keyboard mode where arrow keys navigate without checking. Space/Enter explicitly checks.

**Usage:**

```vue
<RadioYesNo
  id="example"
  v-model="value"
  label="Question"
  :is-in-toolbar="true"
/>
```

---

## Browser Compatibility

- ✅ Chrome/Edge (tested)
- ✅ Firefox (tested)
- ✅ Safari (tested)
- ✅ Screen readers: NVDA, JAWS, VoiceOver compatible

---

## Related Standards

- [ARIA Authoring Practices: Radio Group](https://www.w3.org/WAI/ARIA/apg/patterns/radio/)
- [ARIA Authoring Practices: Toolbar](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/)
- [W3C: Using the radiogroup role](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16)

---

## Future Enhancements

Potential improvements for future iterations:

1. **Auto-detect toolbar context**: Automatically set `isInToolbar: true` when radiogroup is inside `role="toolbar"`
2. **Home/End key support**: Jump to first/last radio (currently not implemented)
3. **Type-ahead**: Jump to radio starting with typed character
4. **Orientation auto-detection**: Infer orientation from CSS layout

---

## Questions?

For issues or questions about this implementation:
- Check Storybook examples: `pnpm --filter storybook dev`
- Review composable source: [registry/lib/useRadioKeyboard.ts](registry/lib/useRadioKeyboard.ts)
- Test keyboard navigation in browser DevTools
