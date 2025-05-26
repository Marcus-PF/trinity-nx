/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃     @trinity/utils – sanitizeHTML Utility Tests      ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Tests HTML sanitization for XSS protection, ensuring
 * safe tags are preserved and unsafe ones are removed.
 */

import { describe, it, expect } from 'vitest';
import { sanitizeHTML } from '@trinity/utils';

describe('sanitizeHTML', () => {
  /**
   * Strips out disallowed or dangerous tags
   */
  it('removes unsafe tags', () => {
    const input = `<script>alert('xss')</script><p>Hello</p>`;
    const result = sanitizeHTML(input);
    expect(result).toBe('<p>Hello</p>');
  });

  /**
   * Retains safe formatting tags like <b>, <i>, <a>
   */
  it('preserves safe formatting', () => {
    const input = `<b>Bold</b> <i>Italic</i> <a href="https://safe.com">Link</a>`;
    const result = sanitizeHTML(input);
    expect(result).toMatch(/<b>Bold<\/b>/);
    expect(result).toMatch(/<i>Italic<\/i>/);
    expect(result).toMatch(/<a href="https:\/\/safe.com">Link<\/a>/);
  });

  /**
   * Allows tag customization via options object
   */
  it('allows customization via options', () => {
    const input = `<custom>Hello</custom>`;
    const result = sanitizeHTML(input, { allowedTags: ['custom'] });
    expect(result).toBe('<custom>Hello</custom>');
  });
});
