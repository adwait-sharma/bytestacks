import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

interface FaqItem {
  question: string
  answer: string
}

export function FaqSection() {
  const faqs: FaqItem[] = [
    {
      question: "How long does a typical project take to complete?",
      answer: "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a full-featured SaaS application could take 3-6 months. During our initial consultation, we'll provide a detailed timeline specific to your project requirements."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in modern web technologies including React, Next.js, TypeScript, and Node.js. For AI solutions, we work with TensorFlow, PyTorch, and OpenAI's APIs. Our team also has expertise in cloud platforms like AWS, Google Cloud, and Azure."
    },
    {
      question: "How do you handle project pricing?",
      answer: "We offer flexible pricing models including fixed-price quotes for well-defined projects and time-and-materials billing for projects with evolving requirements. We provide transparent estimates upfront and regular updates on budget throughout the development process."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Yes, we offer comprehensive maintenance and support packages to ensure your application remains secure, up-to-date, and performing optimally. Our support plans include regular updates, security patches, performance monitoring, and technical support."
    },
    {
      question: "Can you help with an existing project?",
      answer: "Absolutely! We frequently help clients improve, scale, or maintain existing applications. Our team can audit your current codebase, identify areas for improvement, and implement necessary changes to meet your business objectives."
    }
  ]

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find answers to common questions about our services and process
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="mb-12">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-lg font-medium text-left py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button className="bg-black text-white hover:bg-gray-800">
              Contact Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 