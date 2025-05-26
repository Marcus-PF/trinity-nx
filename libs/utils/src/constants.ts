/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃              Trinity – Constant Values              ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Reusable constants used across the monorepo.
 */

/**
 * Whitelisted HTML tags for safe sanitization.
 */
export const SAFE_HTML_TAGS: string[] = ['b', 'i', 'em', 'strong', 'a'];

/**
 * Regex pattern for validating slug strings (e.g., "event-title").
 */
export const SLUG_REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
