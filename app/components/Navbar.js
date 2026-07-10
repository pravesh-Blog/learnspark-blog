'use client'
import Link from "next/link";
import { useState } from "react";
import {Zap} from "lucide-react";
export default function Navbar(){

    const[isOpen,setIsOpen]=useState(false);
    
    const links=[
        {href:'/',label:'Home'},
        {href:'/blog',label:'Blogs'},
        {href:'/categories',label:'Categories'},
        {href:'/about',label:'About'}
    ]
   

    return(
        <nav className="border-b border-[#E3DFD4] bg-[#F5F3EE]/90 sticky top-0 z-50 backdrop-blur-sm">

          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between">

            <Link href='/' className="font-display text-xl sm:text-2xl font-semibold text-[#1F2421] flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#B2491A]" fill="currentColor" />
                LearnSpark
            </Link>

            {/* Desktop Links */}
             <div className="hidden md:flex items-center gap-6 font-mono text-sm">
                    {links.map((link) => (
                        <Link
                        key={link.href}
                        href={link.href}
                        className="text-[#1F2421] hover:text-[#2C5F4F] transition-colors font-medium"
                        >
                        {link.label}
                        </Link>
                    ))}
             </div>

             {/* mobile Hamburger Button */}

              <button
               onClick={()=>setIsOpen(!isOpen)}
               className="md:hidden flex flex-col gap-1.5 p-2"
               aria-label="Toggle menu"
              >

                <span className={`block w-6 h-0.5 bg-[#1F2421] transition-all ${isOpen?'rotate-45 -translate-y-2':''}`}/>

                <span className={`block w-6 h-0.5 bg-[#1F2421] transition-all ${isOpen?'opacity-0':''}`}/>

                <span className={`block w-6 h-0.5 bg-[#1F2421] transition-all ${isOpen?'-rotate-45 -translate-y-2':''}`}/>

              </button>

          </div>

          {/* Mobile Menu */}
          {isOpen &&(
            <div className="md:hidden border-t border-[#E3DFD4] px-4 sm:px-6 py-4 flex flex-col gap-4 font-mono text-sm">
                {
                 links.map((link)=>(
                    <Link
                    key={link.href}
                    href={link.href}
                    onClick={()=>setIsOpen(false)}
                    className="text-[#1F2421] hover:text-[#2C5F4F] transition-colors font-medium"
                    >
                        {link.label}
                    </Link>
                 ))
                }
            </div>
          )}
            
        </nav>
    );
}