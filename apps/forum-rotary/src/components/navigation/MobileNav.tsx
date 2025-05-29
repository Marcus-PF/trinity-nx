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
  { label: 'Membership', href: '/membership' },
  { label: 'Donate', href: '/donate' },
  { label: 'Contact', href: '/contact' },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const drawer = (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9998] bg-muted/70 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={cn(
          'fixed inset-y-0 right-0 w-64 bg-background text-foreground shadow-lg z-[9999] transform transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <h2 className="text-lg font-bold text-primary">Menu</h2>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="text-muted-foreground"
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
              className="block w-full text-center bg-secondary text-secondary-foreground hover:bg-secondary/90 transition rounded-md px-3 py-2"
            >
              Join Rotary
            </MobileLink>
            <MobileLink
              href="/donate"
              onNavigate={() => setIsOpen(false)}
              className="block w-full text-center bg-primary text-primary-foreground hover:bg-primary/90 transition rounded-md px-3 py-2"
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
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden text-primary"
        aria-label="Open navigation menu"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="w-6 h-6" />
      </Button>

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
            : 'text-muted-foreground hover:text-secondary'
        )}
      >
        {children}
      </a>
    </Link>
  );
}
