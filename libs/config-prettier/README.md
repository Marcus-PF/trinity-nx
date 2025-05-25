# @trinity/config-prettier

> Shared Prettier configuration used across the Trinity Monorepo.

---

## 🧠 Purpose

The `@trinity/config-prettier` package provides a unified Prettier formatting config for all apps and libraries in the Trinity Monorepo.  
It ensures consistent formatting across the codebase regardless of developer or IDE settings.

---

## 🧱 Key Features

- ✅ Prettier v3 compatible
- ✅ Enforces opinionated code style (single quotes, trailing commas, etc.)
- ✅ Shared across all projects in the workspace
- ♻️ Automatically picked up by editors and formatters

---

## 📦 Installation

This package is internal to the monorepo and already included.  
You will need to install Prettier (if not already installed):

```bash
pnpm add -D prettier
```

---

## 🔧 Usage

In the root of your monorepo (or any project), create:

### `.prettierrc.js`

```js
module.exports = require('@trinity/config-prettier');
```

> You can do this once at the root if you want a global setting, or override it per package if needed.

---

## 🚫 Ignored Files

Add a `.prettierignore` file to skip formatting certain files:

```txt
/dist
/coverage
/.nx/cache
/.nx/workspace-data
```

---

## 🧪 Running Prettier

```bash
pnpm prettier --check .
pnpm prettier --write .
```

---

## 📁 File Structure

```txt
libs/config-prettier/
├── index.js
├── package.json
└── README.md
```

---

## 💡 Design Notes

- Exported as a standard `index.js` for maximum compatibility
- Works with IDEs, CI/CD, and manual CLI usage
- Keeps formatting decoupled from other linting logic

---

## 🔗 Related

- [`@trinity/config-eslint`](../config-eslint)
- [`@trinity/config-typescript`](../config-typescript)
- [Full Monorepo Docs](../../README.md)

---

## 🛠 Maintainers

Marc Ive – [@marci](mailto:marci@mannys.co.za)

