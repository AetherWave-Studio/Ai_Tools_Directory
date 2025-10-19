import React, { useState, useRef } from 'react'
import { Sparkles, Zap, Brain, Wand2 } from 'lucide-react'
import { openToolLink } from '../utils/affiliateLinks'

const AetherWaveHero = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const toolsPerPage = 8
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const featuredTools = [
    {
      name: 'Claude',
      description: 'Advanced AI for complex reasoning',
      logo: '🤖',
      url: 'https://claude.ai',
      color: 'from-orange-500 to-amber-600',
      backgroundMedia: '/assets/claude-bg.mp4',
      mediaType: 'video'
    },
    {
      name: 'SUNO',
      description: 'AI music & song generation',
      logo: '🎵',
      url: 'https://suno.com/invite/@drewfroehlich',
      color: 'from-red-500 to-orange-600',
      backgroundMedia: '/assets/suno-bg.mp4',
      mediaType: 'video'
    },
    {
      name: 'ElevenLabs',
      description: 'AI voice synthesis & cloning',
      logo: '🎙️',
      url: 'https://try.elevenlabs.io/5nlkb0r3t02z',
      color: 'from-blue-500 to-cyan-600',
      backgroundMedia: '/assets/elevenlabs-bg.mp4',
      mediaType: 'video'
    },
    {
      name: 'SuperGrok',
      description: 'AI with visual reasoning',
      logo: '⚡',
      url: 'https://grok.x.ai',
      color: 'from-purple-600 to-blue-600',
      backgroundMedia: '/assets/supergrok-bg.mp4',
      mediaType: 'video'
    },
    {
      name: 'Canva',
      description: 'Graphic design & templates',
      logo: '🎨',
      url: 'https://canva.com',
      color: 'from-teal-500 to-purple-600',
      backgroundMedia: '/assets/canva-bg.mp4',
      mediaType: 'video'
    },
    {
      name: 'Adobe Photoshop',
      description: 'Professional photo editing',
      logo: '🖼️',
      url: 'https://adobe.com/products/photoshop',
      color: 'from-blue-600 to-cyan-700',
      backgroundMedia: '/assets/photoshop-bg.mp4',
      mediaType: 'video'
    },
    {
      name: 'Perplexity',
      description: 'AI-powered search engine',
      logo: '🔍',
      url: 'https://pplx.ai/drewfroehl30925',
      color: 'from-cyan-500 to-blue-600',
      backgroundMedia: '/assets/perplexity-bg.mp4',
      mediaType: 'video'
    },
    {
      name: 'ChatLLM',
      description: 'All LLMs in one platform',
      logo: '💡',
      url: 'https://chatllm.abacus.ai/RhLptmHbkJ',
      color: 'from-indigo-500 to-purple-600',
      backgroundMedia: 'assets/chatLLM.MP4',
      mediaType: 'video'
    },
    {
      name: 'Openart',
      description: 'AI art generator',
      logo: '🎨',
      url: 'https://openart.ai',
      color: 'from-pink-500 to-rose-600',
      backgroundMedia: '/assets/openart-bg.mp4',
      mediaType: 'video'
    },
    {
      name: 'Seedance',
      description: 'AI motion & animation',
      logo: '💃',
      url: 'https://seedance.ai',
      color: 'from-pink-500 to-purple-600',
      backgroundMedia: '/assets/seedance-bg.mp4',
      mediaType: 'video'
    },
    {
      name: 'ChatGPT',
      description: 'Conversational AI assistant',
      logo: '💬',
      url: 'https://chat.openai.com',
      color: 'from-green-500 to-emerald-600',
      backgroundMedia: '/assets/chatgpt-bg.mp4',
      mediaType: 'video'
    },
    {
      name: 'Adobe Firefly',
      description: 'Generative AI for creators',
      logo: '🔥',
      url: 'https://firefly.adobe.com',
      color: 'from-orange-500 to-amber-600',
      backgroundMedia: '/assets/firefly-bg.mp4',
      mediaType: 'video'
    },
    {
      name: 'Leonardo',
      description: 'AI art generation platform',
      logo: '🖌️',
      url: 'https://leonardo.ai',
      color: 'from-amber-500 to-yellow-600',
      backgroundMedia: '/assets/leonardo-bg.mp4',
      mediaType: 'video'
    },
    {
      name: 'OpenAI',
      description: 'ChatGPT & DALL-E platform',
      logo: '🌟',
      url: 'https://openai.com',
      color: 'from-emerald-500 to-teal-600',
      backgroundMedia: '/assets/openai-bg.mp4',
      mediaType: 'video'
    },
    {
      name: 'LemonSlice',
      description: 'AI design assistant',
      logo: '🍋',
      url: 'https://lemonslice.ai',
      color: 'from-yellow-400 to-lime-500',
      backgroundMedia: '/assets/lemonslice-bg.mp4',
      mediaType: 'video'
    },
    {
      name: 'CapCut',
      description: 'AI video editing',
      logo: '✂️',
      url: 'https://capcut.com',
      color: 'from-pink-600 to-purple-700',
      backgroundMedia: '/assets/capcut-bg.mp4',
      mediaType: 'video'
    },
    {
      name: 'Fal.ai',
      description: 'Fast AI model inference',
      logo: '⚡',
      url: 'https://fal.ai',
      color: 'from-blue-500 to-white',
      backgroundMedia: '/assets/falai-bg.mp4',
      mediaType: 'video'
    },
    {
      name: 'Pollo AI',
      description: 'AI video & animation',
      logo: '✨',
      url: 'https://pollo.ai',
      color: 'from-yellow-500 to-orange-600',
      backgroundMedia: '/assets/pollo-bg.mp4',
      mediaType: 'video'
    },
    {
      name: 'Gumroad',
      description: 'Creator commerce platform',
      logo: '🛍️',
      url: 'https://gumroad.com',
      color: 'from-pink-500 to-rose-600',
      backgroundMedia: '/assets/gumroad-bg.mp4',
      mediaType: 'video'
    },
    {
      name: 'Google AI Studio',
      description: 'Gemini API playground',
      logo: '🧪',
      url: 'https://ai.google.dev',
      color: 'from-blue-500 to-green-500',
      backgroundMedia: '',
      mediaType: 'video'
    },
    {
      name: 'Luma Pro',
      description: 'AI video generation',
      logo: '🎬',
      url: 'https://lumalabs.ai',
      color: 'from-purple-500 to-pink-600',
      backgroundMedia: '',
      mediaType: 'video'
    },
    {
      name: 'Hailuo AI',
      description: 'Cinematic AI video',
      logo: '🎥',
      url: 'https://hailuoai.video',
      color: 'from-red-500 to-orange-600',
      backgroundMedia: '',
      mediaType: 'video'
    },
    {
      name: 'Kling AI',
      description: 'Text-to-video generation',
      logo: '📹',
      url: 'https://klingai.com',
      color: 'from-cyan-500 to-blue-600',
      backgroundMedia: '',
      mediaType: 'video'
    }
  ]

  const totalPages = Math.ceil(featuredTools.length / toolsPerPage)
  const startIndex = currentPage * toolsPerPage
  const endIndex = startIndex + toolsPerPage
  const currentTools = featuredTools.slice(startIndex, endIndex)

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const swipeThreshold = 50
    const diff = touchStartX.current - touchEndX.current

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextPage()
      } else {
        prevPage()
      }
    }
  }

  return (
    <div className="relative overflow-hidden rounded-3xl mb-12 shadow-2xl">
      {/* Background with Midnight Violet gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2C003E] via-[#1a0028] to-[#0d0015]"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 animate-pulse"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative px-8 py-12 md:px-16 md:py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4 border border-white/20">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-white">Powered by AI Excellence</span>
          </div>
          
          <h1 className="mb-3 flex flex-wrap items-center justify-center gap-3">
            <span className="heading-hero bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AetherWave Studio
            </span>
            <span className="font-['Orbitron'] text-white font-bold text-3xl md:text-4xl lg:text-5xl">
              Tools We Use
            </span>
          </h1>
          
          <p className="body-enhanced text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We leverage cutting-edge AI technology to create exceptional digital experiences. 
            Here are the tools that power our creative workflow every day.
          </p>
        </div>

        {/* Featured Tools - Paginated Grid */}
        <div className="relative max-w-6xl mx-auto">
          {/* Page indicator */}
          <div className="absolute -top-6 right-0 text-xs text-gray-400 flex items-center gap-1">
            <span>Swipe to browse • Page {currentPage + 1} of {totalPages}</span>
            <Zap className="w-3 h-3" />
          </div>
          
          {/* Tools Grid Container with Swipe Support */}
          <div 
            className="relative touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Tools Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 select-none">
              {currentTools.map((tool, index) => (
                <div
                  key={tool.name}
                  className="group relative cursor-pointer perspective-1000 overflow-hidden rounded-2xl transition-all duration-500 hover:z-20 aspect-[3/4]"
                  onClick={() => openToolLink(tool.url)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Background Media Layer (Image or Video) */}
                  {tool.backgroundMedia && (
                    <div className="absolute inset-0 rounded-2xl overflow-hidden z-0">
                      {tool.mediaType === 'video' ? (
                        <video
                          key={tool.backgroundMedia}
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="auto"
                          className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                          style={{ backgroundColor: 'transparent' }}
                        >
                          <source src={tool.backgroundMedia} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <img
                          src={tool.backgroundMedia}
                          alt=""
                          className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                        />
                      )}
                      {/* Subtle dark overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/30"></div>
                    </div>
                  )}
                  
                  {/* Holographic background with iridescent gradient */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-cyan-500/20 opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Animated iridescent overlay - creates color shift effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/0 via-pink-400/30 to-cyan-400/0 group-hover:from-cyan-400/0 group-hover:via-purple-400/30 group-hover:to-pink-400/0 transition-all duration-700 ease-in-out"></div>
                  
                  {/* Prism light reflection effect */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000 ease-out"></div>
                  </div>
                  
                  {/* Holographic shimmer spots */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-pink-300/40 to-purple-300/40 rounded-full blur-xl group-hover:blur-2xl group-hover:scale-150 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-20 h-20 bg-gradient-to-br from-cyan-300/40 to-blue-300/40 rounded-full blur-xl group-hover:blur-2xl group-hover:scale-150 transition-all duration-500"></div>
                  
                  {/* Card base with border only - allows video to show through */}
                  <div className="absolute inset-0 rounded-2xl border border-white/30 group-hover:border-white/50 shadow-2xl group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-500 z-10"></div>
                  
                  {/* Content */}
                  <div className="relative p-5 group-hover:scale-105 transition-transform duration-500 z-20">
                    {/* Tool Logo/Icon with holographic glow */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]`}>
                      {tool.logo}
                    </div>

                    {/* Tool Info */}
                    <h3 className="text-lg font-bold text-white mb-2 drop-shadow-lg">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-gray-100 mb-3 drop-shadow-md">
                      {tool.description}
                    </p>
                    
                    {/* Arrow indicator with rainbow gradient */}
                    <div className="flex items-center text-transparent bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span>Explore</span>
                      <Zap className="w-3 h-3 ml-1 text-cyan-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Page Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentPage 
                    ? 'bg-gradient-to-r from-purple-400 to-pink-400 w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-3 text-gray-300">
            <Brain className="w-5 h-5 text-purple-400" />
            <span className="body-md">
              Discover more AI tools to supercharge your workflow
            </span>
            <Wand2 className="w-5 h-5 text-pink-400" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AetherWaveHero
