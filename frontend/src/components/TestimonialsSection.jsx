'use client'

import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import 'keen-slider/keen-slider.min.css'

const testimonials = [
  { image: '/images/testimonials/t1.jpeg', alt: 'Depoimento 1' },
  { image: '/images/testimonials/t2.jpeg', alt: 'Depoimento 2' },
  { image: '/images/testimonials/t3.jpeg', alt: 'Depoimento 3' },
  { image: '/images/testimonials/t4.jpeg', alt: 'Depoimento 4' },
  { image: '/images/testimonials/t5.jpeg', alt: 'Depoimento 5' },
  { image: '/images/testimonials/t6.jpeg', alt: 'Depoimento 6' },
  { image: '/images/testimonials/t7.jpeg', alt: 'Depoimento 7' },
  { image: '/images/testimonials/t8.jpeg', alt: 'Depoimento 8' },
]

export default function TestimonialsSection() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 8 },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 4, spacing: 8 },
      },
    },
  })

  const slideLeft = () => instanceRef.current?.prev()
  const slideRight = () => instanceRef.current?.next()

  return (
    <section className="w-full bg-black py-16 px-4 relative">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          DEPOIMENTOS <span className="text-purple-500">REAIS</span>
        </h2>
        <p className="text-zinc-400 text-sm mt-2">Veja o que nossos clientes dizem sobre nós</p>
      </div>

      <div className="relative">
        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((item, index) => (
            <div className="keen-slider__slide flex justify-center" key={index}>
              <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-purple-500/30 transition bg-zinc-900 p-1">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={260}
                  height={180}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={slideLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-zinc-800 p-2 rounded-full z-10 hover:bg-purple-600 transition"
        >
          <ChevronLeft className="text-white" size={20} />
        </button>
        <button
          onClick={slideRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-zinc-800 p-2 rounded-full z-10 hover:bg-purple-600 transition"
        >
          <ChevronRight className="text-white" size={20} />
        </button>
      </div>
    </section>
  )
}