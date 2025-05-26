'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { LogIn } from 'lucide-react'
import { MainNav } from './MainNav'
import { MobileNav } from './MobileNav'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm border-b border-border">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground text-sm py-2 px-4">
        <div className="container mx-auto flex justify-between items-center gap-2 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm">
              Trinity Documentation Platform
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="flex items-center gap-1 hover:text-accent transition-colors text-sm"
            >
              <LogIn className="w-4 h-4" /> Login
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="py-3 px-4 transition-all duration-300">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="Go to homepage"
          >
            <Image
              src="/trinity-logo.svg"
              alt="Trinity Logo"
              width={100}
              height={40}
              priority
              className={`transition-all duration-500 ${
                scrolled ? 'scale-100 opacity-100' : 'scale-95 opacity-90'
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <MainNav />
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center gap-2">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}
