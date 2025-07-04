'use client'

import { motion } from "framer-motion"
import { LogoCarousel } from "@/components/ui/logo-carousel"

export function PartnersSection() {
  return (
    <section className="w-full py-16 bg-white border-t border-gray-100">
      <div className="container px-4 mx-auto">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-1">Trusted by Innovative Companies</h3>
          <p className="text-gray-500 text-sm">
            We've partnered with forward-thinking organizations across industries
          </p>
        </motion.div>
        
        <LogoCarousel />
        
        <div className="mt-8 text-center">
          <motion.span 
            className="text-sm text-gray-500 inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Join 500+ companies accelerating their digital transformation
          </motion.span>
        </div>
      </div>
    </section>
  )
} 