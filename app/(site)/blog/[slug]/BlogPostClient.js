'use client'
import { use,useEffect } from 'react'
import Link from 'next/link'
import { usePostBySlug,useIncrementView } from '@/app/hooks/usePost'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import RelatedPosts from '@/app/components/RelatedPosts'
import ShareButtons from '@/app/components/ShareButtons'

function getReadingTime(text = '') {
  const words = text.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

export default function BlogPostClient({ params }) {
  const { slug } = use(params);
  const { data: post, isLoading } = usePostBySlug(slug);
  const incrementView=useIncrementView();
  
  useEffect(()=>{
    if(post){
      incrementView.mutate(slug);
    }
  },[post,slug])
  

  const markdownClasses = `
  prose prose-base sm:prose-lg max-w-none
  prose-p:leading-relaxed
  prose-headings:font-display
  prose-headings:text-[#1F2421]
  dark:prose-headings:text-[#F5F5F5]
  prose-p:text-[#6F7670]
  dark:prose-p:text-[#B5B5B5]
  prose-strong:text-[#1F2421]
  dark:prose-strong:text-[#F5F5F5]
  prose-em:text-[#1F2421]
  dark:prose-em:text-[#F5F5F5]
  prose-a:text-[#2C5F4F]
  dark:prose-a:text-[#7FB8A0]
  prose-li:text-[#6F7670]
  dark:prose-li:text-[#B5B5B5]
  prose-li:marker:text-[#2C5F4F]
  dark:prose-li:marker:text-[#7FB8A0]
  prose-blockquote:border-[#2C5F4F]
  prose-blockquote:text-[#6F7670]
  dark:prose-blockquote:border-[#7FB8A0]
  dark:prose-blockquote:text-[#B5B5B5]
  prose-code:bg-[#ECE8DD]
  prose-code:text-[#1F2421]
  dark:prose-code:bg-[#2A2A2A]
  dark:prose-code:text-[#F5F5F5]
  prose-pre:bg-[#ECE8DD]
  prose-pre:text-[#1F2421]
  dark:prose-pre:bg-[#222222]
  dark:prose-pre:text-[#F5F5F5]
  prose-th:text-[#1F2421]
  prose-th:border-[#E3DFD4]
  dark:prose-th:text-[#F5F5F5]
  dark:prose-th:border-[#3A3A3A]
  prose-td:text-[#6F7670]
  prose-td:border-[#E3DFD4]
  dark:prose-td:text-[#B5B5B5]
  dark:prose-td:border-[#3A3A3A]
  prose-hr:border-[#E3DFD4]
  dark:prose-hr:border-[#3A3A3A]
`
  

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F5F3EE] flex items-center justify-center dark:bg-[#1A1A1A]">
        <p className="font-mono text-sm text-[#6F7670] dark:text-[#B5B5B5]">Loading post...</p>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[#F5F3EE] flex items-center justify-center dark:bg-[#1A1A1A]">
        <p className="font-mono text-sm text-[#6F7670] dark:text-[#B5B5B5]">Post not found.</p> 
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F5F3EE] dark:bg-[#1A1A1A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-20">

        <Link href="/" className="font-mono text-xs text-[#2C5F4F] inline-flex items-center gap-1 mb-10 sm:mb-14 hover:gap-2 transition-all dark:text-[#7FB8A0]">
          <span aria-hidden="true">←</span> Back to all posts
        </Link>

        <article>
          <header className="mb-10 sm:mb-12">
            <p className="font-mono text-xs text-[#B2491A] tracking-[0.2em] mb-5 dark:text-[#D87845]">
              FIELD NOTE
            </p>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1F2421] leading-[1.15] mb-6 dark:text-[#F5F5F5]">
              {post.title}
            </h1>

            <div className="flex items-center gap-3 font-mono text-xs text-[#6F7670] dark:text-[#A8AAA8]">
              <span>
                {new Date(post.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })}
              </span>
              <span className="text-[#E3DFD4] dark:text-[#3A3A3A]">•</span>
              <span>{getReadingTime(post.content)} min read</span>
            </div>
          </header>

          <div className="h-px bg-[#E3DFD4] mb-10 sm:mb-12 dark:bg-[#3A3A3A]" />

          <div className={`${markdownClasses} prose-headings:mt-10 prose-headings:mb-4`}>

            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
              {post.content}
            </ReactMarkdown>
            
          </div>

          <ShareButtons 
          title={post.title} 
          url={`https://learnsparkblog.in/blog/${post.slug}`}
          />

          <div className="h-px bg-[#E3DFD4] mt-14 mb-8 dark:bg-[#3A3A3A]"/>

          <RelatedPosts category={post.category} currentSlug={post.slug}/>

          <Link href="/" className="font-mono text-xs text-[#2C5F4F] inline-flex items-center gap-1 hover:gap-2 transition-all mt-4 dark:text-[#7FB8A0]">
            <span aria-hidden="true">←</span> Back to all posts
          </Link>
        </article>

      </div>
    </div>
  )
}