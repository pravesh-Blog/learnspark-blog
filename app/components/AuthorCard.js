'use client'
import Image from 'next/image';
import { FaLinkedin, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa6';

export default function AuthorCard() {
  const socials = [
    { icon: FaLinkedin, label: 'Linkedin', href: 'https://www.linkedin.com/in/pravesh-kumar-sharma-0b3182328?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
    { icon: FaFacebookF, label: 'Facebook', href: '#' },
    { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/pravesh_editz.ai?igsh=aTd3Yno3aWxrdW4x' },
    { icon: FaYoutube, label: 'YouTube', href: 'https://www.youtube.com/@pravesh.Editz4u' },
  ]

  return (
    <section
      aria-label="About the author"
      className="mt-12 sm:mt-14 rounded-sm border border-[#E3DFD4] bg-[#ECE8DD] p-5 sm:p-7 dark:border-gray-700 dark:bg-[#242424]"
    >
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-7">

        {/* Author Image */}
        <div className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0">
          <Image
            src="/images/pravesh-kumar-sharma.jpeg"
            alt="Pravesh Kumar Sharma"
            width={112}
            height={112}
            className="h-full w-full rounded-full object-cover border-4 border-[#F5F3EE] dark:border-[#1a1a1a]"
          />
        </div>

        {/* Author Content */}
        <div className="flex-1 text-center sm:text-left w-full">
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-[#2C5F4F] dark:text-[#7FB8A0] mb-2">
            ABOUT THE AUTHOR
          </p>

          <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#1F2421] dark:text-white mb-3">
            Pravesh Kumar Sharma
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-[#6F7670] dark:text-gray-400 max-w-2xl">
            My name is Pravesh Kumar Sharma. I’m a digital blogger who loves writing about Technology and Education. I share useful tech updates, digital tools, and educational content in a simple and easy-to-understand way.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center sm:justify-start items-center gap-3 mt-5">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="h-9 w-9 rounded-full flex items-center justify-center border border-[#D8D3C7] text-[#2C5F4F] hover:bg-[#2C5F4F] hover:text-white transition-colors dark:border-gray-600 dark:text-[#7FB8A0] dark:hover:bg-[#2C5F4F] dark:hover:text-white"
                >
                  <Icon className="w-4 h-4" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}