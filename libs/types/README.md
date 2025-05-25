# `@trinity/types`

> 🧩 Shared type definitions used across the Trinity Monorepo for consistent, type-safe data modeling

---

## 🧠 Purpose

The `@trinity/types` package provides a centralized, read-only collection of **TypeScript interfaces, enums, and branded primitive types**.  
It ensures consistent data shapes and type safety across all Trinity projects — from backend services to React and mobile apps.

---

## 🧱 Key Features

- ✅ Domain-specific segmentation (`auth`, `user`, `club`, `event`, `post`, etc.)
- ✅ Fully type-only (no runtime JS emitted)
- ✅ IDE-friendly auto-completion and type inference
- ✅ Backend–frontend shared modeling
- ✅ Works with REST, GraphQL, TRPC, and form libs

---

## 📦 Installation

```bash
pnpm add @trinity/types
````

Or via monorepo workspace:

> ✅ Already available via `@trinity/types/*` aliases

---

## 🔧 Usage

### Importing Types

```ts
import type { User, Club, MemberRole } from '@trinity/types';
```

### Example

```ts
const user: User = {
  id: 'abc123',
  name: 'Marc Ive',
  email: 'marc@trinity.org',
  role: 'admin'
};
```

---

## 🧩 Module Structure

| Module      | Types Provided                             |
| ----------- | ------------------------------------------ |
| `auth.ts`   | Auth tokens, session, login strategy types |
| `user.ts`   | Base user schema + roles                   |
| `member.ts` | Member profiles and permissions            |
| `club.ts`   | Rotary/Forum club metadata and info        |
| `event.ts`  | Event schema for CMS & Forum               |
| `post.ts`   | News/blog post structure                   |
| `common.ts` | Shared utilities (e.g. BrandedId, UUID)    |

---

## 📁 File Structure

```txt
libs/types/
├── src/
│   ├── auth.ts
│   ├── club.ts
│   ├── common.ts
│   ├── event.ts
│   ├── member.ts
│   ├── post.ts
│   ├── user.ts
│   └── index.ts       # Barrel export
├── __tests__/         # Optional tsd tests
├── package.json
├── tsconfig.json
├── tsconfig.lib.json
├── tsconfig.spec.json
├── eslint.config.mjs
└── README.md ← You are here
```

---

## 🧪 Type Safety & Testing

While most types are static, you can optionally validate contracts using:

* [`tsd`](https://github.com/SamVerschueren/tsd) for compile-time interface testing
* Integration with test helpers like `zod`, `yup`, or `class-validator`

---

## 💡 Design Notes

* 🧱 Branded types used for semantic clarity (e.g. `UserId = Branded<string, 'UserId'>`)
* 🧩 Fully isolated from runtime — safe for both frontend and backend
* 📄 Acts as the canonical source-of-truth for data models

---

## 🔗 Related Packages

* [`@trinity/i18n`](../i18n) – Uses locale types defined here
* [`@trinity/utils`](../utils) – Type helpers and validations
* [`@trinity/api-client`](../api-client) – Consumes shared interfaces in fetch contracts

---

## 🛠 Maintainers

**Marc Ive** – [@marci](mailto:marci@mannys.co.za)

---
