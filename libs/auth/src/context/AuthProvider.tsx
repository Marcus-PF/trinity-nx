/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃       @trinity/auth – AuthProvider (React Context)   ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Provides authenticated user context to the app.
 * Handles login, logout, token persistence, and auto-init.
 */

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback
} from 'react';

import type { JWTPayload } from '@trinity/auth';
import { decodeJwt } from '@trinity/auth';
import { loginWithCredentials, type Credentials } from '@trinity/auth';

/**
 * Structure of the auth context provided by AuthProvider.
 */
export interface AuthContextValue {
  user: JWTPayload | null;
  login: (credentials: Credentials) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

/**
 * React context provider that manages login state.
 *
 * @param children - The wrapped subtree
 * @returns Auth context for the application
 */
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<JWTPayload | null>(null);
  const [loading, setLoading] = useState(true);

  const login = useCallback(async (credentials: Credentials) => {
    const token = await loginWithCredentials(credentials);
    localStorage.setItem('token', token);

    const decoded = await decodeJwt(token);
    setUser(decoded);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    setUser(null);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const token = localStorage.getItem('token');
    if (!token) {
      setLoading(false);
      return;
    }

    decodeJwt(token)
      .then(setUser)
      .catch(() => logout())
      .finally(() => setLoading(false));
  }, [logout]);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
