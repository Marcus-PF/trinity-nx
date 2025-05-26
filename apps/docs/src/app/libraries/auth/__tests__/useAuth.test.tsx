/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃    @trinity/auth – Hook: useAuth.test.tsx            ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Unit tests for the `useAuth` hook. Ensures that the context
 * provides the expected values and throws errors when used
 * outside the `AuthProvider`.
 */

import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import React from 'react';
import { useAuth } from '@trinity/auth';
import { AuthProvider } from '@trinity/auth';

describe('useAuth', () => {
  it('throws error when used outside AuthProvider', async () => {
    const { result } = renderHook(() => useAuth());

    // Use waitFor to handle async updates properly
    await expect(result.current).rejects.toThrowError(
      'useAuth must be used within an <AuthProvider>'
    );
  });

  it('returns context when used inside AuthProvider', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <AuthProvider>{children}</AuthProvider>
    );

    const { result } = renderHook(() => useAuth(), { wrapper });
    expect(result.current).toHaveProperty('user');
    expect(result.current).toHaveProperty('login');
    expect(result.current).toHaveProperty('logout');
    expect(result.current).toHaveProperty('loading');
  });
});
