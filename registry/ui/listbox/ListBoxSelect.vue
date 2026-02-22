<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed, nextTick, ref, useSlots, watch } from 'vue'
import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxTrigger,
} from '@/components/ui/combobox'
import { InputError } from '@/components/ui/InputError'
import { InputHelp } from '@/components/ui/InputHelp'
import { InputRoot } from '@/components/ui/InputRoot'
import { Label } from '@/components/ui/Label'
import { cn } from '@/lib/util'

export interface ListBoxOption {
  label: string
  value: unknown
  description?: string
  disabled?: boolean
}

type InputOption = ListBoxOption | string | number | boolean | Record<string, unknown>

interface Props {
  id: string
  options: InputOption[]
  modelValue?: unknown | null
  label?: string
  tooltip?: string
  optional?: boolean
  placeholder?: string
  invalid?: boolean
  disabled?: boolean
  required?: boolean
  name?: string
  helpText?: string
  errorText?: string
  clearable?: boolean
  optionLabelKey?: string
  optionValueKey?: string
  optionDescriptionKey?: string
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  optional: false,
  placeholder: 'Select an option',
  invalid: false,
  disabled: false,
  required: false,
  clearable: false,
  optionLabelKey: 'label',
  optionValueKey: 'value',
  optionDescriptionKey: 'description',
})

const emit = defineEmits<{
  change: [value: unknown | null]
}>()

const model = defineModel<unknown | null>({ default: null })
const isOpen = ref(false)
const slots = useSlots()

watch(
  () => model.value,
  (value, previousValue) => {
    emit('change', value)
    if (!isSameValue(value, previousValue)) {
      clearInputTextSelection()
    }
  }
)

function hasOwn(obj: Record<string, unknown>, key: string) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

function normalizeOption(option: InputOption): ListBoxOption {
  if (typeof option === 'string' || typeof option === 'number' || typeof option === 'boolean') {
    return {
      label: String(option),
      value: option,
      disabled: false,
    }
  }

  if ('label' in option && 'value' in option) {
    return {
      label: String(option.label),
      value: option.value,
      description:
        typeof option.description === 'string' && option.description.length > 0
          ? option.description
          : undefined,
      disabled: Boolean(option.disabled),
    }
  }

  const record = option as Record<string, unknown>

  const rawLabel =
    record[props.optionLabelKey] ?? record.label ?? record.name ?? record.title ?? record.id ?? ''

  const value = record[props.optionValueKey] ?? record.value ?? record.id ?? rawLabel

  const rawDescription = record[props.optionDescriptionKey] ?? record.description

  return {
    label: String(rawLabel),
    value,
    description:
      typeof rawDescription === 'string' && rawDescription.length > 0 ? rawDescription : undefined,
    disabled: Boolean(record.disabled),
  }
}

const normalizedOptions = computed(() => props.options.map(normalizeOption))

function isSameValue(a: unknown, b: unknown) {
  if (Object.is(a, b)) {
    return true
  }

  if (typeof a === 'object' && a !== null && typeof b === 'object' && b !== null) {
    const aRecord = a as Record<string, unknown>
    const bRecord = b as Record<string, unknown>

    if (hasOwn(aRecord, props.optionValueKey) && hasOwn(bRecord, props.optionValueKey)) {
      return Object.is(aRecord[props.optionValueKey], bRecord[props.optionValueKey])
    }

    if (hasOwn(aRecord, 'id') && hasOwn(bRecord, 'id')) {
      return Object.is(aRecord.id, bRecord.id)
    }
  }

  return false
}

const selectedOption = computed(
  () => normalizedOptions.value.find((option) => isSameValue(option.value, model.value)) ?? null
)

const hasValue = computed(
  () => model.value !== null && model.value !== undefined && model.value !== ''
)
const showClearButton = computed(() => props.clearable && !props.disabled && hasValue.value)
const selectedLabel = computed(() => selectedOption.value?.label ?? '')
const inputDisplayValue = computed(() => (_value: unknown) => selectedLabel.value)

const ariaDescribedBy = computed(() => {
  const ids: string[] = []

  if (!props.invalid && (props.helpText || slots.help)) {
    ids.push(`${props.id}-help`)
  }

  if (props.invalid && (props.errorText || slots.error)) {
    ids.push(`${props.id}-error`)
  }

  return ids.length > 0 ? ids.join(' ') : undefined
})

function clearSelection() {
  model.value = null
  nextTick(() => {
    const input = document.getElementById(props.id) as HTMLInputElement | null
    if (!input) {
      return
    }
    input.focus({ preventScroll: true })
    const textLength = input.value.length
    input.setSelectionRange(textLength, textLength)
  })
}

function clearInputTextSelection() {
  const collapseSelection = () => {
    const input = document.getElementById(props.id) as HTMLInputElement | null
    if (!input || document.activeElement !== input) {
      return
    }
    const textLength = input.value.length
    input.setSelectionRange(textLength, textLength)
  }

  nextTick(() => {
    collapseSelection()
    requestAnimationFrame(collapseSelection)
  })
}

function handleInputClick() {
  clearInputTextSelection()
}

function handleInputFocus() {
  clearInputTextSelection()
}

function handleInputMouseUp(event: MouseEvent) {
  event.preventDefault()
  clearInputTextSelection()
}

function handleOpenChange(value: boolean) {
  isOpen.value = value
}

const instructionsId = computed(() => `${props.id}-instructions`)
const describedBy = computed(() =>
  [instructionsId.value, ariaDescribedBy.value].filter(Boolean).join(' ')
)
</script>

<template>
  <InputRoot
    :id="props.id"
    :invalid="props.invalid"
    :disabled="props.disabled"
    :required="props.required"
    :class="props.class"
  >
    <Label
      v-if="props.label || $slots.label"
      :for="props.id"
      :tooltip="props.tooltip"
      :optional="props.optional"
    >
      <slot name="label">{{ props.label }}</slot>
    </Label>

    <Combobox
      v-model="model"
      :disabled="props.disabled"
      :required="props.required"
      :name="props.name"
      :ignore-filter="true"
      :open-on-click="true"
      class="listbox-select-root"
      @update:open="handleOpenChange"
    >
      <div class="position-relative search-input drop-down-toggle w-100 d-flex">
        <div class="selected-options d-flex w-100">
          <ComboboxInput
            :id="props.id"
            :placeholder="props.placeholder"
            :display-value="inputDisplayValue"
            :aria-invalid="props.invalid ? 'true' : undefined"
            :aria-describedby="describedBy"
            :readonly="true"
            :class="
              cn('listbox-select-input search-input-field', {
                'listbox-select-has-clear': showClearButton,
              })
            "
            @click="handleInputClick"
            @focus="handleInputFocus"
            @mouseup="handleInputMouseUp"
          >
            <button
              v-if="showClearButton"
              type="button"
              aria-label="Clear selected value"
              class="listbox-select-clear ms-auto me-space-sm pe-space-xxs"
              @mousedown.prevent
              @click="clearSelection"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <ComboboxTrigger as-child>
              <button
                type="button"
                class="listbox-select-toggle dropdown-chevron my-auto"
                :aria-label="isOpen ? 'Collapse options' : 'Expand options'"
                @mousedown.prevent
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="41 169 430 238"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="listbox-select-chevron"
                  aria-hidden="true"
                >
                  <path
                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </ComboboxTrigger>
          </ComboboxInput>
        </div>
      </div>

      <ComboboxContent class="listbox-select-content">
        <ComboboxItem
          v-for="(option, index) in normalizedOptions"
          :key="`${option.label}-${index}`"
          :value="option.value"
          :disabled="option.disabled"
          class="listbox-select-option"
        >
          <div class="listbox-select-item-content">
            <span class="listbox-select-item-label">{{ option.label }}</span>
            <span v-if="option.description" class="listbox-select-item-description">
              {{ option.description }}
            </span>
          </div>
        </ComboboxItem>
      </ComboboxContent>
    </Combobox>

    <div :id="instructionsId" class="listbox-select-sr-only">
      Press Enter, Space, or Arrow Down to expand. Use Arrow keys to move through options.
      Press Enter to select and Escape to close.
    </div>

    <InputHelp v-if="props.helpText || $slots.help">
      <slot name="help">{{ props.helpText }}</slot>
    </InputHelp>

    <InputError v-if="props.errorText || $slots.error">
      <slot name="error">{{ props.errorText }}</slot>
    </InputError>
  </InputRoot>
</template>

<style scoped>
.listbox-select-clear {
  position: absolute;
  right: 3.25rem;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: var(--rds-dark-1, #747474);
  cursor: pointer;
  padding: 0.25rem;
  line-height: 1;
  transition: color 0.15s ease;
}

.listbox-select-clear:hover {
  color: var(--rds-dark-2, #484848);
}

.listbox-select-toggle {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--rds-dark-1, #747474);
  background: transparent;
  border: none;
  cursor: pointer;
  width: 20px;
  height: 20px;
  padding: 0;
  line-height: 1;
  transition: transform 0.2s ease, color 0.15s ease;
}

.listbox-select-toggle[data-state='open'] {
  transform: translateY(-50%) rotate(180deg);
}

.listbox-select-toggle[aria-expanded='true'] {
  transform: translateY(-50%) rotate(180deg);
}

.listbox-select-chevron {
  forced-color-adjust: auto;
  display: block;
  width: 20px;
  height: 20px;
  flex: 0 0 20px;
}

.listbox-select-root {
  width: 100%;
}

:deep(.listbox-select-input) {
  height: 3.3125rem;
  background: #fff;
  border: 1px solid var(--rds-light-4, #d0d0d0);
  color: var(--rds-dark-1, #747474);
  font-size: 14px;
  line-height: 1.5;
  padding-left: 1rem;
  padding-right: 5.5rem;
  cursor: pointer;
}

:deep(.search-input-field) {
  position: relative;
}

:deep(.listbox-select-content) {
  margin-top: 0;
  width: 100%;
  min-width: 100%;
  background: #fff;
  border: 1px solid var(--rds-light-4, #d0d0d0);
  border-top: 0;
  border-radius: 0;
  box-shadow: none;
}

:deep(.listbox-select-content .combobox-viewport) {
  max-height: 19rem;
  background: #fff;
  cursor: pointer;
}

:deep(.listbox-select-option) {
  padding: 1rem;
  border-bottom: 0;
  color: var(--rds-dark-3, #191919);
  background: #fff;
  cursor: pointer;
}

:deep(.listbox-select-option[data-state='checked']) {
  background: var(--rds-secondary, #ffc627);
  border-top: 2px solid var(--rds-dark-3, #191919);
  border-bottom: 2px solid var(--rds-dark-3, #191919);
  padding-top: calc(1rem - 2px);
  padding-bottom: calc(1rem - 2px);
}

.listbox-select-item-content {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  min-width: 0;
}

.listbox-select-item-label {
  font-size: 16px;
  line-height: 1.3;
}

.listbox-select-item-description {
  font-size: 0.875rem;
  line-height: 1.3;
  color: var(--rds-dark-1, #747474);
}

.listbox-select-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
