/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃             Trinity – formatDate Utility            ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Formats a given `Date` object or ISO string into a localized
 * string using Intl.DateTimeFormat.
 */

/**
 * Format a date using locale-aware string formatting.
 *
 * @param input - A Date object or ISO 8601 string
 * @param locale - A valid BCP 47 locale string (default: 'en-ZA')
 * @param options - Optional Intl.DateTimeFormatOptions
 * @returns A formatted date string (e.g., "24 May 2025")
 * @throws Error if the input cannot be parsed into a valid date
 */
export function formatDate(
  input: Date | string,
  locale: string = 'en-ZA',
  options?: Intl.DateTimeFormatOptions
): string {
  const date = typeof input === 'string' ? new Date(input) : input;

  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date: ${input}`);
  }

  return new Intl.DateTimeFormat(locale, options).format(date);
}
