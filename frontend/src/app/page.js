import AboutStoreSection from '@/components/AboutStoreSection'
import BestSellersSection from '@/components/BestSellerSection'
import Categories from '@/components/Categories'
import Faq from '@/components/Faq'
import GoalSearchSection from '@/components/GoalSearchSection'
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
      <BestSellersSection />
      <GoalSearchSection />
      <Faq />
    </main>
  )
}