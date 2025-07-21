'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import useProductSearch from '../../../lib/hooks/useProductSearch'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [activeSection, setActiveSection] = useState(null)

  const filtered = useProductSearch(search)

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

  const linkClass = (id) =>
    `transition hover:text-purple-500 ${
      activeSection === id ? 'text-purple-500 font-semibold' : ''
    }`

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black shadow-md transition-all">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 py-2 max-w-7xl mx-auto w-full gap-2 sm:gap-0">
        {/* Top Row: Logo + Menu */}
        <div className="flex items-center justify-between w-full sm:w-auto px-3">
          <Link href="/">
            <Image
              src="/logo-gladiadores.jpg"
              alt="Gladiadores Suplementos"
              width={100}
              height={40}
              priority
            />
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white hover:text-purple-500 transition-colors cursor-pointer sm:hidden"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Search bar (Desktop + Mobile) */}
        <div className="w-full sm:max-w-md relative z-50">
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

          {search.length > 1 && filtered.length > 0 && (
            <ul className="absolute top-full mt-2 bg-zinc-900 border border-zinc-700 rounded-xl shadow-lg max-h-80 overflow-y-auto w-full">
              {filtered.map((product, index) => (
                <li key={index} className="border-b border-zinc-800 last:border-none">
                  <Link
                    href={`/product/${product.slug || '#'}`}
                    className="flex items-center gap-3 px-4 py-2 text-sm text-white hover:bg-purple-700/30 transition"
                  >
                    <div className="w-10 h-10 shrink-0 relative rounded overflow-hidden bg-zinc-800">
                      <Image
                        src={product.image_main || product.image_urls?.[0] || '/placeholder.jpg'}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span>{product.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Menu (Desktop) */}
        <div className="hidden sm:flex items-center gap-6 text-white ml-auto">
          <Link href="#gladshock" className={linkClass('gladshock')}>Gladshock</Link>
          <Link href="#about" className={linkClass('about')}>Sobre Nós</Link>
          <Link href="#goals" className={linkClass('goals')}>Iniciantes</Link>
          <Link href="#testimonials" className={linkClass('testimonials')}>Depoimentos</Link>
          <Link href="#faq" className={linkClass('faq')}>Principais Dúvidas</Link>
        </div>
      </div>

      {/* Dropdown menu for mobile */}
      {menuOpen && (
        <nav className="flex flex-col gap-4 bg-black bg-opacity-90 p-6 text-white sm:hidden">
          <Link href="#gladshock" className={linkClass('gladshock')}>Glad Shock</Link>
          <Link href="#about" className={linkClass('about')}>Sobre Nós</Link>
          <Link href="#goals" className={linkClass('goals')}>Iniciantes</Link>
          <Link href="#testimonials" className={linkClass('testimonials')}>Depoimentos</Link>
          <Link href="#faq" className={linkClass('faq')}>Principais Dúvidas</Link>
        </nav>
      )}
    </header>
  )
}