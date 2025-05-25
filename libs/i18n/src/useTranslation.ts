/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃         Trinity – useTranslation() Helper           ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Core runtime translation function. Looks up keys
 * from the loaded dictionary for a given locale.
 * Supports fallback to default locale and nested keys.
 */

import type { Locale } from './config';
import { DEFAULT_LOCALE } from './config';
import { translations } from './getDictionary';

/**
 * Retrieves a translated string for the given key and locale.
 *
 * @param key - Dot-notation key (e.g., "cta.join_now")
 * @param locale - Active locale (defaults to DEFAULT_LOCALE)
 * @returns The translated string, or key if missing
 *
 * @example
 * t('cta.join_now', 'en-ZA') => "Join Now"
 */
export function t(key: string, locale: Locale = DEFAULT_LOCALE): string {
  const dict = translations[locale];
  const fallback = translations[DEFAULT_LOCALE];

  const resolve = (obj: any, path: string): string | undefined =>
    path.split('.').reduce((acc, part) => acc?.[part], obj);

  const result = resolve(dict, key) || resolve(fallback, key);

  if (!result && process.env.NODE_ENV !== 'production') {
    console.warn(`[i18n] Missing translation: "${key}" for locale "${locale}"`);
  }

  return result ?? key;
}
