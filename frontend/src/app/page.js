import AboutStoreSection from '@/components/AboutStoreSection'
import BestSellersSection from '@/components/BestSellerSection'
import Categories from '@/components/Categories'
import Faq from '@/components/Faq'
import FloatingWhatsapp from '@/components/FloatingWhatsapp'
import Footer from '@/components/Footer'
import GladShockHighlight from '@/components/GladShockHighlight'
import GoalSearchSection from '@/components/GoalSearchSection'
import Hero from '@/components/Hero'
import HeroDivider from '@/components/HeroDivider'
import Newsletter from '@/components/Newsletter'
import SupplementsSection from '@/components/SupplementsSection'
import TestimonialsSection from '@/components/TestimonialsSection'

export default function Home() {
  return (
    <main>
      <Hero />
      <HeroDivider />
      <GladShockHighlight />
      <Categories />
      <SupplementsSection />
      <TestimonialsSection />
      <AboutStoreSection />
      <BestSellersSection />
      <GoalSearchSection />
      <Newsletter />
      <Faq />
      <Footer />
      <FloatingWhatsapp />
    </main>
  )
}