/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃     @trinity/auth – Routes: refreshToken.test.ts     ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Unit tests for the `refreshTokenHandler` route.
 * Verifies the behavior of token refreshing, including token validation,
 * response formatting, and error handling for missing/invalid tokens.
 */

import { describe, it, expect, vi } from 'vitest';
import { refreshTokenHandler } from '@trinity/auth';

vi.mock('@trinity/utils', () => ({
  readTokens: vi.fn(() => ({ refreshToken: 'valid.refresh' })),
  createAccessCookie: vi.fn((token: string) => [`accessToken=${token}`])
}));

vi.mock('jsonwebtoken', () => ({
  verify: vi.fn((token) => {
    if (token === 'valid.refresh') return { sub: 'user123', role: 'member', email: 'test@example.com' };
    throw new Error('Invalid token');
  })
}));

vi.mock('@trinity/utils/generateToken', () => ({
  generateTokens: vi.fn(() => ({
    accessToken: 'new.access.token',
    cookies: ['accessToken=new.access.token']
  }))
}));

import { mockRequest, mockResponse } from './mocks/express';

describe('refreshTokenHandler', () => {
  it('should return 401 if no refresh token is present', () => {
    vi.mocked(require('@trinity/utils').readTokens).mockReturnValueOnce({ refreshToken: null });
    const req = mockRequest();
    const res = mockResponse();

    refreshTokenHandler(req, res);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: 'Missing refresh token' });
  });

  it('should return 403 if token is invalid', () => {
    vi.mocked(require('jsonwebtoken').verify).mockImplementationOnce(() => {
      throw new Error('Invalid token');
    });

    const req = mockRequest();
    const res = mockResponse();

    refreshTokenHandler(req, res);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({ message: 'Invalid or expired refresh token' });
  });

  it('should return new access token and set cookie on success', () => {
    const req = mockRequest();
    const res = mockResponse();

    refreshTokenHandler(req, res);

    expect(res.setHeader).toHaveBeenCalledWith('Set-Cookie', ['accessToken=new.access.token']);
    expect(res.json).toHaveBeenCalledWith({
      accessToken: 'new.access.token',
      user: {
        sub: 'user123',
        role: 'member',
        email: 'test@example.com'
      }
    });
  });
});
