"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Droplets } from "lucide-react"
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar"
import { Button } from "@heroui/button"
import { Link } from "@heroui/link"

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Sobre OCEAN", href: "/sobre-ocean" },
  { name: "Sensores", href: "/sensores" },
  { name: "Acceso Anticipado", href: "/acceso-anticipado" },
  { name: "Avance de la Tesis", href: "/avance-tesis" },
  { name: "Contacto", href: "/contacto" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <HeroUINavbar onMenuOpenChange={setIsMenuOpen} className="bg-white/95 backdrop-blur z-50 shadow-sm">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" className="flex items-center space-x-2">
            <Droplets className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-900">OCEAN</span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navigation.map((item) => (
          <NavbarItem key={item.name} isActive={pathname === item.href}>
            <Link
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                pathname === item.href ? "text-blue-600" : "text-gray-600"
              }`}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} href="/auth/signin" color="primary" variant="solid">
            Iniciar Sesión
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {navigation.map((item) => (
          <NavbarMenuItem key={item.name}>
            <Link
              href={item.href}
              className={`w-full text-lg font-medium transition-colors hover:text-blue-600 py-2 ${
                pathname === item.href ? "text-blue-600" : "text-gray-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Button
            as={Link}
            href="/auth/signin"
            color="primary"
            variant="solid"
            className="mt-4 w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            Iniciar Sesión
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </HeroUINavbar>
  )
}
