'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@trinity/ui';
import { cn } from '@trinity/ui';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  // { label: 'Projects', href: '/projects' },
  // { label: 'Events', href: '/events' },
  { label: 'Membership', href: '/membership' },
  { label: 'Donate', href: '/donate' },
  { label: 'Contact', href: '/contact' },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // we only portal after mounting (so document is defined)
  useEffect(() => {
    setMounted(true);
  }, []);

  // drawer + backdrop JSX
  const drawer = (
    <>
      {/* backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9998] bg-black/50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* full-height drawer */}
      <div
        className={cn(
          'fixed inset-y-0 right-0 w-64 bg-background shadow-lg z-[9999] transform transition-transform',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <h2 className="text-lg font-bold text-primary">Menu</h2>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="text-primary"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex flex-col overflow-y-auto h-[calc(100vh-3.5rem)] p-4 space-y-1">
          {navLinks.map(({ label, href }) => (
            <MobileLink
              key={href}
              href={href}
              onNavigate={() => setIsOpen(false)}
              className="rounded-md px-3 py-2"
            >
              {label}
            </MobileLink>
          ))}

          <div className="mt-6 space-y-2">
            <MobileLink
              href="/membership"
              onNavigate={() => setIsOpen(false)}
              className="block w-full text-center bg-secondary text-secondary-foreground rounded-md px-3 py-2"
            >
              Join Rotary
            </MobileLink>
            <MobileLink
              href="/donate"
              onNavigate={() => setIsOpen(false)}
              className="block w-full text-center bg-primary text-primary-foreground rounded-md px-3 py-2"
            >
              Donate Now
            </MobileLink>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Hamburger trigger */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden text-primary"
        aria-label="Open navigation menu"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="w-6 h-6" />
      </Button>

      {/* Portal the drawer under document.body */}
      {mounted && createPortal(drawer, document.body)}
    </>
  );
}

interface MobileLinkProps {
  href: string;
  onNavigate: () => void;
  className?: string;
  children: React.ReactNode;
}

function MobileLink({
  href,
  onNavigate,
  className,
  children,
}: MobileLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} legacyBehavior>
      <a
        onClick={() => {
          onNavigate();
          router.push(href);
        }}
        className={cn(
          className,
          'block text-base font-medium transition-colors',
          isActive
            ? 'bg-muted text-primary font-semibold'
            : 'text-foreground hover:text-secondary'
        )}
      >
        {children}
      </a>
    </Link>
  );
}
