import React from 'react'
import { Sparkles, Music, Video, Image as ImageIcon, ArrowRight } from 'lucide-react'

/**
 * AetherWaveBanner - secondary AetherWave funnel CTA at the foot of the index.
 * On-brand: pink (#ff2ea6) + cyan (#06b6d4) + gold (#f59e0b) over a dark base,
 * NO purple. Links are UTM-tagged for funnel measurement in the main GA4.
 */

const UTM = 'utm_source=ai-hub&utm_medium=footer-banner&utm_campaign=directory_funnel'
const TRY_URL = `https://aetherwavestudio.com/?${UTM}`
const PRICING_URL = `https://aetherwavestudio.com/pricing?${UTM}`

function AetherWaveBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#0a0a0f] p-6 md:p-8 mb-8 border border-white/10">
      {/* Brand glow (pink + cyan) */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff2ea6]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#06b6d4]/10 rounded-full blur-3xl" />

      <div className="relative flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="h-5 w-5 text-[#f59e0b]" />
            <span className="text-xs font-semibold text-[#f59e0b] uppercase tracking-wider">
              From the makers of this directory
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            Create with AI - Try AetherWave Studio
          </h3>
          <p className="text-gray-300 text-sm md:text-base mb-4 max-w-lg">
            Generate music, videos, and images with 50+ AI models. The all-in-one creative platform for artists and creators.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f59e0b]/10 text-[#f59e0b] text-xs font-medium border border-[#f59e0b]/30">
              <Music className="h-3.5 w-3.5" /> AI Music Studio
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#06b6d4]/10 text-[#06b6d4] text-xs font-medium border border-[#06b6d4]/30">
              <Video className="h-3.5 w-3.5" /> Video Generation
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff2ea6]/10 text-[#ff2ea6] text-xs font-medium border border-[#ff2ea6]/30">
              <ImageIcon className="h-3.5 w-3.5" /> Image Creation
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={TRY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#ff2ea6] to-[#06b6d4] text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-[#ff2ea6]/20"
            >
              Try Free <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={PRICING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-gray-100 font-medium text-sm hover:bg-white/5 transition-colors"
            >
              View Plans
            </a>
          </div>
        </div>

        {/* Logo area */}
        <div className="hidden md:flex flex-shrink-0 items-center justify-center w-32 h-32 rounded-2xl bg-white/5 border border-white/10">
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
