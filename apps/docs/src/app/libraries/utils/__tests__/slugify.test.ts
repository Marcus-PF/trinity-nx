/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃      @trinity/utils – slugify Utility Tests          ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Tests string normalization for URL-safe slugs,
 * including removal of accents, symbols, and spacing.
 */

import { describe, it, expect } from 'vitest';
import { slugify } from '@trinity/utils';

describe('slugify', () => {
  /**
   * Converts basic text to lowercase hyphenated slug
   */
  it('converts regular text to lowercase slug', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  /**
   * Removes special characters and normalizes accents
   */
  it('removes special characters and accents', () => {
    expect(slugify("Café de l'été!")).toBe('cafe-de-lete');
  });

  /**
   * Cleans up excessive whitespace and dashes
   */
  it('collapses multiple spaces and dashes', () => {
    expect(slugify('   Hello   --   World!  ')).toBe('hello-world');
  });

  /**
   * Trims unnecessary hyphens from the ends
   */
  it('removes leading/trailing hyphens', () => {
    expect(slugify('---Title---')).toBe('title');
  });

  /**
   * Handles cases with no valid characters
   */
  it('returns empty string if input has no valid characters', () => {
    expect(slugify('?!@#$%^&*()')).toBe('');
  });
});
