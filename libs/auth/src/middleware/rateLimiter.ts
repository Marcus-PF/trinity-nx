/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        Trinity – Auth Rate Limiters (Middleware)    ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Express-compatible middleware to limit excessive requests
 * to login, refresh token, and 2FA endpoints.
 */

import rateLimit from 'express-rate-limit';

/**
 * Set of rate limiters used in critical auth-related routes.
 * Helps prevent brute-force, abuse, or spam on public endpoints.
 *
 * @example
 * app.post('/login', rateLimiters.login, loginHandler);
 */
export const rateLimiters = {
  /**
   * Limits login attempts to 5 per 15 minutes
   */
  login: rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5,
    message: {
      message: 'Too many login attempts. Please try again in 15 minutes.'
    },
    standardHeaders: true,
    legacyHeaders: false
  }),

  /**
   * Limits refresh token requests to 10 per 10 minutes
   */
  refresh: rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 10,
    message: {
      message: 'Too many refresh attempts. Please try again later.'
    },
    standardHeaders: true,
    legacyHeaders: false
  }),

  /**
   * Limits 2FA verification attempts to 5 per 10 minutes
   */
  twoFA: rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 5,
    message: {
      message: 'Too many 2FA attempts. Please try again later.'
    },
    standardHeaders: true,
    legacyHeaders: false
  })
};
