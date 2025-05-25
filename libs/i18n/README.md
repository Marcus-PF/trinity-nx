### ✅ `libs/i18n/README.md`

````markdown
# `@trinity/i18n`

> 🌐 Runtime internationalization (i18n) engine for Trinity web and mobile apps

---

## 🧠 Purpose

The `@trinity/i18n` package provides a **unified, SSR-safe, and composable internationalization system** for the entire Trinity ecosystem. It enables:

- ✅ Dynamic language switching at runtime
- ✅ SSR-safe dictionary loading with automatic fallback
- ✅ Middleware-level locale detection and redirection
- ✅ Typed, memoized translation access in React apps

It integrates with [`@trinity/locales`](../locales) for loading language dictionaries.

---

## 🧱 Key Features

- ✅ `useTranslation()` hook for accessing translations
- ✅ `<I18nProvider>` React context for global locale management
- ✅ Dynamic `getDictionary()` loader with in-memory caching
- ✅ Next.js-compatible `middleware()` for locale-aware routing
- ✅ Dot-notation key resolution (`cta.join_now`)
- ✅ Graceful fallback to default locale

---

## 📦 Installation

```bash
pnpm add @trinity/i18n
````

Or if internal to Trinity:

> ✅ Already available via workspace root

---

## 🔧 Usage

### Setup

```tsx
import { I18nProvider } from '@trinity/i18n';

<I18nProvider>
  <App />
</I18nProvider>
```

### Hook Example

```tsx
import { useTranslation } from '@trinity/i18n';

const { t, locale, setLocale } = useTranslation();

return (
  <>
    <h1>{t('cta.join_now')}</h1>
    <button onClick={() => setLocale('af-ZA')}>Switch to Afrikaans</button>
  </>
);
```

### Middleware Setup (Next.js)

```ts
// middleware.ts
export { middleware } from '@trinity/i18n';
```

---

## 🔎 Exports

| Export             | Type        | Description                                          |
| ------------------ | ----------- | ---------------------------------------------------- |
| `useTranslation()` | `hook`      | Access `t()` and current locale via React context    |
| `I18nProvider`     | `component` | Global provider to manage i18n state in your app     |
| `middleware()`     | `function`  | Next.js middleware for locale redirect logic         |
| `getDictionary()`  | `function`  | Dynamically loads and caches a locale JSON file      |
| `t()`              | `function`  | Stateless lookup helper used internally and in tests |
| `translations`     | `object`    | Shared in-memory cache used by `getDictionary()`     |

---

## 🧪 Testing

All exports are fully tested using [`vitest`](https://vitest.dev/), including:

* ✅ Locale switching and nested translations
* ✅ Fallback behavior
* ✅ SSR-safe dictionary loading
* ✅ Next.js middleware edge cases

### Run Tests

```bash
pnpm vitest libs/i18n
```

### Test Coverage

| File                | Tests Covered                                |
| ------------------- | -------------------------------------------- |
| `context.tsx`       | Provider rendering, hook behavior, fallback  |
| `getDictionary.ts`  | Dynamic import, caching, fallback chaining   |
| `middleware.ts`     | Cookie/header detection, path-based redirect |
| `useTranslation.ts` | Dot key resolution, fallback, warnings       |

---

## 🧼 Linting & Formatting

Follows Trinity Monorepo shared configs:

* ✅ `@trinity/config-eslint`
* ✅ `@trinity/config-prettier`
* ✅ `@trinity/config-typescript`

---

## 📁 File Structure

```txt
libs/i18n/
├── src/
│   ├── config.ts           # Supported locales + default
│   ├── context.tsx         # Global provider + useTranslation hook
│   ├── getDictionary.ts    # Dynamic dictionary loader
│   ├── middleware.ts       # Next.js i18n middleware
│   ├── useTranslation.ts   # Stateless translation function
│   └── index.ts            # Barrel export
├── __tests__/
│   ├── context.test.tsx
│   ├── getDictionary.test.ts
│   ├── middleware.test.ts
│   └── useTranslation.test.ts
├── tsconfig.json
├── tsconfig.lib.json
├── tsconfig.spec.json
├── eslint.config.mjs
└── README.md ← You are here
```

---

## 💡 Design Notes

* 🧩 Stateless translation function for use in any context
* 🌍 Locale detection from both headers and cookies
* 🔄 Hot-swappable dictionaries via dynamic `import()`
* ❌ No hard dependency on React — works in pure TypeScript environments too

---

## 🔗 Related Packages

* [`@trinity/locales`](../locales) – JSON translation dictionaries
* [`@trinity/types`](../types) – Locale and i18n-related types
* [`@trinity/hooks`](../hooks) – Composable React helpers
* [`@trinity/config-typescript`](../config-typescript) – Compiler base config

---

## 🛠 Maintainers

**Marc Ive** – [@marci](mailto:marci@mannys.co.za)

---
