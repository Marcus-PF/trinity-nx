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
        'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors px-3 py-2 h-10',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC107] focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        isActive
          ? 'text-[#FFC107] before:content-[""] before:absolute before:left-0 before:-bottom-1 before:h-[2px] before:w-full before:bg-[#FFC107]'
          : 'text-[#003087] hover:text-[#FFC107] hover:bg-[#003087]/10',
        className
      )}
    >
      {label}
    </Link>
  );
}
