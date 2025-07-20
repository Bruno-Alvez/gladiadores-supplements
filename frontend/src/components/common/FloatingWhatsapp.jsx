'use client'

import { FaWhatsapp } from 'react-icons/fa'

export default function FloatingWhatsapp() {
  return (
    <div className="fixed bottom-6 right-6 z-[999] md:bottom-4 md:right-4">
      {/* Pulse effect */}
      <span className="absolute inline-flex h-[60px] w-[60px] md:h-[50px] md:w-[50px] rounded-full bg-[#25D366] opacity-75 animate-ping" />

      {/* WhatsApp button */}
      <a
        href="https://wa.me/5512981146131?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%21"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale com a loja no WhatsApp"
        className="relative bg-[#25D366] text-white w-[60px] h-[60px] md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center shadow-lg text-[1.8rem] md:text-[1.5rem] hover:bg-[#1ebe5b] hover:scale-105 transition-all duration-300 ease-in-out"
      >
        <FaWhatsapp />
      </a>
    </div>
  )
}