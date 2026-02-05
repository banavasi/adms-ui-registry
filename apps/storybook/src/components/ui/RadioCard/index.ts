export { default as RadioCard } from './RadioCard.vue'
export { default as RadioCardGroup } from './RadioCardGroup.vue'

export interface RadioCardOption {
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
  /** Whether this option is disabled */
  disabled?: boolean
}

export type RadioCardVariant = 'default' | 'simple'
