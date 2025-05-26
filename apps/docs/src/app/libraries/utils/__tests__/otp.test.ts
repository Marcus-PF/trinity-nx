/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃       @trinity/utils – OTP (TOTP) Utility Tests       ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Verifies OTP secret generation and TOTP token validation
 * using the speakeasy algorithm for time-based 2FA codes.
 */

import { describe, it, expect } from 'vitest';
import { generateTOTPSecret, verifyTOTP } from '@trinity/utils';
import * as speakeasy from 'speakeasy';

describe('otp', () => {
  /**
   * Ensures the generated secret has required fields
   */
  it('generates a TOTP secret with otpauth URL', () => {
    const secret = generateTOTPSecret('Trinity Test');
    expect(secret).toHaveProperty('base32');
    expect(secret).toHaveProperty('otpauth_url');
  });

  /**
   * Validates a correct TOTP token against the secret
   */
  it('verifies a valid token', () => {
    const secret = generateTOTPSecret('Trinity Test');
    const token = speakeasy.totp({
      secret: secret.base32,
      encoding: 'base32'
    });

    const isValid = verifyTOTP(token, secret.base32);
    expect(isValid).toBe(true);
  });

  /**
   * Rejects an invalid or incorrect token
   */
  it('rejects an invalid token', () => {
    const secret = generateTOTPSecret('Trinity Test');
    const isValid = verifyTOTP('123456', secret.base32);
    expect(isValid).toBe(false);
  });
});
 