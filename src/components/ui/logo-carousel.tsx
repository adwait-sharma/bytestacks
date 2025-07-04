'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface Company {
  name: string
  logo: string
}

interface LogoCarouselProps {
  speed?: number
  className?: string
}

export function LogoCarousel({ speed = 25, className = '' }: LogoCarouselProps) {
  // Using company placeholder logos
  const companies: Company[] = [
    { name: "Google", logo: "/logos/google.svg" },
    { name: "Microsoft", logo: "/logos/microsoft.svg" },
    { name: "Amazon", logo: "/logos/amazon.svg" },
    { name: "Apple", logo: "/logos/apple.svg" },
    { name: "Meta", logo: "/logos/meta.svg" },
    { name: "IBM", logo: "/logos/ibm.svg" },
    { name: "Tesla", logo: "/logos/tesla.svg" },
    { name: "Netflix", logo: "/logos/netflix.svg" },
    { name: "Adobe", logo: "/logos/adobe.svg" },
    { name: "Slack", logo: "/logos/slack.svg" },
    { name: "Spotify", logo: "/logos/spotify.svg" },
    { name: "Airbnb", logo: "/logos/airbnb.svg" },
  ]
  
  // Duplicate the array to ensure seamless looping
  const duplicatedCompanies = [...companies, ...companies]
  
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div className="py-10 flex items-center">
        <motion.div 
          className="flex gap-12 items-center"
          animate={{
            x: [0, -100 * companies.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: companies.length * (100 / speed),
              ease: "linear",
            }
          }}
        >
          {duplicatedCompanies.map((company, index) => (
            <div 
              key={`${company.name}-${index}`} 
              className="flex items-center justify-center min-w-[120px] h-16 px-4"
            >
              <div className="relative w-full h-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                <Image 
                  src={company.logo} 
                  alt={`${company.name} logo`}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
} 