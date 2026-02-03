import type { Linter } from 'eslint'
import type { ConfigOptions, FlatConfig } from './types'
import antfu from '@antfu/eslint-config'
import { getBaseRules } from './presets/base'
import { getTypeScriptRules } from './presets/typescript'
import { getVueRules } from './presets/vue'

// Also export presets for advanced usage
export { getBaseRules } from './presets/base'

/**
 * ADMS RDS UI ESLint configuration factory
 *
 * @example
 * ```ts
 * // eslint.config.js
 * import adms from '@banavasi/eslint-config'
 *
 * export default adms({
 *   vue: true,
 *   typescript: true,
 *   level: 'recommended',
 * })
 * ```
 */
export default async function adms(options: ConfigOptions = {}): Promise<FlatConfig> {
  const { vue = true, typescript = true, level = 'recommended', ignores = [], rules = {} } = options

  // Collect our custom rules
  const customRules: Linter.RulesRecord = {
    ...getBaseRules(level),
  }

  if (typescript) {
    Object.assign(customRules, getTypeScriptRules(level))
  }

  if (vue) {
    Object.assign(customRules, getVueRules(level))
  }

  // Apply user overrides
  Object.assign(customRules, rules)

  // Build antfu config with our preferences and rules
  const config = await antfu({
    vue,
    typescript,
    // Disable stylistic rules - Biome handles formatting
    stylistic: false,
    // Disable jsonc, yaml, toml - we don't need them
    jsonc: false,
    yaml: false,
    toml: false,
    // Disable markdown - not needed for component library
    markdown: false,
    // Ignore patterns
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      '**/.git/**',
      '**/storybook-static/**',
      '**/*.min.js',
      ...ignores,
    ],
    // Pass our custom rules to antfu - this ensures they're applied
    // with the correct plugin context
    rules: customRules,
  })

  return config
}

export { getTypeScriptRules } from './presets/typescript'
export { getVueRules } from './presets/vue'
export type { ConfigOptions, FlatConfig, StrictnessLevel } from './types'
