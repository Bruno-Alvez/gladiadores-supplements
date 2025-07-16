'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-10 px-6 mt-22">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch justify-between gap-10 md:gap-0 relative">

        {/* Social media and address block, centered between edge and vertical line */}
        <div className="flex-1 flex flex-col items-center md:items-end justify-center space-y-4 pr-4 md:pr-12 relative">
          <h4 className="font-semibold mb-2">Redes Sociais</h4>
          <div className="flex gap-4">
            <Link href="https://www.instagram.com/gladiadores.suplementos?igsh=MWpza202MTNyMGQ4bw==" target="_blank">
              <Instagram className="hover:text-zinc-300 transition" />
            </Link>
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="hover:text-zinc-300 transition" />
            </Link>
            <Link href="https://youtube.com" target="_blank">
              <Youtube className="hover:text-zinc-300 transition" />
            </Link>
          </div>
          <p className="text-sm text-zinc-200 text-center md:text-right">
            Gladiadores Suplementos Ltda<br />
            Av. Walkir Vergani, 300 – Praia de Boissucanga<br />
            São Sebastião – SP – CEP 01234-567
          </p>
          {/* Vertical line fixed to the right side */}
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-white/20" />
        </div>

        {/* Center logo block */}
        <div className="flex-1 flex justify-center items-center relative">
          <Image
            src="/logo-gladiadores-2.png"
            alt="Logo Gladiadores"
            width={160}
            height={60}
            className="mx-auto"
          />
          {/* Vertical line on the right side of the logo */}
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-white/20" />
        </div>

        {/* Payment methods block, centered between line and edge */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center space-y-4 pl-4 md:pl-12 h-full">
          <h4 className="font-semibold mb-2">Formas de Pagamento</h4>
          <div className="grid grid-cols-3 gap-4 items-center">
            {[
              'visa.svg',
              'master.svg',
              'pix.png',
              'elo.svg',
              'hiper.svg',
              'paypal.svg',
            ].map((icon, idx) => (
              <div key={idx} className="flex items-center justify-center h-10">
                <Image
                  src={`/icons/${icon}`}
                  alt={icon}
                  width={48}
                  height={32}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="text-center text-zinc-300 text-sm mt-10 border-t border-purple-700 pt-4">
        © 2025 Alves Developer – Todos os direitos reservados
      </div>
    </footer>
  )
}
