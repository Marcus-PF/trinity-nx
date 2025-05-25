import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default {
  ...js.configs.recommended,
  ...tseslint.configs.base[0],
  ...tseslint.configs.recommended[0],
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      project: true
    },
    globals: {
      ...globals.browser,
      ...globals.node
    }
  },
  plugins: {
    react,
    'react-hooks': reactHooks
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
};
