/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃      @trinity/auth – Test Mocks: Express Utilities   ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Shared mock helpers for testing Express request/response
 * interactions within Trinity middleware and route handlers.
 */

import { vi } from 'vitest';
import type { Request, Response } from 'express';

/**
 * Creates a mock Express Request object with optional overrides.
 *
 * @param overrides - Partial request fields to override
 * @returns A typed mock Request
 */
export function mockRequest(overrides: Partial<Request> = {}): Request {
  return {
    headers: {},
    ...overrides
  } as Request;
}

/**
 * Creates a mock Express Response object with spyable methods.
 *
 * @returns A typed mock Response with `status`, `json`, and `setHeader` spies
 */
export function mockResponse(): Response & {
  status: ReturnType<typeof vi.fn>;
  json: ReturnType<typeof vi.fn>;
  setHeader: ReturnType<typeof vi.fn>;
} {
  const res: any = {};
  res.status = vi.fn().mockReturnValue(res);
  res.json = vi.fn().mockReturnValue(res);
  res.setHeader = vi.fn();
  return res;
}
