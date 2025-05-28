'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  Button,
  Toggle,
  Avatar,
  AvatarFallback,
} from '@trinity/ui'
import { Menu, Moon, Sun, User, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@trinity/ui'

type NavLink = {
  label: string
  href: string
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Events', href: '/events' },
  { label: 'Membership', href: '/membership' },
  { label: 'Donate', href: '/donate' },
  { label: 'Contact', href: '/contact' },
]

export function MobileNav() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Open navigation menu"
          className="md:hidden"
        >
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="transition-transform data-[state=open]:translate-x-0 data-[state=closed]:translate-x-full"
      >
        <SheetHeader className="pb-4 border-b border-border mr-2">
          <SheetTitle className="text-xl font-bold text-primary">Menu</SheetTitle>
          <SheetClose asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:ring-2 focus:ring-ring focus:outline-none"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </SheetClose>
        </SheetHeader>

        <nav className="flex-grow mt-6 space-y-2 overflow-y-auto pr-2">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "block py-2 text-base font-medium transition-colors hover:text-primary",
                "text-foreground data-[active=true]:text-primary data-[active=true]:font-semibold"
              )}
              onClick={handleLinkClick}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="space-y-3 mt-6 pt-6 border-t border-border mr-2">
          <Link href="/membership" onClick={handleLinkClick}>
            <Button variant="secondary" className="w-full">
              Join Rotary
            </Button>
          </Link>
          <Link href="/donate" onClick={handleLinkClick}>
            <Button className="w-full">
              Donate Now
            </Button>
          </Link>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            {mounted && (
              <Toggle
                size="sm"
                aria-label="Toggle theme"
                pressed={theme === 'dark'}
                onPressedChange={(pressed: boolean) =>
                  setTheme(pressed ? 'dark' : 'light')
                }
              >
                {theme === 'dark' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </Toggle>
            )}

            <Link href="/profile" onClick={handleLinkClick}>
              <Avatar>
                <AvatarFallback>
                  <User className="w-5 h-5 text-muted-foreground" />
                </AvatarFallback>
              </Avatar>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
