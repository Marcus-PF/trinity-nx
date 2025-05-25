/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃               Trinity – Post Types                  ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Describes content entries such as blogs, announcements,
 * and public updates authored by users or clubs.
 */

import type { UUID, ISODateString } from './common.js';

declare const brand: unique symbol;

/* ────────────────────────────────────────────────────────
 * 📝 Branded Fields
 * ──────────────────────────────────────────────────────── */

/**
 * Human-readable headline or listing title.
 */
export type PostTitle = string & { [brand]: 'PostTitle' };

/**
 * URL-safe string used for routing (e.g. "event-recap-2025").
 */
export type PostSlug = string & { [brand]: 'PostSlug' };

/**
 * Rich text or markdown content body.
 */
export type PostContent = string & { [brand]: 'PostContent' };

/* ────────────────────────────────────────────────────────
 * 📣 Post Interface
 * ──────────────────────────────────────────────────────── */

/**
 * A blog, announcement, or article published within the platform.
 */
export interface Post {
  /** Unique identifier for the post */
  id: UUID;

  /** Title used in listings and headlines */
  title: PostTitle;

  /** URL-friendly slug (e.g. for routing) */
  slug: PostSlug;

  /** Author's user ID (foreign key) */
  authorId: UUID;

  /** Markdown or rich text content */
  content: PostContent;

  /** ISO timestamp when post was published */
  publishedAt: ISODateString;

  /** Optional categorization tags */
  tags?: string[];
}
