<script setup lang="ts">
import type {SelectItemProps} from 'reka-ui';
import type { HTMLAttributes } from 'vue'
import { SelectItem,  SelectItemText } from 'reka-ui'
import { cn } from '@/lib/util'

interface Props extends SelectItemProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <SelectItem
    data-slot="select-item"
    :value="props.value"
    :disabled="props.disabled"
    :text-value="props.textValue"
    :as-child="props.asChild"
    :as="props.as"
    :class="cn('select-item', props.class)"
  >
    <SelectItemText>
      <slot />
    </SelectItemText>
  </SelectItem>
</template>

<style>
.select-item {
  padding: 0.5rem 1rem;
  cursor: pointer;
  outline: none;
  background: #fff;
  color: var(--rds-dark-3, #191919);
}

.select-item[data-highlighted] {
  background: var(--rds-light-2, #f1f1f1);
}

.select-item[data-state='checked'] {
  background: var(--rds-secondary, #ffc627);
}

.select-item[data-disabled] {
  opacity: 0.5;
  pointer-events: none;
}
</style>
