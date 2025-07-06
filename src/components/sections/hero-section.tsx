'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Navigation } from '@/components/ui/navigation'
import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 py-20">
      {/* Background Patterns */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute left-0 top-0 h-[300px] w-[300px] bg-blue-400 rounded-full blur-[100px]" />
        <div className="absolute right-0 bottom-0 h-[250px] w-[250px] bg-purple-400 rounded-full blur-[100px]" />
        <div className="absolute right-[40%] top-[20%] h-[200px] w-[200px] bg-pink-400 rounded-full blur-[100px]" />
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmMGYwZjAiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9IiNlMGUwZTAiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlPSIjZTBlMGUwIiBzdHJva2Utd2lkdGg9Ii41Ii8+PHBhdGggZD0iTTMwIDBIMHYzMGgzMHoiIHN0cm9rZT0iI2UwZTBlMCIgc3Ryb2tlLXdpZHRoPSIuNSIvPjxwYXRoIGQ9Ik02MCAzMEgzMFYwaDMweiIgc3Ryb2tlPSIjZTBlMGUwIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')]" />

      <div className="container relative px-4 mx-auto">
        {/* Navigation */}
        <Navigation />

        {/* Hero Content */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mt-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Badge className="backdrop-blur-md bg-white/40 shadow-sm text-gray-700 hover:bg-white/50 mb-6 border border-white/20 px-4 py-1">
              Transforming Ideas Into Digital Reality
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-700 to-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Elevate Your Business with <span className="text-blue-500 relative inline-block">
              Cutting-Edge
              <span className="absolute -bottom-1 left-0 w-full h-[5px] bg-blue-500/30 rounded-full"></span>
            </span> Digital Solutions
          </motion.h1>
          
          <motion.p 
            className="text-gray-600 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            We craft exceptional web applications, implement AI-driven innovations, and build scalable cloud infrastructures that help forward-thinking companies thrive in today's digital landscape.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Button className="group relative overflow-hidden bg-black text-white hover:bg-black transition-all duration-300 px-7 py-6 rounded-xl shadow-lg hover:shadow-xl">
              <span className="relative z-10">See Our Portfolio</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 transition-all duration-300 px-7 py-6 rounded-xl">
              Schedule a Consultation
            </Button>
          </motion.div>
          
          {/* Team Images with 3D effect */}
          <motion.div 
            className="mb-4 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <div className="flex -space-x-4 transform hover:rotate-1 transition-transform duration-300">
              {[
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&h=150&fit=crop&crop=face"
              ].map((src, i) => (
                <div 
                  key={i} 
                  className="w-10 h-10 rounded-full border-2 border-white shadow-md overflow-hidden transform transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  style={{ zIndex: 5 - i }}
                >
                  <Image 
                    src={src} 
                    alt={`Team member ${i+1}`} 
                    width={40} 
                    height={40}
                    className="object-cover"
                  />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-500 text-white text-xs font-medium border-2 border-white">
                +20
              </div>
            </div>
          </motion.div>
          <motion.p 
            className="text-sm text-gray-500 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            Trusted by innovative teams worldwide
          </motion.p>
        </div>
      </div>
    </section>
  )
}
