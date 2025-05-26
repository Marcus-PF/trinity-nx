/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃         Trinity – Local Auth Strategy (Mock)        ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Simulates a local email/password login flow.
 * Intended for prototyping and demos. Replace with
 * database or identity provider in production.
 */

import bcrypt from 'bcryptjs';
import { z } from 'zod';
import { signJwt } from '../strategies/jwtStrategy';
import type { JWTPayload } from '../types/token';

/**
 * Zod schema for validating login credentials.
 */
export const CredentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

/**
 * Type derived from CredentialsSchema.
 */
export type Credentials = z.infer<typeof CredentialsSchema>;

/**
 * Simulated in-memory user store.
 * Replace this with a real DB or external auth provider.
 */
const mockUser: Omit<JWTPayload, 'userId'> & { id: string } = {
  id: 'user-123',
  email: 'jane@example.com',
  role: 'member'
};

/**
 * Bcrypt-hashed version of mock password (generated lazily).
 */
let passwordHash: string | null = null;

const INVALID_CREDENTIALS = 'Invalid credentials';

/**
 * Validates user credentials and returns a signed JWT if successful.
 *
 * @param input - Object with email and password fields
 * @returns JWT string if credentials are correct
 * @throws Error if credentials are invalid
 */
export async function loginWithCredentials(input: Credentials): Promise<string> {
  const { email, password } = CredentialsSchema.parse(input);

  if (!passwordHash) {
    passwordHash = await bcrypt.hash('password123', 10);
  }

  if (email !== mockUser.email) {
    throw new Error(INVALID_CREDENTIALS);
  }

  const isValid = await bcrypt.compare(password, passwordHash);
  if (!isValid) {
    throw new Error(INVALID_CREDENTIALS);
  }

  const payload: JWTPayload = {
    userId: mockUser.id,
    email: mockUser.email,
    role: mockUser.role
  };

  return signJwt(payload);
}
