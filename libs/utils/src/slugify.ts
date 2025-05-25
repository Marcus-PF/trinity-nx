/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃              Trinity – slugify Utility              ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Converts human-readable strings into clean, URL-friendly slugs.
 * Removes accents, special characters, and excessive spacing.
 */

/**
 * Convert a string into a kebab-case, URL-safe slug.
 *
 * @param text - Input string to convert (e.g., article title or name)
 * @returns A lowercase, dash-separated slug string
 *
 * @example
 * slugify("Hello World!") // "hello-world"
 * slugify("Café de l'été") // "cafe-de-lete"
 */
export function slugify(text: string): string {
  return text
    .normalize("NFD")                         // Normalize to separate accents
    .replace(/[\u0300-\u036f]/g, "")          // Strip accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")              // Replace non-alphanumerics with hyphens
    .replace(/^-+|-+$/g, "");                 // Remove leading/trailing hyphens
}
