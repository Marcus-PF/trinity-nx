/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃     @trinity/utils – Constants Utility Tests         ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Validates regex patterns and allowlists defined in
 * `constants.ts` to ensure expected sanitization behavior.
 */

import { describe, it, expect } from 'vitest';
import {
  SLUG_REGEX,
  SAFE_HTML_TAGS
} from '@trinity/utils';

describe('constants', () => {
  /**
   * Accepts valid slug formats
   */
  it('validates correct slugs with SLUG_REGEX', () => {
    expect(SLUG_REGEX.test('hello-world')).toBe(true);
    expect(SLUG_REGEX.test('123-abc')).toBe(true);
  });

  /**
   * Rejects incorrect slug formats
   */
  it('rejects invalid slugs', () => {
    expect(SLUG_REGEX.test('UPPERCASE')).toBe(false);
    expect(SLUG_REGEX.test('invalid_slug!')).toBe(false);
  });

  /**
   * Ensures SAFE_HTML_TAGS includes only expected tags
   */
  it('defines a safe tag allowlist', () => {
    expect(SAFE_HTML_TAGS).toContain('b');
    expect(SAFE_HTML_TAGS.includes('script')).toBe(false);
  });
});
