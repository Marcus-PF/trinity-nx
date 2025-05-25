/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        Trinity – WebSocket Wrapper Utility           ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Simplifies working with WebSockets in Trinity apps.
 * Supports tokenized connections and custom event listeners.
 */

type Listener = (data: MessageEvent<any>) => void;

export class WebSocketWrapper {
  private socket: WebSocket | null = null;
  private listeners: Set<Listener> = new Set();
  private reconnect: boolean;
  private reconnectInterval = 3000;
  private url: string;

  constructor(url: string, reconnect = true) {
    this.url = url;
    this.reconnect = reconnect;
    this.connect();
  }

  private connect() {
    this.socket = new WebSocket(this.url);

    this.socket.onmessage = (event) => {
      this.listeners.forEach((cb) => cb(event));
    };

    this.socket.onclose = () => {
      if (this.reconnect) {
        setTimeout(() => this.connect(), this.reconnectInterval);
      }
    };
  }

  /**
   * Send a JSON-serializable message through the socket.
   */
  send(data: any): void {
    if (!this.socket || this.socket.readyState !== WebSocket.OPEN) return;
    this.socket.send(JSON.stringify(data));
  }

  /**
   * Register a callback for incoming messages.
   */
  on(callback: Listener): void {
    this.listeners.add(callback);
  }

  /**
   * Remove a previously registered listener.
   */
  off(callback: Listener): void {
    this.listeners.delete(callback);
  }

  /**
   * Close the WebSocket connection manually.
   */
  close(): void {
    this.reconnect = false;
    this.socket?.close();
  }
}

/**
 * Creates a new WebSocket connection.
 * Automatically uses correct origin in browser.
 *
 * @param path - Path relative to host (e.g. "/alerts")
 * @returns A WebSocketWrapper instance
 */
export function createWebSocket(path: string): WebSocketWrapper {
  const isBrowser = typeof window !== 'undefined';
  const origin = isBrowser ? window.location.origin : 'http://localhost:3000';
  const protocol = origin.startsWith('https') ? 'wss' : 'ws';
  const url = `${protocol}://${origin.replace(/^https?:\/\//, '')}${path}`;

  return new WebSocketWrapper(url);
}
