"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface PricingTier {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  buttonVariant: "default" | "outline" | "secondary";
}

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  const pricingTiers: PricingTier[] = [
    {
      name: "Starter",
      description: "Perfect for small businesses just getting started.",
      monthlyPrice: 99,
      yearlyPrice: 79,
      features: [
        "Up to 5 team members",
        "Basic web development",
        "Standard support",
        "1 revision round",
        "Basic SEO optimization"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses with expanding needs.",
      monthlyPrice: 249,
      yearlyPrice: 199,
      features: [
        "Up to 15 team members",
        "Advanced web development",
        "Priority support",
        "3 revision rounds",
        "Complete SEO package",
        "Basic AI integration",
        "Performance monitoring"
      ],
      isPopular: true,
      buttonText: "Go Professional",
      buttonVariant: "default"
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex requirements.",
      monthlyPrice: 499,
      yearlyPrice: 399,
      features: [
        "Unlimited team members",
        "Custom web development",
        "24/7 dedicated support",
        "Unlimited revisions",
        "Advanced SEO & marketing",
        "Full AI integration",
        "Real-time analytics",
        "Custom infrastructure",
        "Dedicated account manager"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "secondary"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50 py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-violet-600 to-purple-700 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Choose the perfect plan for your business needs
          </motion.p>
          
          {/* Pricing Toggle */}
          <motion.div 
            className="flex items-center justify-center mt-8 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <span className={`mr-3 text-lg ${!isYearly ? "font-medium text-blue-600" : "text-gray-500"}`}>
              Monthly
            </span>
            <div 
              className="relative cursor-pointer w-16 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1"
              onClick={() => setIsYearly(!isYearly)}
            >
              <motion.div 
                className="w-6 h-6 rounded-full bg-white shadow-sm"
                animate={{ x: isYearly ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            </div>
            <span className={`ml-3 text-lg ${isYearly ? "font-medium text-blue-600" : "text-gray-500"}`}>
              Yearly <Badge variant="outline" className="ml-1 bg-green-50 text-green-600 border-green-200">Save 20%</Badge>
            </span>
          </motion.div>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.2 * index,
                duration: 0.5
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="relative"
            >
              {tier.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 text-sm font-medium rounded-full">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <Card className={`relative h-full p-6 flex flex-col overflow-hidden border ${tier.isPopular ? 'border-blue-200 shadow-lg' : 'border-gray-200'}`}>
                {tier.isPopular && (
                  <div className="absolute top-0 right-0 -mt-5 -mr-5 w-24 h-24 rotate-45 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 rounded-full" />
                )}
                
                <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                <p className="text-gray-600 mb-4">{tier.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">
                      ${isYearly ? tier.yearlyPrice : tier.monthlyPrice}
                    </span>
                    <span className="text-gray-500 ml-2">
                      /month {isYearly && "(billed annually)"}
                    </span>
                  </div>
                  
                  {isYearly && (
                    <motion.div 
                      className="text-green-600 text-sm mt-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      key="yearly-savings"
                    >
                      Save ${(tier.monthlyPrice - tier.yearlyPrice) * 12} per year
                    </motion.div>
                  )}
                </div>
                
                <div className="flex-grow">
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link href="/contact" className="mt-auto">
                  <Button 
                    variant={tier.buttonVariant} 
                    className="w-full font-medium"
                    size="lg"
                  >
                    {tier.buttonText}
                  </Button>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* FAQ Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-2">Have questions about our pricing?</h2>
          <p className="text-gray-600 mb-6">Our team is ready to help you choose the right plan for your needs.</p>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Contact our sales team
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 