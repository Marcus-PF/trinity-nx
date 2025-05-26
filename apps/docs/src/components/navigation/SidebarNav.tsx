'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@trinity/ui'

interface NavLink {
  label: string
  href: string
}

interface NavSection {
  title: string
  links: NavLink[]
}

interface SidebarNavProps {
  sections: NavSection[]
  className?: string
}

export function SidebarNav({ sections, className }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <aside
      className={cn(
        'hidden lg:block w-64 sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto border-r border-sidebar-border bg-sidebar text-sidebar-foreground px-6 py-8',
        className
      )}
      aria-label="Sidebar Navigation"
    >
      <nav className="space-y-6">
        {sections.map((section) => (
          <div key={section.title}>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
              {section.title}
            </h4>
            <ul className="space-y-1">
              {section.links.map((link) => {
                const isActive = pathname === link.href
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        'block text-sm px-3 py-2 rounded-md transition-colors',
                        isActive
                          ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                          : 'text-muted-foreground hover:text-primary'
                      )}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}
