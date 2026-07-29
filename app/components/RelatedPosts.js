'use client'
import Link from "next/link";
import { useRelatedPost } from "@/app/hooks/usePost";

export default function RelatedPosts({category,currentSlug}){
    const{data:posts=[]}=useRelatedPost(category,currentSlug);

    if(posts.length===0)return null
    
    return(
        <div className=" mt-16 pt-10 border-t border-[#E3DFD4]">
            <p className="font-mono text-xs text-[#2C5F4F] tracking-[0.2em] mb-6">
                RELATED ENTRIES
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
                {
                    posts.slice(0,4).map((post)=>(
                        <Link
                        key={post._id}
                        href={`/blog/${post.slug}`}
                        className="block bg-white border border-[#E3DFD4] rounded-sm hover:border-[#2C5F4F] transition-colors p-4 group transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]" 
                        >

                         {post.image &&(
                                <img 
                                src={post.image}
                                alt={post.title}
                                className="w-full object-cover h-auto max-h-40 rounded-sm mb-4"

                                />   
                            )}

                         <p className="font-mono text-xs text-[#6F7670] mb-2 py-4">
                            {new Date(post.createdAt).toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"})}
                         </p>   

                         <h3 className="font-display text-lg font-semibold text-[#1F2421]">
                            {post.title}
                         </h3>
                        </Link>
                    ))
                }

            </div>
        </div>
    )
}

