/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃             @trinity/auth – Barrel Export            ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Central export hub for all shared authentication logic.
 * Exposes context, strategies, middleware, and helpers for
 * secure, consistent auth flows across Trinity apps.
 */

/* ────────────────────────────────────────────────────────
 * 🔐 Auth Context (Frontend React)
 * ──────────────────────────────────────────────────────── */
export * from './context/AuthProvider';
export * from './context/useAuth';

/* ────────────────────────────────────────────────────────
 * 🛠 Strategies (JWT, Local)
 * ──────────────────────────────────────────────────────── */
export * from './strategies/jwtStrategy';
export * from './strategies/localStrategy';

/* ────────────────────────────────────────────────────────
 * 🧩 Middleware (Express / API Guards)
 * ──────────────────────────────────────────────────────── */
export * from './middleware/authenticate';
export * from './middleware/authorize';
export * from './middleware/rateLimiter';

/* ────────────────────────────────────────────────────────
 * 🧪 Utility Functions
 * ──────────────────────────────────────────────────────── */
export * from './utils/generateToken';
export * from './utils/verifyToken';
export * from './utils/cookies';
export * from './utils/password';
export * from './utils/blacklist';

/* ────────────────────────────────────────────────────────
 * ⚙ Config & Types
 * ──────────────────────────────────────────────────────── */
export * from './config/env';
export * from './types/token';

/* ────────────────────────────────────────────────────────
 * 🔁 Routes (SSR/Server only)
 * ──────────────────────────────────────────────────────── */
export * from './routes/enable2fa';
export * from './routes/refreshToken';
export * from './routes/verify2fa';

/* ────────────────────────────────────────────────────────
 * ❌ Custom Auth Errors
 * ──────────────────────────────────────────────────────── */
export * from './errors/AuthError';
