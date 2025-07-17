'use client'

import { Dumbbell, Info } from 'lucide-react'
import Image from 'next/image'

export default function ProductCard({ product, onClick }) {
  return (
    <div
      onClick={() => onClick(product)}
      className="bg-purple-950/40 hover:ring-2 ring-purple-600 p-4 rounded-2xl shadow-md cursor-pointer transition-transform hover:scale-105 w-64 sm:w-72"
    >
      <div className="relative w-full h-40 mb-4 overflow-hidden rounded-xl">
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{product.name}</h3>
      <ul className="text-sm text-zinc-300 space-y-1 mb-4">
        <li className="flex items-center gap-2"><Dumbbell size={16} /> Rende mais treinos</li>
        <li className="flex items-center gap-2"><Info size={16} /> Toque para ver mais</li>
      </ul>
      <button
        className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 text-sm"
        onClick={(e) => {
          e.stopPropagation()
          window.open(
            `https://wa.me/5512999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20produto%20*${product.name}*`,
            '_blank'
          )
        }}
      >
        Falar no WhatsApp
      </button>
    </div>
  )
}