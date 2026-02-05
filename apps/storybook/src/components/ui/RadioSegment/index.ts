export { default as RadioSegment } from './RadioSegment.vue'

/** Generic option type - any object with string keys */
export type RadioSegmentOption = Record<string, unknown>

export interface RadioSegmentProps<T extends RadioSegmentOption = RadioSegmentOption> {
  /** Unique identifier for the radio group */
  id: string
  /** Array of option objects */
  options: T[]
  /** Key in option object to use as display label */
  labelKey: keyof T & string
  /** Key in option object to use as value for matching */
  valueKey: keyof T & string
  /** Value to prefill/preselect (matches against valueKey, case-insensitive) */
  prefillValue?: string | number
  /** Label text */
  label?: string
  /** Tooltip text for label */
  tooltip?: string
  /** Show optional badge on label */
  optional?: boolean
  /** Whether the radio group is in an invalid state */
  invalid?: boolean
  /** Whether the radio group is disabled */
  disabled?: boolean
  /** Whether the radio group is required */
  required?: boolean
  /** Help text shown when not invalid */
  helpText?: string
  /** Error text shown when invalid */
  errorText?: string
  /** Make the radio group read-only */
  readonly?: boolean
}
