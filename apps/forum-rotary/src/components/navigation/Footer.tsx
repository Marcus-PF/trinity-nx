'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Mail } from 'lucide-react';
import { Separator } from '@trinity/ui';

export function Footer() {
  return (
    <footer className="bg-background text-muted-foreground border-t border-border px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Mission */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center justify-center gap-2">
            {/* Light logo */}
            <Image
              src="/portuguese-international-rotary-logo-original.png"
              alt="Rotary Logo"
              width={260}
              height={100}
              className="block dark:hidden h-auto w-auto"
              priority
            />
            {/* Dark mode logo */}
            <Image
              src="/portuguese-international-rotary-logo-dark.png"
              alt="Rotary Logo Dark"
              width={260}
              height={100}
              className="hidden dark:block h-auto w-auto"
              priority
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="space-y-4 text-center md:text-right py-1">
          <h4 className="text-secondary text-sm font-semibold tracking-wide uppercase">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-primary transition">About</Link></li>
            {/* Optional links: Uncomment when used */}
            {/* <li><Link href="/projects" className="hover:text-primary transition">Projects</Link></li> */}
            {/* <li><Link href="/events" className="hover:text-primary transition">Events</Link></li> */}
            <li><Link href="/membership" className="hover:text-primary transition">Membership</Link></li>
            <li><Link href="/donate" className="hover:text-primary transition">Donate</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="space-y-4 text-center md:text-right">
          <h4 className="text-secondary text-sm font-semibold tracking-wide uppercase">Stay Connected</h4>
          <p className="text-sm leading-relaxed">
            Reach out, collaborate, or follow our journey.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm md:justify-end">
            <Mail className="w-4 h-4" />
            <a
              href="mailto:info@portugueserotaryeclub.org"
              className="hover:text-primary underline underline-offset-4 transition"
            >
              info@portugueserotaryeclub.org
            </a>
          </div>
          <div className="flex gap-4 pt-1 justify-center md:justify-end">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Separator & Bottom Copyright */}
      <div className="mt-10 text-center pt-3">
        <Separator className="w-24 h-px bg-secondary mx-auto" />
        <div className="text-xs text-center text-muted-foreground py-3">
          © {new Date().getFullYear()} Portuguese Forum Rotary Club. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
