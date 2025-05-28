'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  NavigationMenu,
  NavigationMenuList,
  Button,
  Toggle,
  Avatar,
  AvatarFallback,
} from '@trinity/ui'
import { Moon, Sun, User } from 'lucide-react'
import { useTheme } from 'next-themes'
import { NavItem } from './NavItem'
import { DropdownNavItem } from './DropdownNavItem'

export function MainNav() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex flex-grow items-center justify-between gap-4">
      {/* Left: Navigation */}
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList className="flex gap-2">
          <NavItem href="/" label="Home" />
          <DropdownNavItem
            label="About"
            items={[
              { label: 'Our Club', href: '/about' },
              { label: 'Board Members', href: '/about#board' },
            ]}
          />
          <DropdownNavItem
            label="Projects"
            items={[
              { label: 'Local Projects', href: '/projects#local' },
              { label: 'Global Initiatives', href: '/projects#global' },
            ]}
          />
          <NavItem href="/events" label="Events" />
          <NavItem href="/membership" label="Membership" />
          <NavItem href="/contact" label="Contact" />
        </NavigationMenuList>
      </NavigationMenu>

      {/* Right: Utilities */}
      <div className="flex items-center gap-3 ml-auto">
        <Link href="/membership">
          <Button size="sm" variant="secondary">
            Join
          </Button>
        </Link>
        <Link href="/donate">
          <Button size="sm">Donate</Button>
        </Link>

        {mounted && (
          <Toggle
            size="sm"
            aria-label="Toggle Theme"
            pressed={theme === 'dark'}
            onPressedChange={(pressed: boolean) => setTheme(pressed ? 'dark' : 'light')}
          >
            {theme === 'dark' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </Toggle>
        )}

        <Link href="/profile" aria-label="User Profile">
          <Avatar>
            <AvatarFallback>
              <User className="w-5 h-5 text-muted-foreground" />
            </AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </div>
  )
}
