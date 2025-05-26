/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: [
      'src/app/libraries/**/*.{test,spec}.{ts,tsx}',
      '../../libs/**/*.{test,spec}.{ts,tsx}'
    ],
    setupFiles: [],
    coverage: {
      reporter: ['text', 'html'],
      reportsDirectory: './coverage'
    }
  }
})