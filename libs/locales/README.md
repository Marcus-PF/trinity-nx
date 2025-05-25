# `@trinity/locales`

> 🗺 Static, structured JSON translation dictionaries used across all Trinity apps

---

## 🧠 Purpose

The `@trinity/locales` package provides a centralized, versioned set of translation dictionaries for use across the entire Trinity ecosystem. It works hand-in-hand with [`@trinity/i18n`](../i18n) to enable internationalization in:

- ✅ Web apps (Forum, CMS, Mannys)
- ✅ Mobile apps (future versions)
- ✅ Middleware-based routing (Next.js)

Each language is stored in a **flat or nested JSON file**, organized by language code and optionally brand.

---

## 🧱 Key Features

- ✅ Fully static `.json` dictionaries (safe for `import()` at runtime)
- ✅ Organized by ISO locale (`en-ZA`, `af-ZA`, `pt-ZA`)
- ✅ Brand-specific folders (`cms`, `forum`, `mannys`)
- ✅ Compatible with `getDictionary()` dynamic loader
- ✅ Flat + nested dot-notation key structure

---

## 📦 Installation

```bash
pnpm add @trinity/locales
````

Or use via internal workspace:

> ✅ Already available via monorepo paths

---

## 🔧 Usage

### Dynamic Runtime Loading (via `@trinity/i18n`)

```ts
import { getDictionary } from '@trinity/i18n';

const dict = await getDictionary('pt-ZA');
console.log(dict.cta.join_now); // "Junte-se agora"
```

---

## 🌍 Supported Locales

| Locale  | Language   | Description                   |
| ------- | ---------- | ----------------------------- |
| `en-ZA` | English    | Default platform language     |
| `af-ZA` | Afrikaans  | Used across Mannys and CMS    |
| `pt-ZA` | Portuguese | Used in Forum/RPC brand sites |

---

## 🗂 File Structure

```txt
libs/locales/
├── en-ZA.json         # English (default)
├── af-ZA.json         # Afrikaans
├── pt-ZA.json         # Portuguese
├── cms/               # CMS brand overrides
│   └── en-ZA.json
├── forum/             # Forum & Rotary-specific overrides
│   └── pt-ZA.json
├── mannys/            # Mannys-specific overrides
│   └── af-ZA.json
├── package.json
└── README.md ← You are here
```

---

## 💡 Design Notes

* 🧩 Flat + nested keys (e.g. `cta.join_now`)
* 🚫 No code — purely data-based package
* 🛡 Used only with type-safe runtime lookup (`t()` from `@trinity/i18n`)
* ✅ Compatible with dynamic import and SSR

---

## 🔗 Related Packages

* [`@trinity/i18n`](../i18n) – Translation logic, context, and middleware
* [`@trinity/types`](../types) – Locale enums and i18n utility types
* [`@trinity/utils`](../utils) – Helpers for parsing translation fallback

---

## 🛠 Maintainers

**Marc Ive** – [@marci](mailto:marci@mannys.co.za)

---

