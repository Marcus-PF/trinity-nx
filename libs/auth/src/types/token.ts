/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃         Trinity – Auth Token Payload Types          ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Describes the data embedded within signed JWTs used
 * across Trinity apps for authentication and session management.
 */

/**
 * JWT payload structure for access tokens issued by Trinity.
 */
export interface JWTPayload {
  /**
   * Unique user ID (UUID)
   */
  userId: string;

  /**
   * Email address of the authenticated user
   */
  email: string;

  /**
   * Authorization role assigned to the user
   */
  role: 'admin' | 'member' | 'guest';

  /**
   * Optional expiration (UNIX timestamp, seconds)
   */
  exp?: number;

  /**
   * Optional issued-at time (UNIX timestamp, seconds)
   */
  iat?: number;

  /**
   * Optional 2FA verified flag
   */
  is2FA?: boolean;

  /**
   * Optional JWT ID (used for identifying specific JWTs)
   */
  sub?: string;
}
