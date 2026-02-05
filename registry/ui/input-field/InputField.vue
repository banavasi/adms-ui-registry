<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed, inject } from 'vue'
import { cn } from '@/lib/util'
import { INPUT_INJECTION_KEY } from '@/components/ui/InputRoot'

interface Props {
  type?: 'text' | 'email' | 'tel' | 'password' | 'number' | 'url' | 'search'
  placeholder?: string
  readonly?: boolean
  autocomplete?: string
  class?: HTMLAttributes['class']
  hasPrefix?: boolean
  hasSuffix?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  hasPrefix: false,
  hasSuffix: false,
})

const context = inject(INPUT_INJECTION_KEY)
if (!context) {
  throw new Error('InputField must be used within InputRoot')
}

const model = defineModel<string | number>()

const emit = defineEmits<{
  blur: [event: FocusEvent]
  focus: [event: FocusEvent]
  input: [event: Event]
  change: [event: Event]
  keydown: [event: KeyboardEvent]
  keyup: [event: KeyboardEvent]
}>()

const computedAutocomplete = computed(() => {
  if (props.autocomplete === 'off') {
    return 'new-password'
  }
  return props.autocomplete
})

const ariaDescribedBy = computed(() => {
  const ids: string[] = []
  // Only reference help when not invalid (help is hidden when invalid)
  if (!context.invalid.value) {
    ids.push(context.helpId.value)
  }
  // Only reference error when invalid
  if (context.invalid.value) {
    ids.push(context.errorId.value)
  }
  return ids.length > 0 ? ids.join(' ') : undefined
})

const inputClasses = computed(() =>
  cn(
    'form-control col-12 p-space-xs',
    {
      'is-invalid': context.invalid.value,
      'has-suffix': props.hasSuffix,
      'has-prefix': props.hasPrefix,
    },
    props.class
  )
)
</script>

<template>
  <div class="input-wrapper">
    <span v-if="hasPrefix" class="input-prefix">
      <slot name="prefix" />
    </span>
    <input
      :id="context.id.value"
      v-model="model"
      data-slot="input-field"
      :type="type"
      :class="inputClasses"
      :placeholder="placeholder"
      :required="context.required.value"
      :disabled="context.disabled.value"
      :readonly="readonly"
      :autocomplete="computedAutocomplete"
      :aria-required="context.required.value"
      :aria-invalid="context.invalid.value ? 'true' : undefined"
      :aria-describedby="ariaDescribedBy"
      @blur="emit('blur', $event)"
      @focus="emit('focus', $event)"
      @input="emit('input', $event)"
      @change="emit('change', $event)"
      @keydown="emit('keydown', $event)"
      @keyup="emit('keyup', $event)"
    />
    <span v-if="hasSuffix" class="input-suffix">
      <slot name="suffix" />
    </span>
  </div>
</template>

<style scoped>
.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.form-control {
  border-radius: 0;
  width: 100%;
}

.form-control.has-suffix {
  padding-right: 3rem;
}

.form-control.has-prefix {
  padding-left: 3rem;
}

.form-control:focus {
  outline: 2px solid #000;
  outline-offset: 2px;
  box-shadow: none;
}

.is-invalid {
  border-bottom-width: 0.25rem;
  /* Remove Bootstrap's default error icon */
  padding-right: 3rem !important;
}

.input-prefix,
.input-suffix {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--rds-dark-1, #747474);
}

.input-prefix {
  left: 1rem;
}

.input-suffix {
  right: 1rem;
}

/* Turn suffix icon red when input is invalid */
.input-wrapper:has(.is-invalid) .input-suffix {
  color: var(--rds-danger, #cc2f2f);
}
</style>
