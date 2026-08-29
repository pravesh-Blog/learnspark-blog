'use client'

import { usePost } from "@/app/hooks/usePost"
import { use } from "react"
import AdminSidebar from "@/app/components/AdminSidebar"
import PostEditForm from "@/app/components/PostEditForm"

export default function EditPost({ params }) {
  const { id } = use(params)
  const { data: post, isLoading } = usePost(id)

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white p-4 dark:bg-[#1A1A1A]">
        <p className="text-gray-700 dark:text-[#F5F5F5]">
          Loading...
        </p>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white p-4 dark:bg-[#1A1A1A]">
        <p className="text-gray-700 dark:text-[#F5F5F5]">
          Post Not Found
        </p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#1A1A1A]">

      <div className="flex flex-col md:flex-row">

        <AdminSidebar />

        <main className="w-full min-w-0 flex-1 p-4 sm:p-6 lg:p-8">

          <h1 className="mb-6 text-2xl font-bold text-gray-900 sm:mb-8 sm:text-3xl dark:text-[#F5F5F5]">
            Edit Post
          </h1>

          <PostEditForm post={post} />

        </main>

      </div>

    </div>
  )
}