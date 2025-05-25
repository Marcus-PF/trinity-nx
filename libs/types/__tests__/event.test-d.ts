/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        @trinity/types – Event & RSVP Type Tests      ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Validates the event structure, dates, and RSVP logic
 * using branded types and literal union enforcement.
 */

import { expectType } from 'tsd';
import type {
  Event,
  RSVP,
  EventName,
  EventLocation
} from '@trinity/types';
import type {
  UUID,
  ISODateString
} from '@trinity/types';

// 📅 Event Object
declare const e: Event;
expectType<UUID>(e.id);
expectType<EventName>(e.name);
expectType<ISODateString>(e.startDate);
expectType<ISODateString | undefined>(e.endDate);
expectType<EventLocation>(e.location);

// 📋 RSVP Object
declare const r: RSVP;
expectType<UUID>(r.eventId);
expectType<UUID>(r.userId);
expectType<'yes' | 'no' | 'maybe'>(r.status);
