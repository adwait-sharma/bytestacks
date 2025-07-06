"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function FeaturesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const features: Feature[] = [
    {
      title: "AI-Powered Insights",
      description: "Leverage machine learning to get actionable insights from your data.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"></path>
          <path d="M12 16v-4"></path>
          <path d="M12 8h.01"></path>
        </svg>
      ),
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions designed for your specific business needs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"></path>
        </svg>
      ),
    },
    {
      title: "Web Applications",
      description: "Custom web applications with modern UI/UX design principles.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="3" rx="2"></rect>
          <line x1="8" x2="16" y1="21" y2="21"></line>
          <line x1="12" x2="12" y1="17" y2="21"></line>
        </svg>
      ),
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable business intelligence.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18"></path>
          <path d="m19 9-5 5-4-4-3 3"></path>
        </svg>
      ),
    },
    {
      title: "DevOps Excellence",
      description: "Streamline your development and operations with modern CI/CD pipelines.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a9 9 0 1 0 9 9"></path>
          <path d="M12 3v6"></path>
          <path d="m19 10-3-3 3-3"></path>
        </svg>
      ),
    },
    {
      title: "Mobile Development",
      description: "Cross-platform mobile applications that deliver exceptional user experiences.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
          <path d="M12 18h.01"></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Animated Header */}
        <div className="text-center mb-16">
          <motion.h1 
            className="text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Features
          </motion.h1>
          <motion.p 
            className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Discover the powerful features that drive digital transformation for our clients
          </motion.p>
        </div>

        {/* 3D Tilting Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" ref={containerRef}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.1 * index,
                duration: 0.5
              }}
              whileHover={{ 
                scale: 1.03,
                rotate: Math.random() > 0.5 ? 1 : -1,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="h-full p-6 border border-gray-200 bg-white/50 backdrop-blur-sm hover:shadow-lg hover:border-blue-100 transition-all duration-300">
                <div className="mb-4 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Animated Call-to-Action */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Ready to transform your business?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team of experts will help you implement these features to drive your business forward.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get in touch
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="outline" size="lg">
                View our work
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 