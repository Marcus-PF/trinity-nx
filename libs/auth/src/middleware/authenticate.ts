/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃       Trinity – Auth Middleware: authenticate       ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Express middleware that verifies a bearer JWT from the
 * Authorization header and attaches the decoded payload
 * to the `req.user` object for downstream access control.
 */

import type { Request, Response, NextFunction } from 'express';
import { AuthError, verifyToken } from '@trinity/auth';
import { log } from '@trinity/utils';
import type { JWTPayload } from '@trinity/auth';

/**
 * Augment the Express request object with a `user` property.
 */
declare module 'express-serve-static-core' {
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
      return res.status(error.status).json({ message: error.message });
    }

    log('error', '[AuthError]', error);
    return res.status(500).json({ message: 'Internal authentication error' });
  }
}
