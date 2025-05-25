/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['app/**/*.{test,spec}.{ts,tsx}'],
    setupFiles: [],
  }
});
