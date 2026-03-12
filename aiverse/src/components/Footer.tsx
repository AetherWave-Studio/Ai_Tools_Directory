import React from 'react'
import { Music, Video, Image, ShoppingBag, BookOpen, Mail, Newspaper, ExternalLink, Sparkles } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand + Socials */}
          <div>
            <a href="https://aetherwavestudio.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mb-3">
              <img src="https://pub-072d159fccde4f248d11860d471880b6.r2.dev/template-assets/Logos/Logo-landscape-3c-t.png" alt="AetherWave" className="h-8 w-8 object-contain" />
              <span className="font-bold text-gray-900 dark:text-white">AetherWave</span>
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
              AI-native creative platform for music, video, and image generation. Explore 1000+ tools in our directory.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="https://x.com/aetherwave_ai" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-purple-100 hover:text-purple-600 dark:hover:bg-purple-900/30 dark:hover:text-purple-400 transition-colors" aria-label="Follow on X">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://discord.gg/BVRHUfZS" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-indigo-100 hover:text-indigo-600 dark:hover:bg-indigo-900/30 dark:hover:text-indigo-400 transition-colors" aria-label="Join Discord">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z"/></svg>
              </a>
              <a href="https://facebook.com/AetherWaveStudio" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors" aria-label="Follow on Facebook">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://youtube.com/playlist?list=PLBd687cK8TsTH8ZgtxE5VerCpE24qoIw5" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/30 dark:hover:text-red-400 transition-colors" aria-label="Watch on YouTube">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Create */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wider">Create</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="https://aetherwavestudio.com/creator-studio/music-studio.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  <Music className="h-4 w-4" /> Music Studio
                </a>
              </li>
              <li>
                <a href="https://aetherwavestudio.com/creator-studio/video-studio.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  <Video className="h-4 w-4" /> Video Studio
                </a>
              </li>
              <li>
                <a href="https://aetherwavestudio.com/creator-studio/image-studio.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  <Image className="h-4 w-4" /> Image Studio
                </a>
              </li>
              <li>
                <a href="https://aetherwavestudio.com/static/gallery.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  <BookOpen className="h-4 w-4" /> Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="https://amzn.to/4cJpZYz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  <BookOpen className="h-4 w-4" /> E-Book <ExternalLink className="h-3 w-3 opacity-50" />
                </a>
              </li>
              <li>
                <a href="https://aetherwavestudio.com/static/shop.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  <ShoppingBag className="h-4 w-4" /> Shop & Pricing
                </a>
              </li>
              <li>
                <a href="https://blog.aetherwavestudio.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  <Newspaper className="h-4 w-4" /> Blog
                </a>
              </li>
              <li>
                <a href="https://aetherwavestudio.com/static/tutorials.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  <BookOpen className="h-4 w-4" /> Tutorials
                </a>
              </li>
              <li>
                <a href="https://chatllm.abacus.ai/RhLptmHbkJ" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  <Sparkles className="h-4 w-4" /> ChatLLM by Abacus.ai <ExternalLink className="h-3 w-3 opacity-50" />
                </a>
              </li>
              <li>
                <a href="mailto:support@aetherwavestudio.com" className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  <Mail className="h-4 w-4" /> Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Directory */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wider">Directory</h4>
            <ul className="space-y-2.5">
              <li><a href="/" className="text-sm text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">All AI Tools</a></li>
              <li><a href="/?category=artificial-intelligence" className="text-sm text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">AI & Machine Learning</a></li>
              <li><a href="/?category=video" className="text-sm text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Video Tools</a></li>
              <li><a href="/?category=design" className="text-sm text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Design Tools</a></li>
              <li><a href="/?category=writing" className="text-sm text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Writing Tools</a></li>
              <li><a href="/about" className="text-sm text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">About</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            &copy; {new Date().getFullYear()} AetherWave Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://aetherwavestudio.com/static/terms.html" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Terms</a>
            <a href="https://aetherwavestudio.com/static/privacy.html" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Privacy</a>
            <span className="text-xs text-gray-400 dark:text-gray-500">
              Some links are affiliate links. We may earn a commission at no cost to you.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
