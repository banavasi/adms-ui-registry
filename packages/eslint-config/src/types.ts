import type { Linter } from 'eslint'

export type StrictnessLevel = 'base' | 'recommended' | 'strict'

export interface ConfigOptions {
  /**
   * Enable Vue support
   * @default true
   */
  vue?: boolean

  /**
   * Enable TypeScript support
   * @default true
   */
  typescript?: boolean

  /**
   * Strictness level
   * - 'base': Only catches real bugs
   * - 'recommended': Balanced defaults (default)
   * - 'strict': Maximum strictness
   * @default 'recommended'
   */
  level?: StrictnessLevel

  /**
   * Additional paths to ignore
   */
  ignores?: string[]

  /**
   * Override specific rules
   */
  rules?: Linter.RulesRecord
}

export type FlatConfig = Linter.Config[]
