'use client';
 import {MessageCircle,Link2} from 'lucide-react';

export default function ShareButtons({title,url}){
  const encodedTitle= encodeURIComponent(title);
  const encodedUrl= encodeURIComponent(url);

  const shareLinks=[
    {
        name:'WhatsApp',
        icon:MessageCircle,
        href:`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`
    },
    {
      name:'Twitter',
      icon:MessageCircle,
      href:`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`
    },
    {
      name:'Facebook',
      icon:MessageCircle,
      href:`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
    },
    {
      name:'LinkedIN',
      icon:MessageCircle,
      href:`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
    }
  ]

  const copyLink=()=>{
    navigator.clipboard.writeText(url);
  alert('Link Copied!')
  }

 return(
  <div className='mt-10 pt-8 border-t border-[#E3DFD4] dark:border-[#3A3A3A]'>
    <p className='font-mono text-xs text-[#B2491A] tracking-[0.2em] mb-4 dark:text-[#D87845]'>
      SHARE THIS ARTICLE
    </p>

    <div className='flex flex-wrap gap-3'>
      {
        shareLinks.map((link)=>{
          const Icon=link.icon;
          return(
          <a
           key={link.name}
           href={link.href}
           target='_blank'
           rel='noopener noreferrer'
           className='flex items-center gap-2 font-mono text-xs px-4 py-2 border border-[#E3DFD4] rounded-sm hover:border-[#2C5F4f] hover:text-[#2C5F4F] transition-colors dark:border-[#3A3A3A] dark:text-[#B5B5B5] dark:hover:border-[#7FB8A0] dark:hover:text-[#7FB8A0]'
          >

            <Icon className='w-4 h-4'/>
             {link.name}
          </a>
        )})
      }

      <button
        onClick={copyLink}
        className='flex items-center gap-2 font-mono text-xs px-4 py-2 border border-[#E3DFD4] rounded-sm hover:border-[#2C5F4F] hover:text-[#2C5F4F] transition-colors dark:border-[#3A3A3A] dark:text-[#B5B5B5] dark:hover:border-[#7FB8A0] dark:hover:text-[#7FB8A0]'
      >
        <Link2 className='w-4 h-4'/>
         Copy Link
      </button>

    </div>

  </div>
 );

}