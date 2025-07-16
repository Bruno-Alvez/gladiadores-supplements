'use client'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { Play, ChevronLeft, ChevronRight, Dumbbell } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef } from 'react'

export default function GladShockHighlight() {
  const sliderRef = useRef(null)
  const [instanceRef, setInstanceRef] = useState(null)
  const [showVideo, setShowVideo] = useState(false)

  // Carousel configuration with responsive breakpoints
  const [ref] = useKeenSlider(
    {
      loop: true,
      breakpoints: {
        '(max-width: 768px)': {
          slides: { perView: 1, spacing: 10 },
        },
      },
      slides: { perView: 3, spacing: 16 },
    },
    [slider => setInstanceRef(slider)]
  )

  const images = [
    '/images/gladshock/2.jpeg',
    '/images/gladshock/3.jpeg',
    '/images/gladshock/4.jpeg',
  ]

  return (
    <section className="w-full bg-black py-16 px-4">
      {/* Section title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white">
          CONHEÇA O <span className="text-purple-500">GLADSHOCK</span>
        </h2>
        <p className="text-zinc-400 text-base mt-2 max-w-xl mx-auto">
          O pré-treino mais potente da linha Gladiadores. Energia, foco e performance em uma fórmula única.
        </p>
      </div>

      {/* Video and description block */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-7xl mx-auto">
        {/* Video preview */}
        <div className="relative w-full max-w-md h-[300px] lg:h-[360px] rounded-xl overflow-hidden shadow-lg bg-black group cursor-pointer">
          {!showVideo ? (
            <>
              <Image
                src="/images/gladshock/1.jpeg"
                alt="GladShock Video"
                fill
                className="object-cover group-hover:opacity-80 transition"
              />
              <button
                onClick={() => setShowVideo(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/50 transition"
              >
                <Play size={50} className="text-white hover:text-purple-500 transition" />
              </button>
            </>
          ) : (
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls
              src="/videos/hero-gladiadores.mp4"
            >
              Your browser does not support HTML5 video.
            </video>
          )}
        </div>

        {/* Text and bullet list with icons */}
        <div className="text-white max-w-xl space-y-4">
          <h3 className="text-2xl font-bold">Desperte sua melhor versão</h3>
          <p className="text-zinc-400 leading-relaxed">
            GladShock é o pré-treino oficial da Gladiadores Suplementos, desenvolvido com ingredientes de alta performance para potencializar seus treinos. Fórmula com cafeína, taurina, beta-alanina e foco mental avançado.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
            {[
              'Explosão de energia',
              'Foco e concentração',
              'Desempenho máximo',
              'Sabor marcante',
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-purple-400 text-sm">
                <Dumbbell size={16} /> {item}
              </li>
            ))}
          </ul>
          <Link
            href="https://wa.me/5511999999999?text=Olá! Quero saber mais sobre o GladShock."
            className="inline-block mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition"
            target="_blank"
          >
            Fale com um consultor
          </Link>
        </div>
      </div>

      {/* Image carousel - desktop shows all, mobile uses arrows */}
      <div className="relative mt-12 max-w-5xl mx-auto">
        <div ref={ref} className="keen-slider">
          {images.map((src, idx) => (
            <div className="keen-slider__slide" key={idx}>
              <div className="w-full h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={src}
                  alt={`GladShock ${idx + 1}`}
                  width={800}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows - only visible on mobile */}
        <button
          onClick={() => instanceRef?.prev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-purple-600 p-2 rounded-full transition z-10 md:hidden"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>
        <button
          onClick={() => instanceRef?.next()}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-purple-600 p-2 rounded-full transition z-10 md:hidden"
        >
          <ChevronRight size={24} className="text-white" />
        </button>
      </div>
    </section>
  )
}