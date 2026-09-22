'use client'
import { usePosts } from "@/app/hooks/usePost";
import PostCard from "@/app/components/PostCard";
import TypewriterText from "@/app/components/Typewriter";



export default function Home() {
   const{data:posts=[],isLoading}=usePosts();
   
   return(
      <div className="min-h-screen bg-[#F5F3EE] dark:bg-[#1a1a1a] selection:bg-[#2C5F4F]/20 selection:text-[#1F2421] dark:selection:bg-[#7FB8A0]/20 dark:selection:text-[#F5F5F5]">

         <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-10 sm:pb-14">

            <div className="flex items-center gap-3 mb-3 sm:mb-4">
               <span className="h-px w-7 bg-[#2C5F4F] dark:bg-[#7FB8A0]"></span>

               <p className="font-mono text-[11px] text-[#2C5F4F] tracking-[0.22em] dark:text-[#7FB8A0]">
                  TECH & EDUCATION
               </p>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[#1F2421] leading-tight mb-3 sm:mb-4 md:text-6xl animate-fade-in-up dark:text-[#F5F5F5] whitespace-nowrap tracking-tight">
              LearnSpark <span className="inline-block animate-bounce-slow">🚀</span>
            </h1>

            {/* <p className="text-[#6F7670] text-base sm:text-lg max-w-xl mt-6 leading-relaxed">
                  Learn AI & Tech, Spark Your Career
            </p> */}

            <TypewriterText 
               text="Learn AI & Tech, Spark Your Career"
               className="text-[#6F7670] text-base sm:text-lg max-w-[95%] sm:max-w-xl mt-5 leading-relaxed tracking-wide dark:text-[#B5B5B5]"
               />

         </header>

      
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pb-24 sm:pt-6 pt-4">
         {isLoading ?(
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
               {[1,2,3].map((item)=>(
                  <div
                   key={item}
                   className="rounded-xl border border-[#DEDCD6] dark:border-[#2A2A2A] bg-white/40 dark:bg-white/[0.02] p-4 animate-pulse"
                  >
                     <div className="h-40 rounded-lg bg-[#DEDCD6] dark:bg-[#292929] mb-4"></div>

                     <div className="h-3 w-24 rounded bg-[#DEDCD6] dark:bg-[#292929] mb-3"></div>

                      <div className="h-5 w-4/5 rounded bg-[#DEDCD6] dark:bg-[#292929] mb-2"></div>

                       <div className="h-3 w-full rounded bg-[#E5E2DB] dark:bg-[#242424] mb-2"></div>

                       <div className="h-3 w-2/3 rounded bg-[#E5E2DB] dark:bg-[#242424]"></div>

                  </div>
               ))}

            </div>
            ):posts.length===0?(
            <div className="py-12 text-center">
            <div className="text-3xl mb-3 opacity-80">
               ✨
            </div>

            <p className="font-display text-lg font-semibold text-[#1F2421] dark:text-[#F5F5F5]">
               No posts yet
            </p>

         <p className="text-sm text-[#777D78] dark:text-[#999] mt-2">
            The first article is coming soon.
         </p>
         </div>):(
               <div className="grid sm:grid-cols-2 gap-5 lg:grid-cols-3 lg:gap-6">
                  {posts.map((post,index)=>(
                     <PostCard key={post._id} post={post} index={index}/>
                  ))}

               </div>
            )} 

      </main>
      </div>
   );

}