/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        Trinity – Route: Refresh Token Handler       ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Verifies the stored refresh token and issues a new access
 * token + cookies. Ensures the user stays logged in without
 * re-entering credentials (until refresh token expires).
 */

import type { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { readTokens, createAccessCookie, generateTokens, JWT_SECRET } from '@trinity/auth';
import type { JWTPayload } from '@trinity/auth';

/**
 * Handles `/auth/refresh` route. Requires a valid refresh token.
 *
 * @returns New access token and `Set-Cookie` header on success
 */
export function refreshTokenHandler(req: Request, res: Response): void {
  const { refreshToken } = readTokens(req);

  if (!refreshToken) {
    return res.status(401).json({ message: 'Missing refresh token' });
  }

  try {
    const decoded = jwt.verify(refreshToken, JWT_SECRET);

    if (typeof decoded !== 'object' || decoded === null) {
      return res.status(403).json({ message: 'Invalid refresh token structure' });
    }

    const payload = decoded as JWTPayload;

    const { accessToken, cookies } = generateTokens(payload);

    res.setHeader('Set-Cookie', cookies);
    res.json({
      accessToken,
      user: payload
    });
  } catch {
    return res.status(403).json({ message: 'Invalid or expired refresh token' });
  }
}
