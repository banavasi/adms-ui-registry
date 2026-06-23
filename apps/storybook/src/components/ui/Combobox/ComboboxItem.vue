<script setup lang="ts">
import type { ComboboxItemProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { ComboboxItem } from 'reka-ui'
import { cn } from '@/lib/util'

interface Props extends ComboboxItemProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ComboboxItem
    data-slot="combobox-item"
    :class="cn('combobox-item d-flex align-items-start position-relative text-dark-3 rounded-0', props.class)"
    :value="props.value"
    :disabled="props.disabled"
  >
    <span class="combobox-item-text d-block flex-fill overflow-hidden">
      <slot />
    </span>
  </ComboboxItem>
</template>

<style scoped>
.combobox-item {
  padding: 1rem 1rem;

  font-size: 0.875rem;
  line-height: 1.5;

  cursor: pointer;
  user-select: none;
  border-bottom: 1px solid var(--rds-light-3, #e8e8e8);

  transition: background-color 0.15s ease, color 0.15s ease;
}

.combobox-item:last-child {
  border-bottom: none;
}

.combobox-item[data-highlighted] {
  background-color: var(--rds-secondary, #ffc627);
  color: var(--rds-dark-3, #191919);
  outline: none;
}

.combobox-item[data-disabled] {
  color: var(--rds-light-5, #bfbfbf);
  cursor: not-allowed;
  pointer-events: none;
}

.combobox-item:focus-visible {
  outline: 2px solid #000;
  outline-offset: -2px;
}

.combobox-item-text {
  min-width: 0;
}
</style>
