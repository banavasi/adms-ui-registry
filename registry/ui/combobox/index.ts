import type { VariantProps } from '@/lib/util'
import { cva } from '@/lib/util'

// Export all components
export { default as Combobox } from './Combobox.vue'
export { default as ComboboxCancel } from './ComboboxCancel.vue'
export { default as ComboboxContent } from './ComboboxContent.vue'
export { default as ComboboxEmpty } from './ComboboxEmpty.vue'
export { default as ComboboxGroup } from './ComboboxGroup.vue'
export { default as ComboboxInput } from './ComboboxInput.vue'
export { default as ComboboxItem } from './ComboboxItem.vue'
export { default as ComboboxLabel } from './ComboboxLabel.vue'
export { default as ComboboxSelect } from './ComboboxSelect.vue'
export { default as ComboboxSeparator } from './ComboboxSeparator.vue'
export { default as ComboboxTrigger } from './ComboboxTrigger.vue'

// CVA variants for input (future: size variants)
export const comboboxInputVariants = cva('form-control col-12 p-space-xs', {
  variants: {
    size: {
      sm: 'form-control-sm p-space-xxs',
      md: '',
      lg: 'form-control-lg p-space-sm',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type ComboboxInputVariants = VariantProps<typeof comboboxInputVariants>
