import AboutStoreSection from '@/components/home/AboutStoreSection'
import BestSellersSection from '@/components/home/BestSellerSection'
import Categories from '@/components/home/Categories'
import Faq from '@/components/home/Faq'
import FloatingWhatsapp from '@/components/common/FloatingWhatsapp'
import Footer from '@/components/common/Footer'
import GladShockHighlight from '@/components/home/GladShockHighlight'
import GoalSearchSection from '@/components/home/GoalSearchSection'
import Hero from '@/components/home/Hero'
import HeroDivider from '@/components/home/HeroDivider'
import Newsletter from '@/components/home/Newsletter'
import SupplementsSection from '@/components/home/SupplementsSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'

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