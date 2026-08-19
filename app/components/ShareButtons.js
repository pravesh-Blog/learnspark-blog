'use client';
import { useState } from "react";
import
{
  FaWhatsapp,
  FaFacebook,
  FaLinkedinIn,
  FaTelegram,
  FaCopy,
  FaCheck,
  FaTimes,
  FaShareAlt
} from "react-icons/fa";

export default function ShareButtons({title,url}){

  const[isOpen, setIsOpen]=useState(false);
  const[copied,setCopied]=useState(false);

  const encodedTitle= encodeURIComponent(title);
  const encodedUrl= encodeURIComponent(url);


  // sharebutton

  const handleShare=async()=>{
    // Mobile/supported browsers

    if(navigator.share){
    try{
      await navigator.share({
        title:title,
        text:title,
        url:url,
      })
    }catch(error){
      //user closed the share menu
      if(error.name !='AbortError'){
        console.error('share failed')
      }
    }
    }else{
      // desktop faillback
      setIsOpen(true);
    }
  }

  // copy link function

  const copyLink=async ()=>{
  try{
    await navigator.clipboard.writeText(url);
    setCopied(true);
    
    setTimeout(()=>{
      setCopied(false);
    },2000)
  }catch(error){
    console.error('Copy failed:', error);
  }
  }

  const shareLinks=[
    {
        name:'WhatsApp',
        icon:FaWhatsapp,
        href:`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`
    },
    {
      name:'Telegram',
      icon:FaTelegram,
      href:`https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`
    },
    {
      name:'Facebook',
      icon:FaFacebook,
      href:`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
    },
    {
      name:'LinkedIN',
      icon:FaLinkedinIn,
      href:`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
    }
  ]


 return(
   <div className="relative mt-10 pt-8 border-t border-[#E3DFD4] dark:border-[#3A3A3A]">

   {/* Heading */}

  <p className="font-mono text-xs text-[#B2491A] tracking-[0.2em] mb-4 dark:text-[#D87845]">
    SHARE THIS ARTICLE
  </p>

  {/* Main share button */}

   <button
   onClick={handleShare}
   className="flex items-center gap-2 font-mono text-xs px-4 py-2 border border-[#E3DFD4] rounded-sm hover:border-[#2C5F4F] hover:text-[#2C5F4F] transition-colors dark:border-[#3A3A3A] dark:text-[#B5B5B5] dark:hover:border-[#7FB8A0] dark:hover:text-[#7FB8A0]"
   aria-label="Share this article"
   >
    <FaShareAlt className="w-5 h-5 "/>
   </button>

   {/* Desktop popup share */}

   {
    isOpen && (
      <div className="absolute left-0 top-full mt-3 z-50 w-72 bg-[#F5F3EE] border border-[#E3DFD4] rounded-sm p-4 shadow-lg dark:bg-[#222222] dark:border-[#3A3A3A]">
       {/* popup header */}
        <div className="flex items-center justify-between mb-4">
           <p className="font-mono text-xs tracking-[0.15em] text-[#1F2421] dark:text-[#B5B5B5]">
             SHARE VIA
           </p>

           <button
            onClick={()=>setIsOpen(false)}
            aria-label="Close share menu"
            className="text-[#777] hover:text-[#1F2421] dark:text-[#999] dark:hover:text-white"
           >

            <FaTimes className="w-3.5 h-3.5"/>

           </button>
        </div>

       {/* social buttons */}
        <div className="grid grid-cols-2 gap-2">

          {shareLinks.map((link)=>{
            const Icon=link.icon;

            return (
              <a
               key={link.name}
               href={link.href}
               target="_blank"
               rel="noopener noreferrer"
               onClick={()=>setIsOpen(false)}

               className="flex items-center gap-2 px-3 py-2 border border-[#E3DFD4] rounded-sm font-mono text-xs text-[#1F2421] hover:border-[#2C5F4F] hover:text-[#2C5F4F] transition-colors dark:border-[#3A3A3A] dark:text-[#B5B5B5] dark:hover:border-[#7FB8A0] dark:hover:text-[#7FB8A0]"
              >
                 <Icon className="w-4 h-4"/>
                 {link.name}
              </a>
            )
          })}

          {/* Copy Link */}
          <button
           onClick={copyLink} 
           className="flex items-center gap-2 px-3 py-2 border border-[#E3DFD4] rounded-sm font-mono text-xs text-[#1F2421] hover:border-[#2C5F4F] hover:text-[#2C5F4F] transition-colors dark:border-[#3A3A3A] dark:text-[#B5B5B5] dark:hover:border-[#7FB8A0] dark:hover:text-[#7FB8A0]"
          >
            {copied ? (<FaCheck className="w-4 h-4"/>):(<FaCopy className="w-4 h-4"/>)}

            {copied ? 'Copied!' : 'Copy Link'}

          </button>

        </div>

      </div>
    )
   }

   </div>
 );

}