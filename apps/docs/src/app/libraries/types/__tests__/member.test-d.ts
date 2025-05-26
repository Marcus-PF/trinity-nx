/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        @trinity/types – Member Type Safety Tests     ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Validates type definitions for Rotary or Forum members,
 * including user/club references, join date, and roles.
 */

import { expectType } from 'tsd';
import type {
  Member,
  MemberRole,
  MemberJoinedDate
} from '@trinity/types';
import type {
  UUID
} from '@trinity/types';

// 👤 Member Object
declare const m: Member;

expectType<UUID>(m.userId);
expectType<UUID>(m.clubId);
expectType<MemberJoinedDate>(m.joinedAt);
expectType<MemberRole | undefined>(m.role);
