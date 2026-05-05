<script setup lang="ts">
import type { SelectRootEmits, SelectRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { SelectRoot, useForwardPropsEmits } from 'reka-ui'
import { cn } from '@/lib/util'

interface Props extends SelectRootProps {
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  open: undefined,
  defaultOpen: false,
  disabled: false,
  name: undefined,
  dir: undefined,
})

const emits = defineEmits<SelectRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <SelectRoot
    v-slot="slotProps"
    data-slot="select"
    :class="cn('select-root', props.class)"
    v-bind="forwarded"
  >
    <slot v-bind="slotProps" />
  </SelectRoot>
</template>

<style scoped>
.select-root {
  position: relative;
  display: block;
  width: 100%;
  min-width: 0;
}
</style>
