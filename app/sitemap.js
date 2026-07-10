import { connectDB } from '@/app/lib/db';
import { Post } from '@/app/models/post';

export default async function sitemap() {
  await connectDB()
  const posts = await Post.find();

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
      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/about`,
      lastModified: new Date(),
    },
    ...postUrls,
  ]
}