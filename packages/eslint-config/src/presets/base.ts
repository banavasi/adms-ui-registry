import type { Linter } from 'eslint'
import type { StrictnessLevel } from '../types'

/**
 * Base ESLint rules that apply to all JavaScript/TypeScript files
 */
export function getBaseRules(level: StrictnessLevel): Linter.RulesRecord {
  const rules: Linter.RulesRecord = {
    // Always errors - these catch real bugs
    'no-unused-vars': 'off', // Handled by TypeScript
    'no-undef': 'off', // Handled by TypeScript
    'no-constant-condition': 'error',
    'no-debugger': 'error',
    'no-duplicate-case': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-extra-boolean-cast': 'error',
    'no-irregular-whitespace': 'error',
    'no-loss-of-precision': 'error',
    'no-sparse-arrays': 'error',
    'no-unreachable': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',

    // Disable formatting rules (Biome handles formatting)
    indent: 'off',
    semi: 'off',
    quotes: 'off',
    'comma-dangle': 'off',
    'max-len': 'off',
    'no-tabs': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'object-curly-spacing': 'off',
    'array-bracket-spacing': 'off',
    'space-before-function-paren': 'off',
    'keyword-spacing': 'off',
    'arrow-spacing': 'off',
    'brace-style': 'off',
  }

  if (level === 'recommended' || level === 'strict') {
    Object.assign(rules, {
      'no-console': 'warn',
      'no-alert': 'warn',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      'no-return-await': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      eqeqeq: ['error', 'smart'],
    })
  }

  if (level === 'strict') {
    Object.assign(rules, {
      'no-console': 'error',
      'no-alert': 'error',
      'no-return-await': 'error',
      'require-await': 'error',
    })
  }

  return rules
}
