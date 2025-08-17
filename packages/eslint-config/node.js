import globals from 'globals';
import baseConfig from './index.js';

export default [
  ...baseConfig.configs.base,
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'no-console': 'off', 
      'no-process-env': 'off',
      'no-process-exit': 'error',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/require-await': 'warn',
    },
  },
];
