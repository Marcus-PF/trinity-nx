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
      <div className="bg-primary text-primary-foreground text-sm py-2 px-4">
        <div className="container mx-auto flex justify-between items-center gap-2">
          <div className="flex items-center gap-1">
            <Mail className="w-4 h-4" />
            <a
              href="mailto:info@portugueserotaryeclub.org"
              className="hover:text-secondary transition-colors"
            >
              info@portugueserotaryeclub.org
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-secondary transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-secondary transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <Link
              href="/login"
              className="flex items-center gap-1 hover:text-secondary transition-colors"
            >
              <LogIn className="w-4 h-4" /> Login
            </Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-background text-foreground shadow-sm border-b border-border">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
         {/* Logo on the left */}
          <Link href="/" className="flex items-center gap-2 relative">
            {/* Light mode logo */}
            <Image
              src="/portuguese-international-rotary-logo-original.png"
              alt="Rotary Logo"
              width={335}
              height={100}
              priority
              className={`block dark:hidden transition-all duration-500 ${
                scrolled ? 'scale-100 opacity-100' : 'scale-95'
              }`}
            />
            {/* Dark mode logo */}
            <Image
              src="/portuguese-international-rotary-logo-dark.png"
              alt="Rotary Logo (Dark Mode)"
              width={335}
              height={100}
              priority
              className={`hidden dark:block transition-all duration-500 ${
                scrolled ? 'scale-100 opacity-100' : 'scale-95'
              }`}
            />
          </Link>


          {/* Desktop Nav */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-4">
              <NavigationMenu>
                <NavigationMenuList className="flex gap-2">
                  <NavItem href="/" label="Home" />
                  <NavItem href="/about" label="About" />
                  {/* <NavItem href="/projects" label="Projects" /> */}
                  <NavItem href="/membership" label="Membership" />
                  <NavItem href="/contact" label="Contact" />
                </NavigationMenuList>
              </NavigationMenu>

              <Link href="/membership">
                <Button size="sm" variant="secondary">
                  Join
                </Button>
              </Link>
              <Link href="/donate">
                <Button size="sm" variant="outline">
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
                  {theme === 'dark' ? (
                    <Moon className="w-4 h-4" />
                  ) : (
                    <Sun className="w-4 h-4" />
                  )}
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

            {/* Mobile Nav */}
            <div className="lg:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
