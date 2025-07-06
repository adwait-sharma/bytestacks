'use client'

import { useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface FaqItem {
  question: string
  answer: string
}

export function FaqSection() {
  const [searchQuery, setSearchQuery] = useState("")
  
  const faqs: FaqItem[] = [
    {
      question: "What's your typical project timeline and delivery process?",
      answer: "Our timelines are tailored to each project's scope and complexity. A typical web application takes 6-12 weeks from discovery to launch, while more complex AI solutions may require 3-6 months. We follow an agile methodology with two-week sprints, providing regular demos and updates throughout the development process to ensure transparency and alignment with your vision."
    },
    {
      question: "Which technologies and frameworks do you specialize in?",
      answer: "We're experts in modern web technologies including React, Next.js, TypeScript, and Node.js for frontend and backend development. For AI and ML projects, we work with TensorFlow, PyTorch, and various cloud AI services. Our infrastructure expertise spans AWS, Google Cloud, Azure, and containerization with Docker and Kubernetes. We select the optimal tech stack based on your specific business requirements and scalability needs."
    },
    {
      question: "How do you approach project pricing and billing?",
      answer: "We offer flexible engagement models including fixed-price quotes for well-defined projects and time-and-materials billing for initiatives with evolving requirements. For startups, we also offer hybrid models with reduced upfront costs. All our quotes include detailed breakdowns of deliverables, milestones, and payment schedules. We're transparent about costs and provide regular updates to ensure there are no surprises."
    },
    {
      question: "What kind of post-launch support do you provide?",
      answer: "We believe the launch is just the beginning of our partnership. We offer tiered support packages ranging from basic maintenance to comprehensive 24/7 coverage. All plans include security monitoring, performance optimization, bug fixes, and regular updates. For enterprise clients, we provide dedicated support teams with guaranteed response times and regular performance reviews to ensure your application continues to evolve with your business needs."
    },
    {
      question: "Can you help modernize or scale our existing application?",
      answer: "Absolutely! We specialize in modernizing legacy systems and scaling applications for growth. Our process begins with a comprehensive technical audit to identify bottlenecks, security vulnerabilities, and improvement opportunities. We then develop a strategic roadmap that allows for incremental upgrades without disrupting your operations. Whether you need cloud migration, performance optimization, or feature expansion, we can help transform your existing application into a modern, scalable solution."
    },
    {
      question: "How do you ensure the security and compliance of your solutions?",
      answer: "Security is integrated into every phase of our development process. We implement industry best practices including secure code reviews, automated vulnerability scanning, and penetration testing. For applications handling sensitive data, we ensure compliance with relevant regulations (GDPR, HIPAA, SOC2, etc.) and can provide documentation to support your compliance requirements. Additionally, we offer security training for your team and ongoing monitoring to protect against emerging threats."
    }
  ]

  const filteredFaqs = searchQuery 
    ? faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqs

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section className="relative w-full py-24 bg-gradient-to-t from-white to-gray-50">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="inline-block mb-3 px-4 py-1 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-sm font-medium">
                Frequently Asked Questions
              </span>
            </motion.div>
            <h2 className="text-4xl font-bold mb-3">Questions You Might Have</h2>
            <p className="text-gray-600">
              Everything you need to know about our services and methodology
            </p>
          </motion.div>
          
          {/* Search bar */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all duration-200"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            variants={containerAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-12"
          >
            <Accordion type="single" collapsible className="mb-12">
              {filteredFaqs.length > 0 ? filteredFaqs.map((faq, index) => (
                <motion.div key={index} variants={itemAnimation}>
                  <AccordionItem value={`item-${index}`} className="border-b border-gray-200 overflow-hidden">
                    <AccordionTrigger className="flex items-center justify-between text-lg font-medium text-left py-5 hover:no-underline group">
                      <span>{faq.question}</span>
                      <div className="relative ml-2 flex-shrink-0 h-6 w-6 flex items-center justify-center">
                        <div className="absolute h-0.5 w-4 bg-blue-500 group-data-[state=open]:rotate-45 transition-transform duration-300"></div>
                        <div className="absolute h-0.5 w-4 bg-blue-500 rotate-90 group-data-[state=open]:rotate-[-45deg] transition-transform duration-300"></div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-5 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
                      <div className="pl-0 pt-2 transition-all duration-300">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              )) : (
                <div className="text-center py-10">
                  <p className="text-gray-500">No questions match your search. Try a different term.</p>
                </div>
              )}
            </Accordion>
          </motion.div>

          {/* Contact CTA */}
          <motion.div 
            className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.01 }}
          >
            <h3 className="text-xl font-bold mb-2">Have more specific questions?</h3>
            <p className="text-gray-600 mb-6">Our team is ready to provide detailed answers tailored to your business needs</p>
            <Button className="group relative overflow-hidden bg-blue-600 text-white hover:bg-blue-600 transition-all duration-500 px-6 py-3 rounded-xl">
              <span className="relative z-10">Schedule a Free Consultation</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 