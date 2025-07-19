'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import ProductModal from '@/components/products/ProductModal'
import Image from 'next/image'
import { Dumbbell, ChevronLeft, ChevronRight } from 'lucide-react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { getAllProducts } from '../../../../lib/api/products'

export default function GoalPage() {
  const { slug: goalSlug } = useParams()
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [productsByBrand, setProductsByBrand] = useState({})

  useEffect(() => {
    async function fetchProducts() {
      try {
        const allProducts = await getAllProducts()

        const filtered = allProducts.filter(product =>
          product.goals?.some(goal => goal.slug === goalSlug)
        )

        const grouped = filtered.reduce((acc, product) => {
          const brand = product.brand?.name || 'Outros'
          acc[brand] = acc[brand] || []
          acc[brand].push(product)
          return acc
        }, {})

        setProductsByBrand(grouped)
      } catch (error) {
        console.error('Erro ao buscar produtos:', error)
      }
    }

    fetchProducts()
  }, [goalSlug])

  if (!goalSlug) return null

  return (
    <>
      <Header />

      <main className="pt-20 bg-black text-white">
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
            OBJETIVO:{' '}
            <span className="text-purple-500 uppercase">
              {goalSlug.replaceAll('-', ' ')}
            </span>
          </h1>

          {Object.entries(productsByBrand).map(([brand, items], idx) => (
            <div key={idx} className="mb-16">
              <Carousel items={items} onSelect={setSelectedProduct} />
            </div>
          ))}
        </section>
      </main>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}

      <Footer />
    </>
  )
}

function Carousel({ items, onSelect }) {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    mode: 'free-snap',
    slides: { perView: 1.2, spacing: 16 },
    breakpoints: {
      '(min-width: 480px)': {
        slides: { perView: 2, spacing: 16 },
      },
      '(min-width: 1024px)': {
        slides: false,
      },
    },
  })

  return (
    <>
      <div className="block lg:hidden relative">
        <div ref={sliderRef} className="keen-slider px-2">
          {items.map((product, idx) => (
            <div className="keen-slider__slide" key={idx}>
              <Card product={product} onClick={() => onSelect(product)} />
            </div>
          ))}
        </div>

        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/70 p-2 rounded-full text-white z-10"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/70 p-2 rounded-full text-white z-10"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {items.map((product, idx) => (
          <Card key={idx} product={product} onClick={() => onSelect(product)} />
        ))}
      </div>
    </>
  )
}

function Card({ product, onClick }) {
  const image = product.image_main || product.image_urls?.[0] || '/placeholder.jpg'
  const benefits = Array.isArray(product.benefits)
    ? product.benefits
    : typeof product.benefits === 'string'
    ? product.benefits.split(',').map(b => b.trim())
    : []

  return (
    <div
      onClick={onClick}
      className="bg-purple-950/40 backdrop-blur rounded-2xl p-4 flex flex-col items-center text-center shadow-md hover:shadow-purple-500/20 transition cursor-pointer"
    >
      <Image
        src={image}
        alt={product.name}
        width={300}
        height={300}
        className="rounded-lg mb-4 object-contain w-full h-56 sm:h-64"
      />
      <h3 className="text-white text-lg font-bold mb-2">{product.name}</h3>
      <ul className="text-sm text-zinc-300 mb-4 space-y-1">
        {benefits.map((benefit, i) => (
          <li key={i} className="flex items-center justify-center gap-2">
            <Dumbbell size={16} className="text-purple-500" />
            {benefit}
          </li>
        ))}
      </ul>
      <a
        href={`https://wa.me/5511999999999?text=${encodeURIComponent(product.whatsapp_message || product.name)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition w-full"
        onClick={(e) => e.stopPropagation()}
      >
        Comprar via WhatsApp
      </a>
    </div>
  )
}
