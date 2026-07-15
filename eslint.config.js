import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';

import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import { reactRefresh } from 'eslint-plugin-react-refresh';

import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default defineConfig([
  globalIgnores(['dist', '**/routeTree.gen.ts']),

  js.configs.recommended,
  reactHooks.configs.flat.recommended,
  reactRefresh.configs.vite({
    extraHOCs: ['createRootRoute', 'createFileRoute'],
  }),

  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },

  eslintConfigPrettier,
]);
