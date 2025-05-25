/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃         Trinity – Auth Cookie Utilities             ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Handles setting, reading, and clearing HTTP-only cookies
 * for JWT-based authentication. Designed for secure use
 * in SSR, APIs, and fullstack environments.
 */

import { serialize, parse } from 'cookie';

export const ACCESS_COOKIE = 'trinity_access_token';
export const REFRESH_COOKIE = 'trinity_refresh_token';

/**
 * Shared base options for all auth cookies.
 */
const baseOpts = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict' as const,
  path: '/',
};

/**
 * Creates a Set-Cookie header string for the access token.
 *
 * @param token - JWT access token string
 * @returns Serialized Set-Cookie string
 */
export function createAccessCookie(token: string): string {
  return serialize(ACCESS_COOKIE, token, {
    ...baseOpts,
    maxAge: 60 * 15, // 15 minutes
  });
}

/**
 * Creates a Set-Cookie header string for the refresh token.
 *
 * @param token - JWT refresh token string
 * @returns Serialized Set-Cookie string
 */
export function createRefreshCookie(token: string): string {
  return serialize(REFRESH_COOKIE, token, {
    ...baseOpts,
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

/**
 * Creates Set-Cookie headers that immediately clear auth cookies.
 *
 * @returns Array of two Set-Cookie strings with maxAge = 0
 */
export function clearAuthCookies(): string[] {
  return [
    serialize(ACCESS_COOKIE, '', { ...baseOpts, maxAge: 0 }),
    serialize(REFRESH_COOKIE, '', { ...baseOpts, maxAge: 0 }),
  ];
}

/**
 * Parses access and refresh tokens from a request's cookie header.
 *
 * @param req - An object containing headers with a raw cookie string
 * @returns Access and refresh tokens (or null if not found)
 */
export function readTokens(req: { headers: { cookie?: string } }) {
  const cookies = parse(req.headers.cookie || '');
  return {
    accessToken: cookies[ACCESS_COOKIE] ?? null,
    refreshToken: cookies[REFRESH_COOKIE] ?? null,
  };
}
