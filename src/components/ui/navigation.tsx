'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ]

  return (
    <nav className="flex items-center justify-between py-4 w-full">
      <motion.div 
        className="flex items-center gap-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-black text-white h-8 w-8 flex items-center justify-center rounded-md font-bold">B</div>
        <span className="font-semibold text-gray-900">ByteStacks</span>
      </motion.div>
      
      {/* Desktop Navigation */}
      <motion.div 
        className="hidden md:flex items-center gap-8 text-sm"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, staggerChildren: 0.1, delayChildren: 0.2 }}
      >
        {navItems.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
          >
            <Link 
              href={item.href} 
              className="text-gray-600 hover:text-black transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Mobile menu button */}
      <div className="md:hidden flex items-center">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-800 hover:text-black focus:outline-none p-1"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden md:block"
      >
        <Button 
          variant="outline" 
          className="text-xs border-gray-300 text-gray-700 hover:bg-gray-100 transition-all duration-300"
        >
          Book a Discovery Call
        </Button>
      </motion.div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.div 
          className="absolute top-16 left-0 w-full bg-white shadow-lg rounded-b-lg z-50 md:hidden py-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-3 px-6">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                href={item.href} 
                className="text-gray-800 hover:text-black py-2 text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              className="mt-4 bg-black text-white hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Discovery Call
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  )
} 