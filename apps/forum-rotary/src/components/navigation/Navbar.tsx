'use client';

import { MainNav } from './MainNav';

export function Navbar() {
  return (
    <>
      {/* Sticky header with blur */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <MainNav />
      </div>
    </>
  );
}
