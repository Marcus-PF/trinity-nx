/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃             @trinity/hooks – Barrel Export           ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Central export hub for all shared React hooks used in
 * the Trinity Monorepo. Each hook is stateless, composable,
 * SSR-safe, and tested.
 */

/* ────────────────────────────────────────────────────────
 * 🌀 UI State & Visibility
 * ──────────────────────────────────────────────────────── */
export * from './useDisclosure';

/* ────────────────────────────────────────────────────────
 * 🔁 Debounce / Throttle
 * ──────────────────────────────────────────────────────── */
export * from './useDebounce';

/* ────────────────────────────────────────────────────────
 * 👁 Lifecycle & Mount Safety
 * ──────────────────────────────────────────────────────── */
export * from './useIsMounted';

/* ────────────────────────────────────────────────────────
 * 💾 Persistent State (Local Storage)
 * ──────────────────────────────────────────────────────── */
export * from './useLocalStorage';

/* ────────────────────────────────────────────────────────
 * 🎯 Event Listener Abstraction
 * ──────────────────────────────────────────────────────── */
export * from './useEventListener';
