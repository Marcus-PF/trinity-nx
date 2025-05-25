/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃         Trinity – Password Utilities (bcrypt)       ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Handles password hashing and verification using bcrypt.
 * Used during registration, login, and account management.
 */

import bcrypt from 'bcryptjs';

/**
 * Number of salt rounds used when hashing passwords.
 * Increase this value for stronger security (at performance cost).
 */
export const SALT_ROUNDS = 10;

/**
 * Securely hashes a plaintext password using bcrypt.
 *
 * @param password - Plaintext password to hash
 * @returns A promise that resolves with the hashed password
 */
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

/**
 * Compares a plaintext password with a stored bcrypt hash.
 *
 * @param password - User-entered plaintext password
 * @param hash - Bcrypt hash from database
 * @returns A promise resolving to `true` if passwords match
 */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}
