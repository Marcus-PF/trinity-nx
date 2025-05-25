/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃     @trinity/auth – Context: AuthProvider.test.tsx   ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Unit test for the AuthProvider component. Ensures
 * the React context provides valid auth state and actions.
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import React from 'react';
import { AuthProvider, AuthContext } from '@trinity/auth';

vi.mock('@trinity/auth', async () => {
  const actual = await vi.importActual('@trinity/auth');
  return {
    ...actual,
    loginWithCredentials: vi.fn(async () => 'mocked.jwt.token'),
    decodeJwt: vi.fn(async () => ({
      sub: 'user123',
      email: 'test@example.com',
      role: 'member'
    }))
  };
});

describe('AuthProvider', () => {
  const localStorageMock = (() => {
    let store: Record<string, string> = {};
    return {
      getItem: (key: string) => store[key] || null,
      setItem: (key: string, value: string) => { store[key] = value; },
      removeItem: (key: string) => { delete store[key]; },
      clear: () => { store = {}; }
    };
  })();

  beforeEach(() => {
    vi.stubGlobal('localStorage', localStorageMock);
    localStorage.clear();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('provides default context values', async () => {
    let context: any;

    render(
      <AuthProvider>
        <AuthContext.Consumer>
          {(value) => {
            context = value;
            return null;
          }}
        </AuthContext.Consumer>
      </AuthProvider>
    );

    await waitFor(() => {
      expect(context).toBeDefined();
      expect(typeof context.login).toBe('function');
      expect(typeof context.logout).toBe('function');
      expect(context.user === null || typeof context.user === 'object').toBe(true);
      expect(typeof context.loading).toBe('boolean');
    });
  });
});
