<script setup lang="ts">
import type {ComboboxSeparatorProps} from 'reka-ui';
import type { HTMLAttributes } from 'vue'
import { ComboboxSeparator  } from 'reka-ui'
import { cn } from '@/lib/util'

interface Props extends ComboboxSeparatorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ComboboxSeparator
    data-slot="combobox-separator"
    :class="cn('combobox-separator', props.class)"
  />
</template>

<style scoped>
.combobox-separator {
  height: 1px;
  background-color: var(--rds-light-3, #e8e8e8);
  margin: 0.25rem 0;
}
</style>
