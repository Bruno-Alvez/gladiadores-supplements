'use client'

import { useState } from 'react'
import { useParams, notFound } from 'next/navigation'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Categories from '@/components/home/Categories'
import ProductModal from '@/components/products/ProductModal'
import { Dumbbell } from 'lucide-react'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import allProducts from '@/data/categories/products'

export default function CategoryPage() {
  const params = useParams()
  const slug = params.slug
  const products = allProducts[slug]

  const [selectedProduct, setSelectedProduct] = useState(null)
  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: 'free-snap',
    slides: { perView: 1.2, spacing: 16 },
    breakpoints: {
      '(min-width: 480px)': {
        slides: { perView: 2, spacing: 16 },
      },
    },
  })

  if (!products) return notFound()

  return (
    <>
      <Header />
      <main className="pt-20 bg-black text-white">

        <div className="text-center mt-10 mb-6">
          <h1 className="text-3xl font-bold uppercase">
            CATEGORIA: <span className="text-purple-500">{slug}</span>
          </h1>
        </div>

        {/* Mobile: carrossel */}
        <div className="block sm:hidden relative">
          <div ref={sliderRef} className="keen-slider px-2 pb-20">
            {products.map((product, idx) => (
              <div className="keen-slider__slide" key={idx}>
                <div
                  onClick={() => setSelectedProduct(product)}
                  className="bg-purple-950/40 backdrop-blur rounded-2xl p-4 mx-2 text-center shadow-md cursor-pointer"
                >
                  <Image
                    src={product.imageUrls?.[0]}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="rounded-lg mb-4 object-contain w-full h-56"
                  />
                  <h3 className="text-white text-base font-bold mb-2">{product.name}</h3>
                  <ul className="text-sm text-zinc-300 mb-4 space-y-1">
                    {product.benefits?.map((benefit, i) => (
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

        {/* Desktop: grid normal */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 sm:px-8 pb-20">
          {products.map((product, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedProduct(product)}
              className="bg-purple-950/40 backdrop-blur rounded-2xl p-4 flex flex-col items-center text-center shadow-md hover:shadow-purple-500/20 transition cursor-pointer"
            >
              <Image
                src={product.imageUrls?.[0]}
                alt={product.name}
                width={300}
                height={300}
                className="rounded-lg cursor-pointer mb-4 object-contain w-full h-56 sm:h-64"
              />
              <h3 className="text-white text-lg font-bold mb-2">{product.name}</h3>
              <ul className="text-sm text-zinc-300 mb-4 space-y-1">
                {product.benefits?.map((benefit, i) => (
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
      </main>

      <Footer />

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </>
  )
}