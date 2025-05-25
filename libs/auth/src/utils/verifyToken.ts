/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃         Trinity – JWT Verification Utility          ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Verifies a JWT access token, checks its validity and
 * optionally guards against blacklisted tokens.
 */

import jwt from 'jsonwebtoken';
import { JWT_SECRET, isTokenBlacklisted, AuthError } from '@trinity/auth';
import type { JWTPayload } from '@trinity/auth';

/**
 * Verifies the validity of a JWT access token.
 *
 * @param token - The JWT string to verify
 * @returns The decoded JWT payload if valid
 * @throws AuthError if token is invalid, expired, or blacklisted
 */
export function verifyToken(token: string): JWTPayload {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    if (typeof decoded !== 'object' || decoded === null) {
      throw new AuthError('Invalid token payload', 401);
    }

    const payload = decoded as JWTPayload;

    if ('jti' in payload && isTokenBlacklisted(payload.jti as string)) {
      throw new AuthError('Token has been revoked', 401);
    }

    return payload;
  } catch {
    throw new AuthError('Invalid or expired token', 401);
  }
}
