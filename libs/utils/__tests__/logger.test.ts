/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃      @trinity/utils – logger Utility Tests           ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Tests dynamic log level configuration and method-based
 * filtering for safe runtime console output.
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  setLogLevel,
  getLogLevel,
  log
} from '@trinity/utils';

describe('logger', () => {
  const originalConsole = { ...console };

  beforeEach(() => {
    // 🔧 Mock console methods before each test
    console.debug = vi.fn();
    console.info = vi.fn();
    console.warn = vi.fn();
    console.error = vi.fn();
    console.log = vi.fn();
  });

  /**
   * Can set and retrieve the current log level
   */
  it('sets and gets the log level', () => {
    setLogLevel('warn');
    expect(getLogLevel()).toBe('warn');
  });

  /**
   * Logs only those levels that match or exceed threshold
   */
  it('logs only above the threshold', () => {
    setLogLevel('warn');
    log('info', 'This should not log');
    log('warn', 'This should log');
    log('error', 'This should also log');

    expect(console.info).not.toHaveBeenCalled();
    expect(console.warn).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalled();
  });

  /**
   * Falls back to console.log if specific method is undefined
   */
  it('falls back to console.log if method not available', () => {
    (console.debug as any) = undefined;
    log('debug', 'Fallback to log');
    expect(console.log).toHaveBeenCalled();
  });

  afterEach(() => {
    // 🔄 Restore original console after each test
    Object.assign(console, originalConsole);
  });
});
