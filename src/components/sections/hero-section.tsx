'use client'

import { useState, useEffect } from 'react'

export function HeroSection() {
  const [warpText, setWarpText] = useState('warp speed')
  
  useEffect(() => {
    const interval = setInterval(() => {
      setWarpText(prev => {
        const words = ['warp speed', 'light speed', 'hyper speed', 'ultra speed']
        const currentIndex = words.indexOf(prev)
        return words[(currentIndex + 1) % words.length]
      })
    }, 2000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="relative z-50 w-full px-6 py-4 border-b border-gray-200">
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-black text-white font-bold text-sm">
              B
            </div>
            <span className="text-lg font-semibold text-black">ByteStacks</span>
            <span className="rounded bg-gray-200 px-2 py-1 text-xs text-gray-600">consultancy</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm">
            <a href="#" className="text-gray-600 hover:text-black transition-colors">AI Solutions</a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">SaaS Development</a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">Digital Marketing</a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">Portfolio</a>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Theme toggle */}
            <button className="p-2 text-gray-600 hover:text-black">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </button>
            {/* Search */}
            <button className="p-2 text-gray-600 hover:text-black">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            {/* Cart */}
            <button className="p-2 text-gray-600 hover:text-black">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293A1 1 0 005 16h12M7 13v4a2 2 0 002 2h6a2 2 0 002-2v-4m-8 6h8" />
              </svg>
            </button>
            <button className="text-gray-600 hover:text-black transition-colors text-sm">
              Contact
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
              Get Consultation
            </button>
          </div>
        </nav>
      </header>

      {/* Main Hero Section */}
      <main className="relative bg-white">
        <div className="relative px-6 py-24">
          <div className="mx-auto max-w-7xl text-center">
            {/* Main heading */}
            <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
              Transform your business with
              <br />
              AI solutions at{' '}
              <span className="relative inline-block">
                <span className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  {warpText}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent bg-clip-text text-transparent animate-shimmer opacity-30">
                  {warpText}
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mb-12 max-w-4xl text-lg leading-relaxed text-gray-600 md:text-xl">
              From AI-powered automation to end-to-end SaaS development and strategic digital marketing.
              <br />
              We help businesses scale with cutting-edge technology and data-driven growth strategies.
            </p>

            {/* CTA Buttons */}
            <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="rounded-lg bg-black px-8 py-3 font-semibold text-white transition-colors hover:bg-gray-800">
                Start Your Project
              </button>
              <button className="rounded-lg border border-gray-300 px-8 py-3 font-semibold text-gray-900 transition-colors hover:border-gray-400">
                View Our Work
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mb-16">
              <p className="mb-6 text-sm text-gray-500">
                Trusted by Startups and Enterprises across industries
              </p>
              
              {/* Overlapping avatars */}
              <div className="mb-8 flex justify-center">
                <div className="flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="User 1" className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm" />
                  <img src="https://images.unsplash.com/photo-1494790108755-2616b332c4cc?w=40&h=40&fit=crop&crop=face" alt="User 2" className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" alt="User 3" className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm" />
                  <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&h=40&fit=crop&crop=face" alt="User 4" className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm" />
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face" alt="User 5" className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm" />
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face" alt="User 6" className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm" />
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face" alt="User 7" className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm" />
                  <img src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=40&h=40&fit=crop&crop=face" alt="User 8" className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm" />
                </div>
              </div>

              {/* Service badges */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full">
                  <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span>AI Solutions</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full">
                  <svg className="w-4 h-4 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span>SaaS Development</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full">
                  <svg className="w-4 h-4 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span>Web Development</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full">
                  <svg className="w-4 h-4 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                  </svg>
                  <span>Digital Marketing</span>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="mb-16">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
                      alt="David Martinez"
                      className="h-12 w-12 rounded-full border-2 border-white object-cover shadow-lg"
                    />
                  </div>
                  <p className="mb-2 text-sm text-gray-600">
                    "ByteStacks transformed our operations with AI automation. ROI was visible within weeks."
                  </p>
                  <p className="text-xs font-semibold text-gray-900">David Martinez</p>
                  <p className="text-xs text-gray-500">CEO, FinTech Solutions</p>
                </div>
                
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face"
                      alt="Sarah Chen"
                      className="h-12 w-12 rounded-full border-2 border-white object-cover shadow-lg"
                    />
                  </div>
                  <p className="mb-2 text-sm text-gray-600">
                    "Their SaaS platform exceeded expectations. Scalable, secure, and beautifully designed."
                  </p>
                  <p className="text-xs font-semibold text-gray-900">Sarah Chen</p>
                  <p className="text-xs text-gray-500">Founder, HealthTech Startup</p>
                </div>
                
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
                      alt="Alex Thompson"
                      className="h-12 w-12 rounded-full border-2 border-white object-cover shadow-lg"
                    />
                  </div>
                  <p className="mb-2 text-sm text-gray-600">
                    "Marketing campaigns drove 300% growth. Their data-driven approach is unmatched."
                  </p>
                  <p className="text-xs font-semibold text-gray-900">Alex Thompson</p>
                  <p className="text-xs text-gray-500">CMO, E-commerce Platform</p>
                </div>
              </div>
            </div>

            {/* Company logos section */}
            <div className="border-t border-gray-200 pt-12">
              <p className="mb-8 text-sm text-gray-500">
                Used by companies and people working at
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
                {/* Google */}
                <div className="flex h-8 items-center">
                  <svg className="h-6 text-gray-600" viewBox="0 0 272 92" fill="currentColor">
                    <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
                    <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
                    <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
                    <path d="M225 3v65h-9.5V3h9.5z"/>
                    <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
                    <path d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"/>
                  </svg>
                </div>

                {/* Microsoft */}
                <div className="flex h-8 items-center">
                  <svg className="h-5 text-gray-600" viewBox="0 0 108 23" fill="currentColor">
                    <path d="M44.836 4.6v13.8h-2.4V7.583L38.119 18.4h-1.588L32.142 7.583V18.4h-2.4V4.6h2.4l4.8 12.358L41.736 4.6h3.1zm8.716 14.4c-1.312 0-2.487-.312-3.525-.937s-1.85-1.5-2.438-2.625-0.881-2.412-0.881-3.863c0-1.45 0.294-2.738 0.881-3.863s1.4-2 2.438-2.625 2.213-0.937 3.525-0.937c1.313 0 2.488 0.312 3.525 0.937s1.85 1.5 2.438 2.625 0.881 2.413 0.881 3.863c0 1.451-0.294 2.738-0.881 3.863s-1.4 2-2.438 2.625-2.212 0.937-3.525 0.937zm0-2.4c0.825 0 1.563-0.2 2.213-0.6s1.162-0.962 1.537-1.688 0.563-1.562 0.563-2.512-0.188-1.787-0.563-2.512-0.887-1.287-1.537-1.688-1.388-0.6-2.213-0.6-1.562 0.2-2.212 0.6-1.163 0.963-1.538 1.688-0.562 1.562-0.562 2.512 0.187 1.787 0.562 2.512 0.888 1.288 1.538 1.688 1.387 0.6 2.212 0.6z"/>
                    <path d="M10.8 0H0v10.8h10.8V0z" fill="#f25022"/>
                    <path d="M22.4 0H11.6v10.8h10.8V0z" fill="#7fba00"/>
                    <path d="M10.8 11.6H0V22.4h10.8V11.6z" fill="#00a4ef"/>
                    <path d="M22.4 11.6H11.6V22.4h10.8V11.6z" fill="#ffb900"/>
                  </svg>
                </div>

                <div className="text-gray-600 text-sm font-semibold">CISCO</div>
                <div className="text-gray-600 text-sm font-medium">zomato</div>
                <div className="text-gray-600 text-sm font-semibold">BETTER-AUTH</div>
                <div className="text-gray-600 text-sm font-medium">greatfrontend</div>
                <div className="text-gray-600 text-sm font-medium">strapi</div>
                <div className="text-gray-600 text-sm font-semibold">NEON</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
