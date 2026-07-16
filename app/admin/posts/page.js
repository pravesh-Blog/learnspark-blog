'use client'
import { useAllPosts,useDeletePost } from "@/app/hooks/usePost";
import Link from "next/link";
import AdminSidebar from "@/app/components/AdminSidebar";
import PostsTable from "@/app/components/PostsTable";


export default function AdminPosts(){
    const{data:posts=[]}=useAllPosts();
    const deletePost=useDeletePost();

    const handleDelete=async(id)=>{
        if(confirm('Delete this Posts?')){
            await deletePost.mutateAsync(id);
        }
    }

    return(
        <div className="flex min-h-screen">
           <AdminSidebar/>
           
           <div className="flex-1 p-8">
              <h1 className="text-3xl font-bold mb-8">Posts</h1>
              <PostsTable posts={posts} onDelete={handleDelete}/>
           </div>
        </div>
    );
}