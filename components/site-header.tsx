"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/site"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="border-b bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center" onClick={close}>
          <Image
            src="/logo-black.svg"
            alt="M&G Real Estate"
            width={180}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium hover:text-primary/70 transition-colors">
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm">
            <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Contact
            </Link>
          </Button>
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-muted transition-colors"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="md:hidden border-t bg-background" aria-label="Mobile">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className="rounded-md px-3 py-3 text-base font-medium hover:bg-muted transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="lg" className="mt-2">
              <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={close}>
                Contact us on WhatsApp
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
