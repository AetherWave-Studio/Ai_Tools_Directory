import React from 'react'
import { Sparkles, Music, Video, Image as ImageIcon, ArrowRight, Wand2 } from 'lucide-react'

/**
 * AetherWaveTopHero
 *
 * The real top-of-funnel hero for AetherWave Studio (the platform that owns this
 * directory). Sits at the very top of the index, above the partner "Tools We Use"
 * strip. On-brand: pink (#ff2ea6) + cyan (#06b6d4) + gold (#f59e0b) over a dark
 * base, NO purple. Every outbound link is UTM-tagged so the funnel is measurable
 * in the main site's GA4.
 */

const UTM = 'utm_source=ai-hub&utm_medium=top-hero&utm_campaign=directory_funnel'
const TRY_URL = `https://aetherwavestudio.com/?${UTM}`
const PRICING_URL = `https://aetherwavestudio.com/pricing?${UTM}`

// Branded background clips already shipped in /public/assets - one per medium.
const MONTAGE = [
  { src: '/assets/suno-bg.mp4', label: 'Music' },
  { src: '/assets/runway-bg.mp4', label: 'Video' },
  { src: '/assets/midjourney-bg.mp4', label: 'Image' },
  { src: '/assets/seedance-bg.mp4', label: 'Motion' },
]

function AetherWaveTopHero() {
  return (
    <div className="relative overflow-hidden rounded-3xl mb-10 border border-white/10 shadow-2xl bg-[#0a0a0f]">
      {/* Brand glow accents (pink + cyan, no purple) */}
      <div className="absolute -top-24 -right-16 w-96 h-96 rounded-full blur-3xl bg-[#ff2ea6]/20" />
      <div className="absolute -bottom-24 -left-16 w-96 h-96 rounded-full blur-3xl bg-[#06b6d4]/20" />

      <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
        {/* Left: copy + CTAs */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-5">
            <Sparkles className="w-4 h-4 text-[#f59e0b]" />
            <span className="text-xs font-semibold tracking-wide text-gray-200">
              The platform behind this directory
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}>
            <span className="text-white">Create music, video, and images with </span>
            <span className="bg-gradient-to-r from-[#ff2ea6] to-[#06b6d4] bg-clip-text text-transparent">AI</span>
          </h1>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 max-w-xl">
            AetherWave Studio is the all-in-one creative platform. Generate full songs, cinematic
            video, and images with 50+ AI models - then forge a band identity and share your work.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-2 mb-7">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f59e0b]/10 text-[#f59e0b] text-xs font-medium border border-[#f59e0b]/30">
              <Music className="w-3.5 h-3.5" /> AI Music
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#06b6d4]/10 text-[#06b6d4] text-xs font-medium border border-[#06b6d4]/30">
              <Video className="w-3.5 h-3.5" /> Video Generation
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ff2ea6]/10 text-[#ff2ea6] text-xs font-medium border border-[#ff2ea6]/30">
              <ImageIcon className="w-3.5 h-3.5" /> Image Creation
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-gray-200 text-xs font-medium border border-white/10">
              <Wand2 className="w-3.5 h-3.5" /> 50+ models
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={TRY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-[#ff2ea6] to-[#06b6d4] hover:opacity-90 transition-opacity shadow-lg shadow-[#ff2ea6]/20"
            >
              Start Free <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={PRICING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm text-gray-100 border border-white/15 hover:bg-white/5 transition-colors"
            >
              See Pricing
            </a>
          </div>
        </div>

        {/* Right: 2x2 branded video montage (desktop) */}
        <div className="hidden md:grid grid-cols-2 gap-3">
          {MONTAGE.map((m) => (
            <div key={m.src} className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover opacity-80"
              >
                <source src={m.src} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute bottom-2 left-3 text-xs font-medium text-white/90" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AetherWaveTopHero
