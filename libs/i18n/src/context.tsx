/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃         Trinity – I18nProvider + Context Hook        ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Global i18n state management using React Context.
 * Allows apps to access the current language and retrieve
 * translations using the `useTranslation()` hook.
 */

import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode
} from 'react';

import { DEFAULT_LOCALE, type Locale } from './config';
import { t as translate } from './utils';

/**
 * Value provided by the I18nContext to consumers.
 */
export interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

/**
 * Global i18n provider. Wrap your app with this to allow access
 * to translation helpers and current language state.
 *
 * @param children - React child components
 */
export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

  const value = useMemo<I18nContextValue>(() => ({
    locale,
    setLocale,
    t: (key: string) => translate(key, locale)
  }), [locale]);

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
};

/**
 * Hook to access current locale and translation function.
 *
 * @example
 * const { t, locale } = useTranslation();
 * const title = t('cta.join_now');
 */
export function useTranslation(): I18nContextValue {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useTranslation must be used within an <I18nProvider>');
  }
  return context;
}

// Export context separately (for tests or nested providers)
export { I18nContext };
