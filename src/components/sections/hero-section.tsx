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
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="rounded-lg bg-black px-8 py-3 font-semibold text-white transition-colors hover:bg-gray-800">
                Start Your Project
              </button>
              <button className="rounded-lg border border-gray-300 px-8 py-3 font-semibold text-gray-900 transition-colors hover:border-gray-400">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
