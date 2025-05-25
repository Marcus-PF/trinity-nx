/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃               Trinity – Event Types                 ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Domain types for club-hosted or organizational events,
 * including structure for RSVPs and scheduling.
 */

import type { UUID, ISODateString } from './common.js';

declare const brand: unique symbol;

/* ────────────────────────────────────────────────────────
 * 📅 Branded Fields
 * ──────────────────────────────────────────────────────── */

/**
 * Human-readable event title.
 */
export type EventName = string & { [brand]: 'EventName' };

/**
 * Optional long-form agenda or details for the event.
 */
export type EventDescription = string & { [brand]: 'EventDescription' };

/**
 * Physical address or virtual meeting link.
 */
export type EventLocation = string & { [brand]: 'EventLocation' };

/* ────────────────────────────────────────────────────────
 * 🗓 Event Interface
 * ──────────────────────────────────────────────────────── */

/**
 * A scheduled event hosted by a club or the organization.
 */
export interface Event {
  /** Unique event identifier */
  id: UUID;

  /** Title of the event */
  name: EventName;

  /** Description or agenda */
  description: EventDescription;

  /** ISO 8601 start time */
  startDate: ISODateString;

  /** Optional ISO 8601 end time */
  endDate?: ISODateString;

  /** Physical or virtual location */
  location: EventLocation;
}

/* ────────────────────────────────────────────────────────
 * 🙋 RSVP Interface
 * ──────────────────────────────────────────────────────── */

/**
 * A user's RSVP to a specific event.
 */
export interface RSVP {
  /** Related event ID */
  eventId: UUID;

  /** Responding user ID */
  userId: UUID;

  /** RSVP status response */
  status: 'yes' | 'no' | 'maybe';
}
