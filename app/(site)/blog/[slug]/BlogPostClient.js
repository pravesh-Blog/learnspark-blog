'use client'
import { use } from 'react'
import Link from 'next/link'
import { usePostBySlug } from '@/app/hooks/usePost'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

function getReadingTime(text = '') {
  const words = text.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

export default function BlogPostClient({ params }) {
  const { slug } = use(params)
  const { data: post, isLoading } = usePostBySlug(slug)

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F5F3EE] flex items-center justify-center">
        <p className="font-mono text-sm text-[#6F7670]">Loading entry...</p>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[#F5F3EE] flex items-center justify-center">
        <p className="font-mono text-sm text-[#6F7670]">Entry not found.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F5F3EE]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-20">

        <Link href="/" className="font-mono text-xs text-[#2C5F4F] inline-flex items-center gap-1 mb-10 sm:mb-14 hover:gap-2 transition-all">
          <span aria-hidden="true">←</span> Back to all entries
        </Link>

        <article>
          <header className="mb-10 sm:mb-12">
            <p className="font-mono text-xs text-[#B2491A] tracking-[0.2em] mb-5">
              FIELD NOTE
            </p>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1F2421] leading-[1.15] mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-3 font-mono text-xs text-[#6F7670]">
              <span>
                {new Date(post.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })}
              </span>
              <span className="text-[#E3DFD4]">•</span>
              <span>{getReadingTime(post.content)} min read</span>
            </div>
          </header>

          <div className="h-px bg-[#E3DFD4] mb-10 sm:mb-12" />

          <div className="prose prose-base sm:prose-lg max-w-none prose-p:leading-relaxed prose-headings:mt-10 prose-headings:mb-4">

            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
              {post.content}
            </ReactMarkdown>
            
          </div>

          <div className="h-px bg-[#E3DFD4] mt-14 mb-8" />

          <Link href="/" className="font-mono text-xs text-[#2C5F4F] inline-flex items-center gap-1 hover:gap-2 transition-all">
            <span aria-hidden="true">←</span> Back to all entries
          </Link>
        </article>

      </div>
    </div>
  )
}