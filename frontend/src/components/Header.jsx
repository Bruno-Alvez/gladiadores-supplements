'use client'

import { useState } from 'react'
import { Menu, X, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [search, setSearch] = useState('')

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black shadow-md transition-all">
      <div className="flex items-center justify-between px-4 py-2 max-w-7xl mx-auto">
        {/* Menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white hover:text-purple-500 transition-colors cursor-pointer"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Search */}
        <div className="flex-1 px-4 max-w-md">
          <div className="flex items-center bg-zinc-900 border border-zinc-700 rounded-full px-4 py-1.5">
            <Search size={18} className="text-zinc-400" />
            <input
              type="text"
              placeholder="Buscar suplementos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none text-sm text-white px-2 w-full placeholder:text-zinc-500"
            />
          </div>
        </div>

        {/* Logo */}
        <Link href="/" className="ml-4">
          <Image
            src="/logo-gladiadores.jpg"
            alt="Gladiadores Suplementos"
            width={120}
            height={40}
            priority
          />
        </Link>
      </div>

      {/* Dropdown menu */}
      {menuOpen && (
        <nav className="flex flex-col gap-4 bg-black bg-opacity-90 p-6 text-white">
          <Link href="#products" className="hover:text-purple-500 transition">Products</Link>
          <Link href="#community" className="hover:text-purple-500 transition">Community</Link>
          <Link href="#contact" className="hover:text-purple-500 transition">Contact</Link>
        </nav>
      )}
    </header>
  )
}
