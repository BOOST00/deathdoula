import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#324A5F] border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
            <p className="text-white/80 mb-2">Serving the Dallas-Fort Worth Area</p>
            <p className="text-white/80">Available for virtual consultations nationwide</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-white hover:text-blue-300 transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-white hover:text-blue-300 transition-colors">
                About
              </Link>
              <Link href="/services" className="block text-white hover:text-blue-300 transition-colors">
                Services
              </Link>
              <Link href="/faq" className="block text-white hover:text-blue-300 transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <div className="space-y-2">
              <p className="text-white/80">End-of-Life Planning</p>
              <p className="text-white/80">Family Support</p>
              <p className="text-white/80">Legacy Projects</p>
              <p className="text-white/80">Vigil Planning</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <div className="flex flex-col items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/3A5065.png"
                alt="Sacred Transitions Logo"
                width={50}
                height={50}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-white/80">
              © {new Date().getFullYear()} Sacred Transitions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
