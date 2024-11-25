import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
export default [
    // File match patterns
    {
      files: ['**/*.{js,mjs,cjs,ts}'],
      languageOptions: {
        globals: globals.node, // Define globals for Node.js
      },
      plugins: [
        // Add necessary plugins
        'prettier', // If you're using Prettier plugin
      ],
      extends: [
        // ESLint recommended rules
        pluginJs.configs.recommended, 
        // TypeScript ESLint recommended rules
        ...tseslint.configs.recommended,
        // Prettier's recommended config
        eslintPluginPrettierRecommended,
      ],
      rules: {
        // Your custom linting rules
        'no-unused-vars': 'error',
        'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
        'no-console': 'warn', // Warn on console usage
      },
      ignores: ['node_modules', 'dist'], // Directories to ignore
    },
  ];

