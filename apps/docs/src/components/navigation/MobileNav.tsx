'use client'

import { useState, useEffect } from 'react'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  Button
} from '@trinity/ui'
import { Menu, Moon, Sun } from 'lucide-react'
import { NavItem } from './NavItem'

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  // Sync dark mode state
  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="p-6 bg-background text-foreground border-r border-border w-[280px]"
      >
        <nav className="flex flex-col gap-8 mt-4" aria-label="Mobile Navigation">
          {/* Section: Main */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
              Main
            </h4>
            <NavItem href="/" label="Home" />
            <NavItem href="/getting-started" label="Getting Started" />
            <NavItem href="/playground" label="Playground" />
          </div>

          {/* Section: Applications */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
              Applications
            </h4>
            <NavItem href="/applications/forum-rotary" label="Forum Rotary" />
            <NavItem href="/applications/forum-web" label="Forum Website" />
          </div>

          {/* Section: Libraries */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
              Libraries
            </h4>
            <NavItem href="/libraries/api-client" label="API Client" />
            <NavItem href="/libraries/auth" label="Auth" />
            <NavItem href="/libraries/hooks" label="Hooks" />
            <NavItem href="/libraries/i18n" label="i18n" />
            <NavItem href="/libraries/locales" label="Locales" />
            <NavItem href="/libraries/prettier" label="Prettier" />
            <NavItem href="/libraries/types" label="Types" />
            <NavItem href="/libraries/typescript" label="TypeScript" />
            <NavItem href="/libraries/ui" label="UI" />
            <NavItem href="/libraries/utils" label="Utils" />
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex items-center justify-between pt-6 border-t border-border">
            <span className="text-sm text-muted-foreground">Theme</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
