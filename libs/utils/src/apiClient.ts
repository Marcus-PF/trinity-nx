/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃            Trinity – API Client Wrapper             ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Safe fetch wrapper for typed JSON API requests.
 * Handles common error structures and APIError mapping.
 */

import type { APIError } from '@trinity/types';

/**
 * Generic JSON API response wrapper.
 */
export interface ApiResponse<T> {
  data: T;
}

/**
 * Perform a fetch request and automatically parse JSON.
 *
 * @template T - Expected return type of the response body
 * @param url - Request URL
 * @param init - Optional RequestInit config
 * @throws Error - If the response is not OK or JSON is malformed
 */
export async function apiClient<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, init);

  if (!res.ok) {
    let errMessage = `Request failed with status ${res.status}`;
    try {
      const err: APIError = await res.json();
      errMessage = err?.message || errMessage;
    } catch {
      // Fallback if non-JSON error
    }
    throw new Error(errMessage);
  }

  return (await res.json()) as T;
}
