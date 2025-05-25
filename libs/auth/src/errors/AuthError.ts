/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃         Trinity – AuthError Class                   ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Custom error class for use in authentication middleware,
 * strategies, and route logic. Supports HTTP status codes
 * and message propagation to API consumers.
 */

export class AuthError extends Error {
  /**
   * HTTP status code to return (e.g. 401, 403)
   */
  status: number;

  /**
   * Optional additional payload (e.g. validation details, context)
   */
  details?: unknown;

  constructor(message: string, status = 401, details?: unknown) {
    super(message);
    this.name = 'AuthError';
    this.status = status;
    this.details = details;
  }

  /**
   * Converts this error to a JSON-compatible object.
   */
  toJSON() {
    return {
      message: this.message,
      code: this.status,
      ...(this.details ? { details: this.details } : {})
    };
  }
}
