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

export interface ComboboxSelectOption {
  label: string
  value: unknown
  description?: string
  keywords?: string[]
  disabled?: boolean
}

type InputOption = ComboboxSelectOption | string | number | boolean | Record<string, unknown>

interface Props {
  id: string
  options: InputOption[]
  modelValue?: unknown | null
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
  openOnClick?: boolean
  openOnFocus?: boolean
  optionLabelKey?: string
  optionValueKey?: string
  optionDescriptionKey?: string
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  searchTerm: '',
  optional: false,
  placeholder: 'Enter text',
  invalid: false,
  disabled: false,
  required: false,
  clearable: false,
  loading: false,
  loadingText: 'Loading options...',
  emptyText: 'No matching results',
  openOnClick: true,
  openOnFocus: false,
  optionLabelKey: 'label',
  optionValueKey: 'value',
  optionDescriptionKey: 'description',
})

const emit = defineEmits<{
  change: [value: unknown | null]
}>()

const model = defineModel<unknown | null>({ default: null })
const searchTermModel = defineModel<string>('searchTerm', { default: '' })
const isOpen = ref(false)
const searchInputRef = ref<HTMLInputElement | null>(null)

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

function normalizeOption(option: InputOption): ComboboxSelectOption {
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
  searchTermModel.value = ''
  focusTriggerInput()
}

function focusTriggerInput() {
  nextTick(() => {
    const input = getInputElement()
    if (!input) {
      return
    }
    input.focus({ preventScroll: true })
    const textLength = input.value.length
    input.setSelectionRange(textLength, textLength)
  })
}

function focusSearchInput() {
  nextTick(() => {
    requestAnimationFrame(() => {
      const input = searchInputRef.value
      if (!input || !isOpen.value) {
        return
      }

      input.focus({ preventScroll: true })
      const textLength = input.value.length
      input.setSelectionRange(textLength, textLength)
    })
  })
}

function getInputElement() {
  return document.getElementById(props.id) as HTMLInputElement | null
}

function getTriggerElement() {
  return getInputElement()
    ?.closest('.combobox-anchor')
    ?.querySelector('button[aria-haspopup="listbox"]') as HTMLButtonElement | null
}

function clearInputTextSelection() {
  const collapseSelection = () => {
    const input = getInputElement()
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

function handleEscapeKeydown(event: KeyboardEvent) {
  if (event.key !== 'Escape') {
    return
  }

  clearInputTextSelection()

  if (!isOpen.value) {
    return
  }

  event.preventDefault()
  getTriggerElement()?.click()
}

function handleInputKeydown(event: KeyboardEvent) {
  // Keep default Reka keyboard behavior, but force a close from the first Escape press.
  handleEscapeKeydown(event)
}

function handleComboboxKeydown(event: KeyboardEvent) {
  handleEscapeKeydown(event)
}

function handleOpenChange(value: boolean) {
  isOpen.value = value
  searchTermModel.value = ''

  if (value) {
    focusSearchInput()
  }
}

const instructionsId = computed(() => `${props.id}-instructions`)
const searchInputId = computed(() => `${props.id}-panel-search`)
const describedBy = computed(() =>
  [instructionsId.value, ariaDescribedBy.value].filter(Boolean).join(' ')
)
const selectedLabel = computed(() => selectedOption.value?.label ?? '')
const inputDisplayValue = computed(() => (_value: unknown) => selectedLabel.value)

function handleSearchInput(event: Event) {
  const target = event.target as HTMLInputElement | null
  if (!target) {
    return
  }

  searchTermModel.value = target.value
}

function focusPanelOption(direction: 'next' | 'prev') {
  const content = searchInputRef.value?.closest('[data-slot="combobox-content"]')
  if (!content) {
    return
  }

  const options = Array.from(
    content.querySelectorAll<HTMLElement>('[data-slot="combobox-item"]:not([data-disabled])')
  )

  if (options.length === 0) {
    return
  }

  const target = direction === 'prev' ? options.at(-1) : options[0]
  target?.focus()
}

function handleSearchInputKeydown(event: KeyboardEvent) {
  if (event.key === 'ArrowDown') {
    event.preventDefault()
    focusPanelOption('next')
    return
  }

  if (event.key === 'ArrowUp') {
    event.preventDefault()
    focusPanelOption('prev')
    return
  }

  if (event.key === 'Escape') {
    event.preventDefault()
    isOpen.value = false
    focusTriggerInput()
  }
}

function isSelectedOption(value: unknown) {
  return isSameValue(value, model.value)
}

const liveMessage = computed(() => {
  if (props.loading) {
    return props.loadingText
  }

  if (!isOpen.value) {
    if (selectedOption.value?.label) {
      return `Selected ${selectedOption.value.label}.`
    }
    return 'No option selected.'
  }

  const count = filteredOptions.value.length
  if (count === 0) {
    return props.emptyText
  }

  const resultLabel = count === 1 ? 'result' : 'results'
  return `${count} ${resultLabel} available. Use arrow keys to navigate and Enter to select.`
})
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
      :open="isOpen"
      class="combobox-select-root"
      @update:open="handleOpenChange"
      @keydown.capture="handleComboboxKeydown"
    >
      <div class="position-relative search-input drop-down-toggle w-100 d-flex">
        <div class="selected-options d-flex w-100">
          <ComboboxInput
            :id="props.id"
            :placeholder="props.placeholder"
            :open-on-click="props.openOnClick"
            :open-on-focus="props.openOnFocus"
            :display-value="inputDisplayValue"
            :aria-invalid="props.invalid ? 'true' : undefined"
            :aria-describedby="describedBy"
            :readonly="true"
            :class="
              cn('combobox-select-input search-input-field', {
                'combobox-select-has-clear': showClearButton,
                'combobox-select-input-invalid': props.invalid,
                'combobox-select-input-selected': Boolean(selectedLabel),
              })
            "
            @click="handleInputClick"
            @focus="handleInputFocus"
            @keydown="handleInputKeydown"
            @mouseup="handleInputMouseUp"
          >
            <button
              v-if="showClearButton"
              type="button"
              aria-label="Clear selected value"
              class="combobox-select-clear ms-auto me-space-sm pe-space-xxs"
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
                class="combobox-select-toggle dropdown-chevron my-auto"
                :aria-label="isOpen ? 'Collapse options' : 'Expand options'"
                @mousedown.prevent
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="41 169 430 238"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="combobox-select-chevron"
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

      <ComboboxContent class="combobox-select-content">
        <template #beforeViewport>
          <div class="combobox-select-search-shell">
            <label :for="searchInputId" class="combobox-select-sr-only">Search options</label>
            <input
              :id="searchInputId"
              ref="searchInputRef"
              type="text"
              class="combobox-select-search"
              placeholder="Search..."
              :value="searchTermModel"
              @input="handleSearchInput"
              @keydown="handleSearchInputKeydown"
            >
          </div>
        </template>

        <div v-if="props.loading" class="combobox-select-status">
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
            class="combobox-select-option"
          >
            <div class="combobox-select-item-content">
              <div class="combobox-select-item-copy">
                <span class="combobox-select-item-label">{{ option.label }}</span>
                <span v-if="option.description" class="combobox-select-item-description">
                  {{ option.description }}
                </span>
              </div>
              <span
                v-if="isSelectedOption(option.value)"
                class="combobox-select-item-check"
                aria-hidden="true"
              >
                ✓
              </span>
            </div>
          </ComboboxItem>
        </template>
      </ComboboxContent>
    </Combobox>

    <div :id="instructionsId" class="combobox-select-sr-only">
      Press Enter, Space, or Arrow Down to expand. Search inside the dropdown, use Arrow keys to
      move through options, Enter to select, and Escape to close.
    </div>
    <div aria-live="polite" aria-atomic="true" class="combobox-select-sr-only">
      {{ liveMessage }}
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
.combobox-select-clear {
  position: absolute;
  right: 2.75rem;
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

.combobox-select-clear:hover {
  color: var(--rds-dark-2, #484848);
}

.combobox-select-clear:focus-visible {
  outline: 2px solid #000;
  outline-offset: 2px;
}

.combobox-select-status {
  padding: 1rem;
  font-size: 0.875rem;
  color: var(--rds-dark-2, #484848);
  background: #fff;
}

.combobox-select-search-shell {
  padding: 0.625rem;
  border-bottom: 1px solid var(--rds-light-3, #e8e8e8);
  background: #fff;
}

.combobox-select-search {
  width: 100%;
  min-height: 3rem;
  border: 1px solid var(--rds-light-4, #d0d0d0);
  background: #fff;
  color: var(--rds-dark-3, #191919);
  font-size: 1rem;
  line-height: 1.5;
  padding: 0.75rem 1rem;
}

.combobox-select-search::placeholder {
  color: var(--rds-dark-1, #747474);
}

.combobox-select-search:focus {
  outline: 2px solid #000;
  outline-offset: 2px;
  box-shadow: none;
}

.combobox-select-item-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  min-width: 0;
}

.combobox-select-item-copy {
  display: flex;
  flex: 1 1 auto;
  min-width: 0;
  flex-direction: column;
  gap: 0.125rem;
}

.combobox-select-item-label {
  font-size: 16px;
  line-height: 1.3;
}

.combobox-select-item-check {
  flex: 0 0 auto;
  color: var(--rds-dark-3, #191919);
  font-size: 1rem;
  font-weight: 700;
}

.combobox-select-item-description {
  font-size: 0.875rem;
  line-height: 1.3;
  color: var(--rds-dark-1, #747474);
}

.combobox-select-toggle {
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

.combobox-select-toggle:hover {
  color: var(--rds-dark-3, #191919);
}

.combobox-select-toggle[aria-expanded='true'] {
  transform: translateY(-50%) rotate(180deg);
}

.combobox-select-toggle[data-state='open'] {
  transform: translateY(-50%) rotate(180deg);
}

.combobox-select-toggle:focus-visible {
  outline: 2px solid #000;
  outline-offset: 2px;
}

.combobox-select-sr-only {
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

.combobox-select-chevron {
  forced-color-adjust: auto;
  display: block;
  width: 20px;
  height: 20px;
  flex: 0 0 20px;
}

:deep(.combobox-select-root) {
  width: 100%;
}

:deep(.combobox-select-input) {
  height: 3.3125rem;
  background: #fff;
  border: 1px solid var(--rds-light-4, #d0d0d0);
  color: var(--rds-dark-3, #191919);
  font-size: 16px;
  line-height: 1.5;
  padding-left: 1rem;
  padding-right: 4.75rem;
  cursor: pointer;
}

:deep(.combobox-select-input-invalid) {
  border-color: var(--rds-danger, #cc2f2f);
  border-bottom-width: 0.25rem;
  padding-right: 4.75rem;
}

:deep(.combobox-select-input-invalid:focus) {
  border-color: var(--rds-danger, #cc2f2f);
}

:deep(.combobox-select-input-selected) {
  color: var(--rds-dark-3, #191919);
}

:deep(.search-input-field) {
  position: relative;
}

:deep(.combobox-select-input::placeholder) {
  color: var(--rds-dark-1, #747474);
}

:deep(.combobox-select-input:focus) {
  outline: 2px solid #000;
  outline-offset: 2px;
  box-shadow: none;
}

:deep(.combobox-select-content) {
  margin-top: 0.375rem;
  width: 100%;
  min-width: 100%;
  background: #fff;
  border: 1px solid var(--rds-light-4, #d0d0d0);
  border-radius: 0;
  box-shadow: 0 10px 30px rgba(25, 25, 25, 0.12);
}

:deep(.combobox-select-content .combobox-viewport) {
  max-height: 19rem;
  background: #fff;
  cursor: pointer;
}

:deep(.combobox-select-option) {
  padding: 1rem;
  color: var(--rds-dark-3, #191919);
  background: #fff;
  cursor: pointer;
}

:deep(.combobox-select-option .combobox-item-indicator) {
  display: none;
}

:deep(.combobox-select-option .combobox-item-text) {
  white-space: normal;
}

:deep(.combobox-select-option[data-highlighted]) {
  background: var(--rds-light-2, #f1f1f1);
  color: var(--rds-dark-3, #191919);
  outline: none;
}

:deep(.combobox-select-option[data-state='checked']) {
  background: #d9d9d9;
  font-weight: 600;
}

:deep(.combobox-select-option[data-disabled]) {
  color: var(--rds-dark-1, #747474);
  opacity: 0.7;
}
</style>
