import React from 'react'
import { Sparkles, Music, Video, Image, ArrowRight } from 'lucide-react'

function AetherWaveBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-900 to-pink-900 p-6 md:p-8 mb-8 border border-purple-700/30">
      {/* Glow effects */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="h-5 w-5 text-pink-400" />
            <span className="text-xs font-semibold text-pink-300 uppercase tracking-wider">
              From the makers of this directory
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            Create with AI — Try AetherWave Studio
          </h3>
          <p className="text-gray-300 text-sm md:text-base mb-4 max-w-lg">
            Generate music, videos, and images with 50+ AI models. The all-in-one creative platform for artists and creators.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-800/50 text-purple-200 text-xs font-medium border border-purple-600/30">
              <Music className="h-3.5 w-3.5" /> AI Music Studio
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-800/50 text-pink-200 text-xs font-medium border border-pink-600/30">
              <Video className="h-3.5 w-3.5" /> Video Generation
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-800/50 text-cyan-200 text-xs font-medium border border-cyan-600/30">
              <Image className="h-3.5 w-3.5" /> Image Creation
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://aetherwavestudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold text-sm hover:from-pink-400 hover:to-purple-500 transition-all shadow-lg shadow-purple-900/50 hover:shadow-purple-700/50"
            >
              Try Free <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://aetherwavestudio.com/static/shop.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-purple-400/30 text-purple-200 font-medium text-sm hover:bg-purple-800/30 transition-all"
            >
              View Plans
            </a>
          </div>
        </div>

        {/* Logo area */}
        <div className="hidden md:flex flex-shrink-0 items-center justify-center w-32 h-32 rounded-2xl bg-gradient-to-br from-purple-800/50 to-pink-800/50 border border-purple-600/20">
          <img
            src="https://pub-072d159fccde4f248d11860d471880b6.r2.dev/template-assets/Logos/Logo-landscape-3c-t.png"
            alt="AetherWave Studio"
            className="w-24 h-24 object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default AetherWaveBanner
