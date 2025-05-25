/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃         Trinity – API Fetcher Utility               ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Typed fetch wrapper with built-in token support,
 * error handling, and JSON parsing.
 */

import { getAuthToken } from './config';

/**
 * Perform a typed API fetch with automatic headers and error handling.
 *
 * @template T - Expected response type
 * @param path - API route (e.g. "/api/posts")
 * @param options - Optional fetch options (method, headers, body, etc.)
 * @returns A promise resolving to type `T` on success
 *
 * @throws Error if response is not ok or parsing fails
 */
export async function fetcher<T>(path: string, options: RequestInit = {}): Promise<T> {
  const url = path.startsWith('http') ? path : `${getBaseUrl()}${path}`;
  const token = getAuthToken();

  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers || {})
  };

  const res = await fetch(url, {
    ...options,
    headers
  });

  if (!res.ok) {
    let message = `Request failed with status ${res.status}`;
    try {
      const errorData = await res.json();
      if (errorData?.message) message = errorData.message;
    } catch {
      // Non-JSON error
    }
    throw new Error(message);
  }

  return res.json() as Promise<T>;
}

/**
 * Resolves the full base URL depending on environment.
 */
function getBaseUrl(): string {
  if (typeof window !== 'undefined') return ''; // relative in browser
  return process.env.API_BASE_URL || 'http://localhost:3000'; // fallback for SSR/dev
}
