/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃         Trinity – API Client Config                 ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Provides shared config values and auth token accessor
 * for API client requests across all platforms.
 */

let tokenGetter: () => string | null = () => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('token');
};

/**
 * Runtime base URL for the Trinity backend API.
 * Set via NEXT_PUBLIC_API_URL or fallback to localhost.
 */
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

/**
 * Returns the current auth token for API requests.
 * Defaults to reading from localStorage (in browser).
 */
export function getAuthToken(): string | null {
  return tokenGetter();
}

/**
 * Allows overriding the default token getter (e.g. in SSR or tests).
 */
export function setTokenGetter(fn: () => string | null): void {
  tokenGetter = fn;
}
