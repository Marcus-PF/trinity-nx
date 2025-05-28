'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Facebook, Instagram, LogIn } from 'lucide-react'
import { MainNav } from './MainNav'
import { MobileNav } from './MobileNav'
import { Button } from '@trinity/ui'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      {/* Top Info Bar */}
      <div className="bg-primary text-primary-foreground text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-2">
          {/* Email */}
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4" />
            <a
              href="mailto:info@portugueserotaryeclub.org"
              className="hover:text-accent transition-colors"
            >
              info@portugueserotaryeclub.org
            </a>
          </div>

          {/* Social and login */}
          <div className="hidden md:flex items-center gap-5">
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-accent transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-accent transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            <Link
              href="/login"
              className="flex items-center gap-1 hover:text-accent transition-colors"
            >
              <LogIn className="w-4 h-4" /> Login
            </Link>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="py-4 px-4 transition-all duration-300 border-t border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo with optional animation */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/rotary-logo.svg"
              alt="Rotary Logo"
              width={280}
              height={100}
              priority
              className={`transition-all duration-500 ${
                scrolled ? 'scale-100 opacity-100' : 'scale-95 opacity-90'
              }`}
            />
          </Link>

          {/* Desktop Nav + Donate */}
          <div className="hidden md:flex items-center justify-end gap-4 w-full">
            <MainNav />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}
