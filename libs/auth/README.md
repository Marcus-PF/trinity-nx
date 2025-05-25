# `@trinity/auth`

> 🔗 Authentication library providing JWT-based login, 2FA, and role-based access control for Trinity applications.

---

## 🧠 Purpose

The `@trinity/auth` package provides essential utilities for **authentication, token management**, and **role-based access control (RBAC)** within the Trinity ecosystem. It handles:

- ✅ **JWT signing and verification** for secure authentication
- ✅ **Local login** via email/password validation
- ✅ **Two-factor authentication (2FA)** integration with TOTP
- ✅ **Rate limiting** to prevent brute-force attacks
- ✅ **Blacklist** for revoked JWTs (used for token invalidation)
- ✅ **Middleware** for handling authentication and authorization in Express-based apps

This library is designed to work seamlessly across **React**, **Node**, **SSR**, and other environments within the Trinity Monorepo.

---

## 🧱 Key Features

- ✅ **JWT Authentication**: Sign, decode, and validate JWTs with ease
- ✅ **2FA (TOTP)**: Generate secrets and verify user-provided tokens for additional security
- ✅ **Role-Based Access Control (RBAC)**: Control access to resources based on user roles (admin, member, guest)
- ✅ **Rate Limiting**: Protect critical routes like login and 2FA from brute-force attacks
- ✅ **Blacklist Revoked Tokens**: Support for tracking invalidated tokens to immediately revoke access
- ✅ **Composability**: Easily extendable with React hooks, middleware, or additional 2FA providers
- ✅ **Modular Design**: Works with any TypeScript-based project or full-stack React application

---

## 📦 Installation

```bash
pnpm add @trinity/auth
````

Or if internal to Trinity:

> ✅ Already available via workspace root

---

## 🔧 Usage

### Import

```ts
import {
  authenticate,
  authorize,
  AuthProvider,
  useAuth,
  AuthError
} from '@trinity/auth';
```

### Examples

#### 🔐 JWT Authentication Middleware

```ts
app.post('/login', authenticate, (req, res) => {
  res.json({ user: req.user });
});
```

#### 🎯 2FA Integration

```ts
app.post('/verify-2fa', authenticate, authorize(['admin']), verify2FA, (req, res) => {
  res.json({ success: true });
});
```

#### 🔑 Role-based Access Control

```ts
app.get('/admin', authenticate, authorize(['admin']), (req, res) => {
  res.send('Welcome Admin!');
});
```

---

## 🔎 Exports

| Export           | Type        | Description                                           |
| ---------------- | ----------- | ----------------------------------------------------- |
| `authenticate()` | `function`  | JWT validation middleware                             |
| `authorize()`    | `function`  | Role-based access control middleware                  |
| `AuthProvider`   | `component` | React context provider for user authentication        |
| `useAuth()`      | `hook`      | Custom hook to access auth context in React           |
| `AuthError`      | `class`     | Custom error class for handling authentication errors |

---

## 🧪 Testing

All core functionalities are tested using [`vitest`](https://vitest.dev/) with mocked requests, 2FA token simulation, and JWT validation.

### Run Tests

```bash
pnpm vitest libs/auth
```

### Test Coverage

| File               | Tests                                           |
| ------------------ | ----------------------------------------------- |
| `jwtStrategy.ts`   | JWT signing, decoding, and verification         |
| `localStrategy.ts` | Login with credentials, password hashing/verify |
| `verify2fa.ts`     | 2FA secret generation and verification          |
| `rateLimiter.ts`   | Rate limiting middleware functionality          |

---

## 🧼 Linting & Formatting

Follows Trinity Monorepo shared configs:

* ✅ `@trinity/config-eslint`
* ✅ `@trinity/config-prettier`
* ✅ `@trinity/config-typescript`

---

## 📁 File Structure

```txt
libs/auth/
├── src/
│   ├── context/            # React context and hooks for authentication
│   ├── middleware/         # Authentication and authorization middleware
│   ├── routes/             # Express route handlers for 2FA, login, etc.
│   ├── strategies/         # JWT and local login strategies
│   ├── types/              # Types for JWT payload and context
│   ├── utils/              # Utility functions like password hashing
│   └── index.ts            # Barrel export for easy imports
├── __tests__/              # Unit and integration tests
│   ├── authenticate.test.ts
│   ├── AuthError.test.ts
│   ├── rateLimiter.test.ts
│   ├── verify2fa.test.ts
│   ├── ...
├── package.json
├── eslint.config.mjs
├── tsconfig.json
├── tsconfig.lib.json
├── tsconfig.spec.json
└── README.md ← You are here
```

---

## 💡 Design Notes

* 🔐 Secure defaults with `Authorization` headers and 2FA
* 🧩 Modular and composable for React, Express, and more
* 🌍 Built to work in SSR, Node, and client-side environments
* 🛠 Easily mockable and extendable for various use cases

---

## 🔗 Related Packages

* [`@trinity/types`](../types) – Shared types across Trinity apps
* [`@trinity/utils`](../utils) – Utility functions used across the package
* [`@trinity/hooks`](../hooks) – React hooks for common patterns
* [`@trinity/config-typescript`](../config-typescript) – TypeScript configuration and utilities

---

## 🛠 Maintainers

**Marc Ive** – [@marci](mailto:marci@mannys.co.za)

---

### Conclusion

This **`@trinity/auth`** package provides a comprehensive, modular, and secure solution for handling authentication, authorization, and session management across all Trinity applications.

---
