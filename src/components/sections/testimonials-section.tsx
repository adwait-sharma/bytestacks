'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"

interface Testimonial {
  id: number
  author: string
  role: string
  company: string
  content: string
  color: string
  image: string
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      author: "Mark Wilson",
      role: "CTO",
      company: "TechCorp",
      content: "ByteStacks transformed our digital infrastructure with their AI solutions. We've reduced development time by 40% while doubling the quality of our output.",
      color: "from-blue-500 to-blue-600",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: 2,
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "Innovate Inc",
      content: "The e-commerce platform ByteStacks built for us led to a 217% increase in conversions and a significant drop in cart abandonment. Their attention to UX details is remarkable.",
      color: "from-pink-500 to-pink-600",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: 3,
      author: "David Chen",
      role: "Founder",
      company: "NextLevel",
      content: "From concept to launch in just 12 weeks, ByteStacks delivered a SaaS platform that now serves over 10,000 businesses. Their technical prowess is matched by their business acumen.",
      color: "from-purple-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: 4,
      author: "Emma Rodriguez",
      role: "Product Manager",
      company: "GrowthHub",
      content: "The team at ByteStacks doesn't just execute tasks – they become strategic partners. Their insights helped us pivot our product strategy and capture an entirely new market segment.",
      color: "from-green-500 to-green-600",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: 5,
      author: "James Smith",
      role: "COO",
      company: "FutureTech",
      content: "The custom CRM integration ByteStacks developed connected our siloed systems, providing a unified view of customer data that's increased our team efficiency by 60%.",
      color: "bg-yellow-100 text-yellow-800",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: 6,
      author: "Lisa Chang",
      role: "CEO",
      company: "Automize",
      content: "ByteStacks delivered our mobile application two weeks ahead of schedule and 15% under budget, without compromising on quality. Their development process is remarkably efficient.",
      color: "bg-red-100 text-red-800",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: 7,
      author: "Michael Brown",
      role: "VP of Sales",
      company: "SalesForce Pro",
      content: "Their AI-powered lead generation system identified high-value prospects we were missing, resulting in a 53% increase in qualified leads and a 32% higher conversion rate.",
      color: "bg-indigo-100 text-indigo-800",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: 8,
      author: "Olivia Taylor",
      role: "E-commerce Director",
      company: "StyleShop",
      content: "The headless commerce solution ByteStacks implemented increased our page load speed by 70% and boosted our mobile conversion rate by 45%. The ROI has been exceptional.",
      color: "bg-cyan-100 text-cyan-800",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces"
    }
  ]

  const companyLogos = [
    { name: "Google", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
    { name: "Microsoft", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { name: "CISCO", text: "CISCO" },
    { name: "zomato", text: "zomato" },
    { name: "BETTER-AUTH", text: "BETTER-AUTH" },
    { name: "greatfrontend", text: "greatfrontend" },
    { name: "strapi", text: "strapi" },
    { name: "NEON", text: "NEON" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('right')
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setDirection('right')
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection('left')
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const variants = {
    enter: (direction: string) => ({
      x: direction === 'right' ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: string) => ({
      x: direction === 'right' ? -300 : 300,
      opacity: 0,
    }),
  }

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <div className="absolute top-40 right-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-40 left-0 w-72 h-72 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container px-4 mx-auto">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-3">Client Success Stories</h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Our clients' achievements speak volumes about our partnership and the quality of our work
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-24">
          <div className="relative h-[400px] overflow-hidden">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-10 max-w-3xl">
                <div className="flex flex-col items-center">
                  <div className="mb-8 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391C14.017 10.272 16.418 8 19.325 8l.674.006v2.806c-1.636 0-2.657 1.02-2.657 2.637V21h-3.325zm-7.992 0v-7.391C6.025 10.272 8.426 8 11.333 8l.674.006v2.806c-1.636 0-2.657 1.02-2.657 2.637V21H6.025z" />
                    </svg>
                    <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                      {testimonials[activeIndex].content}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="relative w-16 h-16 mr-4 rounded-full overflow-hidden ring-4 ring-white shadow-md">
                      <Image 
                        src={testimonials[activeIndex].image} 
                        alt={testimonials[activeIndex].author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-lg">{testimonials[activeIndex].author}</p>
                      <p className="text-gray-600">{testimonials[activeIndex].role}, {testimonials[activeIndex].company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between items-center px-4 z-10">
            <button 
              onClick={prevTestimonial} 
              className="bg-white/80 backdrop-blur-sm text-gray-700 rounded-full p-3 shadow-md hover:bg-white transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextTestimonial}
              className="bg-white/80 backdrop-blur-sm text-gray-700 rounded-full p-3 shadow-md hover:bg-white transition-all duration-200"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                onClick={() => {
                  setDirection(i > activeIndex ? 'right' : 'left')
                  setActiveIndex(i)
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'w-8 bg-blue-500' : 'w-2.5 bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Company Logos */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-sm text-gray-600 mb-8">
            Trusted by innovative companies worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {companyLogos.map((company, index) => (
              <motion.div 
                key={index} 
                className="flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors duration-300"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                {company.logo ? (
                  <Image 
                    src={company.logo} 
                    alt={company.name}
                    width={28}
                    height={28}
                    className="h-8 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                    unoptimized
                  />
                ) : (
                  <span className="text-lg font-medium">{company.text}</span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 