'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Facebook, Instagram, LogIn } from 'lucide-react';
import { MainNav } from './MainNav';
import { MobileNav } from './MobileNav';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-rotary-blue text-sm text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center flex-wrap gap-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              <a
                href="mailto:info@portugueserotaryeclub.org"
                className="text-white hover:text-rotary-gold transition-colors"
              >
                info@portugueserotaryeclub.org
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="hover:text-rotary-gold transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-rotary-gold transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            <Link href="/login" className="flex items-center gap-1 hover:text-rotary-gold transition-colors">
              <LogIn className="w-4 h-4" /> Login
            </Link>
          </div>
        </div>
      </div>

      {/* Logo + Nav */}
      <div className="bg-white py-3 px-4 transition-all duration-300 border-b">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/rotary-logo.svg"
              alt="Rotary Logo"
              width={250}
              height={96}
              priority
              className={`transition-all duration-500 ${scrolled ? 'scale-100 opacity-100' : 'scale-95 opacity-90'}`}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <MainNav />
            <Link
              href="/donate"
              className="bg-rotary-gold text-rotary-blue font-semibold px-4 py-2 rounded hover:bg-azure hover:text-white transition-colors"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Nav */}
          <div className="lg:hidden flex items-center gap-2">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
