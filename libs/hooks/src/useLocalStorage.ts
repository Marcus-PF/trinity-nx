/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃      Trinity – useLocalStorage React Hook           ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Persist state in localStorage across sessions.
 * Automatically syncs with client-side storage after hydration.
 */

import { useCallback, useEffect, useState } from 'react';

/**
 * Hook to persist state in localStorage (SSR-safe).
 *
 * @template T - The stored value type
 * @param key - localStorage key to persist under
 * @param defaultValue - Fallback if key doesn't exist
 * @returns [value, setValue] — just like useState
 *
 * @example
 * const [theme, setTheme] = useLocalStorage('theme', 'light');
 */
export function useLocalStorage<T>(key: string, defaultValue: T): [T, (val: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(defaultValue);

  // On mount, attempt to read value from localStorage
  useEffect(() => {
    try {
      const item = typeof window !== 'undefined' ? localStorage.getItem(key) : null;
      if (item !== null) {
        setStoredValue(JSON.parse(item));
      }
    } catch {
      // Storage unavailable or invalid JSON — fallback to default
    }
  }, [key]);

  const setValue = useCallback(
    (value: T) => {
      setStoredValue(value);
      try {
        if (typeof window !== 'undefined') {
          localStorage.setItem(key, JSON.stringify(value));
        }
      } catch {
        // Ignore write errors
      }
    },
    [key]
  );

  return [storedValue, setValue];
}
