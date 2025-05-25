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
