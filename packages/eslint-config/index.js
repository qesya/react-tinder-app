import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';

export default {
  configs: {
    base: [
      js.configs.recommended,
      {
        files: ['**/*.{js,ts,tsx}'],
        languageOptions: {
          parser: tsparser,
          parserOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
          },
        },
        plugins: {
          '@typescript-eslint': tseslint,
          'import': importPlugin,
          'prettier': prettier,
        },
        rules: {
          // TypeScript rules
          '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
          '@typescript-eslint/explicit-function-return-type': 'off',
          '@typescript-eslint/no-explicit-any': 'warn',
          '@typescript-eslint/no-non-null-assertion': 'warn',
          '@typescript-eslint/prefer-const': 'error',
          '@typescript-eslint/no-var-requires': 'off',

          // Import rules
          'import/order': [
            'error',
            {
              'groups': [
                'builtin',
                'external',
                'internal',
                'parent',
                'sibling',
                'index'
              ],
              'newlines-between': 'always',
              'alphabetize': {
                'order': 'asc',
                'caseInsensitive': true
              }
            }
          ],
          'import/no-duplicates': 'error',
          'import/no-unresolved': 'off', // TypeScript handles this

          // General rules
          'no-console': 'warn',
          'no-debugger': 'error',
          'no-var': 'error',
          'prefer-const': 'error',
          'eqeqeq': ['error', 'always'],
          'curly': ['error', 'all'],

          // Prettier integration
          'prettier/prettier': 'error',
        },
      },
    ],
  },
};
