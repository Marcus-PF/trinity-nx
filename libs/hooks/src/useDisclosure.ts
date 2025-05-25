/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        Trinity – useDisclosure React Hook           ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Manages toggleable UI state for things like modals,
 * drawers, dropdowns, etc. Offers simple `open`, `close`,
 * and `toggle` methods for control.
 */

import { useCallback, useState } from 'react';

/**
 * Hook to manage a boolean "open" state with handlers.
 *
 * @param initial - Initial state value (default: false)
 * @returns Object with `isOpen`, `open()`, `close()`, `toggle()`
 *
 * @example
 * const { isOpen, open, close, toggle } = useDisclosure();
 * if (isOpen) return <Modal onClose={close} />;
 */
export function useDisclosure(initial = false) {
  const [isOpen, setIsOpen] = useState<boolean>(initial);

  /** Set state to `true` */
  const open = useCallback(() => setIsOpen(true), []);

  /** Set state to `false` */
  const close = useCallback(() => setIsOpen(false), []);

  /** Toggle between `true` and `false` */
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return { isOpen, open, close, toggle };
}
