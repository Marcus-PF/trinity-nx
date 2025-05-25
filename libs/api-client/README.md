# `@trinity/api-client`

> 🔗 Shared HTTP and WebSocket client wrapper for interacting with the Trinity backend API

---

## 🧠 Purpose

The `@trinity/api-client` package provides a **unified, typed, and composable interface** for communicating with Trinity’s backend services via:

- ✅ REST (with token injection and automatic JSON parsing)
- ✅ WebSockets (with reconnect support and event listeners)

It abstracts low-level networking and token concerns for use across all Trinity apps — including the **dashboard**, **forum**, and **mobile clients**.

---

## 🧱 Key Features

- ✅ **Typed fetch** wrapper with automatic headers and error parsing  
- ✅ **WebSocket abstraction** with `on/off/send` lifecycle  
- ✅ Token-aware, secure-by-default architecture  
- ✅ Runtime-safe for **browser, Node, SSR, React Native**  
- ♻️ Extensible in React hooks, async flows, and data libraries  

---

## 📦 Installation

```bash
pnpm add @trinity/api-client
````

Or if internal to Trinity:

> ✅ Already available via workspace root

---

## 🔧 Usage

### Import

```ts
import {
  fetcher,
  createWebSocket,
  getAuthToken,
  setTokenGetter,
  API_BASE_URL
} from '@trinity/api-client';
```

### Examples

#### 🔁 API Fetch

```ts
const posts = await fetcher<Post[]>('/api/posts', { method: 'GET' });
```

#### 📡 WebSocket Events

```ts
const socket = createWebSocket('/alerts');
socket.on((event) => {
  const data = JSON.parse(event.data);
  console.log('Received', data);
});
```

#### 🔐 Token Override (e.g. for SSR)

```ts
setTokenGetter(() => 'my-jwt-token');
```

---

## 🔎 Exports

| Export              | Type       | Description                                 |
| ------------------- | ---------- | ------------------------------------------- |
| `fetcher<T>()`      | `function` | Typed wrapper for `fetch` with token logic  |
| `createWebSocket()` | `function` | WebSocket client with reconnect/listeners   |
| `API_BASE_URL`      | `const`    | Derived from `NEXT_PUBLIC_API_URL`          |
| `getAuthToken()`    | `function` | Returns current JWT from localStorage       |
| `setTokenGetter()`  | `function` | Override token logic (useful for tests/SSR) |
| `isApiError()`      | `function` | Type guard for backend error shape          |
| `getErrorMessage()` | `function` | Extracts clean string from `unknown` errors |

---

## 🧪 Testing

All exports are fully tested using [`vitest`](https://vitest.dev/), with **mocked fetch**, **token injection**, and **WebSocket simulation**.

### Run Tests

```bash
pnpm vitest libs/api-client
```

### Test Coverage

| File           | Tests                          |
| -------------- | ------------------------------ |
| `config.ts`    | Token getter, override logic   |
| `errors.ts`    | Error shape guard + fallback   |
| `fetcher.ts`   | Header injection, error paths  |
| `websocket.ts` | Listener lifecycle, send/close |

---

## 🧼 Linting & Formatting

Follows Trinity Monorepo shared configs:

* ✅ `@trinity/config-eslint`
* ✅ `@trinity/config-prettier`
* ✅ `@trinity/config-typescript`

---

## 📁 File Structure

```txt
libs/api-client/
├── src/
│   ├── config.ts          # Base URL + token accessor
│   ├── errors.ts          # Error guard and fallback
│   ├── fetcher.ts         # Main typed fetch utility
│   ├── websocket.ts       # WebSocket abstraction class
│   └── index.ts           # Barrel export
├── __tests__/
│   ├── config.test.ts
│   ├── errors.test.ts
│   ├── fetcher.test.ts
│   └── websocket.test.ts
├── package.json
├── eslint.config.mjs
├── tsconfig.json
├── tsconfig.lib.json
├── tsconfig.spec.json
└── README.md ← You are here
```

---

## 💡 Design Notes

* 🔐 Secure defaults with `Authorization` headers
* 🌍 Supports both absolute (`http://`) and relative paths
* 🧩 Environment-driven config (`process.env` in Node/SSR)
* ❌ No React dependency — works in any TypeScript context
* ♻️ Easily mockable with `setTokenGetter` + fetch override

---

## 🔗 Related Packages

* [`@trinity/types`](../types) – Shared type declarations
* [`@trinity/hooks`](../hooks) – React hooks with this package
* [`@trinity/utils`](../utils) – Extra helpers used alongside fetcher
* [`@trinity/config-typescript`](../config-typescript) – Compiler base

---

## 🛠 Maintainers

**Marc Ive** – [@marci](mailto:marci@mannys.co.za)

---