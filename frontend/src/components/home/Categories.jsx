'use client'

import { useKeenSlider } from 'keen-slider/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import 'keen-slider/keen-slider.min.css'

const categories = [
  { name: 'Proteínas', image: '/images/categories/proteinas.jpg', href: '/categories/proteinas' },
  { name: 'Creatinas', image: '/images/categories/pre-treinos.jpeg', href: '/categories/creatinas' },
  { name: 'Pré Treinos', image: '/images/categories/creatinas.jpg', href: '/categories/pre-treinos' },
  { name: 'Hipercalóricos', image: '/images/categories/hipercaloricos.jpg', href: '/categories/hipercaloricos' },
  { name: 'Pasta de Amendoim', image: '/images/categories/gourmets.jpg', href: '/categories/pasta-de-amendoim' },
  { name: 'Roupas & Acessórios', image: '/images/categories/roupas.jpg', href: '/categories/roupas-acessorios' },
  { name: 'Gourmets', image: '/images/categories/bebidas.jpg', href: '/categories/gourmets' },
  { name: 'BCAAs', image: '/images/categories/bebidas.jpg', href: '/categories/bcaas' },
  { name: 'Emagrecedores', image: '/images/categories/bebidas.jpg', href: '/categories/emagrecedores' },
]

export default function Categories() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    slides: { perView: 6, spacing: 4 },
    breakpoints: {
      '(max-width: 768px)': {
        slides: { perView: 3, spacing: 8 },
      },
      '(max-width: 480px)': {
        slides: { perView: 3, spacing: 8 },
      },
    },
  })

  const slideLeft = () => instanceRef.current?.prev()
  const slideRight = () => instanceRef.current?.next()

  return (
    <section id="categories" className="w-full bg-black py-16 px-4 relative overflow-hidden mt-14">
      {/* Title */}
      <div className="text-center mb-12 pb-6">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          BUSQUE POR <span className="text-purple-500">CATEGORIA</span>
        </h2>
        <p className="text-zinc-400 text-sm mt-2">
          Explore as melhores categorias para sua performance
        </p>
      </div>

      {/* Slider */}
      <div className="relative overflow-visible">
        <div ref={sliderRef} className="keen-slider">
          {categories.map((cat, idx) => (
            <div className="keen-slider__slide flex justify-center" key={idx}>
              <Link href={cat.href}>
                <div className="flex flex-col items-center w-36 sm:w-40 group cursor-pointer">
                  <div className="w-full h-36 sm:h-40 rounded-2xl overflow-hidden shadow-md transition-all duration-300 bg-purple-900/10 group-hover:ring-2 ring-purple-500/40 hover:scale-105">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="mt-3 text-white font-semibold text-sm sm:text-base group-hover:text-purple-400 transition-colors">
                    {cat.name}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Navegação */}
        <button
          onClick={slideLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black p-2 rounded-full shadow-md hover:bg-purple-600 transition z-10"
        >
          <ChevronLeft className="text-white" size={24} />
        </button>
        <button
          onClick={slideRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black p-2 rounded-full shadow-md hover:bg-purple-600 transition z-10"
        >
          <ChevronRight className="text-white" size={24} />
        </button>
      </div>
    </section>
  )
}