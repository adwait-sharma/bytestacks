import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navigation() {
  return (
    <nav className="flex items-center justify-between py-4 w-full">
      <div className="flex items-center gap-2">
        <div className="bg-black text-white h-8 w-8 flex items-center justify-center rounded-md font-bold">B</div>
        <span className="font-semibold text-gray-900">ByteStacks</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm">
        <Link href="#" className="text-gray-600 hover:text-black transition-colors">Work</Link>
        <Link href="#" className="text-gray-600 hover:text-black transition-colors">Services</Link>
        <Link href="#" className="text-gray-600 hover:text-black transition-colors">Pricing</Link>
        <Link href="#" className="text-gray-600 hover:text-black transition-colors">Contact</Link>
      </div>
      <Button variant="outline" className="text-xs border-gray-300 text-gray-700 hover:bg-gray-100">
        Book a call
      </Button>
    </nav>
  )
} 