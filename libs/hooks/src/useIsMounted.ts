/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃       Trinity – useIsMounted React Hook             ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Returns a stable function that checks if the component
 * is still mounted. Useful for guarding side effects in
 * asynchronous logic and avoiding memory leaks.
 */

import { useEffect, useRef } from 'react';

/**
 * Hook to determine if a component is currently mounted.
 *
 * @returns A stable function that returns `true` if mounted
 *
 * @example
 * const isMounted = useIsMounted();
 * useEffect(() => {
 *   fetchData().then(() => {
 *     if (isMounted()) updateState();
 *   });
 * }, []);
 */
export function useIsMounted(): () => boolean {
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return () => mountedRef.current;
}
