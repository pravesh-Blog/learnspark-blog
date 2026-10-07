import { connectDB } from '@/app/lib/db';
import { Post } from '@/app/models/post';
import { categories } from '@/app/data/categories';

export default async function sitemap() {
  await connectDB()
  const posts = await Post.find({status:'published'});
  
  const categoryUrls=categories.flatMap((category)=>{
    const categoryUrl={
      url:`${process.env.NEXT_PUBLIC_API_BASE_URL}/categories/${encodeURIComponent(category.name)}`,
      lastModified:new Date()
    };

    const subcategoryUrls=category.subcategories.map((subcategory)=>(
      {
        url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/categories/${encodeURIComponent(category.name)}/${encodeURIComponent(subcategory)}`,
        lastModified:new Date(),
      } 
    ))
    return [categoryUrl,...subcategoryUrls];
  });
  

  const postUrls = posts.map((post) => ({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/blog/${post.slug}`,
    lastModified: post.updatedAt || post.createdAt,
  }))

  return [
    {
      url: process.env.NEXT_PUBLIC_API_BASE_URL,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/blog`,
      lastModified: new Date(),
    },
    {
      url:`${process.env.NEXT_PUBLIC_API_BASE_URL}/categories`,
      lastModified:new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/about`,
      lastModified: new Date(),
    },
    ...categoryUrls,
    ...postUrls,
  ]
}