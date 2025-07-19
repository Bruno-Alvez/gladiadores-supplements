'use client'

import { Dumbbell } from 'lucide-react'
import Image from 'next/image'

export default function ProductCard({ product, onClick }) {
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

  return (
    <div
      onClick={() => onClick(product)}
      className="bg-purple-950 p-4 rounded-2xl shadow-md cursor-pointer transition-transform hover:scale-105 w-64 sm:w-72"
    >
      <div className="relative w-full h-36 mb-4 overflow-hidden rounded-xl">
        <Image
          src={firstImage}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <h3 className="text-lg font-bold text-white mb-2 text-center">
        {product.name}
      </h3>

      <ul className="text-sm text-zinc-300 space-y-1 mb-4">
        {product.benefits?.map((benefit, index) => (
          <li key={index} className="flex items-center gap-2">
            <Dumbbell size={16} className="text-purple-400" />
            {benefit}
          </li>
        ))}
      </ul>

      <button
        className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold py-2 px-4 rounded-full w-full"
        onClick={(e) => {
          e.stopPropagation()
          window.open(
            `https://wa.me/5512999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20produto%20*${product.name}*`,
            '_blank'
          )
        }}
      >
        Comprar via WhatsApp
      </button>
    </div>
  )
}