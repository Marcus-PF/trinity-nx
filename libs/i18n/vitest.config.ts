import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['__tests__/**/*[!node].{test,spec}.{ts,tsx}'],
    environment: 'jsdom',
  },
});