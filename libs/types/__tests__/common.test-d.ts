/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃       @trinity/types – Common Utilities Test         ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Verifies the branded primitive types in `common.ts`,
 * ensuring proper type identity for UUIDs, dates, and URLs.
 */

import { expectType } from 'tsd';
import type {
  UUID,
  ISODateString,
  URLString
} from '@trinity/types';

// 🔗 Branded Primitives
declare const id: UUID;
declare const date: ISODateString;
declare const url: URLString;

expectType<UUID>(id);
expectType<ISODateString>(date);
expectType<URLString>(url);
