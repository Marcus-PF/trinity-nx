/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃    @trinity/auth – Middleware: rateLimiter.test.ts   ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Unit tests for the rateLimiter middleware functions.
 * Verifies the existence and proper export of login, 
 * refresh token, and 2FA rate limiter middleware.
 */

import { describe, it, expect } from 'vitest';
import { rateLimiters } from '@trinity/auth';

describe('rateLimiters', () => {
  it('should export a login rate limiter middleware function', () => {
    expect(typeof rateLimiters.login).toBe('function');
  });

  it('should export a refresh token rate limiter middleware function', () => {
    expect(typeof rateLimiters.refresh).toBe('function');
  });

  it('should export a 2FA rate limiter middleware function', () => {
    expect(typeof rateLimiters.twoFA).toBe('function');
  });
});
