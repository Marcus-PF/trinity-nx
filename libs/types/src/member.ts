/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃               Trinity – Member Types                ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Types representing a user's membership within a club,
 * including roles and timestamps.
 */

import type { UUID, ISODateString } from './common.js';

declare const brand: unique symbol;

/* ────────────────────────────────────────────────────────
 * 🧑‍🤝‍🧑 Membership Roles
 * ──────────────────────────────────────────────────────── */

/**
 * Enum-like role values defining a user's permissions within a club.
 */
export type MemberRole = 'admin' | 'organizer' | 'member' | 'guest';

/* ────────────────────────────────────────────────────────
 * 🕓 Branded Metadata Fields
 * ──────────────────────────────────────────────────────── */

/**
 * Branded ISO date string representing when a user joined a club.
 */
export type MemberJoinedDate = ISODateString & { [brand]: 'MemberJoinedDate' };

/* ────────────────────────────────────────────────────────
 * 🧩 Member Interface
 * ──────────────────────────────────────────────────────── */

/**
 * Representation of a user's membership in a club.
 */
export interface Member {
  /** ID of the user (foreign key) */
  userId: UUID;

  /** ID of the club (foreign key) */
  clubId: UUID;

  /** Date the user officially joined the club */
  joinedAt: MemberJoinedDate;

  /** Optional role (defaults to "member" if not provided) */
  role?: MemberRole;
}
