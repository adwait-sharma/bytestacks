'use client'

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
  const testimonials: Testimonial[] = [
    {
      id: 1,
      author: "Mark Wilson",
      role: "CTO",
      company: "TechCorp",
      content: "ByteStacks transformed our digital infrastructure with their AI solutions. We've reduced development time by 40% while doubling the quality of our output.",
      color: "bg-blue-100 text-blue-800",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: 2,
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "Innovate Inc",
      content: "The e-commerce platform ByteStacks built for us led to a 217% increase in conversions and a significant drop in cart abandonment. Their attention to UX details is remarkable.",
      color: "bg-pink-100 text-pink-800",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: 3,
      author: "David Chen",
      role: "Founder",
      company: "NextLevel",
      content: "From concept to launch in just 12 weeks, ByteStacks delivered a SaaS platform that now serves over 10,000 businesses. Their technical prowess is matched by their business acumen.",
      color: "bg-purple-100 text-purple-800",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: 4,
      author: "Emma Rodriguez",
      role: "Product Manager",
      company: "GrowthHub",
      content: "The team at ByteStacks doesn't just execute tasks – they become strategic partners. Their insights helped us pivot our product strategy and capture an entirely new market segment.",
      color: "bg-green-100 text-green-800",
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

  const containerAnimation: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemAnimation: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5 
      } 
    }
  }

  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 mx-auto">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-3">Client Success Stories</h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Our clients' achievements speak volumes about our partnership and the quality of our work
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              variants={itemAnimation}
              className={`${testimonial.color} rounded-xl p-6 flex flex-col justify-between h-full hover:shadow-md transition-all duration-300`}
            >
              <p className="font-medium mb-8 leading-relaxed">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.author}</p>
                  <p className="text-xs opacity-80">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {companyLogos.map((company, index) => (
              <motion.div 
                key={index} 
                className="flex items-center justify-center text-gray-400"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {company.logo ? (
                  <Image 
                    src={company.logo} 
                    alt={company.name}
                    width={24}
                    height={24}
                    className="h-6 w-auto opacity-60 grayscale"
                    unoptimized
                  />
                ) : (
                  <span className="text-sm font-medium">{company.text}</span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 