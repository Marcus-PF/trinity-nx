/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃         Trinity – useAuth() React Hook              ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Provides access to the current authentication state
 * and actions (login, logout, loading) via context.
 */

import { useContext } from 'react';
import { AuthContext, AuthContextValue } from '@trinity/auth';

/**
 * Hook to access authentication state and methods.
 *
 * @returns Object with `user`, `login()`, `logout()`, and `loading`
 *
 * @example
 * const { user, login, logout } = useAuth();
 * if (user?.role === 'admin') showAdminControls();
 */
export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('❌ useAuth must be used within an <AuthProvider>');
  }
  return context;
}
