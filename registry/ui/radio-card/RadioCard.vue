<script setup lang="ts">
import type { HTMLAttributes, ComputedRef } from 'vue'
import { RadioGroupItem } from 'reka-ui'
import { inject, computed } from 'vue'
import { cn } from '@/lib/util'

interface Props {
  /** Unique value for this option */
  value: string
  /** Heading/title text */
  heading: string
  /** Description/body text */
  description?: string
  /** Optional hyperlink text */
  linkText?: string
  /** Optional hyperlink URL */
  linkUrl?: string
  /** Whether this card is disabled */
  disabled?: boolean
  /** Additional CSS classes */
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

// Inject context from parent RadioCardGroup
const context = inject<{
  modelValue: ComputedRef<string | undefined>
  disabled: ComputedRef<boolean>
  invalid: ComputedRef<boolean>
  variant: ComputedRef<'default' | 'simple'>
  cardLayout: ComputedRef<'vertical' | 'horizontal'>
  stacked: ComputedRef<boolean>
}>('radioCardContext')

const isSelected = computed(() => context?.modelValue.value === props.value)
const isDisabled = computed(() => props.disabled || context?.disabled.value)
const isInvalid = computed(() => context?.invalid.value)
const variant = computed(() => context?.variant.value ?? 'default')
const cardLayout = computed(() => context?.cardLayout.value ?? 'horizontal')
const stacked = computed(() => context?.stacked.value ?? true)

const handleLinkClick = (event: MouseEvent) => {
  // Prevent card selection when clicking link
  event.stopPropagation()
}
</script>

<template>
  <RadioGroupItem
    :value="props.value"
    :disabled="isDisabled"
    :class="
      cn(
        'radio-card',
        {
          'radio-card-default': variant === 'default',
          'radio-card-simple': variant === 'simple',
          'radio-card-vertical': variant === 'default' && cardLayout === 'vertical',
          'radio-card-horizontal': variant === 'default' && cardLayout === 'horizontal',
          'radio-card-stacked': stacked,
          'radio-card-selected': isSelected,
          'radio-card-invalid': isInvalid,
        },
        props.class
      )
    "
  >
    <!-- Check indicator -->
    <span class="radio-card-check">
      <svg
        v-if="isSelected"
        class="radio-card-check-icon radio-card-check-icon-selected"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" fill="#ffc627" stroke="#ffc627" stroke-width="2" />
        <path
          d="M8 12l3 3 5-6"
          stroke="#191919"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <svg
        v-else
        class="radio-card-check-icon"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" />
        <path
          d="M8 12l3 3 5-6"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>

    <!-- Icon slot (only for default variant) -->
    <div v-if="$slots.icon && variant === 'default'" class="radio-card-icon">
      <slot name="icon" />
    </div>

    <!-- Content -->
    <div class="radio-card-content">
      <h3 class="radio-card-heading">{{ heading }}</h3>
      <p v-if="description" class="radio-card-description">{{ description }}</p>
      <a
        v-if="linkText"
        :href="linkUrl || '#'"
        class="radio-card-link"
        @click="handleLinkClick"
      >
        {{ linkText }}
      </a>
    </div>
  </RadioGroupItem>
</template>

<style>
.radio-card {
  display: flex;
  position: relative;
  background-color: #fff;
  border: 2px solid transparent;
  box-shadow: inset 0 0 0 1px var(--rds-dark-1, #747474);
  cursor: pointer;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

/* Default variant - with icon support */
.radio-card-default {
  padding: 24px;
  gap: 16px;
}

/* Horizontal card layout (icon on left) */
.radio-card-horizontal {
  flex-direction: row;
  align-items: flex-start;
  text-align: left;
}

.radio-card-horizontal.radio-card-stacked {
  width: 100%;
}

.radio-card-horizontal:not(.radio-card-stacked) {
  flex: 1;
  min-width: 200px;
}

/* Vertical card layout (icon on top, centered) */
.radio-card-vertical {
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 24px 16px;
  gap: 24px;
}

.radio-card-vertical:not(.radio-card-stacked) {
  flex: 1;
  min-width: 200px;
}

.radio-card-vertical .radio-card-check {
  position: absolute;
  top: 12px;
  right: 12px;
  margin-left: 0;
}

.radio-card-vertical .radio-card-icon {
  width: 80px;
  height: 70px;
}

.radio-card-vertical .radio-card-content {
  align-items: center;
}

.radio-card-vertical .radio-card-heading {
  font-size: 18px;
}

/* Simple variant - text only, horizontal layout */
.radio-card-simple {
  flex-direction: row;
  align-items: center;
  text-align: left;
  padding: 16px;
  gap: 12px;
}

.radio-card-simple.radio-card-stacked {
  width: 100%;
}

/* Check indicator positioning */
.radio-card-check {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  order: 3;
  margin-left: auto;
}

.radio-card-check-icon {
  width: 28px;
  height: 28px;
  color: var(--rds-light-4, #d0d0d0);
}

.radio-card:hover:not([data-disabled]) .radio-card-check-icon:not(.radio-card-check-icon-selected) {
  color: var(--rds-dark-1, #747474);
}

/* Hover & states */
.radio-card:hover:not([data-disabled]) {
  border-color: var(--rds-dark-1, #747474);
  box-shadow: none;
}

.radio-card:focus-visible {
  outline: 2px solid #000;
  outline-offset: 2px;
}

.radio-card[data-disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

.radio-card-selected {
  border-color: var(--rds-gold, #ffc627);
  box-shadow: none;
}

.radio-card-selected:hover:not([data-disabled]) {
  border-color: var(--rds-gold, #ffc627);
}

.radio-card-invalid {
  border-color: var(--rds-danger, #cc2f2f);
  box-shadow: none;
}

.radio-card-invalid.radio-card-selected {
  border-color: var(--rds-danger, #cc2f2f);
}

/* Icon */
.radio-card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 45px;
  height: 40px;
}

/* Content */
.radio-card-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.radio-card-heading {
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: var(--rds-dark-3, #191919);
  margin: 0;
}

.radio-card-description {
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: var(--rds-dark-1, #747474);
  margin: 0;
}

.radio-card-link {
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: var(--rds-maroon, #8c1d40);
  text-decoration: underline;
}

.radio-card-link:hover {
  text-decoration: none;
}
</style>
