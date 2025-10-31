"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-[#324A5F] backdrop-blur supports-[backdrop-filter]:bg-[#324A5F]/95 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/3A5065.png"
              alt="Sacred Transitions Logo"
              width={40}
              height={40}
              className="h-10 w-auto object-contain"
            />
            <span className="text-xl font-semibold text-white">Sacred Transitions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-blue-300 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-blue-300 transition-colors">
              About
            </Link>
            <Link href="/services" className="text-white hover:text-blue-300 transition-colors">
              Services
            </Link>
            <Link href="/faq" className="text-white hover:text-blue-300 transition-colors">
              FAQ
            </Link>
            <Button asChild>
              <Link href="/book-consultation">Book a Session</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className="text-white hover:text-blue-300 hover:bg-white/10">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#324A5F] border-t border-border">
              <Link
                href="/"
                className="block px-3 py-2 text-white hover:text-blue-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-white hover:text-blue-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-white hover:text-blue-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/faq"
                className="block px-3 py-2 text-white hover:text-blue-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <div className="px-3 py-2">
                <Button asChild className="w-full">
                  <Link href="/book-consultation" onClick={() => setIsOpen(false)}>
                    Book a Session
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
