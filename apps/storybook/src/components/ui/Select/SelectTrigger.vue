<script setup lang="ts">
import type {SelectTriggerProps} from 'reka-ui';
import type { HTMLAttributes } from 'vue'
import { SelectTrigger  } from 'reka-ui'
import { cn } from '@/lib/util'

interface Props extends SelectTriggerProps {
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  asChild: false,
})
</script>

<template>
  <SelectTrigger
    data-slot="select-trigger"
    :as-child="props.asChild"
    :as="props.as"
    :class="cn('select-trigger', props.class)"
  >
    <slot />
  </SelectTrigger>
</template>

<style scoped>
.select-trigger {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
  flex-shrink: 0;
}
</style>
