C:\Users\ivema\OneDrive\Desktop\My Projects\trinity-nx\trinity\eslint.config.mjs
import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: [
      '**/dist',
      '**/vite.config.*.timestamp*',
      '**/vitest.config.*.timestamp*',
    ],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // Override or add rules here
    rules: {},
  },
];

---

C:\Users\ivema\OneDrive\Desktop\My Projects\trinity-nx\trinity\libs\config-eslint\package.json
{
  "name": "@trinity/config-eslint",
  "version": "0.0.1",
  "type": "module",
  "main": "./base.mjs",
  "exports": {
    ".": "./base.mjs",
    "./base": "./base.mjs",
    "./next": "./next.mjs",
    "./react-internal": "./react-internal.mjs",
    "./package.json": "./package.json"
  },
  "sideEffects": false,
  "dependencies": {
    "@eslint/js": "^9.0.0",
    "@typescript-eslint/eslint-plugin": "^7.6.0",
    "@typescript-eslint/parser": "^7.6.0",
    "eslint": "^9.27.0",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "globals": "^13.23.0"
  },
  "peerDependencies": {
    "typescript": "^5.0.0"
  }
}

---

C:\Users\ivema\OneDrive\Desktop\My Projects\trinity-nx\trinity\libs\config-eslint\project.json
{
  "name": "@trinity/config-eslint",
  "version": "1.0.0",
  "scripts": {
    "lint": "eslint . --ext .js,.mjs,.ts,.tsx",
    "test": "echo \"No tests for ESLint config\""
  },
  "dependencies": {
    "eslint": "^8.57.0",
    "@typescript-eslint/eslint-plugin": "^7.6.0",
    "@typescript-eslint/parser": "^7.6.0",
    "@eslint/js": "^9.0.0",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "globals": "^13.23.0"
  },
  "devDependencies": {},
  "main": "index.mjs",
  "types": "index.d.ts",
  "eslintConfig": {
    "extends": [
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended"
    ]
  }
}

---

C:\Users\ivema\OneDrive\Desktop\My Projects\trinity-nx\trinity\libs\config-eslint\base.mjs
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
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
  }
];

---

C:\Users\ivema\OneDrive\Desktop\My Projects\trinity-nx\trinity\libs\config-eslint\next.mjs
import base from './base.mjs';
import next from '@next/eslint-plugin-next';

export default {
  ...base,
  plugins: {
    ...base.plugins,
    '@next/next': next
  },
  rules: {
    ...base.rules,
    '@next/next/no-img-element': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    '@next/next/no-sync-scripts': 'warn'
  }
};

---

C:\Users\ivema\OneDrive\Desktop\My Projects\trinity-nx\trinity\libs\config-eslint\react-internal.mjs
import base from './base.mjs';

export default {
  ...base,
  rules: {
    ...base.rules,
    'react/jsx-pascal-case': 'error',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/no-unknown-property': ['error', { ignore: ['tw'] }],
    'react/no-array-index-key': 'warn'
  }
};

---

C:\Users\ivema\OneDrive\Desktop\My Projects\trinity-nx\trinity\libs\config-eslint\index.mjs
// libs/config-eslint/index.mjs

import base from './base.mjs';

export default [...base];

console.info('[ESLint] Loaded @trinity/config-eslint/base');

---

C:\Users\ivema\OneDrive\Desktop\My Projects\trinity-nx\trinity\libs\api-client\eslint.config.mjs
import base from '../../config-eslint/base.mjs';
export default base;

---

C:\Users\ivema\OneDrive\Desktop\My Projects\trinity-nx\trinity\libs\auth\eslint.config.mjs
import base from '../../config-eslint/base.mjs';
export default base;

---

C:\Users\ivema\OneDrive\Desktop\My Projects\trinity-nx\trinity\libs\hooks\eslint.config.mjs
import base from '../../config-eslint/base.mjs';
export default base;

---

C:\Users\ivema\OneDrive\Desktop\My Projects\trinity-nx\trinity\libs\i18n\eslint.config.mjs
import base from '../../config-eslint/base.mjs';
export default base;

---

C:\Users\ivema\OneDrive\Desktop\My Projects\trinity-nx\trinity\libs\types\eslint.config.mjs
import base from '../../config-eslint/base.mjs';
export default base;

---

C:\Users\ivema\OneDrive\Desktop\My Projects\trinity-nx\trinity\libs\ui\eslint.config.mjs
import reactInternal from '../../config-eslint/react-internal.mjs';
export default reactInternal;

---

C:\Users\ivema\OneDrive\Desktop\My Projects\trinity-nx\trinity\libs\utils\eslint.config.mjs
import reactInternal from '../../config-eslint/react-internal.mjs';
export default reactInternal;

---

C:\Users\ivema\OneDrive\Desktop\My Projects\trinity-nx\trinity\apps\docs\eslint.config.mjs
import next from '../../libs/config-eslint/next.mjs';
export default next;

---