/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        Trinity – getDictionary() Loader             ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Dynamically loads a locale's translation dictionary from
 * the @trinity/locales package. Caches them in memory.
 */

import type { Locale } from './config';
import { DEFAULT_LOCALE } from './config';

/**
 * Runtime translation cache for loaded locales.
 */
export const translations: Partial<Record<Locale, Record<string, any>>> = {};

/**
 * Dynamically imports and caches a translation dictionary.
 *
 * @param locale - Locale string (e.g., 'en-ZA', 'af-ZA')
 * @returns Promise resolving to the dictionary
 */
export async function getDictionary(locale: Locale): Promise<Record<string, any>> {
  if (translations[locale]) return translations[locale]!;

  try {
    const dict = await import(`@trinity/locales/${locale}.json`);
    translations[locale] = dict.default;
    return dict.default;
  } catch (err) {
    if (locale !== DEFAULT_LOCALE) {
      console.warn(`[i18n] Failed to load locale "${locale}". Falling back to "${DEFAULT_LOCALE}".`);
      return getDictionary(DEFAULT_LOCALE);
    }
    throw new Error(`[i18n] Failed to load default locale: ${DEFAULT_LOCALE}`);
  }
}
