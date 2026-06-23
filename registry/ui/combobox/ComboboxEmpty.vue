<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { ComboboxEmpty, type ComboboxEmptyProps } from 'reka-ui'
import { cn } from '@/lib/util'

interface Props extends ComboboxEmptyProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ComboboxEmpty
    data-slot="combobox-empty"
    :class="cn('combobox-empty p-space-xs text-center fs-small text-dark-1', props.class)"
  >
    <slot />
  </ComboboxEmpty>
</template>
