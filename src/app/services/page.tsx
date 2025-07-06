import { Metadata } from 'next'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services | ByteStacks',
  description: 'Our range of technology services and solutions',
}

interface ServiceFeature {
  title: string
  description: string
  icon: React.ReactNode
}

interface ServiceDetails {
  title: string
  description: string
  image: string
  features: ServiceFeature[]
  caseStudies: string[]
}

export default function ServicesPage() {
  const services: Record<string, ServiceDetails> = {
    "web-development": {
      title: "Web Development",
      description: "From responsive websites to complex web applications, we craft scalable solutions that deliver exceptional user experiences across all devices.",
      image: "/services/web-apps.webp",
      features: [
        {
          title: "Frontend Excellence",
          description: "Pixel-perfect interfaces with React, Next.js and modern CSS frameworks",
          icon: <Check className="h-4 w-4" />
        },
        {
          title: "Backend Architecture",
          description: "Scalable API development with Node.js, GraphQL and microservices",
          icon: <Check className="h-4 w-4" />
        },
        {
          title: "Performance Optimization",
          description: "Lightning-fast load times with advanced caching and code-splitting",
          icon: <Check className="h-4 w-4" />
        }
      ],
      caseStudies: ["E-commerce Platform", "SaaS Dashboard"]
    },
    "ai-solutions": {
      title: "AI Solutions",
      description: "Harness the power of artificial intelligence to automate processes, extract insights from data, and create intelligent user experiences.",
      image: "/services/ai-solutions.webp",
      features: [
        {
          title: "Machine Learning",
          description: "Custom ML models trained on your business data for predictive analytics",
          icon: <Sparkles className="h-4 w-4" />
        },
        {
          title: "Natural Language Processing",
          description: "Intelligent chatbots and content generation with advanced NLP",
          icon: <Sparkles className="h-4 w-4" />
        },
        {
          title: "Computer Vision",
          description: "Image recognition and processing for automated visual analysis",
          icon: <Sparkles className="h-4 w-4" />
        }
      ],
      caseStudies: ["Predictive Analytics Tool", "AI Content Generator"]
    },
    "cloud-infrastructure": {
      title: "Cloud Infrastructure",
      description: "Build resilient, secure, and scalable cloud infrastructure that grows with your business and optimizes operational costs.",
      image: "/services/cloud-infra.webp",
      features: [
        {
          title: "Cloud Migration",
          description: "Seamless transition to AWS, Azure, or Google Cloud with zero downtime",
          icon: <Check className="h-4 w-4" />
        },
        {
          title: "DevOps Automation",
          description: "CI/CD pipelines and infrastructure as code for reliable deployments",
          icon: <Check className="h-4 w-4" />
        },
        {
          title: "Security & Compliance",
          description: "Enterprise-grade security measures and regulatory compliance",
          icon: <Check className="h-4 w-4" />
        }
      ],
      caseStudies: ["Enterprise Cloud Migration", "DevOps Pipeline Automation"]
    }
  }

  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 py-20">
        <div className="absolute inset-0 bg-grid-white/5" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-400/30 to-transparent" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="mb-6 text-sm font-medium border-slate-700 bg-slate-800/60 text-slate-300 backdrop-blur-sm">
              Services
            </Badge>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
              Transforming ideas into <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">powerful solutions</span>
            </h1>
            <p className="mx-auto mb-8 max-w-lg text-slate-300 md:text-xl">
              We offer end-to-end services from concept to deployment, helping businesses achieve their digital transformation goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <Tabs defaultValue="web-development" className="w-full">
            <TabsList className="mx-auto mb-12 grid w-full max-w-xl grid-cols-3 gap-4 bg-transparent">
              {Object.keys(services).map((key) => (
                <TabsTrigger 
                  key={key} 
                  value={key}
                  className="data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-slate-900 py-3 px-4"
                >
                  {services[key].title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {Object.keys(services).map((key) => (
              <TabsContent key={key} value={key} className="rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="grid md:grid-cols-2 gap-8 p-6">
                  <div>
                    <div className="mb-8">
                      <h2 className="mb-3 text-3xl font-bold text-slate-900">{services[key].title}</h2>
                      <p className="text-slate-600">{services[key].description}</p>
                    </div>
                    
                    <ul className="mb-8 space-y-4">
                      {services[key].features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="flex-shrink-0 rounded-full bg-blue-100 p-1 text-blue-600">
                            {feature.icon}
                          </div>
                          <div>
                            <h3 className="font-medium text-slate-900">{feature.title}</h3>
                            <p className="text-sm text-slate-500">{feature.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-3">
                      {services[key].caseStudies.map((study, index) => (
                        <Badge key={index} variant="outline" className="bg-slate-100 py-1 px-2">
                          {study}
                        </Badge>
                      ))}
                    </div>
                    
                    <Link href={`/services/${key}`} className="mt-6 inline-flex items-center gap-1 text-blue-600 hover:text-blue-700">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  
                  <div className="relative overflow-hidden rounded-xl">
                    <div className="aspect-video w-full">
                      <Image 
                        src={services[key].image} 
                        alt={services[key].title} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-700">Our Process</Badge>
            <h2 className="mb-4 text-3xl font-bold text-slate-900">How We Deliver Excellence</h2>
            <p className="text-slate-600">
              Our proven methodology ensures consistent results and transparency at every stage
            </p>
          </div>
          
          <div className="grid gap-12 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We dive deep to understand your business goals, target audience, and technical requirements."
              },
              {
                step: "02",
                title: "Strategy",
                description: "Our team develops a comprehensive roadmap outlining the optimal approach to achieve your objectives."
              },
              {
                step: "03",
                title: "Execution",
                description: "Using agile methodology, we build, test, and refine your solution with regular updates and demos."
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "We ensure a smooth deployment and provide ongoing maintenance to keep everything running perfectly."
              }
            ].map((item, index) => (
              <Card key={index} className="relative border-none shadow-none">
                <CardHeader className="pb-2">
                  <span className="text-3xl font-bold text-blue-100">{item.step}</span>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
                {index < 3 && (
                  <div className="absolute right-0 top-12 hidden h-0.5 w-1/3 bg-blue-100 lg:block"></div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 