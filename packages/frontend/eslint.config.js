import storybook from 'eslint-plugin-storybook';
import reactConfig from '@tinder-like/eslint-config/react.js';

export default [
  ...reactConfig,
  ...storybook.configs['flat/recommended'],
  {
    ignores: ['dist/**', 'storybook-static/**', 'coverage/**'],
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      'no-console': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off', 
    },
  },
];
