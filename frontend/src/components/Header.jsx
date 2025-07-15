'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black shadow-md transition-all">
      <div className="flex items-center justify-between px-6 py-1">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo-gladiadores.jpg"
            alt="Gladiadores Suplementos"
            width={140}
            height={40}
            priority
          />
        </Link>

        {/* Menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white hover:text-purple-500 transition-colors cursor-pointer"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Dropdown menu */}
      {menuOpen && (
        <nav className="flex flex-col gap-4 bg-black bg-opacity-90 p-6 text-white">
          <Link href="#products" className="hover:text-purple-500 transition">
            Products
          </Link>
          <Link href="#community" className="hover:text-purple-500 transition">
            Community
          </Link>
          <Link href="#contact" className="hover:text-purple-500 transition">
            Contact
          </Link>
        </nav>
      )}
    </header>
  )
}
