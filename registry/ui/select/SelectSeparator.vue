<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { SelectSeparator, type SelectSeparatorProps } from 'reka-ui'
import { cn } from '@/lib/util'

interface Props extends SelectSeparatorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <SelectSeparator
    data-slot="select-separator"
    :class="cn('select-separator my-space-xxxs', props.class)"
  />
</template>

<style scoped>
.select-separator {
  height: 1px;
  background: var(--rds-light-4, #d0d0d0);
}
</style>
