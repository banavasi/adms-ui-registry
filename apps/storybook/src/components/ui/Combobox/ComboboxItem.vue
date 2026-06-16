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
    :class="cn('combobox-item', props.class)"
    :value="props.value"
    :disabled="props.disabled"
  >
    <span class="combobox-item-text">
      <slot />
    </span>
  </ComboboxItem>
</template>

<style scoped>
.combobox-item {
  display: flex;
  align-items: flex-start;
  padding: 0.75rem 1rem;
  padding-left: 1rem;
  position: relative;

  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--rds-dark-3, #191919);

  cursor: pointer;
  user-select: none;
  border-radius: 0;
  border-bottom: 1px solid var(--rds-light-3, #e8e8e8);

  transition: background-color 0.15s ease, color 0.15s ease;
}

.combobox-item:last-child {
  border-bottom: none;
}

.combobox-item[data-highlighted] {
  background-color: var(--rds-gold, #ffc627);
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
  display: block;
  flex: 1;
  min-width: 0;
  overflow: hidden;
}
</style>
