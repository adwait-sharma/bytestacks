import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface FooterLink {
  title: string
  href: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

export function Footer() {
  const footerSections: FooterSection[] = [
    {
      title: "Services",
      links: [
        { title: "AI Solutions", href: "#" },
        { title: "SaaS Development", href: "#" },
        { title: "Web Development", href: "#" },
        { title: "E-commerce", href: "#" },
        { title: "Digital Marketing", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { title: "About Us", href: "#" },
        { title: "Team", href: "#" },
        { title: "Careers", href: "#" },
        { title: "Blog", href: "#" },
        { title: "Contact", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { title: "Documentation", href: "#" },
        { title: "Pricing", href: "#" },
        { title: "Case Studies", href: "#" },
        { title: "FAQ", href: "#" },
        { title: "Support", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { title: "Privacy Policy", href: "#" },
        { title: "Terms of Service", href: "#" },
        { title: "Cookies", href: "#" },
        { title: "Licenses", href: "#" }
      ]
    }
  ]

  return (
    <footer className="w-full bg-gray-50 py-16">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Company info */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-black text-white h-8 w-8 flex items-center justify-center rounded-md font-bold">B</div>
              <span className="font-semibold text-black">ByteStacks</span>
            </div>
            <p className="text-gray-600 mb-6 text-sm">
              Building digital experiences that help businesses grow, scale, and transform in the modern world.
            </p>
            <Button className="bg-black text-white hover:bg-gray-800">
              Get in Touch
            </Button>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold mb-4 text-sm">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <Link 
                        href={link.href} 
                        className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © 2024 ByteStacks Inc. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {/* Social media icons */}
            {['twitter', 'linkedin', 'github', 'instagram'].map((social) => (
              <Link key={social} href="#" className="text-gray-600 hover:text-gray-900">
                <span className="sr-only">{social}</span>
                <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
} 