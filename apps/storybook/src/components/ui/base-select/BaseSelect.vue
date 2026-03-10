<script setup lang="ts">
import type { ComboboxRootProps } from 'reka-ui'
import { computed, ref, watch } from 'vue'
import { ComboboxMultiSelect, ComboboxSelect } from '@/components/ui/combobox'

type SelectOption = Record<string, unknown> | string | number | boolean

type BaseSelectLabelLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type BaseSelectLabelSize = 'small' | 'medium' | 'large'

interface BaseSelectProps {
  id: string
  label?: string
  labelLevel?: BaseSelectLabelLevel
  labelSize?: BaseSelectLabelSize
  placeholder?: string
  options: SelectOption[]
  isLabelVisible?: boolean
  isMultiSelect?: boolean
  isDisabled?: boolean
  isOptional?: boolean
  tooltipText?: string
  required?: boolean
  errors?: string[]
  customDropDownClass?: string
  error?: string
  hasError?: boolean
  isTypeable?: boolean
  isDeselectOptionVisible?: boolean
  noOptionsText?: string | null
  optionLabelKey?: string
  optionValueKey?: string
}

const props = withDefaults(defineProps<BaseSelectProps>(), {
  required: false,
  isLabelVisible: true,
  placeholder: 'Choose one...',
  labelLevel: 'h3',
  labelSize: 'small',
  isMultiSelect: false,
  isOptional: false,
  isDisabled: false,
  isTypeable: true,
  isDeselectOptionVisible: true,
  errors: () => [],
  noOptionsText: 'Nothing found. Check your spelling',
  optionLabelKey: 'text',
  optionValueKey: 'value',
})

const emit = defineEmits<{
  change: [value: BaseModelValue]
  remove: [value: unknown]
  search: [value: string]
}>()

const invalid = computed(
  () => props.errors.length > 0 || Boolean(props.error) || Boolean(props.hasError)
)
const errorText = computed(() => props.errors[0] || props.error || '')
const noOptionsText = computed(() => props.noOptionsText || 'Nothing found. Check your spelling')

type ComboboxModelValue = ComboboxRootProps['modelValue']
type ComboboxModelArray = ComboboxModelValue[]
type BaseModelValue = SelectOption | SelectOption[] | ComboboxModelValue | ComboboxModelArray | null

const model = defineModel<BaseModelValue>()
const searchTerm = ref('')

watch(searchTerm, (value) => {
  emit('search', value)
})

function getOptionValue(value: unknown) {
  if (value === null || value === undefined) {
    return value
  }

  if (typeof value !== 'object') {
    return value
  }

  const record = value as Record<string, unknown>
  return (
    record[props.optionValueKey] ??
    record.value ??
    record.stateCode ??
    record.code ??
    record.id ??
    value
  )
}

function getComparableValue(value: unknown) {
  return getOptionValue(value)
}

function isSameOptionValue(a: unknown, b: unknown) {
  return Object.is(getComparableValue(a), getComparableValue(b))
}

function resolveOption(value: unknown): ComboboxModelValue | null {
  if (value === null || value === undefined) {
    return null
  }

  const matchedOption = props.options.find((option) => isSameOptionValue(option, value))
  if (matchedOption !== undefined) {
    return matchedOption as ComboboxModelValue
  }

  return typeof value === 'object' ? (value as ComboboxModelValue) : null
}

function normalizeSingleValue(value: unknown): ComboboxModelValue | null {
  return resolveOption(value)
}

function normalizeMultiValue(value: unknown): ComboboxModelArray {
  if (!Array.isArray(value)) {
    return []
  }

  const normalizedValues: ComboboxModelArray = []

  value.forEach((item) => {
    const resolved = resolveOption(item)
    if (!resolved) {
      return
    }

    if (!normalizedValues.some((existing) => isSameOptionValue(existing, resolved))) {
      normalizedValues.push(resolved)
    }
  })

  return normalizedValues
}

function toSingleComboboxValue(value: BaseModelValue): ComboboxModelValue | null {
  if (value === null || value === undefined || Array.isArray(value)) {
    return null
  }

  const resolved = resolveOption(value)
  if (resolved !== null) {
    return getOptionValue(resolved) as ComboboxModelValue
  }

  return getComparableValue(value) as ComboboxModelValue
}

function toMultiComboboxValue(value: BaseModelValue): ComboboxModelArray {
  if (!Array.isArray(value)) {
    return []
  }

  const normalizedValues: ComboboxModelArray = []

  value.forEach((item) => {
    const resolved = resolveOption(item)
    const mappedValue = resolved !== null ? getOptionValue(resolved) : getComparableValue(item)

    if (mappedValue === null || mappedValue === undefined) {
      return
    }

    if (!normalizedValues.some((existing) => isSameOptionValue(existing, mappedValue))) {
      normalizedValues.push(mappedValue as ComboboxModelValue)
    }
  })

  return normalizedValues
}

const singleModel = computed<ComboboxModelValue | null>({
  get: () => toSingleComboboxValue(model.value),
  set: (value: unknown) => {
    model.value = normalizeSingleValue(value)
  },
})

const multiModel = computed<ComboboxModelArray>({
  get: () => toMultiComboboxValue(model.value),
  set: (value: unknown) => {
    model.value = normalizeMultiValue(value)
  },
})

const previousSingleValue = ref<ComboboxModelValue | null>(normalizeSingleValue(model.value))
const previousMultiValue = ref<ComboboxModelArray>(normalizeMultiValue(model.value))

watch(
  () => model.value,
  (value) => {
    if (props.isMultiSelect) {
      previousMultiValue.value = normalizeMultiValue(value)
      return
    }

    previousSingleValue.value = normalizeSingleValue(value)
  },
  { deep: true, flush: 'post' }
)

function handleSingleChange(value: unknown) {
  const normalized = normalizeSingleValue(value)
  if (
    previousSingleValue.value !== null &&
    (normalized === null || !isSameOptionValue(previousSingleValue.value, normalized))
  ) {
    emit('remove', previousSingleValue.value)
  }

  previousSingleValue.value = normalized
  emit('change', normalized)
}

function handleMultiChange(value: unknown) {
  const normalized = normalizeMultiValue(value)

  previousMultiValue.value
    .filter((item) => !normalized.some((nextItem) => isSameOptionValue(nextItem, item)))
    .forEach((removed) => emit('remove', removed))

  previousMultiValue.value = normalized
  emit('change', normalized)
}
</script>

<template>
  <div
    :id="`base_select_${id}`"
    class="base-select position-relative"
    :class="[
      { 'is-invalid': invalid },
      { 'is-disabled': props.isDisabled },
      props.isMultiSelect ? 'multi-select' : 'single-select',
    ]"
  >
    <label
      v-if="props.label"
      :for="props.id"
      class="base-select-legacy-label d-none"
    >
      {{ props.label }}
    </label>

    <ComboboxSelect
      v-if="!props.isMultiSelect"
      :id="props.id"
      v-model="singleModel"
      v-model:search-term="searchTerm"
      :label="props.isLabelVisible ? props.label : undefined"
      :placeholder="props.placeholder"
      :options="props.options"
      :disabled="props.isDisabled"
      :optional="props.isOptional"
      :tooltip="props.tooltipText"
      :required="props.required"
      :invalid="invalid"
      :clearable="props.isDeselectOptionVisible"
      :empty-text="noOptionsText"
      :class="props.customDropDownClass"
      :option-label-key="props.optionLabelKey"
      :option-value-key="props.optionValueKey"
      @change="handleSingleChange"
    >
      <template #belowLabel>
        <slot name="belowLabel" />
      </template>
    </ComboboxSelect>

    <ComboboxMultiSelect
      v-else
      :id="props.id"
      v-model="multiModel"
      v-model:search-term="searchTerm"
      :label="props.isLabelVisible ? props.label : undefined"
      :placeholder="props.placeholder"
      :options="props.options"
      :disabled="props.isDisabled"
      :optional="props.isOptional"
      :tooltip="props.tooltipText"
      :required="props.required"
      :invalid="invalid"
      :clearable="props.isDeselectOptionVisible"
      :empty-text="noOptionsText"
      :class="props.customDropDownClass"
      :option-label-key="props.optionLabelKey"
      :option-value-key="props.optionValueKey"
      @change="handleMultiChange"
    >
      <template #belowLabel>
        <slot name="belowLabel" />
      </template>
    </ComboboxMultiSelect>

    <span
      v-if="invalid && errorText"
      class="invalid-feedback d-block"
    >
      {{ errorText }}
    </span>
  </div>
</template>

<style scoped lang="scss">
.base-select {
  :deep(.field[data-slot='input-root']) {
    margin-bottom: 0 !important;
    gap: 0 !important;
  }

  :deep(.combobox-select-content),
  :deep(.combobox-multi-content),
  :deep(.select-options) {
    position: absolute !important;
    top: calc(100% - 1px);
    left: 0;
    right: 0;
    z-index: 1100;
  }

  :deep(.combobox-select-item-content) {
    gap: 0;
  }

  :deep(.combobox-select-item-description) {
    display: none !important;
  }

  :deep(.combobox-select-option[data-state='checked']) {
    border-top: 0 !important;
    border-bottom: 0 !important;
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  :deep(.combobox-select-option[data-highlighted]) {
    background: var(--rds-secondary, #ffc627) !important;
    outline: none !important;
    color: var(--rds-dark-3, #191919) !important;
  }
}
</style>
