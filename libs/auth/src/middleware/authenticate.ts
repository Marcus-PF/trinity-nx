/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃       Trinity – Auth Middleware: authenticate       ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Express middleware that verifies a bearer JWT from the
 * Authorization header and attaches the decoded payload
 * to the `req.user` object for downstream access control.
 */

import type { Request, Response, NextFunction } from 'express';
import { AuthError } from '../errors/AuthError';
import { verifyToken } from '../utils/verifyToken';
import { log } from '@trinity/utils';
import type { JWTPayload } from '../types/token';

/**
 * Augment the Express request object with a `user` property.
 */
declare module 'express' {
  interface Request {
    user?: JWTPayload;
  }
}

/**
 * Express middleware that authenticates a JWT bearer token.
 *
 * @example
 * app.get('/secure', authenticate, (req, res) => res.send(`Welcome ${req.user.email}`));
 */
export function authenticate(req: Request, res: Response, next: NextFunction): void {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader?.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

    if (!token) {
      throw new AuthError('Authorization token is missing', 401);
    }

    const decoded = verifyToken(token);
    req.user = decoded;

    next();
  } catch (error) {
    if (error instanceof AuthError) {
      res.status(error.status).json({ message: error.message });
      return;
    }

    log('error', '[AuthError]', error);
    res.status(500).json({ message: 'Internal authentication error' });
  }
}
