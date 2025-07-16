'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [activeSection, setActiveSection] = useState(null)

  // Watch scroll to highlight section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      let current = null
      sections.forEach((section) => {
        const top = section.offsetTop - 120
        if (window.scrollY >= top) {
          current = section.getAttribute('id')
        }
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Classes for links
  const linkClass = (id) =>
    `transition hover:text-purple-500 ${
      activeSection === id ? 'text-purple-500 font-semibold' : ''
    }`

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black shadow-md transition-all">
      <div className="grid grid-cols-[auto_1fr_auto] items-center px-4 py-2 max-w-7xl mx-auto gap-4 w-full">
        
        {/* Logo aligned left */}
        <Link href="/">
          <Image
            src="/logo-gladiadores.jpg"
            alt="Gladiadores Suplementos"
            width={100}
            height={40}
            priority
          />
        </Link>

        {/* Search bar centered */}
        <div className="w-full max-w-md mx-auto">
          <div className="flex items-center bg-zinc-900 border border-zinc-700 rounded-full px-4 py-1.5">
            <Search size={18} className="text-zinc-400" />
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none text-sm text-white px-2 w-full placeholder:text-zinc-500"
            />
          </div>
        </div>

        {/* Menu button aligned right */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white hover:text-purple-500 transition-colors cursor-pointer"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Dropdown menu for mobile */}
      {menuOpen && (
        <nav className="flex flex-col gap-4 bg-black bg-opacity-90 p-6 text-white">
          <Link href="#gladshock" className={linkClass('gladshock')}>Glad Shock</Link>
          <Link href="#about" className={linkClass('about')}>Sobre Nós</Link>
          <Link href="#testimonials" className={linkClass('testimonials')}>Depoimentos</Link>
          <Link href="#faq" className={linkClass('faq')}>Principais Dúvidas</Link>
          <Link href="#contact" className={linkClass('contact')}>Fale Conosco</Link>
        </nav>
      )}
    </header>
  )
}