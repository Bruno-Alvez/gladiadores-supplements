'use client'

import { Instagram, Facebook, Youtube } from 'lucide-react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const timer = useRef()
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    drag: true,
    created(s) {
      startAutoPlay(s)
    },
    updated(s) {
      startAutoPlay(s)
    },
    destroyed() {
      clearInterval(timer.current)
    },
  })

  function startAutoPlay(sliderInstance) {
    clearInterval(timer.current)
    timer.current = setInterval(() => {
      if (sliderInstance) sliderInstance.next()
    }, 4000)
  }

  const slides = [
    {
      desktop: '/images/hero/slide1-desktop.jpeg',
      mobile: '/images/hero/slide1-mobile.jpeg',
    },
    {
      desktop: '/images/hero/slide2-desktop.jpeg',
      mobile: '/images/hero/slide2-mobile.jpeg',
    },
    {
      desktop: '/images/hero/slide3-desktop.jpeg',
      mobile: '/images/hero/slide3-mobile.jpeg',
    },
  ]

  return (
    <section className="relative w-full h-[100vh] overflow-hidden bg-black">
      <div ref={sliderRef} className="keen-slider w-full h-full">
        {slides.map((slide, idx) => (
          <div className="keen-slider__slide" key={idx}>
            <picture>
              <source media="(max-width: 767px)" srcSet={slide.mobile} />
              <img
                src={slide.desktop}
                alt={`Hero ${idx}`}
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center' }}
              />
            </picture>
          </div>
        ))}
      </div>

      {/* Social icons */}
      <div className="absolute top-1/2 right-6 transform -translate-y-1/2 flex flex-col gap-6 z-10">
        <a href="https://www.instagram.com/gladiadores.suplementos?igsh=MWpza202MTNyMGQ4bw==" target="_blank" rel="noopener noreferrer">
          <Instagram className="text-white hover:text-purple-500 transition" size={32} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook className="text-white hover:text-purple-500 transition" size={32} />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <Youtube className="text-white hover:text-purple-500 transition" size={32} />
        </a>
      </div>
    </section>
  )
}
