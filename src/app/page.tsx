import { HeroSection } from '@/components/sections/hero-section'
import { WhatWeOfferSection } from '@/components/sections/what-we-offer-section'
import { PortfolioSection } from '@/components/sections/portfolio-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { FaqSection } from '@/components/sections/faq-section'

export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />
      <WhatWeOfferSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FaqSection />
    </main>
  )
} 