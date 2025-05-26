/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃         Trinity – JWT Auth Strategy Helpers         ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Provides helper functions for issuing and decoding
 * JWTs for user authentication and session handling.
 */

import { verifyToken } from '../utils/verifyToken';
import { generateTokens } from '../utils/generateToken';
import type { JWTPayload } from '../types/token';

/**
 * Signs a JWT for a given user payload.
 * Returns only the access token (not refresh/cookies).
 *
 * @param payload - Authenticated user payload
 * @returns A signed JWT access token
 */
export function signJwt(payload: JWTPayload): string {
  const { accessToken } = generateTokens(payload);
  return accessToken;
}

/**
 * Decodes and verifies a JWT, returning the typed payload.
 *
 * @param token - Raw JWT string from client
 * @returns Parsed and verified JWTPayload
 * @throws AuthError if invalid, expired, or revoked
 */
export function decodeJwt(token: string): JWTPayload {
  return verifyToken(token);
}
