<script setup lang="ts">
import { faEye, faEyeSlash } from '@fortawesome/pro-light-svg-icons'
import { inject } from 'vue'
import { FontAwesomeIcon } from '@/components/ui/icon'
import { INPUT_INJECTION_KEY } from '@/components/ui/InputRoot'

interface Props {
  /** Whether password is currently visible */
  visible?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  visible: false,
})

const emit = defineEmits<{
  toggle: [visible: boolean]
}>()

const context = inject(INPUT_INJECTION_KEY)
if (!context) {
  throw new Error('InputPasswordToggle must be used within InputRoot')
}

function handleToggle() {
  emit('toggle', !props.visible)
}
</script>

<template>
  <button
    type="button"
    :aria-label="props.visible ? 'Hide password' : 'Show password'"
    :aria-pressed="props.visible"
    :disabled="context.disabled.value"
    class="input-password-toggle btn btn-link p-0 border-0 text-muted"
    @click="handleToggle"
  >
    <FontAwesomeIcon
      v-if="!props.visible"
      :icon="faEye"
      aria-hidden="true"
      class="input-password-toggle-icon"
    />
    <FontAwesomeIcon
      v-else
      :icon="faEyeSlash"
      aria-hidden="true"
      class="input-password-toggle-icon"
    />
  </button>
</template>

<style scoped>
.input-password-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: color 0.15s ease-in-out;
}

.input-password-toggle:hover:not(:disabled) {
  color: var(--rds-dark-3, #191919);
}

.input-password-toggle:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.input-password-toggle-icon {
  width: 18px;
  height: 16px;
}

.input-password-toggle:focus {
  outline: 2px solid #000;
  outline-offset: 2px;
  box-shadow: none;
}
</style>
