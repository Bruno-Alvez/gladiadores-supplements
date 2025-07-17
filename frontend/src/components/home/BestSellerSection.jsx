'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dumbbell, ChevronLeft, ChevronRight } from 'lucide-react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import products from '@/data/categories/products'
import ProductModal from '@/components/products/ProductModal'

export default function BestSellersSection() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  const allProducts = Object.values(products).flat()
  const bestSellers = allProducts.filter((product) => product.success)

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    slides: { perView: 1.3, spacing: 12 },
    breakpoints: {
      '(min-width: 768px)': {
        slides: undefined,
      },
    },
  })

  const slideLeft = () => instanceRef.current?.prev()
  const slideRight = () => instanceRef.current?.next()

  return (
    <section id='best-sellers' className="w-full bg-black py-16 px-4 mt-14">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          SUCESSOS DE <span className="text-purple-500">VENDA</span>
        </h2>
        <p className="text-zinc-400 text-sm mt-2">Os produtos mais procurados da loja</p>
      </div>

      {/* Mobile: carrossel */}
      <div className="block md:hidden relative">
        <div ref={sliderRef} className="keen-slider">
          {bestSellers.map((product, idx) => (
            <div className="keen-slider__slide" key={idx}>
              <div
                onClick={() => setSelectedProduct(product)}
                className="bg-purple-950/40 backdrop-blur rounded-2xl p-4 mx-2 text-center shadow-md cursor-pointer"
              >
                <Image
                  src={product.imageUrls[0]}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="rounded-lg mb-4 object-contain w-full h-56"
                />
                <h3 className="text-white text-base font-bold mb-2">{product.name}</h3>
                <ul className="text-sm text-zinc-300 mb-4 space-y-1">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center justify-center gap-2">
                      <Dumbbell size={16} className="text-purple-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/5511999999999?text=${encodeURIComponent(product.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition"
                  onClick={(e) => e.stopPropagation()}
                >
                  Comprar via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: grid */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {bestSellers.map((product, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedProduct(product)}
            className="bg-purple-950/40 backdrop-blur rounded-2xl p-4 flex flex-col items-center text-center shadow-md hover:shadow-purple-500/20 transition cursor-pointer"
          >
            <Image
              src={product.imageUrls[0]}
              alt={product.name}
              width={300}
              height={300}
              className="rounded-lg cursor-pointer mb-4 object-contain w-full h-56 sm:h-64"
            />
            <h3 className="text-white text-lg font-bold mb-2">{product.name}</h3>
            <ul className="text-sm text-zinc-300 mb-4 space-y-1">
              {product.benefits.map((benefit, i) => (
                <li key={i} className="flex items-center justify-center gap-2">
                  <Dumbbell size={16} className="text-purple-500" />
                  {benefit}
                </li>
              ))}
            </ul>
            <a
              href={`https://wa.me/5511999999999?text=${encodeURIComponent(product.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition"
              onClick={(e) => e.stopPropagation()}
            >
              Comprar via WhatsApp
            </a>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </section>
  )
}