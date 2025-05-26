/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃           Tests – @trinity/api-client/config         ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Tests for base URL and token getter logic.
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import {
  API_BASE_URL,
  getAuthToken,
  setTokenGetter
} from '@trinity/api-client';

describe('config.ts', () => {
  const mockToken = 'test-token';

  beforeEach(() => {
    setTokenGetter(() => mockToken);
  });

  afterEach(() => {
    setTokenGetter(() => null); // reset to default behavior
  });

  it('should export a valid API_BASE_URL string', () => {
    expect(typeof API_BASE_URL).toBe('string');
    expect(API_BASE_URL.length).toBeGreaterThan(0);
  });

  it('should return a mocked auth token via getAuthToken', () => {
    const token = getAuthToken();
    expect(token).toBe(mockToken);
  });

  it('should allow resetting tokenGetter to return null', () => {
    setTokenGetter(() => null);
    expect(getAuthToken()).toBeNull();
  });
});
