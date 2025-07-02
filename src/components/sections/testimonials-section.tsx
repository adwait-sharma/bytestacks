'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "ByteStacks transformed our operations with AI automation. ROI was visible within weeks.",
      name: "David Martinez",
      title: "CEO, FinTech Solutions",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    },
    {
      quote: "Their SaaS platform exceeded expectations. Scalable, secure, and beautifully designed.",
      name: "Sarah Chen",
      title: "Founder, HealthTech Startup",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c4cc?w=80&h=80&fit=crop&crop=face",
    },
    {
      quote: "Marketing campaigns drove 300% growth. Their data-driven approach is unmatched.",
      name: "Alex Thompson",
      title: "CMO, E-commerce Platform",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
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
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              <div className="mb-6 flex justify-center">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
              
              <blockquote className="text-gray-800 mb-4 leading-relaxed text-sm px-4">
                "{testimonial.quote}"
              </blockquote>
              
              <div>
                <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                <div className="text-xs text-gray-600">{testimonial.title}</div>
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
                  <img 
                    src={company.logo} 
                    alt={company.name}
                    className="h-6 w-auto opacity-60 grayscale"
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