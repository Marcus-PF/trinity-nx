/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃     @trinity/auth – Middleware: authorize.test.ts    ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Tests for role-based access control middleware.
 * Validates user presence, role filtering, and proper
 * error status codes when unauthorized or forbidden.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { authorize, JWTPayload } from '@trinity/auth';
import { mockRequest, mockResponse } from './mocks/express';

describe('authorize middleware', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns 401 if no user is present on the request', () => {
    const req = mockRequest();
    const res = mockResponse();
    const next = vi.fn();

    authorize(['admin'])(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      message: 'Unauthorized: user not found in request context'
    });
  });

  it('returns 403 if user role is not allowed', () => {
    const req = mockRequest({
      user: {
        userId: 'user-123',
        email: 'guest@example.com',
        role: 'guest'
      } as JWTPayload
    });
    const res = mockResponse();
    const next = vi.fn();

    authorize(['admin', 'member'])(req, res, next);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({
      message: 'Forbidden: requires role(s): admin, member'
    });
  });

  it('calls next if user has an allowed role', () => {
    const req = mockRequest({ user: { role: 'member' } as JWTPayload });
    const res = mockResponse();
    const next = vi.fn();

    authorize(['member'])(req, res, next);

    expect(next).toHaveBeenCalled();
  });
});
