'use client'

import Link from 'next/link'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

const goals = [
  {
    label: 'Hipertrofia',
    image: '/images/goals/hipertrofia.jpg',
    href: '/objectives/hipertrofia',
  },
  {
    label: 'Ganhar Forca',
    image: '/images/goals/ganho-forca.jpg',
    href: '/objectives/ganhar-forca',
  },
  {
    label: 'Perder Gordura',
    image: '/images/goals/perder-gordura.jpg',
    href: '/objectives/perder-gordura',
  },
  {
    label: 'Desempenho',
    image: '/images/goals/desempenho.jpg',
    href: '/objectives/desempenho',
  },
  {
    label: 'Energia',
    image: '/images/goals/energia.jpg',
    href: '/objectives/energia',
  },
]

export default function GoalSearchSection() {
  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: 'free-snap',
    slides: { perView: 2.2, spacing: 16 },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 5, spacing: 20 },
      },
    },
  })

  return (
    <section id='goals' className="bg-purple-500/9 text-white py-16 px-6 text-center mt-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-white">
          BUSQUE POR <span className="text-purple-500">OBJETIVO</span>
        </h2>
        <p className="text-zinc-400 text-sm mt-2">
          Encontre os produtos certos de acordo com sua meta
        </p>
      </div>

      <div ref={sliderRef} className="keen-slider max-w-7xl mx-auto">
        {goals.map((goal, index) => (
          <div
            key={index}
            className="keen-slider__slide group rounded-2xl overflow-hidden cursor-pointer relative h-96 sm:h-[500px]"
          >
            <Link href={goal.href} className="block w-full h-full">
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={goal.image}
                  alt={goal.label}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute left-8 bottom-2 sm:bottom-6 rotate-[-90deg] origin-bottom-left">
                  <p className="text-white text-xl sm:text-2xl font-bold tracking-wider">
                    {goal.label}
                  </p>
                </div>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition duration-300" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}