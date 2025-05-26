/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        @trinity/auth – Errors: AuthError.test.ts     ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Unit tests for the AuthError custom error class.
 * Validates status code, message propagation, and
 * JSON serialization for API-safe error responses.
 */

import { describe, it, expect } from 'vitest';
import { AuthError } from '@trinity/auth';

describe('AuthError', () => {
  it('creates an error with default 401 status', () => {
    const error = new AuthError('Unauthorized');

    expect(error).toBeInstanceOf(Error);
    expect(error.name).toBe('AuthError');
    expect(error.message).toBe('Unauthorized');
    expect(error.status).toBe(401);
    expect(error.details).toBeUndefined();
  });

  it('supports custom status and additional details', () => {
    const error = new AuthError('Forbidden', 403, { reason: 'role' });

    expect(error.status).toBe(403);
    expect(error.details).toEqual({ reason: 'role' });
  });

  it('serializes to JSON correctly', () => {
    const error = new AuthError('Bad Request', 400, { field: 'email' });

    const json = error.toJSON();
    expect(json).toEqual({
      message: 'Bad Request',
      code: 400,
      details: { field: 'email' }
    });
  });
});
