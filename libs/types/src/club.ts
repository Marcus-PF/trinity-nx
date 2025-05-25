/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃               Trinity – Club Types                  ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Shared data structures for representing clubs, forums,
 * and other affiliated organizations.
 */

import type { UUID, URLString } from './common.js';

declare const brand: unique symbol;

/* ────────────────────────────────────────────────────────
 * 🏛 Branded Fields
 * ──────────────────────────────────────────────────────── */

/**
 * Official name of the club or organization.
 */
export type ClubName = string & { [brand]: 'ClubName' };

/**
 * Optional long-form club summary or mission.
 */
export type ClubDescription = string & { [brand]: 'ClubDescription' };

/* ────────────────────────────────────────────────────────
 * 🧩 Club Interface
 * ──────────────────────────────────────────────────────── */

/**
 * Represents a local or regional club within the Trinity platform.
 */
export interface Club {
  /** Unique club identifier */
  id: UUID;

  /** Official club name */
  name: ClubName;

  /** Optional description or mission statement */
  description?: ClubDescription;

  /** Optional public website or link to external platform */
  website?: URLString;
}
