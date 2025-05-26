'use client'

import { useState } from "react"
import { Sheet, SheetTrigger, SheetContent } from "@trinity/ui"
import { Button } from "@trinity/ui"
import { Menu } from "lucide-react"
import { NavItem } from "./NavItem"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-4">
        <nav className="flex flex-col gap-4">
          <NavItem href="/" label="Home" />
          <NavItem href="/components" label="Components" />
          <NavItem href="/hooks" label="Hooks" />
          <NavItem href="/utils" label="Utils" />
          <NavItem href="/auth" label="Auth" />
          <NavItem href="/playground" label="Playground" />
        </nav>
      </SheetContent>
    </Sheet>
  )
}
