'use client'

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

interface PortfolioItem {
  id: number
  title: string
  description: string
  image: string
  category: string
  icon: string
}

export function WhatWeOfferSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All")
  
  const categories = ["All", "AI Solutions", "SaaS Development", "Web Development", "App Development", "Data Science", "Digital Marketing"]
  
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "AI-Powered Content Creation",
      description: "Intelligent systems that generate high-quality content tailored to your brand voice",
      image: "/services/ai-solutions.webp",
      category: "AI Solutions",
      icon: "M12 16a3 3 0 100-6 3 3 0 000 6zm0 0v4m-6-4v4m12-4v4M6 8v4m6-4v4m6-4v4M6 4h12M6 20h12"
    },
    {
      id: 2,
      title: "Enterprise Analytics Dashboard",
      description: "Real-time data visualization and business intelligence for informed decision making",
      image: "/services/cloud-infra.webp",
      category: "SaaS Development",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    },
    {
      id: 3,
      title: "Next.js E-commerce Platform",
      description: "Blazing-fast shopping experiences with seamless checkout flows",
      image: "/services/web-apps.webp",
      category: "Web Development",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    },
    {
      id: 4,
      title: "Secure FinTech Mobile App",
      description: "Bank-grade security with intuitive UX for financial services",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop",
      category: "App Development",
      icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    },
    {
      id: 5,
      title: "Customer Behavior Analytics",
      description: "Deep insights into user patterns through machine learning algorithms",
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=500&fit=crop",
      category: "Data Science",
      icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    },
    {
      id: 6,
      title: "Omnichannel Marketing Suite",
      description: "Cohesive brand presence across all digital touchpoints",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=500&fit=crop",
      category: "Digital Marketing",
      icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
    }
  ]

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-gray-100 to-white"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="container relative px-4 mx-auto">
        {/* Section title */}
        <motion.div 
          className="flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 hover:from-blue-100 hover:to-indigo-100 mb-4 px-4 py-1 border border-blue-200">Our Expertise</Badge>
          <h2 className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900">Solutions That Drive Growth</h2>
          <p className="text-gray-600 max-w-lg">
            From concept to execution, we deliver custom digital solutions that help businesses scale, innovate, and thrive in competitive markets
          </p>
        </motion.div>
        
        {/* Category tabs */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          <div className="flex space-x-2 p-1 bg-gray-100 rounded-full">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-white text-blue-600 shadow-sm" 
                    : "text-gray-600 hover:bg-white/50 hover:text-gray-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerAnimation}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {filteredItems.map((item) => (
              <motion.div 
                key={item.id} 
                variants={itemAnimation}
                layout
                className="perspective-1000"
              >
                <div className="group h-full transform-gpu transition-all duration-500 hover:scale-[1.02]">
                  <Card className="relative h-full overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative h-52 w-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 z-20">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col h-[calc(100%-13rem)]">
                      <Badge className="w-fit mb-3 bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors border-0">{item.category}</Badge>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                      <div className="mt-auto pt-4 flex justify-between items-center border-t border-gray-100">
                        <span className="text-xs text-gray-500">Learn more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View more button */}
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button 
            variant="outline" 
            className="group border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300 px-8 py-6 rounded-xl"
          >
            <span className="mr-2">Explore All Solutions</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 