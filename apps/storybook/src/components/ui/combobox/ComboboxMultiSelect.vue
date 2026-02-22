<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import Fuse from 'fuse.js'
import { computed, nextTick, ref, useSlots, watch } from 'vue'
import { InputError } from '@/components/ui/InputError'
import { InputHelp } from '@/components/ui/InputHelp'
import { InputRoot } from '@/components/ui/InputRoot'
import { Label } from '@/components/ui/Label'
import { cn } from '@/lib/util'
import Combobox from './Combobox.vue'
import ComboboxContent from './ComboboxContent.vue'
import ComboboxEmpty from './ComboboxEmpty.vue'
import ComboboxInput from './ComboboxInput.vue'
import ComboboxItem from './ComboboxItem.vue'
import ComboboxTrigger from './ComboboxTrigger.vue'

export interface ComboboxMultiSelectOption {
  label: string
  value: unknown
  description?: string
  keywords?: string[]
  disabled?: boolean
}

type InputOption = ComboboxMultiSelectOption | string | number | boolean | Record<string, unknown>

interface Props {
  id: string
  options: InputOption[]
  modelValue?: unknown[]
  searchTerm?: string
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
  loading?: boolean
  loadingText?: string
  emptyText?: string
  optionLabelKey?: string
  optionValueKey?: string
  optionDescriptionKey?: string
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => [],
  searchTerm: '',
  optional: false,
  placeholder: 'Type to search',
  invalid: false,
  disabled: false,
  required: false,
  clearable: true,
  loading: false,
  loadingText: 'Loading options...',
  emptyText: 'No matching results',
  optionLabelKey: 'label',
  optionValueKey: 'value',
  optionDescriptionKey: 'description',
})

const emit = defineEmits<{
  change: [value: unknown[]]
}>()

const model = defineModel<unknown[]>({ default: () => [] })
const searchTermModel = defineModel<string>('searchTerm', { default: '' })
const isOpen = ref(false)

const slots = useSlots()

watch(
  () => model.value,
  (value) => emit('change', value)
)

function hasOwn(obj: Record<string, unknown>, key: string) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

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

function normalizeOption(option: InputOption): ComboboxMultiSelectOption {
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
      keywords: Array.isArray(option.keywords)
        ? option.keywords.filter((keyword): keyword is string => typeof keyword === 'string')
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

const fuse = computed(
  () =>
    new Fuse(normalizedOptions.value, {
      keys: ['label', 'description', 'keywords'],
      threshold: 0.35,
      ignoreLocation: true,
      minMatchCharLength: 1,
    })
)

const selectedOptions = computed(() =>
  normalizedOptions.value.filter((option) =>
    model.value.some((value) => isSameValue(value, option.value))
  )
)

function isSelected(option: ComboboxMultiSelectOption) {
  return model.value.some((value) => isSameValue(value, option.value))
}

const filteredOptions = computed(() => {
  if (props.loading) {
    return []
  }

  const query = searchTermModel.value.trim()
  if (!query) {
    return normalizedOptions.value
  }

  const fuzzyResults = fuse.value.search(query).map((result) => result.item)
  if (fuzzyResults.length > 0) {
    return fuzzyResults
  }

  const fallbackQuery = query.toLowerCase()
  return normalizedOptions.value.filter((option) =>
    [option.label, option.description ?? '', ...(option.keywords ?? [])]
      .join(' ')
      .toLowerCase()
      .includes(fallbackQuery)
  )
})

const showClearButton = computed(() => props.clearable && !props.disabled && model.value.length > 0)
const inputPlaceholder = computed(() =>
  model.value.length === 0 && searchTermModel.value.trim().length === 0 ? props.placeholder : ''
)

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

const instructionsId = computed(() => `${props.id}-instructions`)
const describedBy = computed(() =>
  [instructionsId.value, ariaDescribedBy.value].filter(Boolean).join(' ')
)

const inputDisplayValue = computed(() => (_value: unknown) => searchTermModel.value)

function focusInput() {
  const input = document.getElementById(props.id) as HTMLInputElement | null
  if (!input) {
    return
  }
  input.focus({ preventScroll: true })
  const textLength = input.value.length
  input.setSelectionRange(textLength, textLength)
}

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement | null
  if (!target) {
    return
  }

  searchTermModel.value = target.value
}

function handleInputClick() {
  focusInput()
}

function handleRootClick() {
  focusInput()
}

function handleOpenChange(value: boolean) {
  isOpen.value = value
}

function removeValue(value: unknown) {
  model.value = model.value.filter((item) => !isSameValue(item, value))
  nextTick(() => {
    focusInput()
  })
}

function clearSelection() {
  model.value = []
  searchTermModel.value = ''
  nextTick(() => {
    focusInput()
  })
}

function handleBadgeMouseDown(event: MouseEvent) {
  event.preventDefault()
}
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
      v-model:search-term="searchTermModel"
      :disabled="props.disabled"
      :required="props.required"
      :name="props.name"
      :ignore-filter="true"
      :open-on-click="true"
      :multiple="true"
      class="combobox-multi-root"
      @click.capture="handleRootClick"
      @update:open="handleOpenChange"
    >
      <ComboboxInput
        :id="props.id"
        :placeholder="inputPlaceholder"
        :display-value="inputDisplayValue"
        :open-on-click="true"
        :open-on-focus="false"
        :aria-invalid="props.invalid ? 'true' : undefined"
        :aria-describedby="describedBy"
        :class="cn('combobox-multi-input')"
        @click="handleInputClick"
        @input="handleInput"
      >
        <button
          v-for="option in selectedOptions"
          :key="String(option.value)"
          type="button"
          class="combobox-multi-badge"
          :aria-label="`Remove ${option.label}`"
          @mousedown="handleBadgeMouseDown"
          @click.stop="removeValue(option.value)"
        >
          <span class="combobox-multi-badge-label">{{ option.label }}</span>
          <span class="combobox-multi-badge-close">×</span>
        </button>

        <div class="combobox-multi-actions">
          <button
            v-if="showClearButton"
            type="button"
            aria-label="Clear selected values"
            class="combobox-multi-clear"
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

          <ComboboxTrigger as-child>
            <button
              type="button"
              class="combobox-multi-toggle"
              :aria-label="isOpen ? 'Collapse options' : 'Expand options'"
              @mousedown.prevent
            >
              <svg
                width="20"
                height="20"
                viewBox="41 169 430 238"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="combobox-multi-chevron"
                aria-hidden="true"
              >
                <path
                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </ComboboxTrigger>
        </div>
      </ComboboxInput>

      <ComboboxContent class="combobox-multi-content">
        <div v-if="props.loading" class="combobox-multi-status">
          {{ props.loadingText }}
        </div>

        <template v-else>
          <ComboboxEmpty v-if="filteredOptions.length === 0">
            {{ props.emptyText }}
          </ComboboxEmpty>

          <ComboboxItem
            v-for="(option, index) in filteredOptions"
            v-else
            :key="`${option.label}-${index}`"
            :value="option.value"
            :disabled="option.disabled"
            class="combobox-multi-option"
          >
            <div class="combobox-multi-option-content">
              <span v-if="isSelected(option)" class="combobox-multi-option-check" aria-hidden="true">✓</span>
              <span class="combobox-multi-option-label">{{ option.label }}</span>
            </div>
          </ComboboxItem>
        </template>
      </ComboboxContent>
    </Combobox>

    <div :id="instructionsId" class="combobox-multi-sr-only">
      Type to filter options. Press Enter to toggle selection. Selected items appear as badges and wrap to a new line.
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
:deep(.combobox-multi-root) {
  width: 100%;
}

:deep(.combobox-anchor) {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center !important;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 0.375rem;
  min-height: 3.3125rem;
  border: 1px solid var(--rds-light-4, #d0d0d0);
  border-radius: 0;
  background: #fff;
  padding: 0.5rem 5.75rem 0.5rem 0.75rem;
}

:deep(.combobox-anchor:focus-within) {
  outline: 2px solid #000;
  outline-offset: 2px;
}

:deep(.combobox-multi-input.combobox-input) {
  order: 2;
  flex: 1 1 2rem !important;
  min-width: 2rem;
  max-width: 100%;
  width: auto !important;
  min-height: 1.75rem !important;
  height: 1.75rem !important;
  border: none;
  box-shadow: none;
  outline: none;
  background: transparent;
  color: var(--rds-dark-3, #191919);
  caret-color: var(--rds-dark-3, #191919);
  font-size: 14px;
  line-height: 1.75rem;
  padding: 0 !important;
  margin: 0 !important;
  vertical-align: middle;
}

:deep(.combobox-multi-input.combobox-input::placeholder) {
  color: var(--rds-dark-1, #747474);
}

.combobox-multi-badge {
  order: 1;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  max-width: 100%;
  border: 1px solid var(--rds-light-4, #bdbdbd);
  border-radius: 0.5rem;
  padding: 0.1875rem 0.5rem;
  background: #e6e6e6;
  color: var(--rds-dark-3, #191919);
  font-size: 16px;
  line-height: 1.25;
  cursor: pointer;
}

.combobox-multi-badge-label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.combobox-multi-badge-close {
  color: var(--rds-dark-1, #747474);
  font-size: 1.75rem;
  line-height: 1;
  margin-top: -0.125rem;
}

.combobox-multi-actions {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 2;
}

.combobox-multi-clear,
.combobox-multi-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  color: var(--rds-dark-1, #747474);
  cursor: pointer;
  width: 20px;
  height: 20px;
  padding: 0;
}

:deep(.combobox-multi-input.combobox-input:focus) {
  outline: none;
  box-shadow: none;
}

.combobox-multi-toggle[data-state='open'],
.combobox-multi-toggle[aria-expanded='true'] {
  transform: rotate(180deg);
}

.combobox-multi-chevron {
  forced-color-adjust: auto;
  display: block;
  width: 20px;
  height: 20px;
}

:deep(.combobox-multi-content) {
  margin-top: 0;
  width: 100%;
  min-width: 100%;
  background: #fff;
  border: 1px solid var(--rds-light-4, #d0d0d0);
  border-top: 0;
  border-radius: 0;
  box-shadow: none;
}

:deep(.combobox-multi-content .combobox-viewport) {
  max-height: 19rem;
  background: #fff;
}

:deep(.combobox-multi-option) {
  padding: 1rem;
  border-bottom: 0;
  color: var(--rds-dark-3, #191919);
  background: #fff;
  cursor: pointer;
}

:deep(.combobox-multi-option[data-highlighted]) {
  background: #fff;
  color: var(--rds-dark-3, #191919);
  outline: 2px solid #000;
  outline-offset: -2px;
}

:deep(.combobox-multi-option[data-state='checked']) {
  background: var(--rds-secondary, #ffc627);
}

.combobox-multi-option-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.combobox-multi-option-label {
  font-size: 16px;
  line-height: 1.3;
}

.combobox-multi-option-check {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--rds-dark-3, #191919);
}

.combobox-multi-status {
  padding: 1rem;
  color: var(--rds-dark-1, #747474);
  font-size: 0.875rem;
}

.combobox-multi-sr-only {
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
