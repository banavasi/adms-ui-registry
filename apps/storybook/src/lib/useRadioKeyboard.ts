import type { Ref } from 'vue'

export interface RadioKeyboardOptions {
  /**
   * Whether the radiogroup is inside a toolbar.
   * - false (default): Arrow keys navigate AND check (standard radiogroup behavior)
   * - true: Arrow keys only navigate; Space/Enter check (toolbar behavior)
   */
  isInToolbar?: Ref<boolean> | boolean

  /**
   * Layout orientation of the radio items.
   * Used to determine which arrow keys are "off-axis" and need custom handling.
   */
  orientation: 'horizontal' | 'vertical'
}

/**
 * Composable for accessible keyboard navigation in radio groups.
 *
 * Implements ARIA radiogroup keyboard patterns:
 * - Standard radiogroup: Arrow keys navigate and auto-check
 * - Toolbar radiogroup: Arrow keys navigate only, Space/Enter check
 *
 * @example
 * ```vue
 * <script setup>
 * const { handleKeyDown } = useRadioKeyboard({
 *   isInToolbar: false,
 *   orientation: 'horizontal'
 * })
 * </script>
 *
 * <template>
 *   <RadioGroupRoot @keydown="handleKeyDown">
 *     <!-- radio items -->
 *   </RadioGroupRoot>
 * </template>
 * ```
 */
export function useRadioKeyboard(options: RadioKeyboardOptions) {
  const isInToolbar =
    typeof options.isInToolbar === 'object'
      ? options.isInToolbar
      : { value: options.isInToolbar ?? false }

  /**
   * Handle arrow key navigation for radiogroups.
   *
   * Reka UI's RadioGroupRoot handles on-axis arrow keys automatically.
   * This handler manages:
   * 1. Off-axis arrow keys (e.g., Up/Down in horizontal orientation)
   * 2. Toolbar mode (arrow keys focus only, don't check)
   */
  const handleKeyDown = (event: KeyboardEvent) => {
    const target = event.target as HTMLElement
    const group = target.closest('[role="radiogroup"]')
    if (!group) return

    const items = Array.from(
      group.querySelectorAll('[role="radio"]:not([data-disabled])')
    ) as HTMLElement[]

    const currentIndex = items.indexOf(target)
    if (currentIndex === -1) return

    const offAxisKeys =
      options.orientation === 'horizontal' ? ['ArrowUp', 'ArrowDown'] : ['ArrowLeft', 'ArrowRight']

    const onAxisKeys =
      options.orientation === 'horizontal' ? ['ArrowLeft', 'ArrowRight'] : ['ArrowUp', 'ArrowDown']

    const isOffAxis = offAxisKeys.includes(event.key)
    const isOnAxis = onAxisKeys.includes(event.key)
    const isArrowKey = isOffAxis || isOnAxis

    // Handle Enter key in toolbar mode (Space is handled natively by Reka UI)
    if (isInToolbar.value && event.key === 'Enter') {
      event.preventDefault()
      target.click()
      return
    }

    // Let Space and non-arrow keys pass through to Reka UI's default handling
    if (event.key === ' ' || !isArrowKey) return

    event.preventDefault()

    // Calculate next index with wrapping
    const isPrev = event.key === 'ArrowUp' || event.key === 'ArrowLeft'
    const nextIndex = isPrev
      ? currentIndex <= 0
        ? items.length - 1
        : currentIndex - 1
      : currentIndex >= items.length - 1
        ? 0
        : currentIndex + 1

    const nextItem = items[nextIndex]

    nextItem.focus()

    // In standard mode, also check the item
    // In toolbar mode, only navigate — user must press Space/Enter to check
    if (!isInToolbar.value) {
      nextItem.click()
    }
  }

  return {
    handleKeyDown,
  }
}
