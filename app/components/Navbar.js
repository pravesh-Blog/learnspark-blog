'use client'
import Link from "next/link";
import { useState } from "react";
//import {Zap} from "lucide-react"; icon ke liye
import Image from "next/image";
import ThemeToggle from "@/app/components/ThemeToggle";

export default function Navbar(){

    const[isOpen,setIsOpen]=useState(false);
    const[blogDropdownOpen,setblogDropdownOpen]=useState(false);
    
    const links=[
        {href:'/',label:'Home'},
        {href:'/categories',label:'Categories'},
        {href:'/about',label:'About'}
    ]
   
    const blogOptions=[
        {href:'/blog?sort=latest',label:'Latest Posts'},
        {href:'/blog?sort=popular', label:'Popular Posts'},
        {href:'/blog',label:'All Posts'}
    ]

    return(
        <nav className="border-b border-[#E3DFD4] bg-[#F5F3EE]/90 sticky top-0 z-50 backdrop-blur-sm dark:bg-[#1A1A1A] dark:border-[#3A3A3A]">

          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between">

            <Link href='/' className="font-display text-xl sm:text-2xl font-semibold text-[#1F2421] flex items-center gap-2">

               <Image src='/L2.png' alt='LearnSpark' width={140} height={40} className="w-auto h-10" priority/>
            </Link>

            {/* Desktop Links */}
             <div className="hidden md:flex items-center gap-6 font-mono text-sm">

                 <Link href="/" className="text-[#1F2421] hover:text-[#2C5F4F] transition-colors font-medium dark:text-[#F5F5F5] dark:hover:text-[#7FB8A0]">
                   Home
                 </Link>

                 {/* blog drop down */}

                 <div className="relative flex items-center"
                  onMouseEnter={()=>setblogDropdownOpen(true)}
                  onMouseLeave={()=>setblogDropdownOpen(false)}
                 >
                    <button className="text-[#1F2421] hover:text-[#2C5F4F] transition-colors font-medium flex items-center dark:text-[#F5F5F5] dark:hover:text-[#7FB8A0]">
                        Blogs
                     <svg className={`w-3 h-3 transition-transform ${blogDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                     </svg>

                    </button>
                    {blogDropdownOpen && (
                        <div className="absolute top-full left-0 pt-4 w-48">
                        <div className="bg-white dark:bg-[#242424] border border-[#E3DFD4] dark:border-[#3A3A3A] rounded-sm shadow-lg py-2">

                            {blogOptions.map((option)=>(
                                <Link
                                 key={option.label}
                                 href={option.href}
                                 className="block px-4 py-2 text-[#1F2421] hover:bg-[#F5F3EE] hover:text-[#2C5F4F] transition-colors text-sm dark:text-[#F5F5F5] dark:hover:bg-[#303030] dark:hover:text-[#7FB8A0]"
                                >
                                    {option.label}
                                </Link>
                            ))}

                        </div>
                        </div>
                    )}
                 </div>

                 <Link href="/categories" className="text-[#1F2421] hover:text-[#2C5F4F] transition-colors font-medium dark:text-[#F5F5F5] dark:hover:text-[#7FB8A0]">
                   Categories
                 </Link>

                 <Link href="/about" className="text-[#1F2421] hover:text-[#2C5F4F] transition-colors font-medium dark:text-[#F5F5F5] dark:hover:text-[#7FB8A0]">
                   About
                 </Link>
                                      
                 <ThemeToggle/>
             </div>

             {/* mobile Hamburger Button */}
            <div className="flex items-center gap-2 md:hidden">
                <ThemeToggle/>
              <button
               onClick={()=>setIsOpen(!isOpen)}
               className="md:hidden flex flex-col gap-1.5 p-2"
               aria-label="Toggle menu"
              >
                
                <span className={`block w-6 h-0.5 bg-[#1F2421] dark:bg-[#F5F5F5] transition-all duration-200 ${isOpen ? "rotate-45 translate-y-2" : ""}`}/>

                <span className={`block w-6 h-0.5 bg-[#1F2421] dark:bg-[#F5F5F5] transition-all duration-200 ${isOpen ? "opacity-0" : ""}`}/>

                <span className={`block w-6 h-0.5 bg-[#1F2421] dark:bg-[#F5F5F5] transition-all duration-200 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}/>

              </button>
              </div>

          </div>

          {/* Mobile Menu */}
          {isOpen &&(
            <div className="md:hidden border-t border-[#E3DFD4] px-4 sm:px-6 py-4 flex flex-col gap-4 font-mono text-sm dark:border-[#3A3A3A]">
                
                <Link href="/" onClick={() => setIsOpen(false)} className="text-[#1F2421] hover:text-[#2C5F4F] transition-colors font-medium dark:text-[#F5F5F5] dark:hover:text-[#7FB8A0]">
                    Home
                </Link>

                <div>
                    <p className="font-semibold text-[#B2491A] text-xs mb-2">BLOGS</p>
                    {blogOptions.map((option) => (
                    <Link
                        key={option.label}
                        href={option.href}
                        onClick={() => setIsOpen(false)}
                        className="block pl-3 py-2 text-[#1F2421] hover:text-[#2C5F4F] transition-colors dark:text-[#F5F5F5] dark:hover:text-[#7FB8A0]"
                    >
                        {option.label}
                    </Link>
                    ))}
                </div>

                <Link href="/categories" onClick={() => setIsOpen(false)} className="text-[#1F2421] hover:text-[#2C5F4F] transition-colors font-medium dark:text-[#F5F5F5] dark:hover:text-[#7FB8A0]">
                    Categories
                </Link>
                <Link href="/about" onClick={() => setIsOpen(false)} className="text-[#1F2421] hover:text-[#2C5F4F] transition-colors font-medium dark:text-[#F5F5F5] dark:hover:text-[#7FB8A0]">
                    About
                </Link>
            </div>
          )}
            
        </nav>
    );
}