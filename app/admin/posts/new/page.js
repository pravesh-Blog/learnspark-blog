'use client';
import AdminSidebar from "@/app/components/AdminSidebar";
import PostForm from "@/app/components/PostForm";

export default function NewPost(){
    return(
        <div className="flex min-h-screen">
            <AdminSidebar/>

            <div className="flex-1 p-4 sm:p-6 lg:p-8">
                <h1 className="text-3xl sm:text-4xl font-bold mb-8">New Post</h1>

                <PostForm/>
            </div>

        </div>
    );
}