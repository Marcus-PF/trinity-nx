/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        @trinity/types – User Type Safety Tests       ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Verifies base user schema including identity, role,
 * locale preferences, and branded primitive fields.
 */

import { expectType } from 'tsd';
import type {
  User,
  Role,
  UserFirstName,
  UserLastName,
  UserEmail
} from '@trinity/types';
import type {
  UUID,
  Locale
} from '@trinity/types';

// 🙍 User Object
declare const user: User;

expectType<UUID>(user.id);
expectType<UserFirstName>(user.firstName);
expectType<UserLastName>(user.lastName);
expectType<UserEmail>(user.email);
expectType<Role>(user.role);
expectType<Locale | undefined>(user.locale);
