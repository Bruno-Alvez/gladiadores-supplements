'use client'

import { Instagram, Facebook, Youtube } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] bg-black"
      >
        <source src="/videos/hero-gladiadores.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo HTML5.
      </video>

      {/* social icons */}
      <div className="absolute top-1/2 right-6 transform -translate-y-1/2 flex flex-col gap-6 z-10">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram className="text-white hover:text-purple-500 transition" size={28} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook className="text-white hover:text-purple-500 transition" size={28} />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <Youtube className="text-white hover:text-purple-500 transition" size={28} />
        </a>
      </div>
    </section>
  )
}