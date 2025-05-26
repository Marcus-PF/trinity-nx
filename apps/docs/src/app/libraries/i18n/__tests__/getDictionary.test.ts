/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        @trinity/i18n – getDictionary() Tests         ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Verifies dictionary loading, fallback behavior, and cache
 * logic for runtime translation imports.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import * as getDictionaryModule from '@trinity/i18n';
import { DEFAULT_LOCALE, LOCALES } from '@trinity/i18n';

describe('getDictionary()', () => {
  beforeEach(() => {
    Object.keys(getDictionaryModule.translations).forEach(
      (key) => delete getDictionaryModule.translations[key as keyof typeof getDictionaryModule.translations]
    );
  });

  it('loads a translation dictionary and caches it', async () => {
    const mockDict = { greeting: 'Hello' };
    vi.stubGlobal('import', vi.fn(() =>
      Promise.resolve({ default: mockDict })
    ) as any);

    const result = await getDictionaryModule.getDictionary('en-ZA');
    expect(result).toEqual(mockDict);
    expect(getDictionaryModule.translations['en-ZA']).toEqual(mockDict);
  });

  it('falls back to default locale on failure', async () => {
    const fallbackDict = { fallback: 'Yes' };

    const importSpy = vi.fn()
      .mockRejectedValueOnce(new Error('Missing locale'))
      .mockResolvedValueOnce({ default: fallbackDict });

    vi.stubGlobal('import', importSpy as any);

    const result = await getDictionaryModule.getDictionary('af-ZA');
    expect(result).toEqual(fallbackDict);
    expect(importSpy).toHaveBeenCalledTimes(2);
  });

  it('throws if default locale fails too', async () => {
    const importSpy = vi.fn().mockRejectedValue(new Error('Failed'));

    vi.stubGlobal('import', importSpy as any);

    await expect(getDictionaryModule.getDictionary('af-ZA')).rejects.toThrow(
      `[i18n] Failed to load default locale: ${DEFAULT_LOCALE}`
    );
  });
});
