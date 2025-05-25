/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃               Trinity – User Types                  ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Defines the core identity model for platform users,
 * including roles, localization, and personal metadata.
 */

import type { Locale, UUID } from './common.js';

declare const brand: unique symbol;

/* ────────────────────────────────────────────────────────
 * 👤 Role Definitions
 * ──────────────────────────────────────────────────────── */

/**
 * Enum-like set of role values used to authorize users.
 */
export type Role = 'admin' | 'member' | 'guest';

/* ────────────────────────────────────────────────────────
 * 🧑‍💼 Branded User Fields
 * ──────────────────────────────────────────────────────── */

/**
 * User's given name or first name.
 */
export type UserFirstName = string & { [brand]: 'UserFirstName' };

/**
 * User's surname or last name.
 */
export type UserLastName = string & { [brand]: 'UserLastName' };

/**
 * Primary user email address (used for login and communication).
 */
export type UserEmail = string & { [brand]: 'UserEmail' };

/* ────────────────────────────────────────────────────────
 * 🪪 Core User Interface
 * ──────────────────────────────────────────────────────── */

/**
 * A platform user with identity, role, and locale preferences.
 */
export interface User {
  /** Unique user identifier (UUID) */
  id: UUID;

  /** User's given name */
  firstName: UserFirstName;

  /** User's surname */
  lastName: UserLastName;

  /** Primary email address */
  email: UserEmail;

  /** Authorization role (admin, member, guest) */
  role: Role;

  /** Optional preferred locale for UI and content */
  locale?: Locale;
}
