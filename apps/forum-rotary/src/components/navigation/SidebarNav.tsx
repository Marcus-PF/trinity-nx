'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@trinity/ui'

interface SidebarNavItem {
  title: string
  href: string
  // Optional: icon?: React.ElementType
}

interface SidebarNavProps {
  items: SidebarNavItem[]
}

export function SidebarNav({ items }: SidebarNavProps) {
  const pathname = usePathname()

  if (!items?.length) return null

  return (
    <nav className="flex flex-col space-y-1">
      {items.map((item) => {
        const isActive = pathname === item.href

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
              isActive
                ? 'bg-muted text-foreground'
                : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
            )}
          >
            {/* Optional future enhancement for icons:
            {item.icon && <item.icon className="h-4 w-4" />} */}
            {item.title}
          </Link>
        )
      })}
    </nav>
  )
}
