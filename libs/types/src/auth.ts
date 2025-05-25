/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃             Trinity – Authentication Types          ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Defines the credential, session, and token types used
 * across login flows, protected APIs, and identity handling.
 */

import type { ISODateString } from './common.js';

declare const brand: unique symbol;

/* ────────────────────────────────────────────────────────
 * 🔐 Token Branding
 * ──────────────────────────────────────────────────────── */

/**
 * A signed JWT string branded as a `Token`.
 * Used for secure client-server communication.
 */
export type Token = string & { [brand]: 'Token' };

/* ────────────────────────────────────────────────────────
 * 🔑 Credentials & Session Types
 * ──────────────────────────────────────────────────────── */

/**
 * Raw credentials submitted during login or registration.
 */
export interface Credentials {
  /** Email address (used as username) */
  email: string;

  /** Password string (plain before hashing) */
  password: string;
}

/**
 * Active session data associated with a logged-in user.
 */
export interface Session {
  /** User identifier (UUID) */
  userId: string;

  /** Issued authentication token */
  token: Token;

  /** Token expiration in ISO 8601 format */
  expiresAt: ISODateString;
}
