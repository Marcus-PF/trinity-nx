/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃     @trinity/auth – Routes: verify2FA.test.ts         ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Unit tests for the verify2FA route handler. Ensures that 
 * the TOTP token is correctly validated, 2FA is enabled,
 * and proper error responses are returned when needed.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { verify2FA } from '@trinity/auth';

vi.mock('@trinity/utils', () => ({
  verifyTOTP: vi.fn((token, secret) => token === '123456' && secret === 'SECRET')
}));

import { mockRequest, mockResponse } from './mocks/express';

describe('verify2FA route handler', () => {
  beforeEach(() => {
    // Clear and set up the mock database
    const { db } = require('@trinity/auth');
    db.clear();
    db.set('user1', { twoFASecret: 'SECRET' });
  });

  it('should return 400 if userId or token is missing', () => {
    const req = mockRequest({ body: { userId: 'user1' } });
    const res = mockResponse();

    verify2FA(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: 'Missing userId or token in request' });
  });

  it('should return 400 if user or secret is not found', () => {
    const req = mockRequest({ body: { userId: 'nonexistent', token: '123456' } });
    const res = mockResponse();

    verify2FA(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: '2FA has not been set up for this user' });
  });

  it('should return 401 if token is invalid', () => {
    const req = mockRequest({ body: { userId: 'user1', token: 'wrong' } });
    const res = mockResponse();

    verify2FA(req, res);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: 'Invalid 2FA token' });
  });

  it('should enable 2FA if token is valid', () => {
    const req = mockRequest({ body: { userId: 'user1', token: '123456' } });
    const res = mockResponse();

    verify2FA(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ success: true, twoFAEnabled: true });
  });
});
