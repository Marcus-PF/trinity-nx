/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃              Trinity – Common Types                 ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Shared primitive types, branded strings, and common interfaces
 * used throughout the Trinity Monorepo.
 */

/* ────────────────────────────────────────────────────────
 * 🌍 Locale Types
 * ──────────────────────────────────────────────────────── */

/**
 * Locale identifiers supported across the Trinity platform.
 * Used for UI translation, formatting, and content localization.
 */
export type Locale = 'en-ZA' | 'af-ZA';

/* ────────────────────────────────────────────────────────
 * 🔖 Branded String Primitives
 * ──────────────────────────────────────────────────────── */

declare const brand: unique symbol;

/**
 * A UUID-formatted string (v4) branded for stronger type safety.
 * Typically used for database IDs and entity references.
 */
export type UUID = string & { [brand]: 'UUID' };

/**
 * A string representing an ISO 8601 date (e.g., "2025-05-19T00:00:00Z").
 * Branded for stricter type checking in time-sensitive logic.
 */
export type ISODateString = string & { [brand]: 'ISODateString' };

/**
 * A fully-qualified, absolute URL string.
 * Used for CMS links, assets, and third-party embeds.
 */
export type URLString = string & { [brand]: 'URLString' };

/* ────────────────────────────────────────────────────────
 * 📦 Utility Interfaces
 * ──────────────────────────────────────────────────────── */

/**
 * Pagination metadata shared across paginated responses.
 */
export interface PaginationMeta {
  /** Current page index (1-based) */
  page: number;

  /** Number of items per page */
  pageSize: number;

  /** Total number of items across all pages */
  total: number;
}

/**
 * Standard wrapper for paginated API responses.
 *
 * @typeParam T - The item type being paginated (e.g., `User`, `Post`)
 */
export interface PaginatedResult<T> {
  /** Array of items on the current page */
  data: T[];

  /** Metadata about pagination */
  pagination: PaginationMeta;
}

/**
 * Common format for returning error responses from APIs.
 */
export interface APIError {
  /** Human-readable error message (for users or developers) */
  message: string;

  /** Optional numeric code for programmatic error handling (e.g., 403, 500) */
  code?: number;
}
