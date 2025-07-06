'use client'

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
  featured?: boolean
  size?: "large" | "small"
}

export function PortfolioSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  
  const projects: Project[] = [
    {
      id: 1,
      title: "AI Content Generator",
      description: "Generate marketing copy with machine learning",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
      category: "AI",
      featured: true,
      size: "large"
    },
    {
      id: 2,
      title: "Travel Booking Platform",
      description: "End-to-end flight and hotel booking system",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=500&fit=crop",
      category: "SaaS",
      size: "small"
    },
    {
      id: 3,
      title: "Restaurant Management System",
      description: "Streamline operations with integrated POS",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop",
      category: "Web App",
      size: "small"
    },
    {
      id: 4,
      title: "Healthcare Patient Portal",
      description: "Secure medical records and appointment scheduling",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=500&fit=crop",
      category: "Healthcare",
      featured: true,
      size: "large"
    },
    {
      id: 5,
      title: "E-learning Platform",
      description: "Interactive courses and student tracking",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop",
      category: "Education",
      size: "small"
    },
    {
      id: 6,
      title: "Real Estate Marketplace",
      description: "Property listings and agent connections",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
      category: "Real Estate",
      size: "small"
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
    <section className="relative w-full py-24 bg-gradient-to-b from-gray-50 to-white">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      
      <div className="container px-4 mx-auto">
        {/* Section header */}
        <motion.div 
          className="flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-600 hover:from-purple-100 hover:to-indigo-100 mb-4 px-4 py-1 border border-purple-200">Our Work</Badge>
          <h2 className="text-4xl font-bold mb-3">Client Success Stories</h2>
          <p className="text-gray-600 max-w-lg">
            We've helped businesses across industries achieve their digital transformation goals
          </p>
        </motion.div>

        {/* Featured project */}
        {projects.filter(p => p.featured).length > 0 && (
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {projects.filter(p => p.featured)[0] && (
              <div 
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-500"
                onMouseEnter={() => setHoveredId(projects.filter(p => p.featured)[0].id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative h-[500px] lg:h-[600px] w-full overflow-hidden">
                  <Image
                    src={projects.filter(p => p.featured)[0].image}
                    alt={projects.filter(p => p.featured)[0].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transition-transform duration-500">
                  <Badge className="inline-block mb-3 bg-purple-500/20 text-purple-100 backdrop-blur-sm border-0">Featured</Badge>
                  <Badge className="inline-block ml-2 mb-3 bg-white/20 text-white backdrop-blur-sm border-0">{projects.filter(p => p.featured)[0].category}</Badge>
                  <h3 className="text-3xl font-bold mb-4 transition-transform duration-300 group-hover:translate-y-0">
                    {projects.filter(p => p.featured)[0].title}
                  </h3>
                  <p className="text-gray-200 max-w-lg mb-6 transition-transform duration-300 group-hover:translate-y-0">
                    {projects.filter(p => p.featured)[0].description}
                  </p>
                  <Button className="bg-white text-black hover:bg-gray-100 transition-transform duration-300 group-hover:translate-y-0">
                    View Case Study
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Project grid - masonry layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-min gap-6"
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.filter(p => !p.featured).map((project) => (
            <motion.div 
              key={project.id} 
              className={`${project.size === 'large' ? 'lg:col-span-2' : ''}`}
              variants={itemAnimation}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="group h-full overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 transform-gpu hover:scale-[1.01]">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="secondary" className="bg-white/80 backdrop-blur-sm text-black hover:bg-white">
                      View Project
                    </Button>
                  </div>
                </div>
                <div className="p-6 bg-white backdrop-blur-sm relative z-10">
                  <Badge className={`mb-2 bg-gradient-to-r from-gray-50 to-${project.category === 'AI' ? 'blue' : project.category === 'SaaS' ? 'purple' : project.category === 'Web App' ? 'indigo' : 'green'}-50 text-gray-700 border border-gray-200`}>
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View more button */}
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button className="relative overflow-hidden bg-black text-white hover:bg-black transition-all duration-500 px-7 py-6 rounded-xl shadow-lg hover:shadow-xl group">
            <span className="relative z-10">View All Case Studies</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 