'use client'
import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { usePosts } from "@/app/hooks/usePost"
import PostCard from "@/app/components/PostCard"

// all posts popular, latest and all posts here

function BlogListContent() {
  const searchParams = useSearchParams();
  const sortType = searchParams.get('sort');

  const { data: posts = [], isLoading } = usePosts();

  const sortedPosts = [...posts].sort((a, b) => {
    if (sortType === 'popular') {
      return (b.views || 0) - (a.views || 0)
    }

    if (sortType === 'latest') {
      return new Date(b.createdAt) - new Date(a.createdAt)
    }

    // blog = All Posts
    return 0
  })

  const pageTitle =
    sortType === 'popular' ? 'Popular Posts': sortType === 'latest'? 'Latest Posts': 'All Posts'

  const sectionLabel =
    sortType === 'popular'? 'MOST READ': sortType === 'latest'? 'LATEST': 'ALL POSTS'

  return (
    <div className="min-h-screen dark:text-[#F5F5F5] dark:bg-[#1a1a1a]">

      <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-8 sm:pb-12">

        <p className="font-mono text-xs text-[#2C5F4F] tracking-[0.2em] mb-3 dark:text-[#7FB8A0]">
          {sectionLabel}
        </p>

        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1F2421] dark:text-[#F5F5F5]">
          {pageTitle}
        </h1>

      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pb-24">

        {isLoading ? (
          <p className="font-mono text-sm text-[#6F7670] dark:text-[#A0A0A0]">
            Loading Posts...
          </p>

        ) : sortedPosts.length === 0 ? (

          <p className="font-mono text-sm text-[#6F7670] dark:text-[#A0A0A0]">
            No Posts yet.
          </p>

        ) : (

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">

            {sortedPosts.map((post, index) => (
              <PostCard
                key={post._id}
                post={post}
                index={index}
              />
            ))}

          </div>

        )}

      </main>

    </div>
  )
}

export default function BlogList() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen dark:bg-[#1a1a1a] px-4 py-10">
          <p className="font-mono text-sm text-[#6F7670] dark:text-[#A0A0A0]">
            Loading Posts...
          </p>
        </div>
      }
    >
      <BlogListContent />
    </Suspense>
  )
}