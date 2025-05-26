'use client'

import { NavigationMenu, NavigationMenuList } from "@trinity/ui"
import { NavItem } from "./NavItem"

export function MainNav() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList className="flex gap-2">
        <NavItem href="/" label="Home" />
        <NavItem href="/about" label="About" />
        <NavItem href="/membership" label="Membership" />
        <NavItem href="/contact" label="Contact" />
      </NavigationMenuList>
    </NavigationMenu>
  )
}
