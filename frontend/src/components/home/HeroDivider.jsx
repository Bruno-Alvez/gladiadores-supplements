'use client'

import Image from 'next/image'

export default function HeroDivider() {
  return (
    <div className="w-full">
      <Image
        src="/images/hero/hero-divider.jpg"
        alt="Divisor decorativo entre seções"
        width={1920}
        height={120}
        className="w-full h-auto object-cover"
        priority
      />
    </div>
  )
}