/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃      @trinity/hooks – useLocalStorage React Hook     ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * This hook persists state in localStorage across sessions 
 * and automatically syncs with client-side storage after hydration.
 * It ensures that state is retained across page reloads.
 */

import { renderHook, act } from '@testing-library/react-hooks';
import { describe, it, expect, beforeEach } from 'vitest';
import { useLocalStorage } from '@trinity/hooks';

describe('useLocalStorage', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  /**
   * Test Case: Returns default value if nothing stored
   * Verifies that the hook returns the default value if nothing is stored in localStorage.
   */
  it('returns default value if nothing stored', () => {
    const { result } = renderHook(() => useLocalStorage('theme', 'light'));
    expect(result.current[0]).toBe('light');
  });

  /**
   * Test Case: Initializes from localStorage if available
   * Ensures that the hook initializes state from localStorage if a value is present.
   */
  it('initializes from localStorage if available', () => {
    localStorage.setItem('theme', JSON.stringify('dark'));
    const { result } = renderHook(() => useLocalStorage('theme', 'light'));
    expect(result.current[0]).toBe('dark');
  });

  /**
   * Test Case: Updates state and localStorage when value is set
   * Verifies that setting a value updates both the state and localStorage.
   */
  it('updates state and localStorage when value is set', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'default'));
    act(() => result.current[1]('updated'));
    expect(result.current[0]).toBe('updated');
    expect(localStorage.getItem('test-key')).toBe(JSON.stringify('updated'));
  });

  /**
   * Test Case: Handles non-JSON storage values safely
   * Ensures that non-JSON values in localStorage are handled safely without causing errors.
   */
  it('handles non-JSON storage values safely', () => {
    localStorage.setItem('theme', '💥');
    const { result } = renderHook(() => useLocalStorage('theme', 'fallback'));
    expect(result.current[0]).toBe('fallback');
  });
});
