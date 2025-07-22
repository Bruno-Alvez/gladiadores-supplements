'use client'

import { Instagram, Facebook, Youtube } from 'lucide-react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useRef } from 'react'
import Image from 'next/image'

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
      desktop: '/images/hero/herodesktop0.jpeg',
      mobile: '/images/hero/slidehero.jpg',
    },
    {
      desktop: '/images/hero/slide1-desktop.jpeg',
      mobile: '/images/hero/slide1-mobile.jpeg',
    },
    {
      desktop: '/images/hero/slide3-desktop.jpeg',
      mobile: '/images/hero/hero-mobile3.jpeg',
    },
    {
      desktop: '/images/hero/heroslide.jpg',
      mobile: '/images/hero/hero-mobile1.jpeg',
    },
    {
      desktop: '/images/hero/hero1.jpg',
      mobile: '/images/hero/hero-mobile3.jpeg',
    },
  ]

  return (
    <>
      <section className="relative w-full overflow-hidden pt-[80px] bg-black">
        <div ref={sliderRef} className="keen-slider w-full">
          {slides.map((slide, idx) => (
            <div className="keen-slider__slide w-full" key={idx}>
              {/* Mobile image */}
              {slide.mobile && (
                <div className="block md:hidden w-full h-[844px] relative">
                  <Image
                    src={slide.mobile}
                    alt={`Hero Mobile ${idx}`}
                    fill
                    className="object-cover object-[center_top]"
                    priority={idx === 0}
                  />
                </div>
              )}

              {/* Desktop image */}
              {!slide.mobileOnly && slide.desktop && (
                <div className="hidden md:block w-full h-screen relative">
                  <Image
                    src={slide.desktop}
                    alt={`Hero Desktop ${idx}`}
                    fill
                    className="object-contain"
                    priority={idx === 0}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Social icons */}
        <div className="absolute top-1/2 right-6 transform -translate-y-1/2 flex flex-col gap-6 z-10">
          <a
            href="https://www.instagram.com/gladiadores.suplementos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="text-white hover:text-purple-500 transition" size={32} />
          </a>
          <a
            href="https://www.facebook.com/share/1CaWcUt7kB/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="text-white hover:text-purple-500 transition" size={32} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <Youtube className="text-white hover:text-purple-500 transition" size={32} />
          </a>
        </div>
      </section>

      {/* Hero Divider */}
      <div className="w-full">
        <Image
          src="/images/hero/hero-divider.jpg"
          alt="Decorative divider between sections"
          width={1920}
          height={120}
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </>
  )
}