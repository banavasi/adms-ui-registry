<script setup lang="ts">
import type {ComboboxLabelProps} from 'reka-ui';
import type { HTMLAttributes } from 'vue'
import { ComboboxLabel  } from 'reka-ui'
import { cn } from '@/lib/util'

interface Props extends ComboboxLabelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ComboboxLabel
    data-slot="combobox-label"
    :class="cn('combobox-label', props.class)"
  >
    <slot />
  </ComboboxLabel>
</template>

<style scoped>
.combobox-label {
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--rds-dark-1, #747474);
}
</style>
