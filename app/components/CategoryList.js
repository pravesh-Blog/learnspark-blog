'use client'

import { useState} from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { categories } from "@/app/data/categories";

export default function CategoryList(){
   const [openCategory, setOpenCategory] = useState(null);
   
   const toggleCategory = (categoryName) => {
    setOpenCategory(
        openCategory === categoryName ? null : categoryName
    );
  }

   return(
    <div className="min-h-screen bg-[#F5F3EE] dark:bg-[#1a1a1a]">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-10">
        <div className="mb-10 sm:mb-14">
           <p className="font-mono text-xs tracking-[0.2em] text-[#2C5F4F] dark:text-[#7FB8A0] mb-4">
              EXPLORE
           </p>

           <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1F2421] dark:text-[#F5F5F5]">
             Categories
           </h1>

        </div>

        <div>
          {
            categories.map((category)=>{
              const isOpen=openCategory===category.name;
              return(
                <div key={category.name}>
                  
                  <div className="flex items-center justify-between border-b border-[#D8D5CE] dark:border-[#333333]">

                  <Link
                  href={`/categories/${encodeURIComponent(category.name)}`}
                  className="flex-1 py-4 text-left text-[#1F2421] dark:text-[#F5F5F5] hover:text-[#2C5F4F] dark:hover:text-[#7FB8A0] transition-colors"
                  >
                    <span className="font-display text-lg">
                       {category.name}
                    </span>
                  </Link>

                  <button
                  type="button"
                  onClick={()=>toggleCategory(category.name)}
                  aria-label={`${isOpen ? "Close": "Open"} ${category.name} subcategories`}

                  className="p-4 text-[#1F2421] dark:text-[#F5F5F5] hover:text-[#2C5F4F] dark:hover:text-[#7FB8A0] transition-colors"
                  >
                   <ChevronRight 
                   size={20} 
                   strokeWidth={2.2}
                   className={`transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
                   />

                  </button>

                  </div>
                   {/* subcategory */}

                   {
                    isOpen &&(
                      <div className="ml-4 sm:ml-6 py-2">
                        {
                        category.subcategories.map((subcategory)=>(
                          <Link
                           key={subcategory}
                           href={`/categories/${encodeURIComponent(category.name)}/${encodeURIComponent(subcategory)}`}
                           
                           className="block py-2.5 text-sm sm:text-base text-[#6F7670] dark:text-[#B5B5B5] hover:text-[#2C5F4F] dark:hover:text-[#7FB8A0] transition-colors"
                          >
                              {subcategory}
                          </Link>
                        ))
                        }

                      </div>
                    )
                   }

                </div>
              )
            })
          }

        </div>

      </div>

    </div>
   )

}