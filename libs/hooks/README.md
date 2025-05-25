# `@trinity/hooks`

> 🔗 Shared React hooks for managing state, side effects, and utilities in the Trinity ecosystem

---

## 🧠 Purpose

The `@trinity/hooks` package provides a collection of **typed, composable, and SSR-safe React hooks** designed to help manage common UI and application logic patterns. These hooks are built for use across all Trinity applications, offering high reusability, consistency, and optimal performance.

---

## 🧱 Key Features

- ✅ **`useDebounce`** – Debounce state values to prevent excessive updates (ideal for search inputs)
- ✅ **`useDisclosure`** – Manage UI state for things like modals, drawers, or dropdowns
- ✅ **`useEventListener`** – Attach event listeners to DOM elements or refs
- ✅ **`useIsMounted`** – Check if a component is still mounted to avoid memory leaks
- ✅ **`useLocalStorage`** – Persist state across sessions using `localStorage`

---

## 📦 Installation

```bash
pnpm add @trinity/hooks
````

Or if internal to Trinity:

> ✅ Already available via workspace root

---

## 🔧 Usage

### Import

```ts
import {
  useDebounce,
  useDisclosure,
  useEventListener,
  useIsMounted,
  useLocalStorage
} from '@trinity/hooks';
```

### Examples

#### 🌀 `useDebounce`

```ts
const [debouncedValue] = useDebounce(value, 300);
```

#### 🎛️ `useDisclosure`

```ts
const { isOpen, open, close, toggle } = useDisclosure();
```

#### 🔌 `useEventListener`

```ts
useEventListener(window, 'resize', () => console.log('Resized!'));
```

#### 🧩 `useIsMounted`

```ts
const isMounted = useIsMounted();
useEffect(() => {
  fetchData().then(() => {
    if (isMounted()) updateState();
  });
}, []);
```

#### 💾 `useLocalStorage`

```ts
const [theme, setTheme] = useLocalStorage('theme', 'light');
```

---

## 🔎 Exports

| Export               | Type       | Description                              |
| -------------------- | ---------- | ---------------------------------------- |
| `useDebounce()`      | `function` | Debounce a value                         |
| `useDisclosure()`    | `function` | Manage boolean state (open/close/toggle) |
| `useEventListener()` | `function` | Attach event listeners to DOM elements   |
| `useIsMounted()`     | `function` | Check if component is still mounted      |
| `useLocalStorage()`  | `function` | Sync state with `localStorage`           |

---

## 🧪 Testing

All hooks are fully tested using [`vitest`](https://vitest.dev/), with mocks for environment-specific behaviors like `localStorage` and event listeners.

### Run Tests

```bash
pnpm vitest libs/hooks
```

### Test Coverage

| File                  | Tests                             |
| --------------------- | --------------------------------- |
| `useDebounce.ts`      | Debounce behavior, timer logic    |
| `useDisclosure.ts`    | Open, close, toggle behavior      |
| `useEventListener.ts` | Event listener attachment/removal |
| `useIsMounted.ts`     | Mounting status handling          |
| `useLocalStorage.ts`  | Sync with `localStorage`          |

---

## 🧼 Linting & Formatting

Follows Trinity Monorepo shared configs:

* ✅ `@trinity/config-eslint`
* ✅ `@trinity/config-prettier`
* ✅ `@trinity/config-typescript`

---

## 📁 File Structure

```txt
libs/hooks/
├── src/
│   ├── useDebounce.ts      # Debounce hook
│   ├── useDisclosure.ts    # Disclosure (open/close/toggle) hook
│   ├── useEventListener.ts # Event listener hook
│   ├── useIsMounted.ts     # Mounting status hook
│   ├── useLocalStorage.ts  # Local storage hook
│   └── index.ts            # Barrel export
├── __tests__/
│   ├── useDebounce.test.ts
│   ├── useDisclosure.test.ts
│   ├── useEventListener.test.ts
│   ├── useIsMounted.test.ts
│   └── useLocalStorage.test.ts
├── package.json
├── eslint.config.mjs
├── tsconfig.json
├── tsconfig.lib.json
├── tsconfig.spec.json
└── README.md ← You are here
```

---

## 💡 Design Notes

* 🔄 React hooks are lightweight and composable for easy reuse.
* 🌍 SSR-safe hooks ensure compatibility across environments.
* 💾 `localStorage` hooks use JSON-safe serialization.
* ♻️ Extensible via custom hooks or higher-order logic.

---

## 🔗 Related Packages

* [`@trinity/types`](../types) – Shared type declarations
* [`@trinity/api-client`](../api-client) – API client hooks
* [`@trinity/utils`](../utils) – Utility functions for use with hooks
* [`@trinity/config-typescript`](../config-typescript) – Compiler base

---

## 🛠 Maintainers

**Marc Ive** – [@marci](mailto:marci@mannys.co.za)

---