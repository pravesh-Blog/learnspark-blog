'use client'
import Link from "next/link";
import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { categories } from "@/app/data/categories";

export default function CategoryMenu({onClose}){
const [categoryOpen, setCategoryOpen] = useState(false);
const [openSubcategory, setOpenSubcategory] = useState(null);
   
   return (
    <div>

        <button
            type="button"
            onClick={() => setCategoryOpen(!categoryOpen)}
            className="w-full flex items-center justify-between text-left text-[#1F2421] hover:text-[#2C5F4F] transition-colors font-medium dark:text-[#F5F5F5] dark:hover:text-[#7FB8A0]">

            <span>Categories</span>

            <ChevronRight
                size={18}
                strokeWidth={2.2}
                className={`transition-transform duration-200 ${
                    categoryOpen ? 'rotate-90' : ''}`}/>
        </button>

        {
            categoryOpen && (
                <div className="mt-2 ml-3">
                   {
                    categories.map((category) => {const isSubOpen = openSubcategory === category.name

    return (
        <div key={category.name}>

           <div className="flex items-center justify-between">
              <Link
               href={`/categories/${encodeURIComponent(category.name)}`}
               onClick={onClose}
               className="flex-1 py-2 text-left text-[#1F2421] hover:text-[#2C5F4F] transition-colors dark:text-[#F5F5F5] dark:hover:text-[#7FB8A0]"
              >
                {category.name}
              </Link>

              <button 
                type="button"
                onClick={()=>setOpenSubcategory(isSubOpen ? null : category.name)}

                aria-label={`${isSubOpen ? "Close" : "Open" } ${category.name} subcategories`}
              >
                <ChevronRight
                  size={17} 
                  strokeWidth={2.2}
                  className={`transition-transform duration-200 ${isSubOpen ? 'rotate-90' : ''}`}
                />

              </button>
           </div> 

            {isSubOpen && (
                <div className="ml-4 pb-2">
                    {
                        category.subcategories.map((subcategory)=>(
                            <Link
                             key={subcategory}
                             href={`/categories/${encodeURIComponent(category.name)}/${encodeURIComponent(subcategory)}`}
                             onClick={onClose}
                             className="block py-1.5 text-sm text-[#6F7670] hover:text-[#2C5F4F] transition-colors dark:text-[#B5B5B5] dark:hover:text-[#7FB8A0]"
                            >
                              {subcategory}
                            </Link>
                        ))
                    }
                </div>
            )}

            

              </div>
             )})

            }
            </div>
            )
        }

    </div>
)
}