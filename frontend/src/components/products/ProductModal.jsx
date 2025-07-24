'use client'

import { useEffect, useState, useRef } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import 'keen-slider/keen-slider.min.css'

export default function ProductModal({ product, onClose }) {
  const [isMounted, setIsMounted] = useState(false)
  const modalRef = useRef(null)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 8 },
  })

  useEffect(() => {
    setIsMounted(true)

    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [onClose])

  if (!isMounted) return null

  const slideLeft = () => instanceRef.current?.prev()
  const slideRight = () => instanceRef.current?.next()

  const whatsappUrl = `https://wa.me/5512981146131?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20produto:%20${encodeURIComponent(product.name)}`

  const images = Array.isArray(product.image_urls) && product.image_urls.length > 0
    ? product.image_urls
    : product.image_main
      ? [product.image_main]
      : ['/placeholder.jpg']

  return (
    <div className="fixed inset-0 z-[1000] bg-black/80 flex items-center justify-center px-4 py-8">
      <div
        ref={modalRef}
        className="relative w-full max-w-6xl bg-zinc-900 rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row overflow-y-auto max-h-screen lg:overflow-visible lg:max-h-none"
      >
        {/* Close Buttom */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-purple-500 hover:text-purple-900 transition z-10"
        >
          <X size={28} />
        </button>

        {/* Slider */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center bg-black">
          <div ref={sliderRef} className="keen-slider h-[26rem] lg:h-[30rem] w-full bg-black">
            {images.map((url, idx) => (
              <div key={idx} className="keen-slider__slide flex items-center justify-center">
                <img
                  src={url}
                  alt={`${product.name} ${idx + 1}`}
                  className="object-cover h-full max-h-full max-w-full"
                />
              </div>
            ))}
          </div>

          {/* Navegation */}
          <div className="absolute inset-0 flex justify-between items-center px-4">
            <button onClick={slideLeft}>
              <ChevronLeft className="text-purple-500 hover:text-black bg-white rounded-full p-1 transition" size={40} />
            </button>
            <button onClick={slideRight}>
              <ChevronRight className="text-purple-500 hover:text-black bg-white rounded-full p-1 transition" size={40} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 p-6 lg:p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              {product.name}
            </h2>
            <p className="text-zinc-300 text-base leading-relaxed whitespace-pre-line">
              {product.description}
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 bg-purple-600 hover:bg-purple-700 text-white text-center py-3 rounded-full font-semibold transition"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
