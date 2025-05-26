/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃   @trinity/i18n – I18nProvider + useTranslation      ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * This file tests the global i18n context for managing
 * language state and translation access across React apps.
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { I18nProvider, useTranslation } from '@trinity/i18n';

/**
 * Mock consumer component for accessing context
 */
function MockConsumer() {
  const { locale, t } = useTranslation();
  return (
    <>
      <span data-testid="locale">{locale}</span>
      <span data-testid="translated">{t('hello')}</span>
    </>
  );
}

describe('I18nProvider', () => {
  /**
   * Ensures the provider renders children and gives access to translation
   */
  it('renders children and provides locale and t()', () => {
    render(
      <I18nProvider>
        <MockConsumer />
      </I18nProvider>
    );
    expect(screen.getByTestId('locale').textContent).toBe('en-ZA');
    expect(screen.getByTestId('translated').textContent).toBe('hello'); // fallback for now
  });

  /**
   * Throws error if used outside I18nProvider
   */
  it('throws if useTranslation is called outside provider', () => {
    const Broken = () => {
      useTranslation();
      return null;
    };
    expect(() => render(<Broken />)).toThrowError(
      /useTranslation must be used within an <I18nProvider>/
    );
  });
});
