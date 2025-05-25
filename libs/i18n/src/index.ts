/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃             @trinity/i18n – Barrel Export            ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Central export hub for the Trinity i18n system.
 * Exposes runtime translation helpers, context, dynamic
 * dictionary loading, middleware, and config.
 */

/* ────────────────────────────────────────────────────────
 * 🧠 Translation Context & Hook
 * ──────────────────────────────────────────────────────── */
export * from './context';

/* ────────────────────────────────────────────────────────
 * 🌍 Translation Lookup (t)
 * ──────────────────────────────────────────────────────── */
export * from './useTranslation';

/* ────────────────────────────────────────────────────────
 * 📦 Dictionary Loader (Dynamic Imports)
 * ──────────────────────────────────────────────────────── */
export * from './getDictionary';

/* ────────────────────────────────────────────────────────
 * ⚙️ Config (Locales, Default, Types)
 * ──────────────────────────────────────────────────────── */
export * from './config';

/* ────────────────────────────────────────────────────────
 * 🛣 Middleware for Next.js Routing
 * ──────────────────────────────────────────────────────── */
export * from './middleware';
