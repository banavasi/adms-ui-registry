<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import Fuse from 'fuse.js'
import { computed, nextTick, ref, useSlots, watch } from 'vue'
import { Button, ButtonCloseIcon } from '@/components/ui/Button'
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
const activeOptionIndex = ref<number | null>(null)
const comboboxRef = ref<{
  highlightItem?: (value: unknown) => void
  getHighlightedElement?: () => HTMLElement | undefined
} | null>(null)

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
    const input = document.getElementById(props.id) as HTMLInputElement | null
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

function handleInputKeydown(event: KeyboardEvent) {
  // let Reka manage keyboard open/highlight logic so selected item stays active on open
  if (event.key === 'Escape') clearInputTextSelection()
}

function handleComboboxKeydown(event: KeyboardEvent) {
  // let Reka manage close behavior
  if (event.key === 'Escape') clearInputTextSelection()
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
const listboxId = computed(() => `${props.id}-panel-listbox`)
const describedBy = computed(() =>
  [instructionsId.value, ariaDescribedBy.value].filter(Boolean).join(' ')
)
const selectedLabel = computed(() => selectedOption.value?.label ?? '')
const inputDisplayValue = computed(() => (_value: unknown) => selectedLabel.value)
const activeDescendantId = computed(() =>
  activeOptionIndex.value === null
    ? undefined
    : `${searchInputId.value}-option-${activeOptionIndex.value}`
)

watch(filteredOptions, (options) => {
  if (
    activeOptionIndex.value !== null &&
    (activeOptionIndex.value >= options.length || options[activeOptionIndex.value]?.disabled)
  ) {
    activeOptionIndex.value = null
  }
})

function handleSearchInput(event: Event) {
  const target = event.target as HTMLInputElement | null
  if (!target) {
    return
  }

  searchTermModel.value = target.value
  activeOptionIndex.value = null
}

function highlightPanelOption(target: 'first' | 'last' | 'next' | 'prev') {
  const content = searchInputRef.value?.closest('[data-slot="combobox-content"]')
  if (!content) {
    return false
  }

  const options = Array.from(
    content.querySelectorAll<HTMLElement>('[data-slot="combobox-item"]:not([data-disabled])')
  )

  if (options.length === 0) {
    return false
  }

  const highlightedElement = comboboxRef.value?.getHighlightedElement?.()
  const highlightedIndex = highlightedElement ? options.indexOf(highlightedElement) : -1
  const activeElementIndex =
    activeOptionIndex.value === null
      ? -1
      : options.findIndex(
          (option) => Number(option.dataset.optionIndex) === activeOptionIndex.value
        )
  const currentElementIndex = activeElementIndex === -1 ? highlightedIndex : activeElementIndex

  let targetIndex = 0
  if (target === 'last') {
    targetIndex = options.length - 1
  } else if (target === 'next') {
    targetIndex =
      currentElementIndex === -1 ? 0 : Math.min(currentElementIndex + 1, options.length - 1)
  } else if (target === 'prev') {
    targetIndex =
      currentElementIndex === -1 ? options.length - 1 : Math.max(currentElementIndex - 1, 0)
  }

  const targetElement = options[targetIndex]
  if (!targetElement) {
    return false
  }

  const optionIndex = Number(targetElement.dataset.optionIndex)
  if (!Number.isInteger(optionIndex)) {
    return false
  }

  const option = filteredOptions.value[optionIndex]
  if (!option) {
    return false
  }

  activeOptionIndex.value = optionIndex
  comboboxRef.value?.highlightItem?.(option.value)
  targetElement.scrollIntoView({ block: 'nearest' })
  return true
}

function activateActiveOption() {
  if (activeOptionIndex.value === null) {
    return false
  }

  const option = filteredOptions.value[activeOptionIndex.value]
  if (!option || option.disabled) {
    return false
  }

  model.value = option.value
  searchTermModel.value = ''
  activeOptionIndex.value = null
  isOpen.value = false
  focusTriggerInput()
  return true
}

function handleSearchInputKeydown(event: KeyboardEvent) {
  if (event.key === 'ArrowDown') {
    event.preventDefault()
    event.stopPropagation()
    highlightPanelOption('next')
    return
  }

  if (event.key === 'ArrowUp') {
    event.preventDefault()
    event.stopPropagation()
    highlightPanelOption('prev')
    return
  }

  if (event.key === 'Home') {
    event.preventDefault()
    event.stopPropagation()
    highlightPanelOption('first')
    return
  }

  if (event.key === 'End') {
    event.preventDefault()
    event.stopPropagation()
    highlightPanelOption('last')
    return
  }

  if (event.key === 'Enter' || event.key === ' ') {
    if (activateActiveOption()) {
      event.preventDefault()
      event.stopPropagation()
    }
    return
  }

  if (event.key === 'Escape') {
    event.preventDefault()
    event.stopPropagation()
    activeOptionIndex.value = null
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
      ref="comboboxRef"
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
            :placeholder="selectedLabel ? '' : props.placeholder"
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
            <span
              v-if="selectedLabel"
              class="combobox-select-value"
              aria-hidden="true"
            >
              {{ selectedLabel }}
            </span>

            <Button
              v-if="showClearButton"
              variant="close"
              aria-label="Clear selected value"
              class="combobox-select-clear"
              @mousedown.prevent
              @click="clearSelection"
            >
              <template #close>
                <ButtonCloseIcon aria-hidden="true" />
              </template>
              Clear selected value
            </Button>

            <ComboboxTrigger as-child>
              <button
                type="button"
                class="combobox-select-toggle dropdown-chevron my-auto"
                :aria-label="isOpen ? 'Collapse options' : 'Expand options'"
                @mousedown.prevent
              >
                <svg
                  width="16"
                  height="16"
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
              role="searchbox"
              :aria-controls="listboxId"
              :aria-activedescendant="activeDescendantId"
              @input="handleSearchInput"
              @keydown="handleSearchInputKeydown"
            >
          </div>
        </template>

        <div v-if="props.loading" :id="listboxId" class="combobox-select-status">
          {{ props.loadingText }}
        </div>

        <div v-else :id="listboxId">
          <ComboboxEmpty v-if="filteredOptions.length === 0">
            {{ props.emptyText }}
          </ComboboxEmpty>

          <ComboboxItem
            v-for="(option, index) in filteredOptions"
            v-else
            :id="`${searchInputId}-option-${index}`"
            :key="`${option.label}-${index}`"
            :value="option.value"
            :disabled="option.disabled"
            :data-option-index="index"
            :data-active="activeOptionIndex === index ? 'true' : undefined"
            :data-selected="isSelectedOption(option.value) ? 'true' : undefined"
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
        </div>
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
  right: 3.125rem; /* 24px between X icon and chevron */
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
}

.combobox-select-clear.rds-button--close {
  width: 1.75rem;
  height: 1.75rem;
}

.combobox-select-clear.rds-button--close .rds-button__close-icon {
  width: 0.875rem;
  height: 0.875rem;
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

.combobox-select-value {
  position: absolute;
  left: 1rem;
  right: 5rem;
  top: 50%;
  transform: translateY(-50%);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  pointer-events: none;
  color: var(--rds-dark-3, #191919);
  font-family: var(--rds-font-family, Arial, Helvetica, "Nimbus Sans L", "Liberation Sans", FreeSans, sans-serif);
  font-size: 16px;
  font-weight: 400 !important;
  line-height: 1.5;
  z-index: 1;
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
  width: 16px;
  height: 16px;
  padding: 0;
  line-height: 1;
  z-index: 2;
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
  width: 16px;
  height: 16px;
  flex: 0 0 16px;
}

:deep(.combobox-select-root) {
  width: 100%;
}

:deep(.combobox-select-input) {
  height: 3.3125rem;
  background: #fff;
  border: 1px solid var(--rds-light-4, #d0d0d0);
  color: var(--rds-dark-3, #191919);
  font-family: var(--rds-font-family, Arial, Helvetica, "Nimbus Sans L", "Liberation Sans", FreeSans, sans-serif);
  font-size: 16px;
  font-weight: 400 !important;
  line-height: 1.5;
  padding-left: 1rem;
  padding-right: 5rem;
  cursor: pointer;
}

:deep(.combobox-select-input-invalid) {
  border-color: var(--rds-danger, #cc2f2f);
  border-bottom-width: 0.25rem;
  padding-right: 5rem;
}

:deep(.combobox-select-input-invalid:focus) {
  border-color: var(--rds-danger, #cc2f2f);
}

/* When a value is selected, the visible text is rendered by the
   absolutely-positioned .combobox-select-value span on top of the input.
   Hide the input's own text so they don't double-render (which makes the
   text look thicker/bold). The input stays focusable and keeps its caret. */
:deep(.combobox-select-input-selected) {
  color: transparent !important;
  text-shadow: none !important;
}

:deep(.combobox-select-input-selected::selection) {
  color: transparent !important;
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

:deep(.combobox-select-option[data-highlighted]),
:deep(.combobox-select-option[data-active='true']) {
  background: var(--rds-gold, #ffc627);
  color: var(--rds-dark-3, #191919);
  outline: none;
}

:deep(.combobox-select-option[data-state='checked']),
:deep(.combobox-select-option[data-selected='true']) {
  background: var(--rds-gold, #ffc627);
  color: var(--rds-dark-3, #191919);
  font-weight: 400;
}

:deep(.combobox-select-option[data-disabled]) {
  color: var(--rds-dark-1, #747474);
  opacity: 0.7;
}
</style>
