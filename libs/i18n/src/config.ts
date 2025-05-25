/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃            Trinity – I18n Locale Config              ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Defines supported languages and the default locale
 * for the entire Trinity platform. Used by context,
 * middleware, and dynamic import logic.
 */

/**
 * List of all supported language-region codes.
 */
export const LOCALES = ['en-ZA', 'af-ZA'] as const;

/**
 * Type-safe union of supported locale strings.
 */
export type Locale = (typeof LOCALES)[number];

/**
 * Fallback locale used when detection fails or is omitted.
 */
export const DEFAULT_LOCALE: Locale = 'en-ZA';
