<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { faChevronDown } from '@fortawesome/pro-light-svg-icons'
import Fuse from 'fuse.js'
import { computed, nextTick, ref, useSlots, watch } from 'vue'
import { Button, ButtonCloseIcon } from '@/components/ui/Button'
import { FontAwesomeIcon } from '@/components/ui/icon'
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
const searchInputRef = ref<HTMLInputElement | null>(null)
const activeOptionIndex = ref<number | null>(null)
const comboboxRef = ref<{
  highlightItem?: (value: unknown) => void
  getHighlightedElement?: () => HTMLElement | undefined
} | null>(null)

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
const searchInputId = computed(() => `${props.id}-panel-search`)
const listboxId = computed(() => `${props.id}-panel-listbox`)
const describedBy = computed(() =>
  [instructionsId.value, ariaDescribedBy.value].filter(Boolean).join(' ')
)
const activeDescendantId = computed(() =>
  activeOptionIndex.value === null
    ? undefined
    : `${searchInputId.value}-option-${activeOptionIndex.value}`
)

const selectedSummary = computed(() => {
  if (selectedOptions.value.length === 0) {
    return ''
  }

  if (selectedOptions.value.length <= 2) {
    return selectedOptions.value.map((option) => option.label).join(', ')
  }

  return `${selectedOptions.value[0]?.label}, ${selectedOptions.value[1]?.label} +${selectedOptions.value.length - 2} more`
})
const triggerPlaceholder = computed(() =>
  selectedOptions.value.length > 0 ? '' : props.placeholder
)

function focusInput() {
  const input = document.getElementById(props.id) as HTMLInputElement | null
  if (!input) {
    return
  }
  input.focus({ preventScroll: true })
  const textLength = input.value.length
  input.setSelectionRange(textLength, textLength)
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

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement | null
  if (!target) {
    return
  }

  searchTermModel.value = target.value
  activeOptionIndex.value = null
}

function handleOpenChange(value: boolean) {
  isOpen.value = value
  searchTermModel.value = ''
  activeOptionIndex.value = null

  if (value) {
    focusSearchInput()
  }
}

function clearSelection() {
  model.value = []
  searchTermModel.value = ''
  nextTick(() => {
    focusInput()
  })
}

function handleInputClick() {
  focusInput()
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

watch(filteredOptions, (options) => {
  if (
    activeOptionIndex.value !== null &&
    (activeOptionIndex.value >= options.length || options[activeOptionIndex.value]?.disabled)
  ) {
    activeOptionIndex.value = null
  }
})

function activateActiveOption() {
  if (activeOptionIndex.value === null) {
    return false
  }

  const option = filteredOptions.value[activeOptionIndex.value]
  if (!option || option.disabled) {
    return false
  }

  model.value = isSelected(option)
    ? model.value.filter((value) => !isSameValue(value, option.value))
    : [...model.value, option.value]
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
    focusInput()
  }
}

const liveMessage = computed(() => {
  if (props.loading) {
    return props.loadingText
  }

  if (!isOpen.value) {
    if (selectedOptions.value.length === 0) {
      return 'No options selected.'
    }

    const optionLabel = selectedOptions.value.length === 1 ? 'option' : 'options'
    return `${selectedOptions.value.length} ${optionLabel} selected.`
  }

  const count = filteredOptions.value.length
  if (count === 0) {
    return props.emptyText
  }

  const resultLabel = count === 1 ? 'result' : 'results'
  return `${count} ${resultLabel} available. Use arrow keys to navigate and Enter or Space to toggle selection.`
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
      :multiple="true"
      class="combobox-multi-root"
      @update:open="handleOpenChange"
    >
      <ComboboxInput
        :id="props.id"
        :placeholder="triggerPlaceholder"
        :open-on-click="true"
        :open-on-focus="false"
        :aria-invalid="props.invalid ? 'true' : undefined"
        :aria-describedby="describedBy"
        :readonly="true"
        :class="
          cn('combobox-multi-input', {
            'combobox-multi-input-selected': selectedOptions.length > 0,
          })
        "
        @click="handleInputClick"
      >
        <span
          v-if="selectedSummary"
          class="combobox-multi-summary"
          style="font-weight: 400 !important;"
          aria-hidden="true"
        >
          {{ selectedSummary }}
        </span>

        <div class="combobox-multi-actions">
          <Button
            v-if="showClearButton"
            variant="close"
            aria-label="Clear selected values"
            class="combobox-multi-clear"
            @mousedown.prevent
            @click.stop="clearSelection"
          >
            <template #close>
              <ButtonCloseIcon aria-hidden="true" />
            </template>
            Clear selected values
          </Button>

          <ComboboxTrigger as-child>
            <button
              type="button"
              class="combobox-multi-toggle"
              :aria-label="isOpen ? 'Collapse options' : 'Expand options'"
              @mousedown.prevent
            >
              <FontAwesomeIcon
                :icon="faChevronDown"
                class="combobox-multi-chevron"
                aria-hidden="true"
              />
            </button>
          </ComboboxTrigger>
        </div>
      </ComboboxInput>

      <ComboboxContent class="combobox-multi-content">
        <template #beforeViewport>
          <div class="combobox-multi-search-shell">
            <label :for="searchInputId" class="combobox-multi-sr-only">Search options</label>
            <input
              :id="searchInputId"
              ref="searchInputRef"
              type="text"
              class="combobox-multi-search"
              placeholder="Search..."
              :value="searchTermModel"
              role="searchbox"
              :aria-controls="listboxId"
              :aria-activedescendant="activeDescendantId"
              @input="handleInput"
              @keydown="handleSearchInputKeydown"
            >
          </div>
        </template>

        <div v-if="props.loading" :id="listboxId" class="combobox-multi-status">
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
            :data-selected="isSelected(option) ? 'true' : undefined"
            class="combobox-multi-option"
          >
            <div class="combobox-multi-option-content">
              <div class="combobox-multi-option-copy">
                <span class="combobox-multi-option-label">{{ option.label }}</span>
                <span v-if="option.description" class="combobox-multi-option-description">
                  {{ option.description }}
                </span>
              </div>
              <span v-if="isSelected(option)" class="combobox-multi-option-check" aria-hidden="true">✓</span>
            </div>
          </ComboboxItem>
        </div>
      </ComboboxContent>
    </Combobox>

    <div :id="instructionsId" class="combobox-multi-sr-only">
      Press Enter, Space, or Arrow Down to expand. Search inside the dropdown, use Arrow keys to
      move through options, Enter to toggle selection, and Escape to close.
    </div>
    <div aria-live="polite" aria-atomic="true" class="combobox-multi-sr-only">
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
:deep(.combobox-multi-root) {
  width: 100%;
}

:deep(.combobox-anchor) {
  position: relative;
  display: inline-flex;
  align-items: center !important;
  min-height: 3.3125rem;
  border: 1px solid var(--rds-light-4, #d0d0d0);
  border-radius: 0;
  background: #fff;
  padding: 0 5rem 0 0;
}

:deep(.combobox-anchor:focus-within) {
  outline: 2px solid #000;
  outline-offset: 2px;
}

:deep(.combobox-multi-input.combobox-input) {
  flex: 1 1 auto !important;
  min-width: 0;
  width: 100% !important;
  min-height: 3.3125rem !important;
  height: 3.3125rem !important;
  border: none;
  box-shadow: none;
  outline: none;
  background: transparent;
  color: var(--rds-dark-3, #191919);
  caret-color: var(--rds-dark-3, #191919);
  font-family: var(--rds-font-family, Arial, Helvetica, "Nimbus Sans L", "Liberation Sans", FreeSans, sans-serif);
  font-size: 16px;
  font-weight: 400 !important;
  line-height: 1.5;
  padding: 0 1rem !important;
  margin: 0 !important;
  vertical-align: middle;
  cursor: pointer;
}

:deep(.combobox-multi-input.combobox-input::placeholder) {
  color: var(--rds-dark-1, #747474);
}

:deep(.combobox-multi-input-selected.combobox-input) {
  color: var(--rds-dark-3, #191919);
  font-weight: 400 !important;
}

:deep(input.combobox-multi-input.combobox-input),
:deep(input.combobox-multi-input.combobox-input.combobox-multi-input-selected) {
  font-weight: 400 !important;
}

.combobox-multi-summary {
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

.combobox-multi-actions {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  /* 1.125rem gap + 6px inside-clear-button padding = 24px between icon glyphs */
  gap: 1.125rem;
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
  width: 16px;
  height: 16px;
  padding: 0;
}

.combobox-multi-clear {
  width: 2.75rem;
  height: 2.75rem;
}

.combobox-multi-clear.rds-button--close {
  width: 1.75rem;
  height: 1.75rem;
}

.combobox-multi-clear.rds-button--close .rds-button__close-icon {
  width: 0.875rem;
  height: 0.875rem;
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
  width: 16px;
  height: 16px;
}

.combobox-multi-search-shell {
  padding: 0.625rem;
  border-bottom: 1px solid var(--rds-light-3, #e8e8e8);
  background: #fff;
}

.combobox-multi-search {
  width: 100%;
  min-height: 3rem;
  border: 1px solid var(--rds-light-4, #d0d0d0);
  background: #fff;
  color: var(--rds-dark-3, #191919);
  font-size: 1rem;
  line-height: 1.5;
  padding: 0.75rem 1rem;
}

.combobox-multi-search::placeholder {
  color: var(--rds-dark-1, #747474);
}

.combobox-multi-search:focus {
  outline: 2px solid #000;
  outline-offset: 2px;
  box-shadow: none;
}

:deep(.combobox-multi-content) {
  margin-top: 0.375rem;
  width: 100%;
  min-width: 100%;
  background: #fff;
  border: 1px solid var(--rds-light-4, #d0d0d0);
  border-radius: 0;
  box-shadow: 0 10px 30px rgba(25, 25, 25, 0.12);
}

:deep(.combobox-multi-content .combobox-viewport) {
  max-height: 19rem;
  background: #fff;
}

:deep(.combobox-multi-option) {
  padding: 1rem;
  color: var(--rds-dark-3, #191919);
  background: #fff;
  cursor: pointer;
}

:deep(.combobox-multi-option[data-highlighted]),
:deep(.combobox-multi-option[data-active='true']) {
  background: var(--rds-gold, #ffc627);
  color: var(--rds-dark-3, #191919);
  outline: none;
}

:deep(.combobox-multi-option[data-state='checked']),
:deep(.combobox-multi-option[data-selected='true']) {
  background: var(--rds-gold, #ffc627);
  color: var(--rds-dark-3, #191919);
  font-weight: 400;
}

.combobox-multi-option-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.combobox-multi-option-copy {
  display: flex;
  min-width: 0;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 0.125rem;
}

.combobox-multi-option-label {
  font-size: 16px;
  line-height: 1.3;
}

.combobox-multi-option-description {
  font-size: 0.875rem;
  line-height: 1.3;
  color: var(--rds-dark-1, #747474);
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
