'use client'

import { useKeenSlider } from 'keen-slider/react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import 'keen-slider/keen-slider.min.css'

export default function ProductModal({ product, onClose }) {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 8 },
  })

  const slideLeft = () => instanceRef.current?.prev()
  const slideRight = () => instanceRef.current?.next()

  const whatsappUrl = `https://wa.me/5512999999999?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20produto:%20${encodeURIComponent(product.name)}`

  return (
    <div className="fixed inset-0 bg-black/80 z-[1000] flex items-center justify-center px-4 py-8">
      <div className="relative w-full max-w-4xl bg-zinc-900 rounded-xl shadow-2xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-purple-500 transition"
        >
          <X size={28} />
        </button>

        {/* Modal content */}
        <div className="flex flex-col lg:flex-row">
          {/* Image slider */}
          <div className="w-full lg:w-1/2 relative">
            <div ref={sliderRef} className="keen-slider">
              {product.imageUrls.map((url, idx) => (
                <div key={idx} className="keen-slider__slide">
                  <img
                    src={url}
                    alt={`${product.name} ${idx + 1}`}
                    className="w-full h-96 object-cover rounded-l-xl"
                  />
                </div>
              ))}
            </div>

            {/* Arrows */}
            <div className="absolute inset-0 flex justify-between items-center px-2">
              <button onClick={slideLeft}>
                <ChevronLeft className="text-white hover:text-purple-500 transition" size={24} />
              </button>
              <button onClick={slideRight}>
                <ChevronRight className="text-white hover:text-purple-500 transition" size={24} />
              </button>
            </div>
          </div>

          {/* Product info */}
          <div className="w-full lg:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">{product.name}</h2>
              <p className="text-zinc-300 text-sm">{product.description}</p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-purple-600 hover:bg-purple-700 text-white text-center py-3 rounded-full font-semibold transition"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}