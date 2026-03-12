import React from 'react'
import { Music, Video, Image, ShoppingBag, BookOpen, Mail } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <a href="https://aetherwavestudio.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mb-3">
              <img src="/aws-logo.png" alt="AetherWave" className="h-8 w-8 object-contain" />
              <span className="font-bold text-gray-900 dark:text-white">AetherWave</span>
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              AI-native creative platform for music, video, and image generation. Explore 1000+ tools in our directory.
            </p>
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
                <a href="https://aetherwavestudio.com/static/shop.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  <ShoppingBag className="h-4 w-4" /> Shop & Pricing
                </a>
              </li>
              <li>
                <a href="https://aetherwavestudio.com/static/tutorials.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  <BookOpen className="h-4 w-4" /> Tutorials
                </a>
              </li>
              <li>
                <a href="https://aetherwavestudio.com/static/help-center.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  <BookOpen className="h-4 w-4" /> Help Center
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
