# @trinity/ui

> Shared brand-aligned UI component library for Trinity frontend apps.

---

## 🧠 Purpose

The `@trinity/ui` package provides a reusable set of UI components built with ShadCN UI and Tailwind CSS v4.  
It enables visual consistency, accessibility, and design velocity across all web and mobile apps in the Trinity ecosystem.

---

## 🧱 Key Features

- ✅ Headless, accessible components based on ShadCN and Radix UI
- ✅ Ready-to-use in React and React Native (via `nativewind`)
- ✅ Pre-styled with Tailwind v4 utility classes
- ✅ Composable design primitives for apps, sections, and UI states
- ♻️ Exported as pure components — no theme config required

---

## 📦 Installation

```bash
pnpm add @trinity/ui
```

> This package is used in apps like `@trinity/forum-web`, `@trinity/mobile-app`, and `@trinity/dashboard`.

---

## 🔧 Usage

### Importing Components

```tsx
import { Button, Card } from '@trinity/ui';
```

### Using in JSX

```tsx
<Button variant="default">Join Now</Button>
<Card className="p-4">Welcome</Card>
```

---

## 🔎 Exports

| Export Type | Example                    | Description                     |
|-------------|-----------------------------|---------------------------------|
| Component   | `Button`, `Card`, `Input`   | Reusable design system elements |

---

## 📁 File Structure

```txt
libs/ui/
├── src/
│   ├── components/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── accordion.tsx
│   │   └── ...
│   └── index.ts
├── package.json
└── README.md
```

---

## 📤 Adding New Components (via ShadCN CLI)

This monorepo uses the official [shadcn/ui](https://ui.shadcn.dev) CLI pattern.  
To add a new component to the `@trinity/ui` package and expose it:

### ✅ Step-by-Step

```bash
pnpm dlx shadcn@latest add <component> -c apps/<app name>
```

This will:
- Copy the ShadCN component files to `libs/ui/src/components`
- Register them in the app's local config
- (You must manually export them via `libs/ui/src/index.ts`)

### 🛠 Automating Exports (Planned)

We plan to introduce a script like:

```bash
pnpm add:ui <component-name>
```

Which will:
- Add the ShadCN component
- Inject export into `index.ts`
- Install required peer dependencies

---

## 💡 Improvements

- 🔲 Add section-level components (Hero, Footer, CTA Grid)
- 🔲 Add Storybook support for visual previews in `@trinity/docs`
- 🔲 Support animation helpers (e.g. transitions, delays)
- ✅ Ensure accessibility compliance via ShadCN + Radix standards

---

## 🔗 Related

- [`@trinity/types`](../types)
- [`@trinity/hooks`](../hooks)
- [`@trinity/i18n`](../i18n)
- [ShadCN UI Documentation](https://ui.shadcn.dev)

---

## 🛠 Maintainers

Marc Ive – [@marci](mailto:marci@mannys.co.za)

