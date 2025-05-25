/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃      @trinity/auth – Strategy: localStrategy.test.ts  ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Tests for the loginWithCredentials function.
 * Verifies proper handling of credentials validation, 
 * JWT generation, and error cases for invalid input.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { loginWithCredentials } from '@trinity/auth';
import * as bcrypt from 'bcryptjs';

vi.mock('bcryptjs', () => ({
  default: {
    hash: vi.fn(async () => '$2a$10$hashed'),
    compare: vi.fn(async (input, hash) => input === 'password123')
  }
}));

vi.mock('@trinity/auth', () => ({
  signJwt: vi.fn(() => 'mocked.jwt.token')
}));

describe('loginWithCredentials', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('throws error on invalid email', async () => {
    await expect(
      loginWithCredentials({ email: 'wrong@example.com', password: 'password123' })
    ).rejects.toThrow('Invalid credentials');
  });

  it('throws error on invalid password', async () => {
    vi.mocked(bcrypt.default.compare).mockResolvedValueOnce(false);

    await expect(
      loginWithCredentials({ email: 'jane@example.com', password: 'wrongpass' })
    ).rejects.toThrow('Invalid credentials');
  });

  it('returns JWT for valid credentials', async () => {
    const token = await loginWithCredentials({
      email: 'jane@example.com',
      password: 'password123'
    });
    expect(token).toBe('mocked.jwt.token');
  });

  it('validates input with zod', async () => {
    await expect(
      loginWithCredentials({ email: 'invalid', password: 'x' })
    ).rejects.toThrow(); // zod validation error
  });
});
