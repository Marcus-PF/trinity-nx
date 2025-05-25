/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃              Trinity – Logger Utility               ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Minimal log-level-based output for debugging and runtime tracing.
 * Works across browser and Node.js environments.
 */

/**
 * Available log levels in increasing order of severity.
 */
export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

/** Internal numeric ordering of log levels */
const levelOrder: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

/** Global log level for filtering output */
let currentLevel: LogLevel = 'info';

/**
 * Set the minimum log level for output.
 *
 * @param level - The desired log level threshold
 */
export function setLogLevel(level: LogLevel): void {
  currentLevel = level;
}

/**
 * Get the current active log level.
 *
 * @returns The current threshold log level
 */
export function getLogLevel(): LogLevel {
  return currentLevel;
}

/**
 * Conditionally log a message if it meets the current level threshold.
 *
 * @param level - Severity of the log (e.g., 'info', 'error')
 * @param message - Log message to emit
 * @param args - Additional context or data to log
 */
export function log(level: LogLevel, message: string, ...args: any[]): void {
  if (levelOrder[level] >= levelOrder[currentLevel]) {
    const output = console[level] ?? console.log;
    output(`[${level.toUpperCase()}] ${new Date().toISOString()}: ${message}`, ...args);
  }
}
