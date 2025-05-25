/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃     @trinity/auth – Middleware: authenticate.test    ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Unit tests for the `authenticate` middleware.
 * Verifies correct parsing, verification, and error handling
 * of Authorization bearer tokens from request headers.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { authenticate, AuthError } from '@trinity/auth';
import { mockRequest, mockResponse } from './mocks/express';

vi.mock('@trinity/auth', async () => {
  const actual = await vi.importActual('@trinity/auth');
  return {
    ...actual,
    verifyToken: vi.fn((token: string) => {
      if (token === 'valid.token') return { sub: 'user123', email: 'test@example.com' };
      throw new AuthError('Invalid token', 401);
    })
  };
});

vi.mock('@trinity/utils', () => ({
  log: vi.fn()
}));

describe('authenticate middleware', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns 401 if Authorization header is missing', () => {
    const req = mockRequest({ headers: {} });
    const res = mockResponse();
    const next = vi.fn();

    authenticate(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: 'Authorization token is missing' });
  });

  it('returns 401 if token is invalid', () => {
    const req = mockRequest({ headers: { authorization: 'Bearer bad.token' } });
    const res = mockResponse();
    const next = vi.fn();

    authenticate(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: 'Invalid token' });
  });

  it('attaches user and calls next on valid token', () => {
    const req = mockRequest({ headers: { authorization: 'Bearer valid.token' } });
    const res = mockResponse();
    const next = vi.fn();

    authenticate(req, res, next);

    expect(req.user).toEqual({ sub: 'user123', email: 'test@example.com' });
    expect(next).toHaveBeenCalled();
  });
});
