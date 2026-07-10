'use client'
import {usePost} from "@/app/hooks/usePost";
import {use} from "react";
import AdminSidebar from "@/app/components/AdminSidebar";
import PostEditForm from "@/app/components/PostEditForm";

export default function EditPost({params}){
   const{id}= use(params);
   const {data:post,isLoading}=usePost(id);

   if(isLoading){
    return <p>Loading...</p>
   }
   
   if(!post){
    return <p>Post Not Found</p>
   }

   return(
    <div className="flex min-h-screen">
      <AdminSidebar/>

      <div className="flex-1 p-4 sm:p-6 lg:p-8">

        <h1 className="text-3xl font-bold mb-8">
          Edit Post
        </h1>
         <PostEditForm post={post}/>

      </div>

    </div>
   );
}