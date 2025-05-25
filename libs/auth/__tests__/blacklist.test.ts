/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃   @trinity/auth – Utils: blacklistToken.test.ts      ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Tests for in-memory JWT blacklist used for token revocation.
 * Ensures proper expiry behavior and lookup by jti.
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { blacklistToken, isTokenBlacklisted } from '@trinity/auth';

describe('blacklistToken utility', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('returns false for unknown jti', () => {
    expect(isTokenBlacklisted('nonexistent')).toBe(false);
  });

  it('detects blacklisted token before expiry', () => {
    blacklistToken('token123', 2); // 2 seconds
    expect(isTokenBlacklisted('token123')).toBe(true);
  });

  it('expires token after duration passes', () => {
    blacklistToken('expiringToken', 1); // 1 second
    expect(isTokenBlacklisted('expiringToken')).toBe(true);

    vi.advanceTimersByTime(1100);
    expect(isTokenBlacklisted('expiringToken')).toBe(false);
  });
});
