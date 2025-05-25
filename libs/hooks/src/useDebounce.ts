/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        Trinity – useDebounce React Hook             ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Delays updating a value until after a specified delay.
 * Commonly used for throttling input or search queries.
 */

import { useEffect, useState } from 'react';

/**
 * React hook that returns a debounced version of a value.
 *
 * @template T - The type of value to debounce
 * @param value - The input value that may change rapidly
 * @param delay - Time in milliseconds to delay updates (default: 300ms)
 * @returns A stable, delayed version of the input value
 *
 * @example
 * const debounced = useDebounce(searchTerm, 500);
 */
export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debounced, setDebounced] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}
