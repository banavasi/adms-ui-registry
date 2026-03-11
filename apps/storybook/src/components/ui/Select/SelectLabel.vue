<script setup lang="ts">
import type { SelectLabelProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { SelectLabel } from 'reka-ui'
import { cn } from '@/lib/util'

interface Props extends SelectLabelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <SelectLabel
    data-slot="select-label"
    :class="cn('select-label', props.class)"
  >
    <slot />
  </SelectLabel>
</template>

<style scoped>
.select-label {
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  color: var(--rds-dark-1, #747474);
}
</style>
