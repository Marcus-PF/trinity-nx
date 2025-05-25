# @trinity/config-eslint

> Shared Flat ESLint configuration used across all packages and apps in the Trinity Monorepo.

---

## 🧠 Purpose

This package exports Trinity's unified Flat ESLint configuration system.  
It ensures consistent linting for JavaScript, TypeScript, React, and Next.js projects using a modular, composable config structure.

---

## 🧱 Key Features

- ✅ ESLint Flat Config (ESM format, modern)
- ✅ Modular presets: Base, React, Next.js, Internal UI
- ✅ Strict rules with smart plugin defaults
- ✅ Compatible with Nx, Vite, React, and modern TS

---

## 📦 Installation

This package is internal to the monorepo. No manual install required for consumers.  
Peer dependency required:

```bash
pnpm add -D typescript
```

---

## 🔧 Usage

In any app or library (e.g. `libs/ui`), create `eslint.config.mjs`:

### Standard Base Usage

```js
import base from '@trinity/config-eslint';

export default [...base];
```

### Next.js Projects

```js
import next from '@trinity/config-eslint/next';

export default [...next];
```

### Internal React UI Libraries

```js
import reactInternal from '@trinity/config-eslint/react-internal';

export default [...reactInternal];
```

> These can also be layered manually if needed.

---

## 🔎 Exported Configs

| Export Name        | File                  | Description                            |
|--------------------|-----------------------|----------------------------------------|
| `.` / `base`        | `base.mjs`            | Default config for TS + React          |
| `next`             | `next.mjs`            | Adds Next.js plugin rules              |
| `react-internal`   | `react-internal.mjs`  | Extra internal rules for UI packages   |

---

## 🧪 Linting

Run via Nx or pnpm:

```bash
pnpm lint <project>
nx lint <project>
```

Flat Config is automatically applied by Nx when your project contains `eslint.config.mjs`.

---

## 📁 File Structure

```txt
libs/config-eslint/
├── base.mjs
├── next.mjs
├── react-internal.mjs
├── index.mjs
└── package.json
```

---

## 💡 Design Notes

- Modular per-environment support
- No `.eslintrc.js` used — only Flat Config
- Pairs perfectly with `@trinity/config-typescript` and `prettier`

---

## 🔗 Related

- [`@trinity/config-typescript`](../config-typescript)
- [`@trinity/config-prettier`](../config-prettier)
- [Full Monorepo Docs](../../README.md)

---

## 🛠 Maintainers

Marc Ive – [@marci](mailto:marci@mannys.co.za)

