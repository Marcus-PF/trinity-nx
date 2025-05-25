/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃         Trinity – Token Blacklist Utility           ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Provides in-memory tracking of blacklisted JWTs
 * (by `jti`) to support token revocation and logout flows.
 *
 * ⚠️ Note: This implementation is in-memory only and
 * not suitable for distributed or serverless production.
 */

const tokenBlacklist: Map<string, number> = new Map();

/**
 * Adds a token's `jti` to the blacklist with an expiry.
 *
 * @param jti - The JWT ID (unique identifier)
 * @param expiresInSec - Expiry time in seconds (e.g. token TTL)
 */
export function blacklistToken(jti: string, expiresInSec: number): void {
  const expiryTime = Date.now() + expiresInSec * 1000;
  tokenBlacklist.set(jti, expiryTime);
}

/**
 * Checks if a given `jti` has been revoked.
 * Automatically clears expired entries.
 *
 * @param jti - The JWT ID to check
 * @returns `true` if the token is revoked and still active
 */
export function isTokenBlacklisted(jti: string): boolean {
  const expiry = tokenBlacklist.get(jti);
  if (!expiry) return false;

  if (Date.now() > expiry) {
    tokenBlacklist.delete(jti);
    return false;
  }

  return true;
}
