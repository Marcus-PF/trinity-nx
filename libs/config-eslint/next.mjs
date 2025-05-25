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
