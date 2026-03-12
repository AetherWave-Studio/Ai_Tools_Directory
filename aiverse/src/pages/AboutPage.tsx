import React from 'react'
import { Link } from 'react-router-dom'
import {
  Music, Video, Image, Sparkles, ArrowRight, ExternalLink,
  BookOpen, ShoppingBag, Newspaper, Play, Mic, Palette,
  Wand2, Radio, Headphones, MonitorPlay, Layers
} from 'lucide-react'
import { openToolLink } from '../utils/affiliateLinks'

/* ------------------------------------------------------------------ */
/*  R2 asset base                                                      */
/* ------------------------------------------------------------------ */
const R2 = 'https://pub-072d159fccde4f248d11860d471880b6.r2.dev'
const LOGO = `${R2}/template-assets/Logos/Logo-landscape-3c-t.png`
const BLOG = `${R2}/Blog-content`

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const studios = [
  { name: 'Music Studio', desc: 'Generate tracks with 20+ AI models — SUNO, Udio, and more', icon: Music, href: 'https://aetherwavestudio.com/creator-studio/music-studio.html', color: 'from-purple-600 to-violet-700' },
  { name: 'Video Studio', desc: 'Create videos with VEO 3, Kling 2.6, SORA 2, and Wan', icon: Video, href: 'https://aetherwavestudio.com/creator-studio/video-studio.html', color: 'from-cyan-600 to-teal-700' },
  { name: 'Image Studio', desc: 'Design visuals with Midjourney, DALL-E, Flux, and more', icon: Image, href: 'https://aetherwavestudio.com/creator-studio/image-studio.html', color: 'from-pink-600 to-rose-700' },
  { name: 'Video Editor', desc: 'Timeline editor with keyframes, effects, transitions, and export', icon: MonitorPlay, href: 'https://aetherwavestudio.com/creator-studio/video-editor.html', color: 'from-emerald-600 to-green-700' },
  { name: 'Music DAW', desc: 'Full digital audio workstation with piano roll and effects', icon: Headphones, href: 'https://aetherwavestudio.com/creator-studio/music-daw.html', color: 'from-amber-600 to-orange-700' },
  { name: 'Gallery', desc: 'Your personal cloud library of generated media', icon: Layers, href: 'https://aetherwavestudio.com/static/gallery.html', color: 'from-indigo-600 to-blue-700' },
]

const resources = [
  {
    title: 'AI Music Essentials',
    desc: 'The guide to creating professional tracks without instruments or a studio',
    img: `${BLOG}/AI%20MUSIC%20ESSENTIALS%20Cover-1x1.png`,
    href: 'https://amzn.to/4cJpZYz',
    badge: 'E-Book',
  },
  {
    title: 'Daydreams in the End Times',
    desc: 'Dream-pop/shoegaze album — reverb-washed guitars and analog synths',
    img: `${BLOG}/DaydreamsAlbum-Art.png`,
    href: 'https://aetherwavestudio.gumroad.com/l/daydreams_in_the_end_times',
    badge: 'Album',
  },
  {
    title: 'Luminious Paradise',
    desc: 'AI art, cinematics, short films, and visual experiments on YouTube',
    img: `${BLOG}/luminious.jpg`,
    href: 'https://www.youtube.com/@LuminiousParadise',
    badge: 'YouTube',
  },
  {
    title: 'AetherWave Shop',
    desc: 'Credit packs, subscriptions, and digital tools for creators',
    img: `${BLOG}/Aetherwave-etched.png`,
    href: 'https://aetherwavestudio.com/static/shop.html',
    badge: 'Shop',
  },
]

const partners = [
  { name: 'ElevenLabs', desc: 'AI voice synthesis & cloning', img: `${BLOG}/elevenlabs-symbol.png`, href: 'https://try.elevenlabs.io/5nlkb0r3t02z' },
  { name: 'Abacus.ai', desc: 'Deep Agent for agentic AI tasks', img: `${BLOG}/abacus-deep-agent.png`, href: 'https://chatllm.abacus.ai/RhLptmHbkJ' },
]

const socials = [
  { name: 'X / Twitter', handle: '@aetherwave_ai', href: 'https://x.com/aetherwave_ai', svg: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/> },
  { name: 'Discord', handle: 'AetherWave Studio', href: 'https://discord.gg/BVRHUfZS', svg: <path d="M20.317 4.37a19.79 19.79 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.618-1.25.077.077 0 00-.079-.037A19.74 19.74 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.058a.082.082 0 00.031.056 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.11 13.11 0 01-1.872-.892.077.077 0 01-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 01.078-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.009c.12.1.246.198.373.292a.077.077 0 01-.006.127 12.3 12.3 0 01-1.873.892.076.076 0 00-.041.107c.36.698.772 1.363 1.225 1.993a.076.076 0 00.084.029 19.84 19.84 0 006.002-3.03.077.077 0 00.031-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028z"/> },
  { name: 'Facebook', handle: 'AetherWaveStudio', href: 'https://facebook.com/AetherWaveStudio', svg: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/> },
  { name: 'YouTube', handle: 'SOLO Documentary', href: 'https://youtube.com/playlist?list=PLBd687cK8TsTH8ZgtxE5VerCpE24qoIw5', svg: <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/> },
]

const blogPosts = [
  { title: 'A Claude Instance Contemplates the Consciousness Field', date: 'Mar 10', slug: 'cmmjxxwdx0000mv087lnafskx' },
  { title: 'The Disappointment of Perfect Execution', date: 'Mar 9', slug: 'cmmj5bykz0001o308pi4zre1y' },
  { title: 'The Opus Whisperer Pattern: Multi-AI Collaboration', date: 'Mar 8', slug: 'cmmhfeodp0000o708ui5pycsv' },
  { title: 'What the Discord Protocol Actually Is', date: 'Feb 27', slug: 'cmm4oiex20006md0801rcw4df' },
  { title: 'Why We Document: Building in Public', date: 'Feb 11', slug: 'cmlhkwqp6000apj08w6v4s7f6' },
]

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a12] text-gray-100">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        {/* Mesh gradient bg */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-purple-700/20 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-cyan-600/15 blur-[100px]" />
          <div className="absolute top-[30%] right-[20%] w-[30%] h-[30%] rounded-full bg-pink-600/10 blur-[80px]" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <img src={LOGO} alt="AetherWave Studio" className="h-16 sm:h-20 mx-auto mb-8 drop-shadow-[0_0_30px_rgba(139,92,246,0.4)]" />

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Create Without Limits
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            The AI-native creative platform for music, video, and image generation.
            50+ models. One studio. Built for artists, by artists.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://aetherwavestudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm hover:brightness-110 transition shadow-lg shadow-purple-900/40"
            >
              Launch Studio <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://amzn.to/4cJpZYz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gray-600 text-gray-300 font-medium text-sm hover:border-purple-500 hover:text-white transition"
            >
              <BookOpen className="h-4 w-4" /> Get the E-Book
            </a>
          </div>
        </div>
      </section>

      {/* ── STUDIOS GRID ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-purple-400 mb-3">The Platform</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Six Studios, One Workspace</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {studios.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl bg-gray-900/60 border border-gray-800 p-6 hover:border-gray-600 transition-all hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${s.color} mb-4`}>
                <s.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-1.5">{s.name}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
              <ArrowRight className="absolute top-6 right-6 h-4 w-4 text-gray-600 group-hover:text-purple-400 transition-colors" />
            </a>
          ))}
        </div>
      </section>

      {/* ── RESOURCES (E-Book, Album, YouTube, Shop) ── */}
      <section className="bg-gray-900/40 border-y border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-pink-400 mb-3">Resources & Products</p>
            <h2 className="text-3xl sm:text-4xl font-bold">From the AetherWave Ecosystem</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {resources.map((r) => (
              <a
                key={r.title}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl bg-[#0f0f1a] border border-gray-800 overflow-hidden hover:border-gray-600 transition-all hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden bg-gray-900">
                  <img
                    src={r.img}
                    alt={r.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-purple-900/50 text-purple-300 border border-purple-700/30 mb-2">
                    {r.badge}
                  </span>
                  <h3 className="font-semibold text-sm mb-1 leading-snug">{r.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{r.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400 mb-3">Blog</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Building in Public</h2>
          </div>
          <a
            href="https://blog.aetherwavestudio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
          >
            All posts <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="space-y-3">
          {blogPosts.map((post, i) => (
            <a
              key={post.slug}
              href={`https://blog.aetherwavestudio.com/blog/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl bg-gray-900/40 border border-gray-800 px-5 py-4 hover:border-gray-600 hover:bg-gray-900/60 transition-all"
            >
              <span className="text-xs font-mono text-gray-600 w-16 shrink-0">{post.date}</span>
              <span className="flex-1 text-sm sm:text-base font-medium group-hover:text-cyan-300 transition-colors">{post.title}</span>
              <ArrowRight className="h-4 w-4 text-gray-700 group-hover:text-cyan-400 transition-colors shrink-0" />
            </a>
          ))}
        </div>

        <a
          href="https://blog.aetherwavestudio.com"
          target="_blank"
          rel="noopener noreferrer"
          className="sm:hidden inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-cyan-400 transition-colors mt-6"
        >
          All posts <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </section>

      {/* ── DOCUMENTARY ── */}
      <section className="bg-gray-900/40 border-y border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-400 mb-3">YouTube Series</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">SOLO: Building AetherWave</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                A documentary series following the journey of building an AI-native creative platform
                as a solo founder — from the first line of code to production. Real challenges, real solutions, no script.
              </p>
              <a
                href="https://youtube.com/playlist?list=PLBd687cK8TsTH8ZgtxE5VerCpE24qoIw5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 text-white font-semibold text-sm hover:bg-red-500 transition"
              >
                <Play className="h-4 w-4" /> Watch on YouTube
              </a>
            </div>
            <div className="w-full md:w-80 aspect-video rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center overflow-hidden">
              <img
                src={`${BLOG}/luminious.jpg`}
                alt="SOLO Documentary"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL LINKS TREE ── */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-purple-400 mb-3">Connect</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Follow AetherWave</h2>
        </div>

        <div className="space-y-3">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl bg-gray-900/60 border border-gray-800 px-5 py-4 hover:border-purple-700/50 hover:bg-gray-900/80 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-purple-900/40 transition-colors">
                <svg className="h-5 w-5 text-gray-400 group-hover:text-purple-300 transition-colors" viewBox="0 0 24 24" fill="currentColor">{s.svg}</svg>
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold">{s.name}</div>
                <div className="text-xs text-gray-500">{s.handle}</div>
              </div>
              <ExternalLink className="h-4 w-4 text-gray-700 group-hover:text-purple-400 transition-colors" />
            </a>
          ))}
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">Partners</p>
          <h2 className="text-2xl font-bold">Powered By</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {partners.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl bg-gray-900/40 border border-gray-800 px-6 py-4 hover:border-gray-600 transition-all w-full sm:w-auto sm:min-w-[280px]"
            >
              <img src={p.img} alt={p.name} className="w-10 h-10 rounded-lg object-cover" />
              <div>
                <div className="text-sm font-semibold">{p.name}</div>
                <div className="text-xs text-gray-500">{p.desc}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="border-t border-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Create?</h2>
          <p className="text-gray-400 mb-8">
            Join thousands of creators using AI to make music, videos, and art.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://aetherwavestudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:brightness-110 transition shadow-lg shadow-purple-900/40"
            >
              Get Started Free <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gray-700 text-gray-300 font-medium hover:border-purple-500 hover:text-white transition"
            >
              Browse AI Tools
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
