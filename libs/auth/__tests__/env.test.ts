/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃     @trinity/auth – Schema: authEnvSchema.test.ts    ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Unit tests for the authEnvSchema, ensuring JWT_SECRET
 * validation behaves correctly for various configurations.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { authEnvSchema } from '@trinity/auth';

describe('authEnvSchema', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    vi.resetModules(); // Reset loaded modules
    process.env = { ...OLD_ENV }; // Restore original env
  });

  it('should succeed when JWT_SECRET is valid', async () => {
    process.env.JWT_SECRET = 'a'.repeat(32); // Valid secret
    const { JWT_SECRET } = await import('@trinity/auth');
    expect(JWT_SECRET).toBe(process.env.JWT_SECRET);
  });

  it('should throw if JWT_SECRET is missing', async () => {
    process.env.JWT_SECRET = ''; // Missing value
    const error = await vi.importMock('@trinity/auth').catch((err) => err);
    expect(error.message).toMatch(/Failed to load auth environment variables/);
  });

  it('should throw if JWT_SECRET is too short', async () => {
    process.env.JWT_SECRET = 'short'; // Invalid value
    const error = await vi.importMock('@trinity/auth').catch((err) => err);
    expect(error.message).toMatch(/Failed to load auth environment variables/);
  });
});
