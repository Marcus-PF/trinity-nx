/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃      @trinity/utils – QR Code Utility Tests          ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Tests the QR code generator to ensure it produces
 * base64-encoded PNG data URIs from string input.
 */

import { describe, it, expect } from 'vitest';
import { generateQRCode } from '@trinity/utils';

describe('generateQRCode', () => {
  /**
   * Returns a PNG data URI for valid input
   */
  it('returns a base64 PNG data URL', async () => {
    const data = await generateQRCode('https://example.com');
    expect(data).toMatch(/^data:image\/png;base64,/);
  });
});
