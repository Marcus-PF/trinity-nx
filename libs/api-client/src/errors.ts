/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃         Trinity – API Error Utilities               ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Standardizes the shape of errors returned from API
 * routes and provides safe utilities to work with them.
 */

/**
 * Shape of an error returned by the Trinity backend.
 */
export interface ApiError {
  message: string;
  code?: number;
  details?: unknown;
}

/**
 * Type guard to detect a valid ApiError structure.
 */
export function isApiError(error: any): error is ApiError {
  return (
    typeof error === 'object' &&
    error !== null &&
    typeof error.message === 'string'
  );
}

/**
 * Converts any caught error into a clean message.
 *
 * @param err - Any thrown error (API, network, etc.)
 * @returns A user-facing error string
 */
export function getErrorMessage(err: unknown): string {
  if (isApiError(err)) return err.message;
  if (err instanceof Error) return err.message;
  return 'An unexpected error occurred.';
}
