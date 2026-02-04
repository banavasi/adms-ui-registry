<script setup lang="ts">
import { inject } from 'vue'
import { INPUT_INJECTION_KEY } from '@/components/ui/InputRoot'

const context = inject(INPUT_INJECTION_KEY)
if (!context) {
  throw new Error('InputError must be used within InputRoot')
}
</script>

<template>
  <div
    v-if="context.invalid.value"
    :id="context.errorId.value"
    data-slot="input-error"
    class="text-danger mt-space-xxxs d-flex align-items-center fs-small"
    role="alert"
  >
    <svg
      class="me-space-xxs flex-shrink-0"
      width="16"
      height="16"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
      />
    </svg>
    <span><slot /></span>
  </div>
</template>
