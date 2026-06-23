<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { SelectLabel, type SelectLabelProps } from 'reka-ui'
import { cn } from '@/lib/util'

interface Props extends SelectLabelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <SelectLabel
    data-slot="select-label"
    :class="cn('select-label py-space-xxs px-space-xs fs-xs text-dark-1', props.class)"
  >
    <slot />
  </SelectLabel>
</template>
