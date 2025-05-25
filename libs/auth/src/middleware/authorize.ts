/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        Trinity – Auth Middleware: authorize          ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Express middleware for enforcing role-based access control.
 * Must be used after `authenticate()` middleware.
 */

import type { Request, Response, NextFunction } from 'express';
import type { JWTPayload } from '@trinity/auth';

/**
 * Middleware to restrict access to specific user roles.
 *
 * @param allowedRoles - Array of allowed role strings (e.g. ['admin', 'member'])
 * @returns Express middleware function
 *
 * @example
 * app.get('/admin', authenticate, authorize(['admin']), handler);
 */
export function authorize(
  allowedRoles: JWTPayload['role'][]
): (req: Request, res: Response, next: NextFunction) => void {
  return (req, res, next) => {
    const user = req.user as JWTPayload | undefined;

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized: user not found in request context' });
    }

    if (!allowedRoles.includes(user.role)) {
      return res.status(403).json({ message: `Forbidden: requires role(s): ${allowedRoles.join(', ')}` });
    }

    next();
  };
}
