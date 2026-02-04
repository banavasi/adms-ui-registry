<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed, provide, toRef } from 'vue'
import { INPUT_INJECTION_KEY } from './context'

interface Props {
  id: string
  invalid?: boolean
  disabled?: boolean
  required?: boolean
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  invalid: false,
  disabled: false,
  required: false,
})

provide(INPUT_INJECTION_KEY, {
  id: toRef(props, 'id'),
  invalid: toRef(props, 'invalid'),
  disabled: toRef(props, 'disabled'),
  required: toRef(props, 'required'),
  errorId: computed(() => `${props.id}-error`),
  helpId: computed(() => `${props.id}-help`),
})
</script>

<template>
  <div data-slot="input-root" class="field d-flex flex-column gap-space-xs position-relative mb-space-sm" :class="props.class">
    <slot />
  </div>
</template>
