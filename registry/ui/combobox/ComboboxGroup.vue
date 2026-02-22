<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { ComboboxGroup, type ComboboxGroupProps } from 'reka-ui'
import { cn } from '@/lib/util'

interface Props extends ComboboxGroupProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ComboboxGroup
    data-slot="combobox-group"
    :class="cn('combobox-group', props.class)"
  >
    <slot />
  </ComboboxGroup>
</template>

<style scoped>
.combobox-group {
  display: block;
}
</style>
