<script setup lang="ts">
import type { AcceptableValue } from 'reka-ui'
import type { ComponentPublicInstance, HTMLAttributes } from 'vue'
import { computed, nextTick, ref, useSlots, watch } from 'vue'
import { Button, ButtonCloseIcon } from '@/components/ui/Button'
import { FontAwesomeIcon } from '@/components/ui/icon'
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

export interface ListBoxOption {
  label: string
  value: AcceptableValue
  description?: string
  disabled?: boolean
}

type InputOption = ListBoxOption | string | number | boolean | Record<string, unknown>

interface Props {
  id: string
  options: InputOption[]
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
  change: [value: unknown | undefined]
}>()

const model = defineModel<unknown | undefined>({ default: undefined })
const selectModel = computed<AcceptableValue | undefined>({
  get: () => model.value as AcceptableValue | undefined,
  set: (value) => {
    model.value = value
  },
})
const isOpen = ref(false)
const slots = useSlots()
const triggerRef = ref<ComponentPublicInstance | HTMLElement | null>(null)

watch(
  () => model.value,
  (value) => {
    emit('change', value)
  }
)

function hasOwn(obj: Record<string, unknown>, key: string) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

function normalizeOption(option: InputOption): ListBoxOption {
  if (typeof option === 'string' || typeof option === 'number' || typeof option === 'boolean') {
    return {
      label: String(option),
      value: option as AcceptableValue,
      disabled: false,
    }
  }

  if ('label' in option && 'value' in option) {
    return {
      label: String(option.label),
      value: option.value as AcceptableValue,
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
    value: value as AcceptableValue,
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
    const trigger =
      triggerRef.value instanceof HTMLElement
        ? triggerRef.value
        : triggerRef.value?.$el instanceof HTMLElement
          ? triggerRef.value.$el
          : null
    trigger?.focus({ preventScroll: true })
  })
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
      v-model="selectModel"
      :disabled="props.disabled"
      :required="props.required"
      :name="props.name"
      class="listbox-select-root"
      @update:open="handleOpenChange"
    >
      <div class="listbox-select-trigger-shell">
        <SelectTrigger
          :id="props.id"
          ref="triggerRef"
          :aria-invalid="props.invalid ? 'true' : undefined"
          :aria-describedby="describedBy"
          :class="
            cn('listbox-select-trigger', {
              'listbox-select-has-clear': showClearButton,
              'listbox-select-trigger-invalid': props.invalid,
              'listbox-select-trigger-open': isOpen,
              'listbox-select-trigger-selected': hasValue,
            })
          "
        >
          <SelectValue :placeholder="props.placeholder">
            <span v-if="hasValue" class="listbox-select-value-text" style="font-weight: 400 !important;">{{ selectedLabel }}</span>
          </SelectValue>
        </SelectTrigger>

        <Button
          v-if="showClearButton"
          variant="close"
          aria-label="Clear selected value"
          class="listbox-select-clear"
          @mousedown.prevent
          @click.stop="clearSelection"
        >
          <template #close>
            <ButtonCloseIcon aria-hidden="true" />
          </template>
          Clear selected value
        </Button>

        <span
          :class="
            cn('listbox-select-chevron-wrapper', {
              'listbox-select-chevron-wrapper-open': isOpen,
            })
          "
          :data-state="isOpen ? 'open' : 'closed'"
        >
          <FontAwesomeIcon
            :icon="['fal', 'chevron-down']"
            class="listbox-select-chevron"
            aria-hidden="true"
          />
        </span>
      </div>

      <SelectContent class="listbox-select-content">
        <SelectItem
          v-for="(option, index) in normalizedOptions"
          :key="`${option.label}-${index}`"
          :value="option.value"
          :disabled="option.disabled"
          :text-value="option.label"
          class="listbox-select-option"
        >
          <div class="listbox-select-item-content">
            <span class="listbox-select-item-label">{{ option.label }}</span>
            <span v-if="option.description" class="listbox-select-item-description">
              {{ option.description }}
            </span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>

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
.listbox-select-root {
  width: 100%;
}

.listbox-select-trigger-shell {
  position: relative;
}

:deep(.listbox-select-trigger) {
  height: 3.3125rem;
  background: var(--rds-white, #fff);
  border: 1px solid var(--rds-light-4, #d0d0d0);
  color: var(--rds-dark-1, #747474);
  font-size: 1rem;
  font-weight: 400 !important;
  line-height: 1.5;
  padding-left: 1rem;
  padding-right: 6rem;
  cursor: pointer;
  outline: none;
  text-align: left;
}

:deep(.listbox-select-trigger:focus) {
  outline: 2px solid #000;
  outline-offset: 2px;
  box-shadow: none;
}

:deep(.listbox-select-trigger:focus-visible) {
  outline: 2px solid #000;
  outline-offset: 2px;
  box-shadow: none;
}

:deep(.listbox-select-trigger-invalid) {
  border-color: var(--rds-danger, #cc2f2f);
  border-bottom-width: 0.25rem;
}

:deep(.listbox-select-trigger-invalid:focus) {
  border-color: var(--rds-danger, #cc2f2f);
}

:deep(.listbox-select-trigger[data-placeholder]) {
  color: var(--rds-dark-1, #747474);
}

:deep(.listbox-select-trigger-selected) {
  color: var(--rds-dark-3, #191919);
}

.listbox-select-value-text {
  color: var(--rds-dark-3, #191919);
  font-weight: 400 !important;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
}

.listbox-select-clear {
  position: absolute;
  right: 3.125rem; /* 24px between X icon and chevron */
  top: 50%;
  transform: translateY(-50%);
}

.listbox-select-clear.rds-button--close {
  width: 1.75rem;
  height: 1.75rem;
}

.listbox-select-clear.rds-button--close .rds-button__close-icon {
  width: 0.875rem;
  height: 0.875rem;
}

.listbox-select-chevron-wrapper {
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
  transition: transform 0.2s ease, color 0.15s ease;
}

.listbox-select-chevron-wrapper-open,
.listbox-select-chevron-wrapper[data-state='open'] {
  transform: translateY(-50%);
}

.listbox-select-chevron-wrapper-open .listbox-select-chevron,
.listbox-select-chevron-wrapper[data-state='open'] .listbox-select-chevron {
  transform: rotate(180deg);
}

.listbox-select-chevron {
  forced-color-adjust: auto;
  display: block;
  width: 16px;
  height: 16px;
  flex: 0 0 16px;
  transform-origin: center;
  transition: transform 0.2s ease;
}

:deep(.listbox-select-content) {
  margin-top: 0;
  width: 100%;
  min-width: 100%;
  background: var(--rds-white, #fff);
  border: 1px solid var(--rds-light-4, #d0d0d0);
  border-top: 0;
  border-radius: 0;
  box-shadow: none;
}

:deep(.listbox-select-content .select-viewport) {
  max-height: 19rem;
  background: var(--rds-white, #fff);
  cursor: pointer;
}

:deep(.listbox-select-option) {
  padding: 1rem;
  border-bottom: 0;
  color: var(--rds-dark-3, #191919);
  background: var(--rds-white, #fff);
  cursor: pointer;
}

:global(.select-item.listbox-select-option:hover:not([data-disabled])),
:global(.select-item.listbox-select-option[data-highlighted]) {
  background: var(--rds-secondary, #ffc627) !important;
  color: var(--rds-dark-3, #191919) !important;
  outline: none;
}

:global(.select-item.listbox-select-option[data-state='checked']) {
  background: var(--rds-secondary, #ffc627) !important;
  color: var(--rds-dark-3, #191919) !important;
  font-weight: 400;
}

.listbox-select-item-content {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  min-width: 0;
}

.listbox-select-item-label {
  font-size: 1rem;
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
