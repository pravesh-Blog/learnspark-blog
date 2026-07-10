'use client'
import { usePosts } from "@/app/hooks/usePost";
import PostCard from "@/app/components/PostCard";



export default function Home() {
   const{data:posts=[],isLoading}=usePosts();
   
   return(
      <div className="min-h-screen bg-[#F5F3EE]">

         <header className="max-w-5xl mx-auto px-4 pt-10 pb-8 sm:pt-16 sm:pb-12 sm:px-6 md:pt-24 md:pb-16 ">

            <p className="font-mono text-xs text-[#2C5F4F] tracking-[0.2em] mb-3 sm:mb-4">
               TECH & EDUCATION
            </p>

            <h1 className="font-display text-5xl sm:text-5xl font-semibold text-[#1F2421] leading-tight mb-4 md:text-6xl">
              LearnSpark 🚀
            </h1>

            <p className="text-[#6F7670] text-base sm:text-lg max-w-xl mt-6 leading-relaxed">
                  Learn AI & Tech, Spark Your Career
            </p>

         </header>
      
      <main className="max-w-5xl mx-auto px-6 pb-24">
         {isLoading ?(
            <p className="font-mono text-sm text-[#6F7670]">
               Loading entries...
            </p>
            ):posts.length===0?(
            <p> No entries yet. First one's coming soon</p>):(
               <div className="grid sm:grid-cols-2 gap-5 lg:grid-cols-3">
                  {posts.map((post,index)=>(
                     <PostCard key={post._id} post={post} index={index}/>
                  ))}

               </div>
            )}

      </main>
      </div>
   );

}