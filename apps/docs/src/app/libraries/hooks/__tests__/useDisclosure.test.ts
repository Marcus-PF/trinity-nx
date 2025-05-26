/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        @trinity/hooks – useDisclosure React Hook    ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * This hook manages a boolean "open" state with methods to 
 * `open`, `close`, and `toggle`. It is typically used to 
 * manage the visibility of UI components such as modals, 
 * drawers, dropdowns, etc.
 */

import { renderHook, act } from '@testing-library/react-hooks';
import { describe, it, expect } from 'vitest';
import { useDisclosure } from '@trinity/hooks';

describe('useDisclosure', () => {
  /**
   * Test Case: Defaults to false
   * Ensures that the hook defaults to a closed state (false).
   */
  it('defaults to false', () => {
    const { result } = renderHook(() => useDisclosure());
    expect(result.current.isOpen).toBe(false);
  });

  /**
   * Test Case: Respects initial state
   * Tests that the hook respects an initial state (true).
   */
  it('respects initial state', () => {
    const { result } = renderHook(() => useDisclosure(true));
    expect(result.current.isOpen).toBe(true);
  });

  /**
   * Test Case: Opens and closes correctly
   * Verifies that the hook correctly opens and closes the state.
   */
  it('opens and closes correctly', () => {
    const { result } = renderHook(() => useDisclosure());
    act(() => result.current.open());
    expect(result.current.isOpen).toBe(true);

    act(() => result.current.close());
    expect(result.current.isOpen).toBe(false);
  });

  /**
   * Test Case: Toggles state correctly
   * Ensures that the hook toggles the state between true and false.
   */
  it('toggles state correctly', () => {
    const { result } = renderHook(() => useDisclosure());
    act(() => result.current.toggle());
    expect(result.current.isOpen).toBe(true);

    act(() => result.current.toggle());
    expect(result.current.isOpen).toBe(false);
  });
});
