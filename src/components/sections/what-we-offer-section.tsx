import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface PortfolioItem {
  id: number
  title: string
  description: string
  image: string
  category: string
}

export function WhatWeOfferSection() {
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "AI-Powered Marketing Platform",
      description: "Generate images, text, and videos with AI",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop",
      category: "AI Solutions"
    },
    {
      id: 2,
      title: "Enterprise SaaS Dashboard",
      description: "Comprehensive analytics for business growth",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      category: "SaaS Development"
    },
    {
      id: 3,
      title: "E-commerce Website",
      description: "Modern, responsive shopping experience",
      image: "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=800&h=500&fit=crop",
      category: "Web Development"
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description: "Secure financial transactions on the go",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop",
      category: "App Development"
    },
    {
      id: 5,
      title: "Customer Analytics Platform",
      description: "Data-driven insights for better decisions",
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=500&fit=crop",
      category: "Analytics"
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      description: "Manage all your social accounts in one place",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=500&fit=crop",
      category: "Digital Marketing"
    }
  ]

  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 mx-auto">
        {/* Section title */}
        <div className="flex flex-col items-center text-center mb-16">
          <Badge className="bg-gray-100 text-gray-900 hover:bg-gray-100 mb-4">Our Projects</Badge>
          <h2 className="text-4xl font-bold mb-3">Featured Work</h2>
          <p className="text-gray-600 max-w-lg">
            We've helped companies of all sizes build digital products and scale their businesses
          </p>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden border-0 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <Badge className="mb-2 bg-gray-100 text-gray-800 hover:bg-gray-200">{item.category}</Badge>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* View more button */}
        <div className="flex justify-center mt-12">
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
            View all projects
          </Button>
        </div>
      </div>
    </section>
  )
} 