/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃     @trinity/auth – Utils: password.test.ts          ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Unit tests for password utilities: hashing and verification.
 * Ensures secure password storage and correct validation behavior.
 */

import { describe, it, expect } from 'vitest';
import { hashPassword, verifyPassword } from '@trinity/auth';

describe('password utilities', () => {
  it('should hash and verify the correct password', async () => {
    const password = 'TrinitySecure123!';
    const hash = await hashPassword(password);
    
    // Validate the hashed password format (bcrypt standard)
    expect(typeof hash).toBe('string');
    expect(hash).toMatch(/^\$2[aby]\$.{56}$/); // bcrypt hash format

    const result = await verifyPassword(password, hash);
    expect(result).toBe(true); // Correct password verification
  });

  it('should fail verification with incorrect password', async () => {
    const hash = await hashPassword('correctPassword');
    const result = await verifyPassword('wrongPassword', hash);
    expect(result).toBe(false); // Incorrect password should return false
  });
});
