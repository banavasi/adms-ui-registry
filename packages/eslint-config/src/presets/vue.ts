import type { Linter } from 'eslint'
import type { StrictnessLevel } from '../types'

/**
 * Vue-specific ESLint rules
 */
export function getVueRules(level: StrictnessLevel): Linter.RulesRecord {
  const rules: Linter.RulesRecord = {
    // Essential Vue rules - always enabled
    'vue/multi-word-component-names': 'off', // Too restrictive for component libraries
    'vue/no-v-html': 'warn',
    'vue/no-unused-vars': 'error',
    'vue/no-unused-components': 'error',
    'vue/require-v-for-key': 'error',
    'vue/no-use-v-if-with-v-for': 'error',
    'vue/valid-template-root': 'error',
    'vue/valid-v-bind': 'error',
    'vue/valid-v-for': 'error',
    'vue/valid-v-if': 'error',
    'vue/valid-v-model': 'error',
    'vue/valid-v-on': 'error',
    'vue/valid-v-slot': 'error',

    // Disable formatting rules (Biome handles)
    'vue/html-indent': 'off',
    'vue/html-quotes': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    'vue/html-self-closing': 'off',
    'vue/mustache-interpolation-spacing': 'off',
    'vue/no-multi-spaces': 'off',
    'vue/script-indent': 'off',
  }

  if (level === 'recommended' || level === 'strict') {
    Object.assign(rules, {
      'vue/component-definition-name-casing': ['error', 'PascalCase'],
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/prop-name-casing': ['error', 'camelCase'],
      'vue/v-on-event-hyphenation': ['error', 'always'],
      'vue/attribute-hyphenation': ['error', 'always'],
      'vue/define-macros-order': [
        'error',
        {
          order: ['defineProps', 'defineEmits', 'defineSlots'],
        },
      ],
      'vue/block-order': [
        'error',
        {
          order: ['script', 'template', 'style'],
        },
      ],
      'vue/define-props-declaration': ['error', 'type-based'],
      'vue/define-emits-declaration': ['error', 'type-based'],
    })
  }

  if (level === 'strict') {
    Object.assign(rules, {
      'vue/no-v-html': 'error',
      'vue/require-explicit-emits': 'error',
      'vue/require-prop-types': 'error',
      'vue/v-for-delimiter-style': ['error', 'in'],
      'vue/prefer-separate-static-class': 'error',
      'vue/prefer-true-attribute-shorthand': 'error',
    })
  }

  return rules
}
