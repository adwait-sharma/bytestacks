'use client'

import Image from "next/image"

interface Testimonial {
  id: number
  author: string
  role: string
  company: string
  content: string
  color: string
  image: string
}

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      author: "Mark Wilson",
      role: "CTO",
      company: "TechCorp",
      content: "Working with ByteStacks revolutionized our development workflow. Their AI solutions helped us save months of manual work.",
      color: "bg-blue-100 text-blue-800",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: 2,
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "Innovate Inc",
      content: "Our e-commerce site saw a 200% increase in conversions after ByteStacks redesigned our user experience.",
      color: "bg-pink-100 text-pink-800",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: 3,
      author: "David Chen",
      role: "Founder",
      company: "NextLevel",
      content: "ByteStacks helped us build a SaaS platform from scratch that now serves over 10,000 businesses worldwide.",
      color: "bg-purple-100 text-purple-800",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: 4,
      author: "Emma Rodriguez",
      role: "Product Manager",
      company: "GrowthHub",
      content: "Their team's technical expertise is matched only by their dedication to understanding our business needs.",
      color: "bg-green-100 text-green-800",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: 5,
      author: "James Smith",
      role: "COO",
      company: "FutureTech",
      content: "The custom CRM they developed streamlined our operations and improved customer satisfaction scores by 40%.",
      color: "bg-yellow-100 text-yellow-800",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: 6,
      author: "Lisa Chang",
      role: "CEO",
      company: "Automize",
      content: "ByteStacks delivered our mobile app ahead of schedule and under budget. Their attention to detail is unmatched.",
      color: "bg-red-100 text-red-800",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: 7,
      author: "Michael Brown",
      role: "VP of Sales",
      company: "SalesForce Pro",
      content: "Since implementing ByteStacks' AI-powered lead generation system, we've doubled our qualified prospects.",
      color: "bg-indigo-100 text-indigo-800",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: 8,
      author: "Olivia Taylor",
      role: "E-commerce Manager",
      company: "StyleShop",
      content: "Our Shopify store redesign by ByteStacks resulted in a 150% increase in average order value within 30 days.",
      color: "bg-cyan-100 text-cyan-800",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces"
    }
  ]

  const companyLogos = [
    { name: "Google", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
    { name: "Microsoft", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { name: "CISCO", text: "CISCO" },
    { name: "zomato", text: "zomato" },
    { name: "BETTER-AUTH", text: "BETTER-AUTH" },
    { name: "greatfrontend", text: "greatfrontend" },
    { name: "strapi", text: "strapi" },
    { name: "NEON", text: "NEON" },
  ]

  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-3">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Don't take our word for it – hear from some of our satisfied clients
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className={`${testimonial.color} rounded-xl p-6 flex flex-col justify-between h-full`}
            >
              <p className="font-medium mb-8">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.author}</p>
                  <p className="text-xs opacity-80">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Logos */}
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-8">
            Used by companies and people working at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {companyLogos.map((company, index) => (
              <div key={index} className="flex items-center justify-center text-gray-400">
                {company.logo ? (
                  <Image 
                    src={company.logo} 
                    alt={company.name}
                    width={24}
                    height={24}
                    className="h-6 w-auto opacity-60 grayscale"
                    unoptimized
                  />
                ) : (
                  <span className="text-sm font-medium">{company.text}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 