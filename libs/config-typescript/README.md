# @trinity/config-typescript

> Shared TypeScript configuration presets used across all apps and packages in the Trinity Monorepo.

---

## 🧠 Purpose

The `@trinity/config-typescript` package provides a standardized, composable set of TypeScript configurations for use across the Trinity Monorepo.  
It ensures consistent type safety, module resolution, and modern compiler settings for apps, libraries, and external tooling.

---

## 🧱 Key Features

- ✅ Modern `"ES2022"` + `"esnext"` module support
- ✅ `"moduleResolution": "bundler"` for compatibility with Vite, ShadCN, and ESM
- ✅ Strict type-checking defaults (`strict`, `isolatedModules`, `noUncheckedIndexedAccess`)
- ✅ Composable configs for **Next.js**, **React libraries**, and **core packages**
- 💡 Encourages declaration output and monorepo-safe build structure

---

## 📦 Installation

This package is internal and included by default in the workspace root.  
No need to install it manually.

---

## 🔧 Usage

Extend the appropriate config in your `tsconfig.json`:

### For apps and generic libraries:

```json
{
  "extends": "@trinity/config-typescript/base.json"
}
```

### For React component libraries:

```json
{
  "extends": "@trinity/config-typescript/react-library.json"
}
```

### For Next.js apps:

```json
{
  "extends": "@trinity/config-typescript/nextjs.json"
}
```

> You can still add local `compilerOptions.paths` on top of these using override merging.

---

## 🔎 Exported Configs

| File                  | Purpose                                      |
|-----------------------|----------------------------------------------|
| `base.json`           | Core config for all packages and libraries   |
| `react-library.json`  | Adds React/JSX support and `types` for React |
| `nextjs.json`         | Adds Next.js plugin and disables emits       |

---

## 🧪 Testing

You can verify config integration with:

```bash
pnpm exec tsc --project ./tsconfig.json
```

Or through CI with `tsc -b` or Nx `build`/`typecheck` tasks.

---

## 🧼 Linting & Formatting

This config pairs well with:

- [`@trinity/config-eslint`](../config-eslint)
- [`@trinity/config-prettier`](../config-prettier)

---

## 📁 File Structure

```txt
libs/config-typescript/
├── base.json
├── react-library.json
├── nextjs.json
└── package.json
```

---

## 💡 Design Notes

- All configs are **strict by default**
- Uses `"bundler"` resolution to support native ESM, ShadCN, and Vite
- Works seamlessly with `.json` modules and IDE auto-import

---

## 🔗 Related

- [`@trinity/types`](../types)
- [`@trinity/ui`](../ui)
- [Full Monorepo Docs](../../README.md)

---

## 🛠 Maintainers

Marc Ive – [@marci](mailto:marci@mannys.co.za)

