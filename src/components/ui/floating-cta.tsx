'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { MessageSquare } from 'lucide-react'

export default function FloatingCta() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 800) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className="group bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 h-14 rounded-full flex items-center gap-2 px-5">
            <MessageSquare size={18} className="transition-transform duration-300 group-hover:scale-110" />
            <span>Chat with us</span>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 