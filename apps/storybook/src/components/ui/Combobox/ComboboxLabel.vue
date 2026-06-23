<script setup lang="ts">
import type { ComboboxLabelProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { ComboboxLabel } from 'reka-ui'
import { cn } from '@/lib/util'

interface Props extends ComboboxLabelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ComboboxLabel
    data-slot="combobox-label"
    :class="cn('combobox-label py-space-xxs px-space-xs fs-xs fw-semibold text-uppercase text-dark-1', props.class)"
  >
    <slot />
  </ComboboxLabel>
</template>

<style scoped>
.combobox-label {
  letter-spacing: 0.05em;
}
</style>
