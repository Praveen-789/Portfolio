import { useState } from 'react'
import { Mail, Phone, ChevronDown } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'
import profileImg from '../assets/profile.png'

function ProfilePhoto() {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-purple-600 to-violet-800 flex items-center justify-center text-5xl md:text-7xl font-bold text-white">
        PN
      </div>
    )
  }

  return (
    <img
      src={profileImg}
      alt="Praveen Nagadesi"
      onError={() => setError(true)}
      className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover"
    />
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full py-20">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-4">
              Full Stack JavaScript Developer
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
              Praveen
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                Nagadesi
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0">
              Building scalable web &amp; mobile apps with Angular, React, Node.js, and MongoDB.
              3+ years crafting performant, production-grade software.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8 mt-2">
              <a
                href="mailto:Praveennagadesi789@gmail.com"
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <Mail size={18} /> Hire Me
              </a>
              <a
                href="https://github.com/Praveen-789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-gray-700 hover:border-purple-500 text-gray-300 hover:text-purple-400 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                <GithubIcon size={18} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/praveen-nagadesi-34a064179/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-gray-700 hover:border-purple-500 text-gray-300 hover:text-purple-400 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                <LinkedinIcon size={18} /> LinkedIn
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start text-gray-500 text-sm">
              <span className="flex items-center gap-1.5">
                <Phone size={14} /> +91 7893900268
              </span>
              <span className="flex items-center gap-1.5">
                <Mail size={14} /> Praveennagadesi789@gmail.com
              </span>
            </div>
          </div>

          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 blur-xl opacity-40 scale-110" />
              <div className="relative p-1.5 rounded-full bg-gradient-to-br from-purple-500 to-violet-600">
                <ProfilePhoto />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 animate-bounce">
          <ChevronDown size={24} />
        </div>
      </div>
    </section>
  )
}
