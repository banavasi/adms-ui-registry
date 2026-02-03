import adms from '@banavasi/eslint-config'

const config = await adms({
  vue: true,
  typescript: true,
  level: 'recommended',
  ignores: [
    'registry/**', // Registry files are templates, not source code
    'eslint.config.js', // Config file doesn't need type checking
    '**/*.mjs', // Ignore .mjs files (no TypeScript type info available)
  ],
})

// Add CLI-specific overrides
config.push({
  files: ['packages/cli/**/*.ts'],
  rules: {
    // CLI tools need console output
    'no-console': 'off',
    // Allow process global in Node.js CLI
    'node/prefer-global/process': 'off',
    // Regex patterns in CLI are valid
    'regexp/strict': 'off',
  },
})

export default config
