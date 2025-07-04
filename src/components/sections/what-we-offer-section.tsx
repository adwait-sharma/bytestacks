'use client'

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface PortfolioItem {
  id: number
  title: string
  description: string
  image: string
  category: string
}

export function WhatWeOfferSection() {
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "AI-Powered Content Creation",
      description: "Intelligent systems that generate high-quality content tailored to your brand voice",
      image: "/services/ai-solutions.webp",
      category: "AI Solutions"
    },
    {
      id: 2,
      title: "Enterprise Analytics Dashboard",
      description: "Real-time data visualization and business intelligence for informed decision making",
      image: "/services/cloud-infra.webp",
      category: "SaaS Development"
    },
    {
      id: 3,
      title: "Next.js E-commerce Platform",
      description: "Blazing-fast shopping experiences with seamless checkout flows",
      image: "/services/web-apps.webp",
      category: "Web Development"
    },
    {
      id: 4,
      title: "Secure FinTech Mobile App",
      description: "Bank-grade security with intuitive UX for financial services",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop",
      category: "App Development"
    },
    {
      id: 5,
      title: "Customer Behavior Analytics",
      description: "Deep insights into user patterns through machine learning algorithms",
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=500&fit=crop",
      category: "Data Science"
    },
    {
      id: 6,
      title: "Omnichannel Marketing Suite",
      description: "Cohesive brand presence across all digital touchpoints",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=500&fit=crop",
      category: "Digital Marketing"
    }
  ]

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
    <section className="w-full py-20 bg-white">
      <div className="container px-4 mx-auto">
        {/* Section title */}
        <motion.div 
          className="flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="bg-gray-100 text-gray-900 hover:bg-gray-100 mb-4">Our Expertise</Badge>
          <h2 className="text-4xl font-bold mb-3">Solutions That Drive Growth</h2>
          <p className="text-gray-600 max-w-lg">
            From concept to execution, we deliver custom digital solutions that help businesses scale, innovate, and thrive in competitive markets
          </p>
        </motion.div>

        {/* Portfolio grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolioItems.map((portfolioItem) => (
            <motion.div key={portfolioItem.id} variants={itemAnimation}>
              <Card className="group overflow-hidden border-0 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={portfolioItem.image}
                    alt={portfolioItem.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <Badge className="mb-2 bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors">{portfolioItem.category}</Badge>
                  <h3 className="text-lg font-semibold mb-1">{portfolioItem.title}</h3>
                  <p className="text-gray-600 text-sm">{portfolioItem.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View more button */}
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button 
            variant="outline" 
            className="border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300"
          >
            Explore All Solutions
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 