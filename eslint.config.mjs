import functional from 'eslint-plugin-functional';
import * as tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['**/components/ui/**'],

    plugins: { '@typescript-eslint': tseslint, functional },
    rules: {
      ...functional.configs.externalTypeScriptRecommended.rules,
      ...functional.configs.lite.rules,
      ...functional.configs.stylistic.rules,
      'functional/no-return-void': 'off',
      '@typescript-eslint/prefer-readonly': 'error',
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },
];
