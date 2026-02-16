import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      import: importPlugin,
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: { ecmaVersion: 2020, globals: globals.browser },
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

      'import/no-restricted-paths': [
        'error',
        {
          zones: [
            { target: './src/features', from: './src/app' },
            { target: './src/entities', from: './src/app' },
            { target: './src/entities', from: './src/features' },
            { target: './src/shared', from: './src/entities' },
            { target: './src/shared', from: './src/features' },
            { target: './src/shared', from: './src/widgets' },
            { target: './src/shared', from: './src/pages' },
            { target: './src/shared', from: './src/app' },
          ],
        },
      ],
    },
  },
]);
