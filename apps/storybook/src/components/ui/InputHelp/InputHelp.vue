<script setup lang="ts">
import { inject } from 'vue'
import { INPUT_INJECTION_KEY } from '@/components/ui/InputRoot'

const context = inject(INPUT_INJECTION_KEY)
if (!context) {
  throw new Error('InputHelp must be used within InputRoot')
}
</script>

<template>
  <div
    v-if="!context.invalid.value"
    :id="context.helpId.value"
    data-slot="input-help"
    class="form-text mt-space-xxxs fs-small"
  >
    <slot />
  </div>
</template>
