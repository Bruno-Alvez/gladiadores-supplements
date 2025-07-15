'use client'

import Image from 'next/image'

export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center mt-18 mb-12">
      {/* Left line */}
      <div className="flex-1 h-px bg-white/20" />

      {/* Logo */}
      <div className="mx-6 bg-black px-4">
        <Image
          src="/logo-gladiadores.jpg"
          alt="Logo Gladiadores"
          width={48}
          height={48}
          className="drop-shadow-sm"
        />
      </div>

      {/* Right line */}
      <div className="flex-1 h-px bg-white/20" />
    </div>
  )
}
