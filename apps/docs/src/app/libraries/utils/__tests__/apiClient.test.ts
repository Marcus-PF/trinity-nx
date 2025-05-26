/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃       @trinity/utils – apiClient Utility Tests       ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Tests the shared `apiClient` wrapper for RESTful calls,
 * including success, JSON error, and non-JSON fallback flows.
 */

import { describe, it, expect, vi } from 'vitest';
import { apiClient } from '@trinity/utils';

describe('apiClient', () => {
  /**
   * Mocks fetch and returns successful JSON data
   */
  it('resolves JSON data for successful fetch', async () => {
    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ data: 'ok' }),
      } as any)
    ));

    const result = await apiClient<{ data: string }>('/api/mock');
    expect(result.data).toBe('ok');
  });

  /**
   * Returns parsed message from JSON error response
   */
  it('throws a parsed error message on failure with JSON body', async () => {
    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({
        ok: false,
        status: 403,
        json: () => Promise.resolve({ message: 'Forbidden' }),
      } as any)
    ));

    await expect(apiClient('/api/error')).rejects.toThrow('Forbidden');
  });

  /**
   * Falls back to status-based error if JSON fails
   */
  it('throws a fallback error message on non-JSON failure', async () => {
    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({
        ok: false,
        status: 500,
        json: () => Promise.reject('not JSON'),
      } as any)
    ));

    await expect(apiClient('/api/fail')).rejects.toThrow('Request failed with status 500');
  });
});
