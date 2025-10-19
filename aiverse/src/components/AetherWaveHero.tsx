import React from 'react'
import { Sparkles, Zap, Brain, Wand2 } from 'lucide-react'
import { openToolLink } from '../utils/affiliateLinks'

const AetherWaveHero = () => {
  const featuredTools = [
    {
      name: 'Claude',
      description: 'Advanced AI for complex reasoning',
      logo: '🤖',
      url: 'https://claude.ai',
      color: 'from-orange-500 to-amber-600'
    },
    {
      name: 'Midjourney',
      description: 'AI image generation',
      logo: '🎨',
      url: 'https://midjourney.com',
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'ElevenLabs',
      description: 'AI voice synthesis',
      logo: '🎙️',
      url: 'https://elevenlabs.io',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'ChatGPT',
      description: 'Conversational AI assistant',
      logo: '💬',
      url: 'https://chat.openai.com',
      color: 'from-green-500 to-emerald-600'
    }
  ]

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
      <div className="relative px-8 py-16 md:px-16 md:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-white">Powered by AI Excellence</span>
          </div>
          
          <h1 className="heading-hero text-white mb-4">
            AI Tools We Trust at{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AetherWave Studio
            </span>
          </h1>
          
          <p className="body-enhanced text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We leverage cutting-edge AI technology to create exceptional digital experiences. 
            Here are the tools that power our creative workflow every day.
          </p>
        </div>

        {/* Featured Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {featuredTools.map((tool, index) => (
            <div
              key={tool.name}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              onClick={() => openToolLink(tool.url)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Tool Logo/Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {tool.logo}
              </div>

              {/* Tool Info */}
              <h3 className="heading-md text-white mb-2 font-bold">
                {tool.name}
              </h3>
              <p className="body-sm text-gray-300 mb-4">
                {tool.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-blue-500/10 rounded-2xl transition-all duration-300"></div>
              
              {/* Arrow indicator */}
              <div className="flex items-center text-cyan-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Explore</span>
                <Zap className="w-4 h-4 ml-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
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
