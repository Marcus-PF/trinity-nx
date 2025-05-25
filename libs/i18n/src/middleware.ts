/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃            Trinity – i18n Middleware (Next.js)       ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Automatically detects the user's locale from cookie,
 * headers, or path and redirects to the appropriate
 * localized route if missing.
 */

import { NextRequest, NextResponse } from 'next/server';
import { DEFAULT_LOCALE, LOCALES, type Locale } from './config';

const LOCALE_COOKIE = 'locale';

/**
 * Attempts to detect the user's locale from request headers or cookies.
 */
function detectLocale(req: NextRequest): Locale {
  const cookieLocale = req.cookies.get(LOCALE_COOKIE)?.value;
  if (LOCALES.includes(cookieLocale as Locale)) return cookieLocale as Locale;

  const acceptLanguage = req.headers.get('accept-language') || '';
  for (const locale of LOCALES) {
    if (acceptLanguage.includes(locale)) return locale;
  }

  return DEFAULT_LOCALE;
}

/**
 * Next.js middleware to redirect root requests or locale-missing paths.
 *
 * @example
 * export { middleware } from '@trinity/i18n';
 */
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip API and static file requests
  if (pathname.startsWith('/api') || pathname.includes('.')) {
    return NextResponse.next();
  }

  // Locale already in path (e.g., /en-ZA/about)
  const localePrefix = LOCALES.find((loc) => pathname.startsWith(`/${loc}`));
  if (localePrefix) return NextResponse.next();

  // Detect and redirect to default or matched locale
  const locale = detectLocale(req);
  const redirectUrl = req.nextUrl.clone();
  redirectUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(redirectUrl);
}
