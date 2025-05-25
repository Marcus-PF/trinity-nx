/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        @trinity/types – Club Type Safety Tests       ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Validates the structure and constraints of `club.ts` types
 * using TSD compile-time assertions for type enforcement.
 */

import { expectType } from 'tsd';
import type {
  Club,
  ClubName,
  ClubDescription
} from '@trinity/types';
import type {
  UUID,
  URLString
} from '@trinity/types';

// 🏛 Club Object
declare const club: Club;
expectType<UUID>(club.id);
expectType<ClubName>(club.name);
expectType<ClubDescription | undefined>(club.description);
expectType<URLString | undefined>(club.website);
