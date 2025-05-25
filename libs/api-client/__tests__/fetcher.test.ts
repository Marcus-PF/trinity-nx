/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃           Tests – @trinity/api-client/fetcher        ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Covers typed fetch wrapper behavior including headers,
 * error parsing, and token-aware request logic.
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { fetcher } from '../src/fetcher';
import { setTokenGetter } from '../src/config';

describe('fetcher.ts', () => {
  const originalFetch = global.fetch;
  const testToken = 'mock-token';

  beforeEach(() => {
    setTokenGetter(() => testToken);
  });

  afterEach(() => {
    global.fetch = originalFetch;
    setTokenGetter(() => null);
  });

  it('should call fetch with a full URL and auth headers', async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ user: 'John' }),
    });

    global.fetch = mockFetch as any;

    const result = await fetcher('/api/user', { method: 'GET' });

    expect(mockFetch).toHaveBeenCalled();
    const [url, options] = mockFetch.mock.calls[0];
    expect(url).toContain('/api/user');
    expect(options.headers.Authorization).toBe(`Bearer ${testToken}`);
    expect(result).toEqual({ user: 'John' });
  });

  it('should throw an error with parsed message if response is not ok', async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: false,
      json: async () => ({ message: 'Not authorized' }),
      status: 403
    });

    global.fetch = mockFetch as any;

    await expect(fetcher('/api/secure')).rejects.toThrow('Not authorized');
  });

  it('should throw fallback error if response is not JSON', async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: false,
      json: async () => { throw new Error('Bad JSON'); },
      status: 500
    });

    global.fetch = mockFetch as any;

    await expect(fetcher('/api/fail')).rejects.toThrow('Request failed with status 500');
  });
});
