'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 80) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navItems = [
    { 
      name: "Services", 
      href: "/services",
      hasDropdown: true,
      dropdownItems: [
        { name: "Web Development", href: "/services/web" },
        { name: "AI Solutions", href: "/services/ai" },
        { name: "DevOps", href: "/services/devops" },
        { name: "Data Analytics", href: "/services/data" },
        { name: "Growth", href: "/services/growth" },
        { name: "SaaS Development", href: "/services/saas" },
      ]
    },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Team", href: "/team" },
    { name: "Blog", href: "/blog" },
    { name: "Features", href: "/features" },
    { name: "Showcase", href: "/showcase" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" }
  ]

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-white/90 backdrop-blur-md shadow-md' 
          : 'py-5 bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <div className={`
              bg-gradient-to-br from-blue-600 to-indigo-700
              text-white h-9 w-9 flex items-center justify-center rounded-md font-bold
              transition-all duration-300
              ${scrolled ? 'shadow-md' : ''}
            `}>
              B
            </div>
          </Link>
          <Link href="/">
            <span className={`
              font-semibold transition-all duration-300
              ${scrolled ? 'text-gray-900' : 'text-gray-900'}
            `}>
              ByteStacks
            </span>
          </Link>
        </motion.div>
        
        {/* Desktop Navigation */}
        <motion.div 
          className="hidden lg:flex items-center gap-6 text-sm"
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
              className="relative group"
            >
              {item.hasDropdown ? (
                <div>
                  <button
                    className={`
                      hover:text-blue-600 transition-colors relative inline-flex items-center gap-1
                      ${scrolled ? 'text-gray-700' : 'text-gray-800'}
                    `}
                    onClick={() => toggleDropdown(item.name)}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.name}
                    <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div 
                    className={`
                      absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-lg py-2 transition-all duration-200
                      ${activeDropdown === item.name ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}
                    `}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link 
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link 
                  href={item.href} 
                  className={`
                    hover:text-blue-600 transition-colors relative group
                    ${scrolled ? 'text-gray-700' : 'text-gray-800'}
                  `}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>
        
        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`
              hover:text-blue-600 focus:outline-none p-1 transition-colors duration-300
              ${scrolled ? 'text-gray-700' : 'text-gray-800'}
            `}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden lg:block"
        >
          <Link href="/contact">
            <Button 
              className={`
                group relative overflow-hidden transition-all duration-300 px-5 py-1.5 rounded-lg
                ${scrolled 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-md' 
                  : 'bg-black text-white hover:bg-gray-800'
                }
              `}
            >
              <span className="relative z-10 flex items-center gap-1">
                Book a Call
                <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg z-50 lg:hidden py-4 max-h-[80vh] overflow-y-auto"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-1 px-6">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-gray-100 py-2">
                  {item.hasDropdown ? (
                    <>
                      <button 
                        className="flex items-center justify-between w-full text-left text-gray-800 hover:text-blue-600 py-1 text-lg font-medium transition-colors"
                        onClick={() => toggleDropdown(item.name)}
                      >
                        {item.name}
                        <ChevronDown 
                          size={18} 
                          className={`transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} 
                        />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <div className="pl-4 mt-2 border-l-2 border-blue-100">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link 
                              key={dropdownItem.name}
                              href={dropdownItem.href} 
                              className="block text-gray-700 hover:text-blue-600 py-2 transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link 
                      href={item.href} 
                      className="text-gray-800 hover:text-blue-600 py-1 text-lg font-medium transition-colors block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link href="/contact" className="mt-4 block">
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-90"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book a Discovery Call
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
} 