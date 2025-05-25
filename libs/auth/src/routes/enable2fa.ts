/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        Trinity – Route: Enable 2FA (TOTP)           ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Generates a TOTP secret and QR code for a user, which
 * they can scan with an authenticator app (e.g. Google Authenticator).
 * This does not verify the code — only sets up the secret.
 */

import type { Request, Response } from 'express';
import { generateTOTPSecret, generateQRCode } from '@trinity/utils';

/**
 * Simulated in-memory DB for demo purposes.
 * Replace with persistent user database in production.
 */
const db = new Map<string, { twoFASecret: string; twoFAEnabled: boolean }>();

/**
 * API route handler to initiate 2FA setup.
 * Generates a TOTP secret and returns a QR code to the client.
 *
 * @param req.body.userId - The unique user ID
 * @param req.body.email - The user's email for issuer label
 * @returns JSON with `qrCode` (base64) and `secret` (base32)
 */
export async function enable2FA(req: Request, res: Response): Promise<void> {
  const { userId, email } = req.body as { userId?: string; email?: string };

  if (!userId || !email) {
    res.status(400).json({ message: 'Missing userId or email in request body' });
    return;
  }

  const secret = generateTOTPSecret(email);
  const qrCode = await generateQRCode(secret.otpauth_url!);

  // Simulate saving the secret for the user
  db.set(userId, { twoFASecret: secret.base32, twoFAEnabled: false });

  res.json({
    qrCode,       // base64 image
    secret: secret.base32
  });
}
