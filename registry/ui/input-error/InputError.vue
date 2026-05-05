<script setup lang="ts">
import { faCircleExclamation } from '@fortawesome/pro-light-svg-icons'
import { inject } from 'vue'
import { FontAwesomeIcon } from '@/components/ui/icon'
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
    <FontAwesomeIcon
      :icon="faCircleExclamation"
      class="me-space-xxs flex-shrink-0"
      aria-hidden="true"
    />
    <span><slot /></span>
  </div>
</template>
