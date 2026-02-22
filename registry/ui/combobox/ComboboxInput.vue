<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { ComboboxAnchor, ComboboxInput } from 'reka-ui'
import { computed, useAttrs } from 'vue'
import { cn } from '@/lib/util'

interface Props {
  id?: string
  ariaDescribedBy?: string
  ariaInvalid?: string
  displayValue?: (value: unknown) => string
  type?: string
  disabled?: boolean
  autoFocus?: boolean
  placeholder?: string
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  type: 'text',
  disabled: false,
  autoFocus: false,
})

const emit = defineEmits<{
  blur: [event: FocusEvent]
  focus: [event: FocusEvent]
  input: [event: Event]
  change: [event: Event]
  keydown: [event: KeyboardEvent]
  click: [event: MouseEvent]
}>()

defineOptions({ inheritAttrs: false })

const attrs = useAttrs()

const inputClasses = computed(() =>
  cn('form-control col-12 p-space-xs combobox-input', props.class)
)
</script>

<template>
  <ComboboxAnchor class="combobox-anchor">
    <ComboboxInput
      :id="id"
      data-slot="combobox-input"
      v-bind="attrs"
      :aria-describedby="ariaDescribedBy"
      :aria-invalid="ariaInvalid"
      :placeholder="placeholder"
      :disabled="disabled"
      :type="type"
      :auto-focus="autoFocus"
      :display-value="displayValue"
      :class="inputClasses"
      @blur="emit('blur', $event)"
      @focus="emit('focus', $event)"
      @input="emit('input', $event)"
      @change="emit('change', $event)"
      @keydown="emit('keydown', $event)"
      @click="emit('click', $event)"
    />
    <slot />
  </ComboboxAnchor>
</template>

<style scoped>
.combobox-anchor {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
  flex-shrink: 0;
}

.combobox-input {
  border-radius: 0;
  width: 100%;
  padding-right: 4.5rem; /* Space for trigger and cancel buttons */
}

.combobox-input:focus {
  outline: 2px solid #000;
  outline-offset: 2px;
  box-shadow: none;
}

.combobox-input:disabled {
  background-color: var(--rds-light-2, #f1f1f1);
  cursor: not-allowed;
}
</style>
