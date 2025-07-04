'use client'

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
    <section className="w-full py-20 bg-gray-50">
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
            <h2 className="text-3xl font-bold mb-3">Questions You Might Have</h2>
            <p className="text-gray-600">
              Everything you need to know about our services and methodology
            </p>
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
              {faqs.map((faq, index) => (
                <motion.div key={index} variants={itemAnimation}>
                  <AccordionItem value={`item-${index}`} className="border-b border-gray-200">
                    <AccordionTrigger className="text-lg font-medium text-left py-5 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          {/* CTA */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-gray-600 mb-4">Have more specific questions about your project?</p>
            <Button className="bg-black text-white hover:bg-gray-800 transition-all duration-300">
              Schedule a Free Consultation
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 