'use client'
import { use } from "react";
import Link from "next/link";
import { usePosts } from "@/app/hooks/usePost";
import PostCard from "@/app/components/PostCard";

export default function CategoryPosts({params}){
    const{name}=use(params);
    const decodeName=decodeURIComponent(name);
    const{data:posts=[]}=usePosts();
    const filteredPosts=posts.filter((post)=>(post.category ||'General')===decodeName);
    return(
        <div className=" min-h-screen bg-[#F5F3EE]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py:-16 sm:py-24">

                 <Link href='/categories' className="font-mono text-xs text-[#2C5FAF] inline-flex items-center gap-1 mb-8 hover:gap-2 transition-all">
                       <span aria-hidden="true">←</span>All Categories
                 </Link>

                 <p className="font-mono text-xs text-[#B2491A] tracking-[0.2em] mb-4">
                    CATEGORY
                 </p>

                 <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1F2421] mb-10">
                    {decodeName}
                 </h1>



                 {
                    filteredPosts.length==0?(
                        <p className="font-display text-sm text-[#6F7670]">
                            No entries in this category yet.
                        </p>
                    ):(
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                            {filteredPosts.map((post,index)=>(
                                <PostCard key={post._id} post={post} index={index}/>
                            ))}

                        </div>
                    )
                 }

            </div>

        </div>
        
    );
}