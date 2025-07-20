'use client'

import { useKeenSlider } from 'keen-slider/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import 'keen-slider/keen-slider.min.css'

const categories = [
  { name: 'Proteínas', image: '/images/categories/proteinas.jpg', href: '/categories/proteinas' },
  { name: 'Creatinas', image: '/images/categories/creatinas.jpg', href: '/categories/creatinas' },
  { name: 'Pré Treinos', image: '/images/categories/pre-treinos.jpeg', href: '/categories/pre-treinos' },
  { name: 'Hipercalóricos', image: '/images/categories/hiper.jpg', href: '/categories/hipercaloricos' },
  { name: 'Pasta de Amendoim', image: '/images/categories/pasta.jpg', href: '/categories/pasta-de-amendoim' },
  { name: 'Acessórios', image: '/images/categories/roupas.jpeg', href: '/categories/roupas-acessorios' },
  { name: 'Gourmets & Snacks', image: '/images/categories/barras.jpg', href: '/categories/gourmets' },
  { name: 'BCAAs', image: '/images/categories/bcaa_2.jpg', href: '/categories/bcaas' },
  { name: 'Vitaminas', image: '/images/categories/vitaminas.jpg', href: '/categories/vitaminas' },
  { name: 'Glutaminas', image: '/images/categories/beta-dux.webp', href: '/categories/glutaminas' },
]

export default function Categories() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    slides: { perView: 6, spacing: 12 },
    breakpoints: {
      '(max-width: 1024px)': {
        slides: { perView: 4, spacing: 10 },
      },
      '(max-width: 768px)': {
        slides: { perView: 3, spacing: 8 },
      },
      '(max-width: 480px)': {
        slides: { perView: 2.2, spacing: 8 },
      },
    },
  })

  const slideLeft = () => instanceRef.current?.prev()
  const slideRight = () => instanceRef.current?.next()

  return (
    <section id="categories" className="w-full bg-black py-20 px-4 relative overflow-hidden mt-14 font-sans">
      {/* Título da seção */}
      <div className="text-center mb-14">
        <h2 className="text-3xl font-extrabold text-white tracking-tight font-sans">
          BUSQUE POR <span className="text-purple-500">CATEGORIA</span>
        </h2>
        <p className="text-zinc-400 text-sm mt-3 font-light">
          Escolha a linha ideal para o seu objetivo
        </p>
      </div>

      {/* Carrossel */}
      <div className="relative overflow-visible">
        <div ref={sliderRef} className="keen-slider">
          {categories.map((cat, idx) => (
            <div className="keen-slider__slide flex justify-center" key={idx}>
              <Link href={cat.href}>
                <div className="flex flex-col items-center group cursor-pointer w-36 sm:w-40">
                  {/* Imagem com efeito */}
                  <div className="relative w-full h-36 sm:h-44 rounded-2xl overflow-hidden shadow-xl border border-purple-800/30 hover:scale-105 transition-all duration-300">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover transition duration-300 group-hover:brightness-75"
                    />
                  </div>

                  {/* Nome da categoria FORA da imagem */}
                  <p className="mt-3 text-white font-medium text-sm sm:text-base text-center tracking-wide group-hover:text-purple-400 transition-colors font-sans">
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
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/80 p-2 rounded-full shadow-lg hover:bg-purple-600 transition z-10"
        >
          <ChevronLeft className="text-white" size={28} />
        </button>
        <button
          onClick={slideRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/80 p-2 rounded-full shadow-lg hover:bg-purple-600 transition z-10"
        >
          <ChevronRight className="text-white" size={28} />
        </button>
      </div>
    </section>
  )
}