'use client'
import{ useEffect, useRef, useState} from 'react';
import{Search, X} from 'lucide-react'
import { usePosts } from '@/app/hooks/usePost';
import { toLowerCase } from 'zod';
import Link from 'next/link';

export default function SearchPop({isOpen, onClose}){
    const [query, setQuery] = useState('');
    const inputRef = useRef(null);
    const{data:posts=[],isLoading,isError}=usePosts();

      const filteredPosts= posts.filter((post)=>{

          const searchText = query.trim().toLowerCase();
          if (!searchText) return false;

        return (
        post.title?.toLowerCase().includes(searchText) ||
        post.description?.toLowerCase().includes(searchText) ||
        post.category?.toLowerCase().includes(searchText) ||
        post.subcategory?.toLowerCase().includes(searchText)
         );

      }).slice(0,5);

        useEffect(() => {
        if (!isOpen) return;

        inputRef.current?.focus();

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        const previousOverflow = document.body.style.overflow;
        const previousPaddingRight = document.body.style.paddingRight;

        const scrollbarWidth =
            window.innerWidth - document.documentElement.clientWidth;

        if (scrollbarWidth > 0) {
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        }

        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = previousOverflow;
            document.body.style.paddingRight = previousPaddingRight;
        };
    }, [isOpen, onClose]);
        if (!isOpen) return null;

        return(
            <div
              className='fixed inset-x-0 bottom-0 sm:top-[56px] top-[47px] z-40 flex items-start justify-center bg-transparent px-4 pt-6'

              onClick={(e)=>{
                 if(e.target===e.currentTarget){
                    onClose();
                 }
              }}
            > 
              <div 
               role='dialog'
               aria-modal='true'
               aria-labelledby='search-title'
               className='w-full max-w-xl max-h-[calc(100dvh-110px)] overflow-y-auto rounded-2xl border border-[#E3DFD4] bg-white p-4 sm:p-6 shadow-xl dark:border-[#3A3A3A] dark:bg-[#1F1F1F]'
              >
                <div className='mb-4 flex items-center justify-between'>
                    <h2 
                      id='search-title'
                      className='text-lg font-semibold text-[#1F2421] dark:text-[#F5F5F5]'
    
                    >
                      Search LearnSpark
                    </h2>

                    <button
                     type='button'
                     aria-label="Close search"
                     onClick={onClose}
                     className='rounded-md p-2 text-[#1F2421] hover:bg-black/5 dark:text-white dark:hover:bg-white/10'

                    >
                        <X size={20}/>
                    </button>

                </div>

                <div className='flex items-center gap-3 rounded-lg border border-[#D8D3C8] bg-white px-3 dark:border-[#3A3A3A] dark:bg-[#292929]'>
                      <Search
                        size={20}
                        className='shrink-0 text-[#2C5F4F] dark:text-[#7FB8A0]'
                      />

                      <input
                            ref={inputRef}
                            type="search"
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder="Search AI tools, tutorials, courses..."
                            aria-label="Search articles"
                            className='w-full bg-transparent py-3 text-sm text-[#1F2421] outline-none placeholder:text-gray-500 dark:text-white'
                      />
                </div>

                 <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                    Press Esc to close
                 </p>

                 {
                  query.trim() && (
                    <div className='mt-4 max-h-[40vh] overflow-y-auto border-t border-[#E3DFD4] pt-3 pr-1 dark:border-[#3A3A3A] search-results-scroll'>
                       {
                        isLoading ? (
                          <p>Searching Articles...</p>
                        ):isError ? (
                          <p className='py-3 text-sm text-red-500'>The articles could not be loaded
                          </p>
                        ):filteredPosts.length>0 ? (
                          <div className='flex flex-col gap-1'>
                             <p className='mb-1 text-xs text-gray-500 dark:text-gray-400'>
                               Matching articles
                             </p>

                             {
                              filteredPosts.map((post)=>(
                                <Link
                                key={post._id || post.slug}
                                href={`/blog/${post.slug}`}

                                onClick={onClose}

                                className='flex items-center justify-between gap-3 rounded-lg px-3 py-3 text-sm text-[#1F2421] transition-colors hover:bg-[#F5F3EE] hover:text-[#2C5F4F] dark:text-[#F5F5F5] dark:hover:bg-[#303030] dark:hover:text-[#7FB8A0]'
                                >
                                   {
                                    post.image && (
                                      <img
                                       src={post.image}
                                       alt=''
                                       className='h-14 w-20 shrink-0 rounded-lg object-cover'
                                       loading='lazy'
                                      />
                                    )
                                  }


                                 <div className='min-w-0 flex-1'>
                                  <span className='block font-medium'>
                                        {post.title}
                                  </span>
                                  {
                                    post.category && (
                                      <span className='mt-1 block text-xs text-gray-500 dark:text-gray-400'>
                                            {post.category}
                                      </span>
                                    )
                                  }
                                  </div>
                                 
                                  
                                </Link>
                              ))
                             }

                          </div>
                        ):(
                          <p className='py-3 text-sm text-gray-500 dark:text-gray-400'>
                            There are no matching articles
                          </p>
                        )
                       }

                    </div>
                  )
                 }

              </div>

            </div>
        );


}