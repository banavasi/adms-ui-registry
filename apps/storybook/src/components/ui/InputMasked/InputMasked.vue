<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed, inject, ref, watch } from 'vue'
import { INPUT_INJECTION_KEY } from '@/components/ui/InputRoot'
import { cn } from '@/lib/util'

interface MaskToken {
  pattern: RegExp
  transform?: (char: string) => string
}

interface Props {
  /** Mask pattern (e.g., "###-##-####" for SSN) */
  mask?: string
  /** Token definitions - defaults: # (digit), % (letter), @ (alphanumeric), * (any) */
  tokens?: Record<string, MaskToken>
  placeholder?: string
  readonly?: boolean
  autocomplete?: string
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  tokens: () => ({
    '#': { pattern: /\d/ },
    '%': { pattern: /[a-z]/i },
    '@': { pattern: /[a-z0-9]/i },
    '*': { pattern: /./ },
  }),
})

const emit = defineEmits<{
  blur: [event: FocusEvent]
  focus: [event: FocusEvent]
  input: [event: Event]
  change: [event: Event]
  keydown: [event: KeyboardEvent]
  keyup: [event: KeyboardEvent]
}>()
const context = inject(INPUT_INJECTION_KEY)
if (!context) {
  throw new Error('InputMasked must be used within InputRoot')
}

const model = defineModel<string>()
const inputRef = ref<HTMLInputElement>()
const displayValue = ref('')

// Get unmasked value (only the actual input characters)
const unmaskedValue = computed(() => {
  if (!props.mask) return displayValue.value
  let unmasked = ''
  for (let i = 0; i < displayValue.value.length; i++) {
    const maskChar = props.mask[i]
    const inputChar = displayValue.value[i]
    if (maskChar && props.tokens[maskChar]) {
      unmasked += inputChar
    }
  }
  return unmasked
})

// Apply mask to input value
const applyMask = (value: string): string => {
  if (!props.mask) return value

  let masked = ''
  let valueIndex = 0

  for (let i = 0; i < props.mask.length && valueIndex < value.length; i++) {
    const maskChar = props.mask[i]
    const token = props.tokens[maskChar]

    if (token) {
      const inputChar = value[valueIndex]
      if (token.pattern.test(inputChar)) {
        masked += token.transform ? token.transform(inputChar) : inputChar
        valueIndex++
      } else {
        valueIndex++
        i--
      }
    } else {
      masked += maskChar
      if (value[valueIndex] === maskChar) {
        valueIndex++
      }
    }
  }

  return masked
}

// Count total number of token positions in the mask
const getMaxInputLength = (): number => {
  if (!props.mask) return Infinity

  let count = 0
  for (let i = 0; i < props.mask.length; i++) {
    const maskChar = props.mask[i]
    if (props.tokens[maskChar]) {
      count++
    }
  }
  return count
}

// Validate if a character is valid for the current mask position
const isValidCharForPosition = (char: string, position: number): boolean => {
  if (!props.mask) return true

  let tokenPos = position
  while (tokenPos < props.mask.length) {
    const maskChar = props.mask[tokenPos]
    const token = props.tokens[maskChar]
    if (token) {
      return token.pattern.test(char)
    }
    tokenPos++
  }

  return false
}

// Handle beforeinput to prevent invalid characters
const handleBeforeInput = (event: InputEvent) => {
  if (!props.mask || !event.data) return

  const maxLength = getMaxInputLength()
  const currentLength = unmaskedValue.value.length

  if (currentLength >= maxLength) {
    event.preventDefault()
    return
  }

  const char = event.data
  let hasValidChar = false
  for (let i = 0; i < char.length; i++) {
    if (isValidCharForPosition(char[i], unmaskedValue.value.length)) {
      hasValidChar = true
      break
    }
  }

  if (!hasValidChar) {
    event.preventDefault()
  }
}

// Handle input events
const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const cursorPosition = target.selectionStart || 0
  const newValue = target.value

  let inputOnly = ''
  if (props.mask) {
    for (let i = 0; i < newValue.length; i++) {
      const char = newValue[i]
      let isValid = false
      for (const tokenKey in props.tokens) {
        const token = props.tokens[tokenKey]
        if (token.pattern.test(char)) {
          isValid = true
          inputOnly += char
          break
        }
      }
      if (!isValid) {
        const isLiteral = props.mask.includes(char) && !props.tokens[char]
        if (!isLiteral) {
          continue
        }
      }
    }
  } else {
    inputOnly = newValue
  }

  const masked = applyMask(inputOnly)
  displayValue.value = masked
  model.value = unmaskedValue.value

  // Emit input event
  emit('input', event)

  // Calculate new cursor position
  requestAnimationFrame(() => {
    if (inputRef.value) {
      let validCharsBeforeCursor = 0
      for (let i = 0; i < Math.min(cursorPosition, newValue.length); i++) {
        const char = newValue[i]
        for (const tokenKey in props.tokens) {
          if (props.tokens[tokenKey].pattern.test(char)) {
            validCharsBeforeCursor++
            break
          }
        }
      }

      let newCursorPos = 0
      let validCharsFound = 0
      for (let i = 0; i < masked.length; i++) {
        if (validCharsFound >= validCharsBeforeCursor) {
          newCursorPos = i
          break
        }
        const maskChar = props.mask?.[i]
        if (maskChar && props.tokens[maskChar]) {
          validCharsFound++
        }
        newCursorPos = i + 1
      }

      inputRef.value.setSelectionRange(newCursorPos, newCursorPos)
    }
  })
}

// Initialize display value from model
watch(
  () => model.value,
  (newValue) => {
    if (newValue !== unmaskedValue.value) {
      displayValue.value = applyMask(newValue || '')
    }
  },
  { immediate: true }
)

const ariaDescribedBy = computed(() => {
  const ids: string[] = []
  if (!context.invalid.value) {
    ids.push(context.helpId.value)
  }
  if (context.invalid.value) {
    ids.push(context.errorId.value)
  }
  return ids.length > 0 ? ids.join(' ') : undefined
})
</script>

<template>
  <div class="input-wrapper">
    <input
      :id="context.id.value"
      ref="inputRef"
      :value="displayValue"
      data-slot="input-masked"
      type="text"
      :class="cn('form-control col-12 p-space-xs', { 'is-invalid': context.invalid.value }, props.class)"
      :placeholder="placeholder"
      :required="context.required.value"
      :disabled="context.disabled.value"
      :readonly="readonly"
      :autocomplete="autocomplete"
      :aria-required="context.required.value"
      :aria-invalid="context.invalid.value ? 'true' : undefined"
      :aria-describedby="ariaDescribedBy"
      @beforeinput="handleBeforeInput"
      @input="handleInput"
      @blur="emit('blur', $event)"
      @focus="emit('focus', $event)"
      @change="emit('change', $event)"
      @keydown="emit('keydown', $event)"
      @keyup="emit('keyup', $event)"
    />
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

.form-control:focus {
  outline: 2px solid #000;
  outline-offset: 2px;
  box-shadow: none;
}

.is-invalid {
  border-bottom-width: 0.25rem;
  background-image: none !important;
}
</style>
