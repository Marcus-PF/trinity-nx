/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃     @trinity/auth – Utils: verifyToken.test.ts       ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Unit tests for the verifyToken function. Ensures that JWTs 
 * are validated correctly, including checking for blacklisting 
 * and invalid token cases.
 */

import { describe, it, expect, vi } from 'vitest';
import { verifyToken, AuthError } from '@trinity/auth';

vi.mock('jsonwebtoken', () => ({
  verify: vi.fn((token, secret) => {
    if (token === 'valid.nojti') return { sub: 'abc', role: 'member' };
    if (token === 'valid.withjti') return { sub: 'abc', role: 'member', jti: 'token123' };
    if (token === 'invalid') throw new Error('bad token');
    return null;
  })
}));

vi.mock('@trinity/utils/blacklist', () => ({
  isTokenBlacklisted: vi.fn((jti: string) => jti === 'token123')
}));

describe('verifyToken', () => {
  it('verifies valid token without jti', () => {
    const payload = verifyToken('valid.nojti');
    expect(payload).toHaveProperty('sub', 'abc');
  });

  it('verifies valid token with non-blacklisted jti', () => {
    vi.mocked(require('@trinity/utils/blacklist').isTokenBlacklisted).mockReturnValue(false);
    const payload = verifyToken('valid.withjti');
    expect(payload).toHaveProperty('jti', 'token123');
  });

  it('throws AuthError for blacklisted jti', () => {
    expect(() => verifyToken('valid.withjti')).toThrow(AuthError);
    expect(() => verifyToken('valid.withjti')).toThrow('Token has been revoked');
  });

  it('throws AuthError for invalid token', () => {
    expect(() => verifyToken('invalid')).toThrow(AuthError);
    expect(() => verifyToken('invalid')).toThrow('Invalid or expired token');
  });
});
