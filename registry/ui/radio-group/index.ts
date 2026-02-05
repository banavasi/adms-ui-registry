export { default as RadioGroup } from './RadioGroup.vue'

export interface RadioOption {
  /** Unique value for this option */
  value: string
  /** Display label for this option */
  label: string
  /** Whether this option is disabled */
  disabled?: boolean
}
