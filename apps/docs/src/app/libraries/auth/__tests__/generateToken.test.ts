/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃     @trinity/auth – Utils: generateTokens.test.ts    ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Tests for the `generateTokens` function. Ensures both access
 * and refresh tokens are created along with corresponding
 * Set-Cookie headers for secure cookie storage.
 */

import { describe, it, expect, vi } from 'vitest';
import { generateTokens } from '@trinity/auth';

vi.mock('uuid', () => ({ v4: () => 'mock-jti-123' }));

vi.mock('@trinity/utils', () => ({
  createAccessCookie: vi.fn(() => 'Set-Cookie: access'),
  createRefreshCookie: vi.fn(() => 'Set-Cookie: refresh')
}));

vi.mock('jsonwebtoken', () => ({
  sign: vi.fn((payload, secret, options) => {
    return options?.expiresIn === '15m' ? 'access.jwt' : 'refresh.jwt';
  })
}));

describe('generateTokens', () => {
  it('generates access and refresh tokens along with cookie headers', () => {
    const result = generateTokens({
      userId: 'abc',
      email: 'test@example.com',
      role: 'member'
    });

    expect(result).toEqual({
      accessToken: 'access.jwt',
      refreshToken: 'refresh.jwt',
      cookies: ['Set-Cookie: access', 'Set-Cookie: refresh']
    });
  });
});
