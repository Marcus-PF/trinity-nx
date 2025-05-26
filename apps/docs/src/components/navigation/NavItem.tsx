'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@trinity/ui"

interface NavItemProps {
  href: string
  label: string
}

export function NavItem({ href, label }: NavItemProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        "px-3 py-2 rounded-md text-sm font-medium transition-colors",
        isActive
          ? "bg-accent text-accent-foreground"
          : "text-muted-foreground hover:text-primary"
      )}
    >
      {label}
    </Link>
  )
}
