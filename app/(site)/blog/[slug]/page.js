import BlogPostClient from './BlogPostClient'
import { connectDB } from '@/app/lib/db'
import { Post } from '@/app/models/post'

export async function generateMetadata({ params }) {
  const { slug } = await params
  
  await connectDB()
  const post = await Post.findOne({ slug })

  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      siteName: 'LearnSpark',
      images: post.image ? [{ url: post.image }] : [],
      type: 'article',
    },
  }
}

export default function BlogPost({ params }) {
  return <BlogPostClient params={params} />
}