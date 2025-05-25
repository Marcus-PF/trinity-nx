/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃         Trinity – cn() Utility                      ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Combines Tailwind class names using clsx and merges
 * conflicts using tailwind-merge.
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to compose Tailwind classNames with conflict resolution.
 *
 * @param inputs - One or more class name values (string, array, conditional)
 * @returns A single merged class name string
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
