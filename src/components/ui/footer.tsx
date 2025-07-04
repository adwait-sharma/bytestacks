'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

interface FooterLink {
  title: string
  href: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

export function Footer() {
  const footerSections: FooterSection[] = [
    {
      title: "Solutions",
      links: [
        { title: "AI & Machine Learning", href: "#" },
        { title: "Custom SaaS Development", href: "#" },
        { title: "Next.js Web Applications", href: "#" },
        { title: "E-commerce Platforms", href: "#" },
        { title: "Data Analytics", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { title: "Our Story", href: "#" },
        { title: "Leadership Team", href: "#" },
        { title: "Careers", href: "#" },
        { title: "Case Studies", href: "#" },
        { title: "News & Insights", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { title: "Developer Docs", href: "#" },
        { title: "Technology Stack", href: "#" },
        { title: "Project Methodology", href: "#" },
        { title: "Free Consultation", href: "#" },
        { title: "Support Center", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { title: "Privacy Policy", href: "#" },
        { title: "Terms of Service", href: "#" },
        { title: "Security Practices", href: "#" },
        { title: "Compliance", href: "#" }
      ]
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
    <footer className="w-full bg-gray-50 py-16">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Company info */}
          <motion.div 
            className="max-w-xs"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-black text-white h-8 w-8 flex items-center justify-center rounded-md font-bold">B</div>
              <span className="font-semibold text-black">ByteStacks</span>
            </div>
            <p className="text-gray-600 mb-6 text-sm">
              Empowering businesses with cutting-edge digital solutions that drive innovation, efficiency, and sustainable growth in today's rapidly evolving tech landscape.
            </p>
            <Button className="bg-black text-white hover:bg-gray-800 transition-all duration-300">
              Book a Strategy Call
            </Button>
          </motion.div>

          {/* Links */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {footerSections.map((section) => (
              <motion.div key={section.title} variants={itemAnimation}>
                <h3 className="font-semibold mb-4 text-sm">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <Link 
                        href={link.href} 
                        className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            className="text-gray-600 text-sm mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            © 2024 ByteStacks Inc. All rights reserved. Crafted with precision.
          </motion.p>
          <motion.div 
            className="flex space-x-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Social media icons */}
            {['Twitter', 'LinkedIn', 'GitHub', 'Instagram'].map((social, index) => (
              <Link key={social} href="#" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
                <span className="sr-only">{social}</span>
                <div className="w-5 h-5 bg-gray-400 rounded-full hover:bg-gray-700 transition-colors duration-200"></div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
} 