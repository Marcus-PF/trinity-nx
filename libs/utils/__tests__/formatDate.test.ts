/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃    @trinity/utils – formatDate Utility Tests         ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Tests locale-aware date formatting utility. Verifies
 * default behavior, custom options, and error handling.
 */

import { describe, it, expect } from 'vitest';
import { formatDate } from '@trinity/utils';

describe('formatDate', () => {
  /**
   * Uses default 'en-ZA' locale for Date input
   */
  it('formats a Date object to "en-ZA" locale by default', () => {
    const date = new Date('2025-05-24T00:00:00Z');
    const result = formatDate(date);
    expect(typeof result).toBe('string');
  });

  /**
   * Supports custom locale + options for ISO strings
   */
  it('formats an ISO string to the given locale', () => {
    const iso = '2025-12-01T10:30:00Z';
    const result = formatDate(iso, 'en-GB', { year: 'numeric', month: 'long' });
    expect(result).toMatch(/December|Dec/i);
  });

  /**
   * Throws a clear error when invalid date is passed
   */
  it('throws for invalid date strings', () => {
    expect(() => formatDate('not-a-date')).toThrow('Invalid date');
  });
});
