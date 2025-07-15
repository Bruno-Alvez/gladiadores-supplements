'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Dumbbell, ChevronLeft, ChevronRight } from 'lucide-react'
import { useKeenSlider } from 'keen-slider/react'
import { useRef } from 'react'
import 'keen-slider/keen-slider.min.css'

const bestSellers = [
  {
    name: 'Whey Gladiador 900g',
    image: '/images/best-sellers/whey.jpeg',
    benefits: ['Alta concentração de proteína', 'Rápida absorção', 'Baixo teor de gordura'],
    whatsappMessage: 'Olá! Tenho interesse no produto: Whey Gladiador 900g',
    href: '/product/whey-gladiador',
  },
  {
    name: 'Creatina Hardcore 300g',
    image: '/images/best-sellers/creatina.jpeg',
    benefits: ['Ganho de força', 'Melhora de desempenho', 'Volume muscular'],
    whatsappMessage: 'Olá! Tenho interesse no produto: Creatina Hardcore 300g',
    href: '/product/creatina-hardcore',
  },
  {
    name: 'Pré-Treino Fúria 240g',
    image: '/images/best-sellers/pretreino.jpeg',
    benefits: ['Energia explosiva', 'Foco mental', 'Resistência aumentada'],
    whatsappMessage: 'Olá! Tenho interesse no produto: Pré-Treino Fúria 240g',
    href: '/product/pre-treino-furia',
  },
  {
    name: 'BCAA Recovery 120 caps',
    image: '/images/best-sellers/bcaa.jpeg',
    benefits: ['Recuperação muscular', 'Redução de fadiga', 'Síntese proteica'],
    whatsappMessage: 'Olá! Tenho interesse no produto: BCAA Recovery 120 caps',
    href: '/product/bcaa-recovery',
  },
  {
    name: 'Whey Gladiador 900g',
    image: '/images/best-sellers/whey.jpeg',
    benefits: ['Alta concentração de proteína', 'Rápida absorção', 'Baixo teor de gordura'],
    whatsappMessage: 'Olá! Tenho interesse no produto: Whey Gladiador 900g',
    href: '/product/whey-gladiador',
  },
  {
    name: 'Creatina Hardcore 300g',
    image: '/images/best-sellers/creatina.jpeg',
    benefits: ['Ganho de força', 'Melhora de desempenho', 'Volume muscular'],
    whatsappMessage: 'Olá! Tenho interesse no produto: Creatina Hardcore 300g',
    href: '/product/creatina-hardcore',
  },
  {
    name: 'Pré-Treino Fúria 240g',
    image: '/images/best-sellers/pretreino.jpeg',
    benefits: ['Energia explosiva', 'Foco mental', 'Resistência aumentada'],
    whatsappMessage: 'Olá! Tenho interesse no produto: Pré-Treino Fúria 240g',
    href: '/product/pre-treino-furia',
  },
  {
    name: 'BCAA Recovery 120 caps',
    image: '/images/best-sellers/bcaa.jpeg',
    benefits: ['Recuperação muscular', 'Redução de fadiga', 'Síntese proteica'],
    whatsappMessage: 'Olá! Tenho interesse no produto: BCAA Recovery 120 caps',
    href: '/product/bcaa-recovery',
  },
]

export default function BestSellersSection() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    slides: {
      perView: 1.3,
      spacing: 12,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: undefined,
      },
    },
  })

  return (
    <section className="w-full bg-black py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white tracking-tight">
          SUCESSOS DE <span className="text-purple-500">VENDA</span>
        </h2>
        <p className="text-zinc-400 text-sm mt-2">Os produtos mais procurados da loja</p>
      </div>

      {/* Mobile: carrossel */}
      <div className="block md:hidden relative">
        <div ref={sliderRef} className="keen-slider">
          {bestSellers.map((product, idx) => (
            <div className="keen-slider__slide" key={idx}>
              <div className="bg-purple-950/40 backdrop-blur rounded-2xl p-4 mx-2 text-center shadow-md">
                <Link href={product.href}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="rounded-lg mb-4 object-contain w-full h-56"
                  />
                </Link>
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
                >
                  Comprar via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: grid normal */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {bestSellers.map((product, idx) => (
          <div
            key={idx}
            className="bg-purple-950/40 backdrop-blur rounded-2xl p-4 flex flex-col items-center text-center shadow-md hover:shadow-purple-500/20 transition"
          >
            <Link href={product.href}>
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="rounded-lg cursor-pointer mb-4 object-contain w-full h-56 sm:h-64"
              />
            </Link>
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
            >
              Comprar via WhatsApp
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
