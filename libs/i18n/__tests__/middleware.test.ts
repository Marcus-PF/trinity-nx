/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃       @trinity/i18n – Next.js Middleware Tests       ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Validates automatic locale detection and redirect logic
 * for Next.js middleware, including fallback handling.
 */

import { describe, it, expect } from 'vitest';
import { middleware } from '@trinity/i18n';
import { NextRequest } from 'next/server';
import { createRequest } from 'node-mocks-http';

const createMockRequest = (url: string, options: Record<string, any> = {}) => {
  const headers = new Headers(options.headers || {});
  const req = new NextRequest(new URL(url, 'http://localhost'), {
    headers
  }) as any;

  req.cookies = {
    get: (key: string) => ({ value: options.cookies?.[key] }),
  };

  req.nextUrl = new URL(url, 'http://localhost');
  return req;
};

describe('middleware()', () => {
  it('skips API and static paths', () => {
    const apiReq = createMockRequest('/api/data');
    const staticReq = createMockRequest('/favicon.ico');
    expect(middleware(apiReq).status).toBe(200);
    expect(middleware(staticReq).status).toBe(200);
  });

  it('does not redirect if locale is already in path', () => {
    const req = createMockRequest('/en-ZA/home');
    const res = middleware(req);
    expect(res.status).toBe(200);
  });

  it('redirects using cookie locale if available', () => {
    const req = createMockRequest('/about', {
      cookies: { locale: 'af-ZA' }
    });
    const res = middleware(req);
    expect(res.headers.get('location')).toBe('http://localhost/af-ZA/about');
  });

  it('redirects using accept-language header if no cookie', () => {
    const req = createMockRequest('/about', {
      headers: { 'accept-language': 'af-ZA,en;q=0.9' }
    });
    const res = middleware(req);
    expect(res.headers.get('location')).toBe('http://localhost/af-ZA/about');
  });

  it('falls back to default locale if nothing detected', () => {
    const req = createMockRequest('/contact');
    const res = middleware(req);
    expect(res.headers.get('location')).toBe('http://localhost/en-ZA/contact');
  });
});
