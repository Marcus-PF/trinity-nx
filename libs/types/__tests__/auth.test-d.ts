/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        @trinity/types – Auth Type Safety Tests       ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Validates structure and behavior of `auth.ts` types
 * using TSD compile-time assertions for type safety.
 */

import { expectType } from 'tsd';
import type { Credentials, Session, Token } from '@trinity/types';
import type { ISODateString } from '@trinity/types';

// 🔐 Credentials
declare const creds: Credentials;
expectType<string>(creds.email);
expectType<string>(creds.password);

// 🔑 Token
declare const token: Token;
expectType<Token>(token);

// 🕓 Session
declare const session: Session;
expectType<ISODateString>(session.expiresAt);
