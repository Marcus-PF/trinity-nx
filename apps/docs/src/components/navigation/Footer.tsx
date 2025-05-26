'use client'

import Link from 'next/link'
import { Github } from 'lucide-react'

export function Footer() {
  return (
    <footer
      className="bg-muted text-muted-foreground border-t border-border pt-12 pb-8 mt-20"
      aria-label="Footer"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Project Info */}
        <section aria-labelledby="footer-project">
          <h3 id="footer-project" className="font-semibold text-lg mb-2">
            Trinity Monorepo
          </h3>
          <p className="max-w-sm mx-auto md:mx-0 text-sm">
            This site documents the internal architecture, packages, and applications that make up the Trinity Monorepo — a modular, scalable fullstack platform powering multiple organizations and projects.
          </p>
        </section>

        {/* Quick Links */}
        <nav aria-labelledby="footer-docs" className="space-y-2 text-sm">
          <h4 id="footer-docs" className="font-semibold text-lg mb-3">
            Documentation
          </h4>
          <ul className="space-y-2">
            <li><Link href="/getting-started" className="hover:text-primary">Getting Started</Link></li>
            <li><Link href="/applications" className="hover:text-primary">Apps Overview</Link></li>
            <li><Link href="/libraries" className="hover:text-primary">Shared Libraries</Link></li>
            <li><Link href="/components" className="hover:text-primary">UI Components</Link></li>
            <li><Link href="/auth" className="hover:text-primary">Authentication</Link></li>
            <li><Link href="/playground" className="hover:text-primary">Playground</Link></li>
          </ul>
        </nav>

        {/* Maintainers */}
        <section aria-labelledby="footer-maintainers" className="space-y-3">
          <h4 id="footer-maintainers" className="font-semibold text-lg mb-3">
            Maintainers
          </h4>
          <p className="text-sm">
            Built and maintained by the Trinity Core Team.
          </p>
          <div className="flex justify-center md:justify-end gap-4 mt-2">
            <a
              href="https://github.com/your-org/trinity"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary inline-flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub Repository</span>
            </a>
          </div>
        </section>
      </div>

      {/* Legal */}
      <div className="text-center mt-10 text-xs pt-4">
        © {new Date().getFullYear()} Trinity Monorepo. All rights reserved.
      </div>
    </footer>
  )
}
