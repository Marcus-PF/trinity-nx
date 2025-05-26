'use client'

import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent
} from '@trinity/ui'
import Link from 'next/link'
import { cn } from '@trinity/ui'

interface DropdownNavItemProps {
  label: string
  items: { label: string; href: string }[]
}

export function DropdownNavItem({ label, items }: DropdownNavItemProps) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="font-medium text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        {label}
      </NavigationMenuTrigger>

      <NavigationMenuContent className="min-w-[200px] bg-popover text-popover-foreground border border-border rounded-lg shadow-lg">
        <ul className="flex flex-col gap-1 p-3">
          {items.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  'block px-3 py-2 rounded-md text-sm transition-colors',
                  'hover:bg-muted hover:text-primary'
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}
