'use client'
import Link from 'next/link'
import { usePosts } from '@/app/hooks/usePost'

export default function CategoryGrid() {
  const { data: posts = [] } = usePosts()

  const categories = []
  posts.forEach((post) => {
    const cat = post.category || 'General'
    if (!categories.includes(cat)) {
      categories.push(cat)
    }
  })

  return (
    <div className="min-h-screen bg-[#F5F3EE]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">

        <p className="font-mono text-xs text-[#B2491A] tracking-[0.2em] mb-4">
          BROWSE
        </p>

        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1F2421] mb-10">
          Categories
        </h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {
            categories.map((cat)=>(
                <Link
                 href={`/categories/${cat}`}
                 key={cat}
                 className='block bg-white border border-[#E3DFD4] rounded-sm p-6 hover:border-[#2C5F4F] transition-colors'
                >
                   <h2 className='font-display text-xl font-semibold text-[#1F2421]'>
                    {cat}
                    </h2>
                </Link>
            ))
          }
        </div>

      </div>
    </div>
  )
}