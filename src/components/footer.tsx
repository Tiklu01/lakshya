"use client"

import Link from "next/link"
import { Github, Twitter } from "lucide-react"

interface FooterProps {
  companyName?: string
  venueAddress?: string
}

export default function Footer({
  companyName = "Lakshya 2k25",
  venueAddress = "Guru Nanak Institute of Technology, Kolkata",
}: FooterProps) {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top section with logo and social icons */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <img src="/icon.png" alt="Logo" className="h-10 w-10 mr-3" />
            <span className="text-xl font-bold">{companyName}</span>
          </div>

          <div className="flex space-x-4">
            <a href="https://twitter.com" className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://github.com" className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors">
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>

        <div className="border-t border-zinc-800 mb-6"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Navigation */}
          <div className="space-y-8">
            <nav className="flex flex-wrap gap-x-8 gap-y-4">
              <Link href="/products" className="hover:text-gray-300 transition-colors">Products</Link>
              <Link href="/about" className="hover:text-gray-300 transition-colors">About</Link>
              <Link href="/blog" className="hover:text-gray-300 transition-colors">Blog</Link>
              <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
            </nav>

            <nav className="flex flex-wrap gap-x-8 gap-y-4 text-gray-400">
              <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms</Link>
            </nav>

            <div className="text-gray-400">
              <p>© {new Date().getFullYear()} {companyName}</p>
              <p>All rights reserved</p>
            </div>
          </div>

          {/* Map Iframe */}
          <div>
            <h3 className="text-lg font-medium mb-2">Venue</h3>
            <p className="mb-4 text-gray-300">{venueAddress}</p>
            <div className="h-64 w-full overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1375.9538350381315!2d88.3781361757916!3d22.694757338097457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89c6df041e831%3A0x6e3fc1531d1cb33!2sGuru%20Nanak%20Institute%20of%20Technology!5e1!3m2!1sen!2sin!4v1742124344644!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "10px" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
