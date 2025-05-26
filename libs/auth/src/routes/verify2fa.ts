/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        Trinity – Route: Verify 2FA (TOTP)           ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Verifies a user-provided 2FA TOTP token against their
 * stored secret. If valid, flags the user as 2FA-enabled.
 */

import type { Request, Response } from 'express';
import { verifyTOTP } from '@trinity/utils';

/**
 * Simulated in-memory database.
 * Replace with a persistent user store in production.
 */
const db = new Map<string, { twoFASecret?: string; twoFAEnabled?: boolean }>();

/**
 * Handles TOTP verification for 2FA. Assumes secret already exists.
 *
 * @param req.body.userId - Unique user ID
 * @param req.body.token - 6-digit TOTP token from authenticator app
 * @returns JSON indicating whether 2FA is now enabled
 */
export function verify2FA(req: Request, res: Response): void {
  const { userId, token } = req.body as {
    userId?: string;
    token?: string;
  };

  if (!userId || !token) {
    res.status(400).json({ message: 'Missing userId or token in request' });
    return;
  }

  const user = db.get(userId);

  if (!user || !user.twoFASecret) {
    res.status(400).json({ message: '2FA has not been set up for this user' });
    return;
  }

  const isValid = verifyTOTP(token, user.twoFASecret);

  if (!isValid) {
    res.status(401).json({ message: 'Invalid 2FA token' });
    return;
  }

  db.set(userId, { ...user, twoFAEnabled: true });

  res.status(200).json({
    success: true,
    twoFAEnabled: true,
  });
}
