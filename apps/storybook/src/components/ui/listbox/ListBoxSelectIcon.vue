<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed, ref, useSlots, watch } from 'vue'
import { InputError } from '@/components/ui/InputError'
import { InputHelp } from '@/components/ui/InputHelp'
import { InputRoot } from '@/components/ui/InputRoot'
import { Label } from '@/components/ui/Label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select'
import { cn } from '@/lib/util'

export interface ListBoxIconOption {
  label: string
  value: unknown
  icon?: string
  iconAlt?: string
  description?: string
  disabled?: boolean
}

type InputOption = ListBoxIconOption | string | number | boolean | Record<string, unknown>

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
  optionIconKey?: string
  optionIconAltKey?: string
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
  optionIconKey: 'icon',
  optionIconAltKey: 'iconAlt',
})

const emit = defineEmits<{
  change: [value: unknown | null]
}>()

const model = defineModel<unknown | null>({ default: null })
const isOpen = ref(false)
const slots = useSlots()

watch(
  () => model.value,
  (value) => {
    emit('change', value)
  }
)

function hasOwn(obj: Record<string, unknown>, key: string) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

function normalizeOption(option: InputOption): ListBoxIconOption {
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
      icon: typeof option.icon === 'string' ? option.icon : undefined,
      iconAlt: typeof option.iconAlt === 'string' ? option.iconAlt : undefined,
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
  const rawIcon = record[props.optionIconKey] ?? record.icon
  const rawIconAlt = record[props.optionIconAltKey] ?? record.iconAlt

  return {
    label: String(rawLabel),
    value,
    icon: typeof rawIcon === 'string' && rawIcon.length > 0 ? rawIcon : undefined,
    iconAlt: typeof rawIconAlt === 'string' && rawIconAlt.length > 0 ? rawIconAlt : undefined,
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

const selectedLabel = computed(() => selectedOption.value?.label ?? '')

const hasValue = computed(
  () => model.value !== null && model.value !== undefined && model.value !== ''
)
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

function clearSelection() {
  model.value = null
}

function handleOpenChange(value: boolean) {
  isOpen.value = value
}

function isImageSource(icon: string) {
  return /^(?:https?:\/\/|data:image\/|\/|\.\/|\.\.\/)/.test(icon)
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
      class="listbox-select-icon-root"
      @update:open="handleOpenChange"
    >
      <SelectTrigger
        :id="props.id"
        :aria-invalid="props.invalid ? 'true' : undefined"
        :aria-describedby="describedBy"
        :class="
          cn('listbox-select-icon-trigger', {
            'listbox-select-icon-has-clear': showClearButton,
            'listbox-select-icon-trigger-invalid': props.invalid,
            'listbox-select-icon-trigger-selected': hasValue,
          })
        "
      >
        <SelectValue :placeholder="props.placeholder">
          <span class="listbox-select-icon-value-text">{{ selectedLabel }}</span>
        </SelectValue>

        <div class="listbox-select-icon-actions">
          <button
            v-if="showClearButton"
            type="button"
            aria-label="Clear selected value"
            class="listbox-select-icon-clear"
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

          <span class="listbox-select-icon-chevron-wrapper">
            <svg
              width="20"
              height="20"
              viewBox="41 169 430 238"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="listbox-select-icon-chevron"
              aria-hidden="true"
            >
              <path
                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>
      </SelectTrigger>

      <SelectContent class="listbox-select-icon-content">
        <SelectItem
          v-for="(option, index) in normalizedOptions"
          :key="`${option.label}-${index}`"
          :value="option.value"
          :disabled="option.disabled"
          :text-value="option.label"
          class="listbox-select-icon-option"
        >
          <div class="listbox-select-icon-item-content">
            <div v-if="option.icon || $slots['option-icon']" class="listbox-select-icon-media">
              <slot name="option-icon" :option="option">
                <img
                  v-if="option.icon && isImageSource(option.icon)"
                  :src="option.icon"
                  :alt="option.iconAlt || ''"
                  class="listbox-select-icon-image"
                >
                <span v-else-if="option.icon" class="listbox-select-icon-glyph">{{ option.icon }}</span>
              </slot>
            </div>

            <div class="listbox-select-icon-item-text">
              <span class="listbox-select-icon-item-label">{{ option.label }}</span>
              <span v-if="option.description" class="listbox-select-icon-item-description">
                {{ option.description }}
              </span>
            </div>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>

    <div :id="instructionsId" class="listbox-select-icon-sr-only">
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
.listbox-select-icon-root {
  width: 100%;
}

:deep(.listbox-select-icon-trigger) {
  height: 3.3125rem;
  background: #fff;
  border: 1px solid var(--rds-light-4, #d0d0d0);
  color: var(--rds-dark-1, #747474);
  font-size: 14px;
  line-height: 1.5;
  padding-left: 1rem;
  padding-right: 1rem;
  cursor: pointer;
  outline: none;
  text-align: left;
}

:deep(.listbox-select-icon-trigger:focus) {
  outline: 2px solid #000;
  outline-offset: 2px;
  box-shadow: none;
}

:deep(.listbox-select-icon-trigger-invalid) {
  border-color: var(--rds-danger, #cc2f2f);
  border-bottom-width: 0.25rem;
}

:deep(.listbox-select-icon-trigger-invalid:focus) {
  border-color: var(--rds-danger, #cc2f2f);
}

:deep(.listbox-select-icon-trigger[data-placeholder]) {
  color: var(--rds-dark-1, #747474);
}

:deep(.listbox-select-icon-trigger-selected) {
  color: var(--rds-dark-3, #191919);
}

.listbox-select-icon-value-text {
  color: var(--rds-dark-3, #191919);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
}

.listbox-select-icon-actions {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
  flex-shrink: 0;
}

.listbox-select-icon-clear {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: var(--rds-dark-1, #747474);
  cursor: pointer;
  padding: 0.25rem;
  line-height: 1;
}

.listbox-select-icon-chevron-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--rds-dark-1, #747474);
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

:deep(.listbox-select-icon-trigger[data-state='open']) .listbox-select-icon-chevron-wrapper {
  transform: rotate(180deg);
}

.listbox-select-icon-chevron {
  forced-color-adjust: auto;
  display: block;
  width: 20px;
  height: 20px;
}

:deep(.listbox-select-icon-content) {
  margin-top: 0;
  width: 100%;
  min-width: 100%;
  background: #fff;
  border: 1px solid var(--rds-light-4, #d0d0d0);
  border-top: 0;
  border-radius: 0;
  box-shadow: none;
}

:deep(.listbox-select-icon-content .select-viewport) {
  max-height: 19rem;
  background: #fff;
}

:deep(.listbox-select-icon-option) {
  padding: 1rem;
  border-bottom: 0;
  color: var(--rds-dark-3, #191919);
  background: #fff;
  cursor: pointer;
}

:deep(.listbox-select-icon-option[data-highlighted]) {
  background: #fff;
  color: var(--rds-dark-3, #191919);
  outline: 2px solid #000;
  outline-offset: -2px;
}

:deep(.listbox-select-icon-option[data-state='checked']) {
  background: var(--rds-secondary, #ffc627);
}

.listbox-select-icon-item-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-width: 0;
}

.listbox-select-icon-media {
  width: 2rem;
  height: 2rem;
  flex: 0 0 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.listbox-select-icon-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.listbox-select-icon-glyph {
  font-size: 1.5rem;
  line-height: 1;
}

.listbox-select-icon-item-text {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  min-width: 0;
}

.listbox-select-icon-item-label {
  font-size: 16px;
  line-height: 1.3;
}

.listbox-select-icon-item-description {
  font-size: 0.875rem;
  line-height: 1.3;
  color: var(--rds-dark-1, #747474);
}

.listbox-select-icon-sr-only {
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
