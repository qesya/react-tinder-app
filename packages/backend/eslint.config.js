import nodeConfig from '@tinder-like/eslint-config/node.js';

export default [
  ...nodeConfig,
  {
    ignores: ['dist/**', 'coverage/**', 'node_modules/**'],
  },
  {
    files: ['**/*.ts'],
    rules: {
      // Backend-specific overrides
      '@typescript-eslint/explicit-function-return-type': 'warn',
      'no-console': 'off', // Console is fine in Node.js
    },
  },
];
