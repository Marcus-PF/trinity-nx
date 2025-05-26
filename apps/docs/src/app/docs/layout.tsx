'use client'

import { ReactNode } from 'react'
import { SidebarNav } from '../../components/navigation/SidebarNav'
import { cn } from '@trinity/ui'

const sidebarSections = [
  {
    title: 'Getting Started',
    links: [
      { label: 'Overview', href: '/getting-started' },
      { label: 'Setup', href: '/getting-started/setup' },
    ],
  },
  {
    title: 'Applications',
    links: [
      { label: 'Forum Rotary', href: '/applications/forum-rotary' },
      { label: 'Forum Website', href: '/applications/forum-web' },
    ],
  },
  {
    title: 'Libraries',
    links: [
      { label: 'UI', href: '/libraries/ui' },
      { label: 'Auth', href: '/libraries/auth' },
      { label: 'Hooks', href: '/libraries/hooks' },
      { label: 'Utils', href: '/libraries/utils' },
      { label: 'Types', href: '/libraries/types' },
    ],
  },
]

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto flex flex-row gap-10 py-10 px-4">
      {/* SidebarNav */}
      <SidebarNav sections={sidebarSections} />

      {/* Main Content */}
      <div className="flex-1 max-w-4xl">{children}</div>

      {/* Future TOC / Right Panel (optional) */}
      <div className="hidden xl:block w-64">{/* TOC goes here */}</div>
    </div>
  )
}
