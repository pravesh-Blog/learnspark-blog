'use client'
import { usePosts } from "@/app/hooks/usePost";
import PostCard from "@/app/components/PostCard";
import TypewriterText from "@/app/components/Typewriter";



export default function Home() {
   const{data:posts=[],isLoading}=usePosts();
   
   return(
      <div className="min-h-screen bg-[#F5F3EE] dark:bg-[#1a1a1a]">

         <header className="max-w-5xl mx-auto px-4 pt-10 pb-8 sm:pt-16 sm:pb-12 sm:px-6 md:pt-24 md:pb-16 ">

            <p className="font-mono text-xs text-[#2C5F4F] tracking-[0.2em] mb-3 sm:mb-4 dark:text-[#7FB8A0]">
               TECH & EDUCATION
            </p>

            <h1 className="font-display text-5xl sm:text-5xl font-semibold text-[#1F2421] leading-tight mb-4 md:text-6xl animate-fade-in-up dark:text-[#F5F5F5]">
              LearnSpark <span className="inline-block animate-bounce-slow">🚀</span>
            </h1>

            {/* <p className="text-[#6F7670] text-base sm:text-lg max-w-xl mt-6 leading-relaxed">
                  Learn AI & Tech, Spark Your Career
            </p> */}

            <TypewriterText 
             text=" Learn AI & Tech, Spark Your Career"
             className="text-[#6F7670] text-base sm:text-lg max-w-xl mt-6 leading-relaxed dark:text-[#B5B5B5]"
            />

         </header>
      
      <main className="max-w-5xl mx-auto px-6 pb-24">
         {isLoading ?(
            <p className="font-mono text-sm text-[#6F7670] dark:text-[#B5B5B5]">
               Loading posts...
            </p>
            ):posts.length===0?(
            <p className="text-[#1F2421] dark:text-[#F5F5F5]"> No posts yet. First one's coming soon</p>):(
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