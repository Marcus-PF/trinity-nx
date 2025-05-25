/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        Trinity – Auth Environment Config            ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Validates required auth-related environment variables
 * using Zod. Throws a runtime error if required values
 * are missing or invalid.
 */

import { z } from 'zod';

/**
 * Schema for required auth environment variables.
 */
export const authEnvSchema = z.object({
  /**
   * Secret key used for signing/verifying JWTs.
   * Must be at least 32 characters long.
   */
  JWT_SECRET: z.string().min(32, 'JWT_SECRET must be at least 32 characters')
});

/**
 * Parsed and validated environment variables for auth.
 */
const parsed = authEnvSchema.safeParse(process.env);

if (!parsed.success) {
  console.error('❌ Invalid auth environment configuration:\n', parsed.error.format());
  throw new Error('Failed to load auth environment variables.');
}

export const JWT_SECRET = parsed.data.JWT_SECRET;
