'use client'

import { useEffect, useState } from 'react'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuViewport,
  Button
} from '@trinity/ui'
import { NavItem } from './NavItem'
import { DropdownNavItem } from './DropdownNavItem'
import { Moon, Sun } from 'lucide-react'

export function MainNav() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <div className="hidden lg:flex items-center gap-4">
      <NavigationMenu className="relative z-40" aria-label="Main navigation">
        <NavigationMenuList className="flex gap-2 items-center">
          <NavItem href="/" label="Home" />
          <NavItem href="/getting-started" label="Getting Started" />

          <DropdownNavItem
            label="Applications"
            items={[
              { label: 'Forum Rotary', href: '/applications/forum-rotary' },
              { label: 'Forum Website', href: '/applications/forum-web' },
            ]}
          />

          <DropdownNavItem
            label="Libraries"
            items={[
              { label: 'API Client', href: '/libraries/api-client' },
              { label: 'Auth', href: '/libraries/auth' },
              { label: 'Hooks', href: '/libraries/hooks' },
              { label: 'i18n', href: '/libraries/i18n' },
              { label: 'Locales', href: '/libraries/locales' },
              { label: 'Prettier Config', href: '/libraries/prettier' },
              { label: 'Types', href: '/libraries/types' },
              { label: 'TypeScript Config', href: '/libraries/typescript' },
              { label: 'UI', href: '/libraries/ui' },
              { label: 'Utils', href: '/libraries/utils' },
            ]}
          />

          <NavItem href="/playground" label="Playground" />
        </NavigationMenuList>

        {/* Viewport used for Radix positioning */}
        <NavigationMenuViewport className="absolute top-full left-0 mt-2 z-50 w-auto" />
      </NavigationMenu>

      {/* Dark mode toggle */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsDark(!isDark)}
        aria-label="Toggle dark mode"
        className="ml-2"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </Button>
    </div>
  )
}
