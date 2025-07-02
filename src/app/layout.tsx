 import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ByteStacks - Build World Class Websites at Warp Speed',
  description: 'Access an ever-growing collection of premium, meticulously crafted templates and component packs. Save time and focus on what matters—building standout websites that captivate your audience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 