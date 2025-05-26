/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃         Tests – @trinity/api-client/websocket        ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Covers client-side WebSocket abstraction with mocked
 * message dispatch and listener registration.
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { WebSocketWrapper, createWebSocket } from '@trinity/api-client';

describe('websocket.ts', () => {
  let originalWebSocket: typeof WebSocket;
  let mockSocket: any;
  let openListeners: Function[] = [];
  let messageListeners: Function[] = [];
  let closeListeners: Function[] = [];

  beforeEach(() => {
    openListeners = [];
    messageListeners = [];
    closeListeners = [];

    mockSocket = {
      readyState: 1,
      send: vi.fn(),
      close: vi.fn(),
      addEventListener: vi.fn((event: string, cb: Function) => {
        if (event === 'open') openListeners.push(cb);
        if (event === 'message') messageListeners.push(cb);
        if (event === 'close') closeListeners.push(cb);
      }),
      onmessage: null,
      onclose: null
    };

    originalWebSocket = global.WebSocket;
    global.WebSocket = vi.fn(() => mockSocket) as any;
  });

  afterEach(() => {
    global.WebSocket = originalWebSocket;
  });

  it('should call send on underlying WebSocket if open', () => {
    const ws = new WebSocketWrapper('ws://localhost');
    ws['socket'] = mockSocket; // inject mock directly
    ws.send({ hello: 'world' });

    expect(mockSocket.send).toHaveBeenCalledWith(JSON.stringify({ hello: 'world' }));
  });

  it('should register and trigger listeners on message', () => {
    const ws = new WebSocketWrapper('ws://localhost');
    const mockListener = vi.fn();

    ws.on(mockListener);

    const mockEvent = { data: 'test' };
    (ws as any)['socket'].onmessage(mockEvent);

    expect(mockListener).toHaveBeenCalledWith(mockEvent);
  });

  it('should remove listeners using .off()', () => {
    const ws = new WebSocketWrapper('ws://localhost');
    const mockListener = vi.fn();

    ws.on(mockListener);
    ws.off(mockListener);

    const mockEvent = { data: 'ignored' };
    (ws as any)['socket'].onmessage(mockEvent);

    expect(mockListener).not.toHaveBeenCalled();
  });

  it('should stop reconnecting after close()', () => {
    const ws = new WebSocketWrapper('ws://localhost');
    ws['socket'] = mockSocket;
    ws.close();

    expect(ws['reconnect']).toBe(false);
    expect(mockSocket.close).toHaveBeenCalled();
  });

  it('createWebSocket() should return a WebSocketWrapper instance', () => {
    const instance = createWebSocket('/alerts');
    expect(instance).toBeInstanceOf(WebSocketWrapper);
  });
});
