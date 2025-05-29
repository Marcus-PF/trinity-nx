'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@trinity/ui';

interface NavItemProps {
  href: string;
  label: string;
  className?: string;
}

export function NavItem({ href, label, className }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'relative inline-flex items-center justify-center px-3 py-2 h-10 text-sm font-medium rounded-md transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        isActive
          ? 'text-secondary font-semibold after:absolute after:inset-x-3 after:bottom-1 after:h-[2px] after:bg-secondary'
          : 'text-muted-foreground hover:text-secondary hover:bg-primary/10',
        className
      )}
    >
      {label}
    </Link>
  );
}
