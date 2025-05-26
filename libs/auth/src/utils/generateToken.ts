/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        Trinity – JWT Generation Utility             ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Generates signed access and refresh JWTs for a user,
 * along with secure cookies to store them client-side.
 */

import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { JWT_SECRET } from '../config/env';
import { createAccessCookie, createRefreshCookie } from '../utils/cookies';
import type { JWTPayload } from '../types/token';

/**
 * Generates access and refresh JWTs + matching cookie headers.
 *
 * @param payload - The JWT payload object (userId, email, role, etc.)
 * @returns Object containing accessToken, refreshToken, and Set-Cookie headers
 */
export function generateTokens(payload: JWTPayload) {
  const jwtId = uuidv4();

  const accessToken = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '15m',
    jwtid: jwtId
  });

  const refreshToken = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '7d'
  });

  return {
    accessToken,
    refreshToken,
    cookies: [
      createAccessCookie(accessToken),
      createRefreshCookie(refreshToken)
    ]
  };
}
