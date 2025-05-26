/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃     Trinity – useEventListener React Hook           ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Adds and removes event listeners to any target
 * (window, document, HTML element, or ref).
 */

import { useEffect, useRef } from 'react';

/**
 * Hook to attach an event listener to any target safely.
 *
 * @template K - Event name (e.g., 'click')
 * @param target - DOM element, window, or ref
 * @param type - Event type string
 * @param listener - Handler function to run on event
 * @param options - Optional event listener options
 *
 * @example
 * useEventListener(window, 'resize', () => console.log('resized'));
 */
export function useEventListener<K extends keyof GlobalEventHandlersEventMap>(
  target: EventTarget | null | undefined,
  type: K,
  listener: (event: GlobalEventHandlersEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions
) {
  const savedHandler = useRef<(event: GlobalEventHandlersEventMap[K]) => void | undefined>(undefined);

  // Store latest handler in ref
  useEffect(() => {
    savedHandler.current = listener;
  }, [listener]);

  useEffect(() => {
    if (!target?.addEventListener) return;

    const wrapped = (event: Event) => {
      if (savedHandler.current) {
        savedHandler.current(event as GlobalEventHandlersEventMap[K]);
      }
    };

    target.addEventListener(type, wrapped, options);
    return () => target.removeEventListener(type, wrapped, options);
  }, [type, target, options]);
}
 