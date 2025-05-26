/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃     @trinity/auth – Utils: cookies.test.ts           ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Tests for cookie utilities that manage access and refresh
 * tokens via secure, HTTP-only Set-Cookie headers and parsing.
 */

import { describe, it, expect } from 'vitest';
import {
  createAccessCookie,
  createRefreshCookie,
  clearAuthCookies,
  readTokens
} from '@trinity/auth';

import { parse } from 'cookie';

describe('cookie utilities', () => {
  it('creates a Set-Cookie header for the access token', () => {
    const cookie = createAccessCookie('access.jwt');
    const parsed = parse(cookie);
    expect(parsed.trinity_access_token).toBe('access.jwt');
  });

  it('creates a Set-Cookie header for the refresh token', () => {
    const cookie = createRefreshCookie('refresh.jwt');
    const parsed = parse(cookie);
    expect(parsed.trinity_refresh_token).toBe('refresh.jwt');
  });

  it('clears both cookies using Set-Cookie with maxAge=0', () => {
    const cookies = clearAuthCookies();
    expect(cookies).toHaveLength(2);
    cookies.forEach((cookie) => {
      expect(cookie).toMatch(/max-age=0/i);
    });
  });

  it('parses access and refresh tokens from cookie header', () => {
    const accessCookie = createAccessCookie('foo');
    const refreshCookie = createRefreshCookie('bar');

    // Simulate a real browser-style cookie header
    const cookieHeader = accessCookie.split(';')[0] + '; ' + refreshCookie.split(';')[0];
    const req = { headers: { cookie: cookieHeader } };

    const tokens = readTokens(req);
    expect(tokens.accessToken).toBe('foo');
    expect(tokens.refreshToken).toBe('bar');
  });

  it('returns null for both tokens if no cookies exist', () => {
    const req = { headers: {} };
    const tokens = readTokens(req);
    expect(tokens).toEqual({ accessToken: null, refreshToken: null });
  });
});
