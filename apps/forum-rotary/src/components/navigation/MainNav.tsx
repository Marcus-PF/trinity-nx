'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import {
  NavigationMenu,
  NavigationMenuList,
  Button,
  Toggle,
  Avatar,
  AvatarFallback,
} from '@trinity/ui';
import { Mail, Facebook, Instagram, LogIn, Moon, Sun, User } from 'lucide-react';
import { NavItem } from './NavItem';
import { MobileNav } from './MobileNav';

export function MainNav() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#003087] text-sm text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center gap-2">
          <div className="flex items-center gap-1">
            <Mail className="w-4 h-4" />
            <a
              href="mailto:info@portugueserotaryeclub.org"
              className="text-white hover:text-[#FFC107] transition-colors"
            >
              info@portugueserotaryeclub.org
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-[#FFC107] transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#FFC107] transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <Link href="/login" className="flex items-center gap-1 hover:text-[#FFC107] transition-colors">
              <LogIn className="w-4 h-4" /> Login
            </Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white text-[#003087] shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo on the left */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/rotary-logo.svg"
              alt="Rotary Logo"
              width={250}
              height={96}
              priority
              className={`transition-all duration-500 ${
                scrolled ? 'scale-100 opacity-100' : 'scale-95 opacity-90'
              }`}
            />
          </Link>

          {/* Right side: desktop nav + utilities, or mobile hamburger */}
          <div className="flex items-center gap-4">
            {/* Desktop menu & buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <NavigationMenu>
                <NavigationMenuList className="flex gap-2">
                  <NavItem href="/" label="Home" />
                  <NavItem href="/about" label="About" />
                  {/* <NavItem href="/projects" label="Projects" />
                  <NavItem href="/events" label="Events" /> */}
                  <NavItem href="/membership" label="Membership" />
                  <NavItem href="/contact" label="Contact" />
                </NavigationMenuList>
              </NavigationMenu>

              <Link href="/membership">
                <Button size="sm" variant="secondary" className="bg-[#FFC107] text-black hover:bg-[#FFB300]">
                  Join
                </Button>
              </Link>
              <Link href="/donate">
                <Button size="sm" className="bg-[#003087] text-white hover:bg-[#002A6E]">
                  Donate
                </Button>
              </Link>
              {mounted && (
                <Toggle
                  size="sm"
                  aria-label="Toggle Theme"
                  pressed={theme === 'dark'}
                  onPressedChange={pressed => setTheme(pressed ? 'dark' : 'light')}
                >
                  {theme === 'dark' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                </Toggle>
              )}
              <Link href="/profile" aria-label="User Profile">
                <Avatar>
                  <AvatarFallback>
                    <User className="w-5 h-5 text-muted-foreground" />
                  </AvatarFallback>
                </Avatar>
              </Link>
            </div>

            {/* Mobile hamburger (only visible on small screens) */}
            <div className="lg:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
