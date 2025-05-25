/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        @trinity/hooks – useEventListener React Hook  ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * This hook attaches and removes event listeners on any target 
 * (e.g., window, document, HTML element, or ref). It ensures that 
 * the listeners are safely removed when the component unmounts.
 */

import { renderHook } from '@testing-library/react-hooks';
import { describe, it, expect, vi } from 'vitest';
import { useEventListener } from '@trinity/hooks';

describe('useEventListener', () => {
  /**
   * Test Case: Attaches and removes event listener on window
   * Verifies that the event listener is attached and removed correctly
   * on the specified target (window).
   */
  it('attaches and removes event listener on window', () => {
    const handler = vi.fn();
    const event = new Event('resize');

    const { unmount } = renderHook(() =>
      useEventListener(window, 'resize', handler)
    );

    window.dispatchEvent(event);
    expect(handler).toHaveBeenCalledTimes(1);

    unmount();
    window.dispatchEvent(event);
    expect(handler).toHaveBeenCalledTimes(1); // no change after unmount
  });

  /**
   * Test Case: Does not crash on null target
   * Ensures that the hook does not crash if a null target is provided.
   */
  it('does not crash on null target', () => {
    const handler = vi.fn();
    const { result } = renderHook(() =>
      useEventListener(null, 'click', handler)
    );
    expect(result).toBeDefined();
  });
});
