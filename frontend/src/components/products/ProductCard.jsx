'use client'

import { Dumbbell } from 'lucide-react'
import Image from 'next/image'

export default function ProductCard({ product, onClick }) {
  // Fallback para a primeira imagem válida
  const firstImage =
    product.image_main ||
    product.image_1 ||
    product.image_2 ||
    product.image_3 ||
    product.image_4 ||
    product.image_5 ||
    product.image_6 ||
    product.image_7 ||
    product.image_8 ||
    product.image_9 ||
    '/placeholder.jpg'

  // Garante que os benefícios estejam em array
  const benefitsArray = typeof product.benefits === 'string'
    ? product.benefits.split(',').map(b => b.trim())
    : Array.isArray(product.benefits)
      ? product.benefits
      : []

  return (
    <div
      onClick={() => onClick(product)}
      className="bg-purple-950/40 backdrop-blur rounded-2xl p-4 flex flex-col items-center text-center shadow-md hover:shadow-purple-500/20 transition cursor-pointer w-full"
    >
      <div className="relative w-full h-56 sm:h-64 mb-4">
        <Image
          src={firstImage}
          alt={product.name}
          fill
          className="rounded-lg object-contain"
        />
      </div>

      <h3 className="text-white text-lg font-bold mb-2">{product.name}</h3>

      {/* Lista de Benefícios com limite de altura no desktop */}
      <div className="w-full max-h-32 overflow-y-auto sm:overflow-visible custom-scroll px-2">
        <ul className="text-sm text-zinc-300 mb-4 space-y-1">
          {benefitsArray.length > 0 ? (
            benefitsArray.map((benefit, index) => (
              <li key={index} className="flex items-center gap-2 text-left">
                <Dumbbell size={16} className="text-purple-500" />
                {benefit}
              </li>
            ))
          ) : (
            <li className="text-zinc-400">Sem benefícios listados</li>
          )}
        </ul>
      </div>

      <button
        className="mt-auto bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition"
        onClick={(e) => {
          e.stopPropagation()
          window.open(
            `https://wa.me/5512981146131?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20produto%20*${product.name}*`,
            '_blank'
          )
        }}
      >
        Comprar via WhatsApp
      </button>
    </div>
  )
}
