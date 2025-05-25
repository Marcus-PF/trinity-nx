/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃           Tests – @trinity/api-client/errors         ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Tests type guards and error conversion utilities.
 */

import { describe, it, expect } from 'vitest';
import {
  isApiError,
  getErrorMessage,
  type ApiError
} from '../src/errors';

describe('errors.ts', () => {
  const mockApiError: ApiError = {
    message: 'Something went wrong',
    code: 500,
    details: { context: 'testing' }
  };

  it('should detect a valid ApiError object', () => {
    expect(isApiError(mockApiError)).toBe(true);
  });

  it('should return true only for objects with a message string', () => {
    expect(isApiError({ message: 'hello' })).toBe(true);
    expect(isApiError({ msg: 'wrong' })).toBe(false);
    expect(isApiError(null)).toBe(false);
    expect(isApiError(undefined)).toBe(false);
  });

  it('should extract a clean message from an ApiError', () => {
    expect(getErrorMessage(mockApiError)).toBe(mockApiError.message);
  });

  it('should return a message from native Error instances', () => {
    const native = new Error('Native error');
    expect(getErrorMessage(native)).toBe(native.message);
  });

  it('should fall back to default string if not Error or ApiError', () => {
    expect(getErrorMessage(42)).toBe('An unexpected error occurred.');
    expect(getErrorMessage(null)).toBe('An unexpected error occurred.');
  });
});
