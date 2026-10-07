'use client';
import { use } from "react";
import Link from "next/link";
import PostCard from "@/app/components/PostCard";
import { usePosts } from "@/app/hooks/usePost";

export default function CategoryPageClient({ params }) {
    const { name } = use(params);
    const categoryName = decodeURIComponent(name);

    const { data: posts = [], isLoading } = usePosts();

    const filteredPosts = posts.filter(
    (post) =>
        (post.category || "General").toLowerCase() ===
        categoryName.toLowerCase()
    );

    return (
        <div className="min-h-screen bg-[#F5F3EE] dark:bg-[#1a1a1a]">
            
            <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-8 sm:pb-12">

                <Link
                    href="/categories"
                    className="font-mono text-xs inline-flex items-center gap-1 mb-8 text-[#2C5F4F] dark:text-[#7FB8A0] hover:gap-2 transition-all"
                >
                    <span aria-hidden="true">←</span>
                    All Categories
                </Link>

                <p className="font-mono text-xs text-[#2C5F4F] dark:text-[#7FB8A0] tracking-[0.2em] mb-4">
                    CATEGORY
                </p>

                <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1F2421] dark:text-[#F5F5F5]">
                    {categoryName}
                </h1>

                <div className="mt-10">
                    {isLoading ? (
                        <p className="font-display text-sm text-[#6F7670] dark:text-[#B5B5B5]">
                           Loading Posts...
                        </p>
                    ):(
                        filteredPosts.length===0 ?(
                            <p className="font-display text-sm text-[#6F7670] dark:text-[#B5B5B5]">
                                No Posts in this category yet.
                            </p>
                        ):(
                            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                                {
                                 filteredPosts.map((post,index)=>(
                                    <PostCard 
                                     key={post._id}
                                     post={post}
                                     index={index}
                                    />
                                 ))
                                }
                            </div>
                        )
                    )
                }
                </div>

            </div>

        </div>
    );
}