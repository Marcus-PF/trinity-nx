'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@trinity/ui'

interface NavItemProps {
  href: string
  label: string
  className?: string
}

export function NavItem({ href, label, className }: NavItemProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'px-3 py-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        isActive
          ? 'bg-accent text-accent-foreground'
          : 'text-muted-foreground hover:text-primary',
        className
      )}
    >
      {label}
    </Link>
  )
}
