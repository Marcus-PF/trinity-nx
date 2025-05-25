/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃              Trinity – OTP Utilities                ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Helpers for generating and verifying time-based one-time passwords
 * using the `speakeasy` library.
 */

import speakeasy from 'speakeasy';

/**
 * Generate a new TOTP secret for a user or device.
 *
 * @param label - An identifier (e.g., user email, app name)
 * @returns A secret object including base32, hex, and otpauth URL
 */
export function generateTOTPSecret(label: string): speakeasy.GeneratedSecret {
  return speakeasy.generateSecret({ name: label });
}

/**
 * Verify a TOTP token against a base32 secret.
 *
 * @param token - The 6-digit code from the user's authenticator
 * @param secret - The shared base32 secret string
 * @returns `true` if the token is valid within the time window
 */
export function verifyTOTP(token: string, secret: string): boolean {
  return speakeasy.totp.verify({
    secret,
    encoding: 'base32',
    token,
    window: 1, // Accept ±1 time-step (default 30s)
  });
}
