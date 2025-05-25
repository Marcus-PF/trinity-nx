/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃      @trinity/i18n – useTranslation() Tests          ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Tests core translation helper used by the global context
 * and middleware. Validates key resolution, fallback, and safety.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { t } from '@trinity/i18n';
import { translations } from '@trinity/i18n';
import { DEFAULT_LOCALE } from '@trinity/i18n';

describe('t()', () => {
  beforeEach(() => {
    translations['en-ZA'] = {
      greeting: 'Hello',
      cta: {
        join_now: 'Join Now'
      }
    };

    translations['af-ZA'] = {
      greeting: 'Hallo'
    };
  });

  it('translates flat keys', () => {
    expect(t('greeting', 'af-ZA')).toBe('Hallo');
  });

  it('translates nested keys', () => {
    expect(t('cta.join_now', 'en-ZA')).toBe('Join Now');
  });

  it('falls back to default locale if key is missing', () => {
    expect(t('cta.join_now', 'af-ZA')).toBe('Join Now');
  });

  it('returns the key if translation is missing entirely', () => {
    expect(t('unknown.key', 'af-ZA')).toBe('unknown.key');
  });

  it('logs a warning in dev mode for missing keys', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    t('missing.key', 'af-ZA');
    if (process.env.NODE_ENV !== 'production') {
      expect(warn).toHaveBeenCalledWith(
        expect.stringContaining('Missing translation: "missing.key"')
      );
    }
    warn.mockRestore();
  });
});
