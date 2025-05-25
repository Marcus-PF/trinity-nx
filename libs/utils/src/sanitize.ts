/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃           Trinity – HTML Sanitization Utils         ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Safely sanitizes user-provided or rich text HTML using
 * a configurable allowlist of tags and attributes.
 */

import sanitizeHtml from 'sanitize-html';

/**
 * Sanitize user-generated or untrusted HTML input.
 *
 * @param html - Raw HTML input
 * @param options - Optional sanitize-html config overrides
 * @returns Clean, safe HTML output
 */
export function sanitizeHTML(
  html: string,
  options?: sanitizeHtml.IOptions
): string {
  return sanitizeHtml(html, {
    allowedTags: ['b', 'i', 'em', 'strong', 'a', 'p', 'ul', 'ol', 'li', 'br', 'span'],
    allowedAttributes: {
      a: ['href', 'target', 'rel'],
      span: ['style'],
    },
    allowedSchemes: ['http', 'https', 'mailto'],
    ...options,
  });
}
