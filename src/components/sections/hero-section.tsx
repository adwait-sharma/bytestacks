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
              A
            </div>
            <span className="text-lg font-semibold text-black">Aceternity UI</span>
            <span className="rounded bg-gray-200 px-2 py-1 text-xs text-gray-600">pro</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm">
            <a href="#" className="text-gray-600 hover:text-black transition-colors">Component Packs</a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">Templates</a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">Pricing</a>
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
              Login
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
              Get All-Access
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
              Build world class
              <br />
              websites at{' '}
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
              Access an ever-growing collection of premium, meticulously crafted templates and component packs.
              <br />
              Save time and focus on what matters—building standout websites that captivate your audience.
            </p>

            {/* CTA Buttons */}
            <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="rounded-lg bg-black px-8 py-3 font-semibold text-white transition-colors hover:bg-gray-800">
                Explore Collection
              </button>
              <button className="rounded-lg border border-gray-300 px-8 py-3 font-semibold text-gray-900 transition-colors hover:border-gray-400">
                Unlock Unlimited Access
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mb-16">
              <p className="mb-6 text-sm text-gray-500">
                Trusted by Founders and Entrepreneurs from all over the world
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

              {/* Tech badges */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 01-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 00-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 00-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 01-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 01-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 01.174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 004.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 002.466-2.163 11.944 11.944 0 002.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C19.746 4.347 16.538.561 12.189-.842A11.777 11.777 0 0011.572 0z"/>
                  </svg>
                  <span>Next.js</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full">
                  <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.015-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.099 2.21-.099zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.015 1.36-.034-.44.572-.895 1.095-1.36 1.563-.455-.468-.91-.991-1.36-1.563z"/>
                  </svg>
                  <span>React</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full">
                  <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                  </svg>
                  <span>Tailwind CSS</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full">
                  <svg className="w-4 h-4 text-purple-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                  </svg>
                  <span>Motion</span>
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
