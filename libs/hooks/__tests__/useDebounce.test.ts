/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        @trinity/hooks – useDebounce React Hook      ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * This hook debounces a rapidly changing value by delaying
 * the update until after a specified delay. It is commonly
 * used for throttling inputs like search terms or user queries.
 * It ensures efficient handling of user input without excessive re-renders.
 */

import { renderHook, act } from '@testing-library/react-hooks';
import { describe, it, expect } from 'vitest';
import { useDebounce } from '@trinity/hooks';  // Correct import path

describe('useDebounce', () => {
  /**
   * Test Case: Returns initial value immediately
   * Verifies that the hook returns the initial value without delay.
   */
  it('returns initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('init', 500));
    expect(result.current).toBe('init');
  });

  /**
   * Test Case: Updates value only after delay
   * Ensures that the debounced value is updated only after the specified delay.
   */
  it('updates value only after delay', () => {
    const { result, rerender } = renderHook(({ value }) => useDebounce(value, 500), {
      initialProps: { value: 'init' },
    });

    rerender({ value: 'updated' });
    expect(result.current).toBe('init');

    act(() => {
      vi.advanceTimersByTime(499);
    });
    expect(result.current).toBe('init');

    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(result.current).toBe('updated');
  });

  /**
   * Test Case: Cancels previous timer if value changes quickly
   * Verifies that the hook cancels the previous timer and uses the latest value.
   */
  it('cancels previous timer if value changes quickly', () => {
    const { result, rerender } = renderHook(({ value }) => useDebounce(value, 300), {
      initialProps: { value: 'start' },
    });

    rerender({ value: 'v1' });
    rerender({ value: 'v2' });

    act(() => {
      vi.advanceTimersByTime(300);
    });
    expect(result.current).toBe('v2');
  });
});
