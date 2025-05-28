'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Mail } from 'lucide-react'
import { Separator } from '@trinity/ui'

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground border-t border-border px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Mission */}
        <div className="space-y-3">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/rotary-logo.svg"
              alt="Rotary Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
              priority
            />
            <span className="text-base font-semibold text-primary">
              Portuguese Forum Rotary
            </span>
          </Link>
          <p className="text-sm leading-relaxed max-w-sm">
            We’re part of a global network creating positive change through service, compassion, and leadership.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-3">
          <h4 className="text-foreground font-medium text-sm">Explore</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/about" className="hover:text-primary">About</Link></li>
            <li><Link href="/projects" className="hover:text-primary">Projects</Link></li>
            <li><Link href="/events" className="hover:text-primary">Events</Link></li>
            <li><Link href="/membership" className="hover:text-primary">Membership</Link></li>
            <li><Link href="/donate" className="hover:text-primary">Donate</Link></li>
            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="space-y-3">
          <h4 className="text-foreground font-medium text-sm">Stay Connected</h4>
          <p className="text-sm max-w-sm leading-relaxed">
            Reach out, collaborate, or follow our journey.
          </p>
          <div className="flex items-center gap-2 text-sm">
            <Mail className="w-4 h-4" />
            <a
              href="mailto:info@portugueserotaryeclub.org"
              className="hover:text-primary underline underline-offset-4"
            >
              info@portugueserotaryeclub.org
            </a>
          </div>
          <div className="flex gap-4 mt-2">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-primary">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-primary">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="text-xs text-center text-muted-foreground">
        © {new Date().getFullYear()} Portuguese Forum Rotary Club. All rights reserved.
      </div>
    </footer>
  )
}
