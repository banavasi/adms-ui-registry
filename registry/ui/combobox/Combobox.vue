<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { ComboboxRoot, type ComboboxRootProps, type ComboboxRootEmits } from 'reka-ui'
import { useForwardPropsEmits } from 'reka-ui'
import { cn } from '@/lib/util'

interface Props extends ComboboxRootProps {
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  open: undefined,
  defaultOpen: false,
  searchTerm: '',
  multiple: false,
  disabled: false,
  name: undefined,
  dir: undefined,
  filterFunction: undefined,
  displayValue: undefined,
})

const emits = defineEmits<ComboboxRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <ComboboxRoot
    v-slot="slotProps"
    data-slot="combobox"
    :class="cn('combobox-root', props.class)"
    v-bind="forwarded"
  >
    <slot v-bind="slotProps" />
  </ComboboxRoot>
</template>

<style scoped>
.combobox-root {
  position: relative;
  display: block;
  width: 100%;
  min-width: 0;
}
</style>
