'use client'

import { useAllPosts, useDeletePost } from "@/app/hooks/usePost"
import AdminSidebar from "@/app/components/AdminSidebar"
import PostsTable from "@/app/components/PostsTable"

export default function AdminPosts() {
  const { data: posts = [] } = useAllPosts()
  const deletePost = useDeletePost()

  const handleDelete = async (id) => {
    if (confirm('Delete this Posts?')) {
      await deletePost.mutateAsync(id)
    }
  }

  return (
    <div className="flex min-h-screen bg-white text-gray-900 dark:bg-[#1A1A1A] dark:text-[#F5F5F5]">
     
      <div className="flex flex-col md:flex-row">
      <AdminSidebar/>

      <main className="w-full min-w-0 flex-1 p-4 sm:p-8 md:p-8">

        <h1 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl sm:mb-8 dark:text-[#F5F5F5]">
          Posts
        </h1>

        <PostsTable
          posts={posts}
          onDelete={handleDelete}
        />

      </main>
      </div>
    </div>
  )
}