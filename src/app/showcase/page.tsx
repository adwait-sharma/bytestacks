"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedCard } from "@/components/ui/animated-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ShowcasePage() {
  const [activeColor, setActiveColor] = useState<string>("blue");

  const colorOptions = [
    { name: "blue", value: "rgba(59, 130, 246, 0.3)", textClass: "text-blue-600" },
    { name: "purple", value: "rgba(147, 51, 234, 0.3)", textClass: "text-purple-600" },
    { name: "green", value: "rgba(16, 185, 129, 0.3)", textClass: "text-green-600" },
    { name: "orange", value: "rgba(249, 115, 22, 0.3)", textClass: "text-orange-600" },
    { name: "pink", value: "rgba(236, 72, 153, 0.3)", textClass: "text-pink-600" },
  ];

  const showcaseItems = [
    {
      title: "Product Features",
      description: "Showcase your product's key features with our animated cards for maximum visual impact.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="m15 9-6 6"></path>
          <path d="m9 9 6 6"></path>
        </svg>
      ),
    },
    {
      title: "Pricing Plans",
      description: "Present your pricing options in an engaging way that highlights the best value for your customers.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
          <path d="M12 18V6"></path>
        </svg>
      ),
    },
    {
      title: "Team Members",
      description: "Introduce your team members with interactive cards that create a memorable impression.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      title: "Testimonials",
      description: "Display customer testimonials in an eye-catching format that builds trust and credibility.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Animated Components Showcase
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Interactive UI elements to enhance your web experience
          </motion.p>
        </div>

        {/* Color Selection */}
        <motion.div 
          className="mb-12 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="text-center w-full mb-4">
            <span className="text-gray-700 font-medium">Select glow color:</span>
          </div>
          {colorOptions.map((color) => (
            <button
              key={color.name}
              onClick={() => setActiveColor(color.name)}
              className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                activeColor === color.name
                  ? `border-gray-800 scale-110 shadow-lg`
                  : "border-gray-200"
              }`}
              style={{ backgroundColor: color.value.replace("0.3", "0.5") }}
              aria-label={`Select ${color.name} color`}
            />
          ))}
        </motion.div>

        {/* Main Showcase Card */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <AnimatedCard 
              glowColor={colorOptions.find(c => c.name === activeColor)?.value || colorOptions[0].value}
              className="max-w-3xl mx-auto"
              hoverScale={1.02}
              rotationIntensity={15}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className={`text-2xl font-semibold ${colorOptions.find(c => c.name === activeColor)?.textClass}`}>
                    Interactive 3D Card
                  </h2>
                  <div className={`p-2 rounded-full ${activeColor === 'blue' ? 'bg-blue-100' : ''} ${activeColor === 'purple' ? 'bg-purple-100' : ''} ${activeColor === 'green' ? 'bg-green-100' : ''} ${activeColor === 'orange' ? 'bg-orange-100' : ''} ${activeColor === 'pink' ? 'bg-pink-100' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={colorOptions.find(c => c.name === activeColor)?.textClass}>
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  This interactive card component uses motion tracking to create a dynamic 3D effect. Hover over the card and move your mouse to see the effect in action. The card reacts to your mouse movements, creating a sense of depth and engagement.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className={`${activeColor === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : ''} ${activeColor === 'purple' ? 'bg-purple-600 hover:bg-purple-700' : ''} ${activeColor === 'green' ? 'bg-green-600 hover:bg-green-700' : ''} ${activeColor === 'orange' ? 'bg-orange-600 hover:bg-orange-700' : ''} ${activeColor === 'pink' ? 'bg-pink-600 hover:bg-pink-700' : ''} text-white`}>
                    Primary Action
                  </Button>
                  <Button variant="outline" className={`${activeColor === 'blue' ? 'text-blue-600 border-blue-200 hover:bg-blue-50' : ''} ${activeColor === 'purple' ? 'text-purple-600 border-purple-200 hover:bg-purple-50' : ''} ${activeColor === 'green' ? 'text-green-600 border-green-200 hover:bg-green-50' : ''} ${activeColor === 'orange' ? 'text-orange-600 border-orange-200 hover:bg-orange-50' : ''} ${activeColor === 'pink' ? 'text-pink-600 border-pink-200 hover:bg-pink-50' : ''}`}>
                    Secondary Action
                  </Button>
                </div>
              </div>
            </AnimatedCard>
          </motion.div>
        </div>

        {/* Use Cases Grid */}
        <h2 className="text-2xl font-semibold text-center mb-8">Ways to use animated cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            >
              <AnimatedCard 
                glowColor={colorOptions.find(c => c.name === activeColor)?.value || colorOptions[0].value}
                hoverScale={1.03}
                rotationIntensity={8}
              >
                <div className="p-6">
                  <div className={`p-2 rounded-full w-10 h-10 flex items-center justify-center mb-4 ${activeColor === 'blue' ? 'bg-blue-100 text-blue-600' : ''} ${activeColor === 'purple' ? 'bg-purple-100 text-purple-600' : ''} ${activeColor === 'green' ? 'bg-green-100 text-green-600' : ''} ${activeColor === 'orange' ? 'bg-orange-100 text-orange-600' : ''} ${activeColor === 'pink' ? 'bg-pink-100 text-pink-600' : ''}`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </AnimatedCard>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Ready to add these components to your project?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Integrate these interactive UI elements into your website for a more engaging user experience.
          </p>
          <Link href="/contact">
            <Button 
              size="lg"
              className={`${activeColor === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : ''} ${activeColor === 'purple' ? 'bg-purple-600 hover:bg-purple-700' : ''} ${activeColor === 'green' ? 'bg-green-600 hover:bg-green-700' : ''} ${activeColor === 'orange' ? 'bg-orange-600 hover:bg-orange-700' : ''} ${activeColor === 'pink' ? 'bg-pink-600 hover:bg-pink-700' : ''} text-white`}
            >
              Get in Touch
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 