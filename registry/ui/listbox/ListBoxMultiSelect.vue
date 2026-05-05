<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed, ref, useSlots, watch } from 'vue'
import { CheckboxPrimitive } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select'
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
  modelValue?: unknown[]
  label?: string
  tooltip?: string
  optional?: boolean
  placeholder?: string
  pluralLabel?: string
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
  modelValue: () => [],
  optional: false,
  placeholder: 'Select options',
  pluralLabel: 'selected',
  invalid: false,
  disabled: false,
  required: false,
  clearable: true,
  optionLabelKey: 'label',
  optionValueKey: 'value',
  optionDescriptionKey: 'description',
})

const emit = defineEmits<{
  change: [value: unknown[]]
}>()

const model = defineModel<unknown[]>({ default: () => [] })
const isOpen = ref(false)
const slots = useSlots()

watch(
  () => model.value,
  (value) => emit('change', value)
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

const selectedOptions = computed(() =>
  normalizedOptions.value.filter((option) =>
    model.value.some((value) => isSameValue(value, option.value))
  )
)

const selectedSummary = computed(() => {
  const count = selectedOptions.value.length
  if (count === 0) {
    return ''
  }

  if (count === 1) {
    return selectedOptions.value[0]?.label ?? ''
  }

  return `${count} ${props.pluralLabel}`
})

const hasValue = computed(() => model.value.length > 0)
const showClearButton = computed(() => props.clearable && !props.disabled && hasValue.value)

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

function isSelected(value: unknown) {
  return model.value.some((item) => isSameValue(item, value))
}

function clearSelection() {
  model.value = []
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

    <Select
      v-model="model"
      :disabled="props.disabled"
      :required="props.required"
      :name="props.name"
      :multiple="true"
      class="listbox-multi-root"
      @update:open="handleOpenChange"
    >
      <div class="listbox-multi-trigger-shell">
        <SelectTrigger
          :id="props.id"
          :aria-invalid="props.invalid ? 'true' : undefined"
          :aria-describedby="describedBy"
          :class="
            cn('listbox-multi-trigger', {
              'listbox-multi-has-clear': showClearButton,
              'listbox-multi-trigger-invalid': props.invalid,
              'listbox-multi-trigger-selected': hasValue,
            })
          "
        >
          <SelectValue :placeholder="props.placeholder">
            <span class="listbox-multi-summary-text" style="font-weight: 400 !important;">
              <slot
                name="summary"
                :count="selectedOptions.length"
                :selected-options="selectedOptions"
                :default-summary="selectedSummary"
              >
                {{ selectedSummary }}
              </slot>
            </span>
          </SelectValue>
        </SelectTrigger>

        <button
          v-if="showClearButton"
          type="button"
          aria-label="Clear selected values"
          class="listbox-multi-clear"
          @mousedown.prevent
          @click.stop="clearSelection"
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

        <span
          :class="
            cn('listbox-multi-chevron-wrapper', {
              'listbox-multi-chevron-wrapper-open': isOpen,
            })
          "
        >
          <svg
            width="16"
            height="16"
            viewBox="41 169 430 238"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="listbox-multi-chevron"
            aria-hidden="true"
          >
            <path
              d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
              fill="currentColor"
            />
          </svg>
        </span>
      </div>

      <SelectContent class="listbox-multi-content">
        <SelectItem
          v-for="(option, index) in normalizedOptions"
          :key="`${option.label}-${index}`"
          :value="option.value"
          :disabled="option.disabled"
          :text-value="option.label"
          class="listbox-multi-option"
        >
          <div class="listbox-multi-item-content">
            <span inert aria-hidden="true" class="listbox-multi-checkbox-wrapper">
              <CheckboxPrimitive
                :model-value="isSelected(option.value) ? 'Y' : 'N'"
                size="sm"
                variant="rds-dark-3"
                readonly-visual
                class="listbox-multi-option-checkbox"
              />
            </span>

            <div class="listbox-multi-item-text">
              <span class="listbox-multi-item-label">{{ option.label }}</span>
              <span v-if="option.description" class="listbox-multi-item-description">
                {{ option.description }}
              </span>
            </div>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>

    <div :id="instructionsId" class="listbox-multi-sr-only">
      Press Enter, Space, or Arrow Down to expand. Use Arrow keys to move through options.
      Press Enter to toggle selection and Escape to close.
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
.listbox-multi-root {
  width: 100%;
}

.listbox-multi-trigger-shell {
  position: relative;
}

:deep(.listbox-multi-trigger) {
  height: 3.3125rem;
  background: #fff;
  border: 1px solid var(--rds-light-4, #d0d0d0);
  color: var(--rds-dark-1, #747474);
  font-family: var(--rds-font-family, Arial, Helvetica, "Nimbus Sans L", "Liberation Sans", FreeSans, sans-serif);
  font-size: 14px;
  font-weight: 400 !important;
  line-height: 1.5;
  padding-left: 1rem;
  padding-right: 5rem;
  cursor: pointer;
  outline: none;
  text-align: left;
}

:deep(.listbox-multi-trigger:focus) {
  outline: 2px solid #000;
  outline-offset: 2px;
  box-shadow: none;
}

:deep(.listbox-multi-trigger-invalid) {
  border-color: var(--rds-danger, #cc2f2f);
  border-bottom-width: 0.25rem;
}

:deep(.listbox-multi-trigger-invalid:focus) {
  border-color: var(--rds-danger, #cc2f2f);
}

:deep(.listbox-multi-trigger[data-placeholder]) {
  color: var(--rds-dark-1, #747474);
}

:deep(.listbox-multi-trigger-selected) {
  color: var(--rds-dark-3, #191919);
}

.listbox-multi-summary-text {
  color: var(--rds-dark-3, #191919);
  font-weight: 400 !important;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
}

.listbox-multi-clear {
  position: absolute;
  right: 3.125rem; /* 24px between X icon and chevron */
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  background: transparent;
  border: none;
  border-radius: 50%;
  color: var(--rds-dark-1, #747474);
  cursor: pointer;
  padding: 0;
  line-height: 1;
  transition: background-color 0.15s ease, color 0.15s ease;
  z-index: 1;
}

.listbox-multi-clear:hover {
  background-color: var(--rds-light-3, #e8e8e8);
  color: var(--rds-dark-2, #484848);
}

.listbox-multi-clear:focus {
  outline: none;
}

.listbox-multi-clear:focus-visible {
  outline: none;
  background-color: var(--rds-light-5, #bfbfbf);
  color: var(--rds-dark-3, #191919);
}

.listbox-multi-chevron-wrapper {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--rds-dark-1, #747474);
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  pointer-events: none;
  transition: transform 0.2s ease;
}

.listbox-multi-chevron-wrapper-open {
  transform: translateY(-50%) rotate(180deg);
}

.listbox-multi-chevron {
  forced-color-adjust: auto;
  display: block;
  width: 16px;
  height: 16px;
}

:deep(.listbox-multi-content) {
  margin-top: 0;
  width: 100%;
  min-width: 100%;
  background: #fff;
  border: 1px solid var(--rds-light-4, #d0d0d0);
  border-top: 0;
  border-radius: 0;
  box-shadow: none;
}

:deep(.listbox-multi-content .select-viewport) {
  max-height: 19rem;
  background: #fff;
}

:deep(.listbox-multi-option) {
  padding: 1rem;
  border-bottom: 0;
  color: var(--rds-dark-3, #191919);
  background: #fff;
  cursor: pointer;
}

:deep(.listbox-multi-option[data-highlighted]) {
  background: #fff;
  color: var(--rds-dark-3, #191919);
  outline: 2px solid #000;
  outline-offset: -2px;
}

:deep(.listbox-multi-option[data-state='checked']) {
  background: var(--rds-secondary, #ffc627);
}

.listbox-multi-item-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.listbox-multi-checkbox-wrapper {
  display: inline-flex;
  flex: 0 0 auto;
}

.listbox-multi-option-checkbox {
  margin-top: 0;
  flex: 0 0 auto;
}

.listbox-multi-item-text {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.listbox-multi-item-label {
  font-size: 16px;
  line-height: 1.3;
}

.listbox-multi-item-description {
  font-size: 0.875rem;
  line-height: 1.3;
  color: var(--rds-dark-1, #747474);
}

.listbox-multi-sr-only {
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
