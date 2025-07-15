import AboutStoreSection from '@/components/AboutStoreSection'
import Categories from '@/components/Categories'
import Hero from '@/components/Hero'
import HeroDivider from '@/components/HeroDivider'
import SupplementsSection from '@/components/SupplementsSection'
import TestimonialsSection from '@/components/TestimonialsSection'

export default function Home() {
  return (
    <main>
      <Hero />
      <HeroDivider />
      <Categories />
      <SupplementsSection />
      <TestimonialsSection />
      <AboutStoreSection />
    </main>
  )
}