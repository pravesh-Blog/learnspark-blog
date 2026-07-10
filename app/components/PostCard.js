'use client'
import Link from 'next/link'

function stripMarkdown(text = '') {
  return text
    .split('**').join('')
    .split('*').join('')
    .split('`').join('')
    .split('#').join('')
    .split('|').join(' ')
    .split('\n').join(' ')
    .trim()
}

export default function PostCard({post,index}){
    return(
        <Link href={`/blog/${post.slug}`} className='block h-full'>

            <article className='group relative bg-white border border-[#E3DFD4] rounded-sm p-5 sm:p-6 transition-all duration-300 hover:border-[#2C5F4F] hover:-translate-y-0.5 hover:shadow-[0_4px_0_0_#2C5F4F] active:scale-[0.98] active:shadow-sm flex flex-col h-full'>

                {post.image &&(
                    <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-52 object-cover rounded-sm mb-4 sm:h-40"

                    />
                    
                )}

                <div className='flex items-start justify-between mb-4'>
                    
                    <span className='font-mono text-xs text-[#6F7670] tracking-wider'>

                        Entry {String(index+1).padStart(2,'0')}

                    </span>

                    <span className='font-mono text-xs text-[#6F7670]'>
                        {new Date(post.createdAt).toLocaleDateString('en-In',{day:'2-digit',month:'short',year:'numeric'})}

                    </span>
                    </div>

                    <h2 className='font-display text-lg sm:text-xl font-semibold text-[#1F2421] mb-2 leading-snug group-hover:text-[#2C5F4F] transition-colors line-clamp-2'>
                        {post.title}
                    </h2>

                    <p className="text-[#6F7670] text-sm leading-relaxed line-clamp-2">
                        {stripMarkdown(post.description)}
                    </p>

                    <div className="mt-auto pt-4 font-mono text-xs text-[#2C5F4F] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read entry <span aria-hidden="true">→</span>
                    </div>


            </article>

        </Link>
    );
}