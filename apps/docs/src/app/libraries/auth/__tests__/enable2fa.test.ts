/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃   @trinity/auth – Routes: enable2FA.test.ts          ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Unit tests for the enable2FA route handler.
 * Verifies proper TOTP secret and QR code generation,
 * and correct error handling for missing input.
 */

import { describe, it, expect, vi } from 'vitest';
import { enable2FA } from '@trinity/auth';

vi.mock('@trinity/utils', () => ({
  generateTOTPSecret: vi.fn((email: string) => ({
    base32: 'MOCKSECRET',
    otpauth_url: `otpauth://totp/Trinity:${email}?secret=MOCKSECRET`
  })),
  generateQRCode: vi.fn(async (url: string) => `data:image/png;base64,MOCK_QR_${url}`)
}));

import { mockRequest, mockResponse } from './mocks/express';

describe('enable2FA route handler', () => {
  it('returns 400 if userId or email is missing', async () => {
    const req = mockRequest({ body: { userId: 'abc' } });
    const res = mockResponse();

    await enable2FA(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: 'Missing userId or email in request body'
    });
  });

  it('generates a QR code and secret for valid input', async () => {
    const req = mockRequest({ body: { userId: 'abc', email: 'test@example.com' } });
    const res = mockResponse();

    await enable2FA(req, res);

    expect(res.json).toHaveBeenCalledWith({
      qrCode: expect.stringContaining('data:image/png;base64,MOCK_QR_'),
      secret: 'MOCKSECRET'
    });
  });
});
