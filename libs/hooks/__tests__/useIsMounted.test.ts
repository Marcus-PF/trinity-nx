/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃       @trinity/hooks – useIsMounted React Hook      ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * This hook provides a stable function to check whether the 
 * component is still mounted. It is useful for preventing 
 * memory leaks by guarding side effects, particularly in 
 * asynchronous logic.
 */

import { renderHook } from '@testing-library/react-hooks';
import { describe, it, expect } from 'vitest';
import { useIsMounted } from '@trinity/hooks';

describe('useIsMounted', () => {
  /**
   * Test Case: Returns true when component is mounted
   * Verifies that the hook returns `true` while the component is mounted.
   */
  it('returns true when component is mounted', () => {
    const { result } = renderHook(() => useIsMounted());
    expect(result.current()).toBe(true);
  });

  /**
   * Test Case: Returns false after component unmounts
   * Verifies that the hook returns `false` after the component unmounts.
   */
  it('returns false after component unmounts', () => {
    const { result, unmount } = renderHook(() => useIsMounted());
    unmount();
    expect(result.current()).toBe(false);
  });
});
