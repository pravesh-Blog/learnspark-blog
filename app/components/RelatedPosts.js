'use client'
import Link from "next/link";
import { useRelatedPost } from "@/app/hooks/usePost";

export default function RelatedPosts({category,currentSlug}){
    const{data:posts=[]}=useRelatedPost(category,currentSlug);

    if(posts.length===0)return null
    
    return(
        <div className=" mt-16">
            <p className="font-mono text-xs text-[#2C5F4F] tracking-[0.2em] mb-6 dark:text-[#7FB8A0]">
                RELATED POSTS
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
                {
                    posts.slice(0,4).map((post)=>(
                        <Link
                        key={post._id}
                        href={`/blog/${post.slug}`}
                        className="block bg-white border border-[#E3DFD4] rounded-sm hover:border-[#2C5F4F] p-4 group transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02] dark:bg-[#222222] dark:border-[#3A3A3A] dark:hover:border-[#7FB8A0]"
                        >

                         {post.image &&(
                            <div className='w-full aspect-video overflow-hidden rounded-sm mb-4'>
                                <img 
                                src={post.image}
                                alt={post.title}
                                className="w-full object-cover h-full"

                                />   
                            </div>
                            )}

                         <p className="font-mono text-xs text-[#6F7670] mb-2 py-4 dark:text-[#A8A8A8]">
                            {new Date(post.createdAt).toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"})}
                         </p>   

                         <h3 className="font-display text-lg font-semibold text-[#1F2421] dark:text-[#F5F5F5]">
                            {post.title}
                         </h3>
                        </Link>
                    ))
                }

            </div>
        </div>
    )
}

