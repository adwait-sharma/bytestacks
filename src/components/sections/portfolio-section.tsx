import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
}

export function PortfolioSection() {
  const projects: Project[] = [
    {
      id: 1,
      title: "AI Content Generator",
      description: "Generate marketing copy with machine learning",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
      category: "AI"
    },
    {
      id: 2,
      title: "Travel Booking Platform",
      description: "End-to-end flight and hotel booking system",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=500&fit=crop",
      category: "SaaS"
    },
    {
      id: 3,
      title: "Restaurant Management System",
      description: "Streamline operations with integrated POS",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop",
      category: "Web App"
    },
    {
      id: 4,
      title: "Healthcare Patient Portal",
      description: "Secure medical records and appointment scheduling",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=500&fit=crop",
      category: "Healthcare"
    },
    {
      id: 5,
      title: "E-learning Platform",
      description: "Interactive courses and student tracking",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop",
      category: "Education"
    },
    {
      id: 6,
      title: "Real Estate Marketplace",
      description: "Property listings and agent connections",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
      category: "Real Estate"
    }
  ]

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-bold mb-3">Client Success Stories</h2>
          <p className="text-gray-600 max-w-lg">
            We've helped businesses across industries achieve their digital transformation goals
          </p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="secondary" className="bg-white text-black hover:bg-gray-100">
                    View Project
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <Badge className="mb-2 bg-gray-100 text-gray-800 hover:bg-gray-200">{project.category}</Badge>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="flex justify-center mt-12">
          <Button className="bg-black text-white hover:bg-gray-800">
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  )
} 