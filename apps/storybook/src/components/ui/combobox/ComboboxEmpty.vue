<script setup lang="ts">
import type { ComboboxEmptyProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { ComboboxEmpty } from 'reka-ui'
import { cn } from '@/lib/util'

interface Props extends ComboboxEmptyProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ComboboxEmpty
    data-slot="combobox-empty"
    :class="cn('combobox-empty', props.class)"
  >
    <slot />
  </ComboboxEmpty>
</template>

<style scoped>
.combobox-empty {
  padding: 1rem;
  text-align: center;
  font-size: 0.875rem;
  color: var(--rds-dark-1, #747474);
}
</style>
