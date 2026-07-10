'use client'
import Link from 'next/link'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-[#E3DFD4] bg-[#F5F3EE] mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10">

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-6 font-mono text-xs sm:text-sm">

          <Link href="/disclaimer" className="text-[#6F7670] hover:text-[#2C5F4F] transition-colors">
            Disclaimer
          </Link>

          <Link href="/privacy-policy" className="text-[#6F7670] hover:text-[#2C5F4F] transition-colors">
            Privacy Policy
          </Link>

          <Link href="/about" className="text-[#6F7670] hover:text-[#2C5F4F] transition-colors">
            About us
          </Link>

          <Link href="/contact" className="text-[#6F7670] hover:text-[#2C5F4F] transition-colors">
            Contact us
          </Link>
          
        </div>

        <div className="relative flex items-center justify-center">
          <p className="font-mono text-xs sm:text-sm text-[#6F7670] text-center">
            Copyright © {new Date().getFullYear()} LearnSpark
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="absolute right-0 bg-[#2C5F4F] hover:bg-[#1F2421] text-white w-9 h-9 sm:w-10 sm:h-10 rounded flex items-center justify-center transition-colors"
          >
            ↑
          </button>
        </div>

      </div>
    </footer>
  )
}