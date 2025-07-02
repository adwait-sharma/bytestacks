'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Navigation } from '@/components/ui/navigation'

export function HeroSection() {
  return (
    <section className="w-full bg-gray-50 text-gray-900 py-16">
      <div className="container px-4 mx-auto">
        {/* Navigation */}
        <Navigation />

        {/* Hero Content */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mt-16">
          <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-200 mb-6">ByteStacks Digital Consultancy</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Build world class<br />websites at <span className="text-blue-500">warp speed</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mb-8">
            We help technology companies scale with custom development, AI integration, and strategic digital marketing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button className="bg-black text-white hover:bg-gray-800">
              Explore Our Work
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400">
              Contact Us
            </Button>
          </div>
          
          {/* Team Images */}
          <div className="mb-4">
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&h=150&fit=crop&crop=face"
              ].map((src, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <Image 
                    src={src} 
                    alt={`Team member ${i+1}`} 
                    width={32} 
                    height={32}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-12">Join our community of satisfied clients</p>

          {/* Hero Image */}
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=600&fit=crop&crop=center" 
              alt="Workspace"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
