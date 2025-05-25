/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃     @trinity/auth – Strategy: jwtStrategy.test.ts    ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Tests for the JWT signing and decoding functions.
 * Ensures correct JWT generation and validation behavior.
 */

import { describe, it, expect, vi } from 'vitest';
import { signJwt, decodeJwt, AuthError } from '@trinity/auth';

vi.mock('jsonwebtoken', () => ({
  verify: vi.fn((token, secret) => {
    if (token === 'valid.nojti') return { sub: 'abc', role: 'member', userId: 'user123', email: 'test@example.com' };
    if (token === 'valid.withjti') return { sub: 'abc', role: 'member', jti: 'token123', userId: 'user123', email: 'test@example.com' };
    if (token === 'invalid') throw new Error('bad token');
    return null;
  }),
  sign: vi.fn((payload, secret, options) => {
    return options?.expiresIn === '15m' ? 'access.jwt' : 'refresh.jwt';
  })
}));

vi.mock('@trinity/utils/blacklist', () => ({
  isTokenBlacklisted: vi.fn((jti: string) => jti === 'token123')
}));

describe('jwtStrategy', () => {
  it('signJwt should return access token', () => {
    const token = signJwt({ userId: 'user123', email: 'test@example.com', role: 'member' });
    expect(token).toBe('access.jwt');
  });

  it('decodeJwt should return decoded payload if valid', () => {
    const payload = decodeJwt('valid.jwt');
    expect(payload).toEqual({
      sub: 'abc',
      role: 'member',
      userId: 'user123',
      email: 'test@example.com',
    });
  });

  it('decodeJwt should throw if token is invalid', () => {
    expect(() => decodeJwt('invalid')).toThrow(AuthError);
    expect(() => decodeJwt('invalid')).toThrow('Invalid or expired token');
  });
});
