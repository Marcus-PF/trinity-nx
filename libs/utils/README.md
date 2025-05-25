# `@trinity/utils`

> 🛠 Shared utility functions used across all Trinity frontend and backend applications

---

## 🧠 Purpose

The `@trinity/utils` package contains reusable utility functions that solve common data formatting, transformation, and security-related tasks.  
It is designed to be lightweight, stateless, and framework-agnostic — used by any app, package, or API in the Trinity Monorepo.

---

## 🧱 Key Features

- ✅ Pure functions for formatting, encoding, and validation
- ✅ No runtime dependencies
- ✅ Tree-shakable, type-safe, and side-effect free
- ✅ Works across Node, browser, and React Native
- 🧪 Testable, functional-first design

---

## 📦 Installation

```bash
pnpm add @trinity/utils
````

This is a shared internal package and is already included in most workspace builds.

---

## 🔧 Usage

### Importing Helpers

```ts
import {
  formatDate,
  sanitizeHTML,
  slugify,
  generateTOTPSecret,
  apiClient
} from '@trinity/utils';
```

### Example

```ts
formatDate('2025-01-01'); // "01 Jan 2025"
slugify('Hello World!'); // "hello-world"
sanitizeHTML('<script>') // ""
await apiClient('/api/posts');
```

---

## 🔎 Exports

| Module          | Function(s)                            | Description                                   |
| --------------- | -------------------------------------- | --------------------------------------------- |
| `apiClient.ts`  | `apiClient()`                          | Typed fetch wrapper with error fallback       |
| `constants.ts`  | `SLUG_REGEX`, `SAFE_HTML_TAGS`         | Global regex and allowlist config             |
| `formatDate.ts` | `formatDate()`                         | Formats dates with locale options             |
| `logger.ts`     | `log()`, `setLogLevel()`               | Console-safe logger with dynamic thresholds   |
| `otp.ts`        | `generateTOTPSecret()`, `verifyTOTP()` | 2FA OTP helpers                               |
| `qrcode.ts`     | `generateQRCode()`                     | Converts strings to QR code data URIs         |
| `sanitize.ts`   | `sanitizeHTML()`                       | Strips unsafe HTML while preserving safe tags |
| `slugify.ts`    | `slugify()`                            | Converts strings to URL-safe slugs            |

---

## 🧪 Testing

All utility functions are covered by [`vitest`](https://vitest.dev/).
Tests are located in `libs/utils/__tests__` and include:

* ✅ Unit tests for all individual helpers
* ✅ SSR-safe mocks for global objects
* ✅ Verified behavior for edge cases and fallbacks

### Run Tests

```bash
pnpm vitest libs/utils
```

---

## 🧼 Linting & Formatting

Follows shared Trinity config:

* ✅ `@trinity/config-eslint`
* ✅ `@trinity/config-prettier`
* ✅ `@trinity/config-typescript`

---

## 📁 File Structure

```txt
libs/utils/
├── src/
│   ├── apiClient.ts
│   ├── constants.ts
│   ├── formatDate.ts
│   ├── logger.ts
│   ├── otp.ts
│   ├── qrcode.ts
│   ├── sanitize.ts
│   ├── slugify.ts
│   └── index.ts
├── __tests__/             # Vitest unit tests
├── package.json
├── tsconfig.json
├── tsconfig.lib.json
├── tsconfig.spec.json
├── eslint.config.mjs
└── README.md ← You are here
```

---

## 💡 Design Notes

* All helpers are **framework-agnostic** and side-effect free
* ✅ Compatible with SSR, CLI, browser, and API environments
* ❌ No React or DOM dependencies
* ♻️ Composable, documented, and unit-tested for maintainability

---

## 🔗 Related Packages

* [`@trinity/types`](../types) – Shared primitive and domain types
* [`@trinity/i18n`](../i18n) – Uses utilities like `formatDate`
* [`@trinity/api-client`](../api-client) – May duplicate or defer to `apiClient`

---

## 🛠 Maintainers

**Marc Ive** – [@marci](mailto:marci@mannys.co.za)

---
