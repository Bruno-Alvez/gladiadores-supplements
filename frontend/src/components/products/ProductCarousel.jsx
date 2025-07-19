'use client'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProductCard from './ProductCard'

export default function ProductCarousel({ brand, products, onProductClick }) {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    slides: {
      perView: 2,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: {
          perView: 3,
          spacing: 24,
        },
      },
      '(min-width: 1024px)': {
        slides: {
          perView: 4,
          spacing: 28,
        },
      },
    },
  })

  const slideLeft = () => instanceRef.current?.prev()
  const slideRight = () => instanceRef.current?.next()

  return (
    <div className="relative">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-white">
        {brand} <span className="text-purple-500">Suplementos</span>
      </h2>

      <div ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <div key={product.id} className="keen-slider__slide">
            <ProductCard product={product} onClick={onProductClick} />
          </div>
        ))}
      </div>

      <div className="hidden md:flex justify-between items-center mt-4 px-2">
        <button
          onClick={slideLeft}
          className="bg-zinc-800 p-2 rounded-full hover:bg-purple-700 transition"
        >
          <ChevronLeft size={20} className="text-white" />
        </button>
        <button
          onClick={slideRight}
          className="bg-zinc-800 p-2 rounded-full hover:bg-purple-700 transition"
        >
          <ChevronRight size={20} className="text-white" />
        </button>
      </div>
    </div>
  )
}