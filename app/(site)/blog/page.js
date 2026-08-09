'use client'
import { usePosts } from "@/app/hooks/usePost"
import PostCard from "@/app/components/PostCard"

export default function BlogList() {
  const { data: posts = [], isLoading } = usePosts()

  return (
    <div className="min-h-screen bg-[#F5F3EE] dark:bg-[#1A1A1A]">
      <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-8 sm:pb-12">
        <p className="font-mono text-xs text-[#2C5F4F] tracking-[0.2em] mb-3 dark:text-[#7FB8A0]">
          ALL POSTS
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1F2421] dark:text-[#F5F5F5]">
          All Blogs
        </h1>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pb-24">
        {isLoading ? (
          <p className="font-mono text-sm text-[#6F7670] dark:text-[#B5B5B5]">Loading posts...</p>  
        ) : posts.length === 0 ? (
          <p className="font-mono text-sm text-[#6F7670] dark:text-[#B5B5B5]">No posts yet.</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {posts.map((post, index) => (
              <PostCard key={post._id} post={post} index={index} />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}