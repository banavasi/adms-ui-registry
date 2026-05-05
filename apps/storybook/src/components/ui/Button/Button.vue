<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { ButtonVariants } from '.'
import { Primitive } from 'reka-ui'
import { cn } from '@/lib/util'
import { buttonVariants } from '.'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  loading?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  asChild: false,
  loading: false,
  disabled: false,
})
</script>

<template>
  <Primitive
    data-slot="button"
    :as-child="props.asChild"
    :as="props.as"
    :disabled="props.loading || props.disabled"
    :class="cn(buttonVariants({ variant: props.variant, size: props.size }), props.class)"
  >
    <span v-if="props.loading" class="rds-button__spinner" role="status" aria-hidden="true" />
    <span v-if="$slots.leading" class="rds-button__icon rds-button__icon--leading">
      <slot name="leading" />
    </span>
    <span class="rds-button__label">
      <slot />
    </span>
    <span v-if="$slots.trailing" class="rds-button__icon rds-button__icon--trailing">
      <slot name="trailing" />
    </span>
    <span v-if="$slots.close" class="rds-button__close-icon">
      <slot name="close" />
    </span>
  </Primitive>
</template>

<style scoped>
.rds-button-reset {
  text-decoration: none;
}

.rds-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 0;
  font-family: Arial, sans-serif;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition:
    background-color 0.15s ease,
    color 0.15s ease,
    opacity 0.15s ease,
    transform 0.15s ease;
}

.rds-button:focus-visible,
.btn:focus-visible {
  outline: 2px solid #000;
  outline-offset: 2px;
  box-shadow: none;
}

.rds-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.rds-button--pill {
  min-height: 40px;
  border-radius: 25px;
  padding: 8px 16px;
  font-size: 16px;
  line-height: 24px;
}

.rds-button--maroon {
  background: #8c1d40;
  color: #fafafa;
}

.rds-button--gold {
  background: #ffc627;
  color: #191919;
}

.rds-button--gold:hover:not(:disabled),
.rds-button--gold:focus-visible:not(:disabled) {
  background: #f0b400;
  color: #191919;
}

.rds-button--gray {
  background: #e8e5e5;
  color: #000;
}

.rds-button--black {
  background: #191919;
  color: #fafafa;
}

.rds-button--white {
  background: #fff;
  color: #747474;
}

.rds-button--outline-pill {
  background: #fff;
  color: #484848;
  border: 1px solid #747474;
  padding: 12px 20px;
  gap: 10px;
}

.rds-button--outline-pill:hover:not(:disabled) {
  background: #fafafa;
}

.rds-button--status {
  min-height: 27px;
  border-width: 1px;
  border-style: solid;
  border-radius: 25px;
  padding: 8px 16px;
  font-size: 10px;
  line-height: 1;
  color: #191919;
}

.rds-button--complete {
  background: rgba(135, 194, 62, 0.3);
  border-color: #78be20;
}

.rds-button--incomplete {
  background: #f7dddd;
  border-color: #cc2f2f;
}

.rds-button--edit {
  background: rgba(255, 198, 39, 0.55);
  border-color: #ffc627;
  gap: 4px;
}

.rds-button--signout {
  min-height: 39px;
  font-size: 17px;
  line-height: 1.2;
}

.rds-button--signout:hover:not(:disabled) {
  filter: brightness(0.98);
}

.rds-button--icon-only {
  min-width: auto;
  min-height: auto;
  padding: 0;
  gap: 0;
}

.rds-button--icon-only .rds-button__label {
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

.rds-button--icon-only .rds-button__icon,
.rds-button--icon-only .rds-button__close-icon {
  position: static;
  width: auto;
  height: auto;
}

.rds-button--exit {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 4px solid #747474;
  background: #fff;
  color: #747474;
}

.rds-button--exit .rds-button__icon {
  width: 28px;
  height: 28px;
}

.rds-button--exit:hover:not(:disabled),
.rds-button--exit:focus-visible:not(:disabled) {
  background: rgba(25, 25, 25, 0.08);
}

.rds-button--exit-solid {
  border-color: #191919;
  background: #191919;
  color: #fff;
}

.rds-button--exit-solid:hover:not(:disabled),
.rds-button--exit-solid:focus-visible:not(:disabled) {
  background: #2a2a2a;
  border-color: #2a2a2a;
}

.rds-button--close {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: transparent;
  color: #747474;
}

.rds-button--close .rds-button__close-icon {
  width: 18px;
  height: 18px;
}

.rds-button--close .rds-button__close-icon :deep(svg),
.rds-button--close .rds-button__close-icon :deep(img),
.rds-button--close .rds-button__close-icon :deep(i) {
  width: 100%;
  height: 100%;
  display: block;
}

.rds-button--close:hover:not(:disabled),
.rds-button--close:focus-visible:not(:disabled),
.rds-button--close:active:not(:disabled) {
  background: #d9d9d9;
}

.rds-button--close-filled {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #d9d9d9;
}

.rds-button--close-filled .rds-button__close-icon {
  width: 18px;
  height: 18px;
}

.rds-button--close-filled:hover:not(:disabled),
.rds-button--close-filled:focus-visible:not(:disabled) {
  background: #cfcfcf;
}

.rds-button--tag,
.rds-button--tag-mobile {
  background: #e8e8e8;
  border-radius: 0;
  color: #191919;
  font-weight: 400;
}

.rds-button--tag {
  min-height: 26px;
  padding: 4px 8px;
  font-size: 12px;
  line-height: 18px;
}

.rds-button--tag-mobile {
  min-height: 17px;
  padding: 2px 6px;
  font-size: 11px;
  line-height: 1;
}

.rds-button--feedback {
  min-height: 72px;
  border-radius: 4px;
  padding: 12px 24px 12px 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  white-space: normal;
}

.rds-button--feedback-maroon {
  background: #8c1d40;
  color: #fafafa;
}

.rds-button--feedback-gold {
  background: #ffc627;
  color: #191919;
}

.rds-button--help-footer {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  padding: 0;
  background: #191919;
  color: #fafafa;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.28);
  font-size: 12px;
  line-height: 18px;
  flex-direction: column;
  gap: 2px;
  font-weight: 700;
}

.rds-button--help-footer .rds-button__icon {
  width: 20px;
  height: 20px;
}

.rds-button__label {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.rds-button__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 17px;
  height: 15px;
  flex: 0 0 auto;
}

.rds-button__icon :deep(svg),
.rds-button__icon :deep(img),
.rds-button__icon :deep(i) {
  width: 100%;
  height: 100%;
  display: block;
}

.rds-button__icon :deep(i),
.rds-button__close-icon :deep(i) {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 100%;
  line-height: 1;
}

.rds-button__close-icon {
  position: absolute;
  top: 6px;
  right: 5px;
  width: 14px;
  height: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.rds-button__spinner {
  width: 0.9rem;
  height: 0.9rem;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: rds-button-spin 0.6s linear infinite;
}

@keyframes rds-button-spin {
  to {
    transform: rotate(360deg);
  }
}

.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus,
.btn-secondary:active {
  color: #191919;
}

.btn-warning,
.btn-warning:hover,
.btn-warning:focus,
.btn-warning:active {
  color: #191919;
}
</style>
