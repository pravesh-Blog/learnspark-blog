import BlogPostClient from './BlogPostClient'
import { connectDB } from '@/app/lib/db'
import { Post } from '@/app/models/post'
import { cache } from 'react'

const getPost=cache(async(slug)=> {
  await connectDB();
  return await Post.findOne({slug})
})

export async function generateMetadata({ params }) {
  const { slug } = await params
  
  const post=await getPost(slug);

  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: post.title,
    description: post.description,
    alternates:{
      canonical:`${process.env.NEXT_PUBLIC_API_BASE_URL}/blog/${post.slug}`
    },
    openGraph: {
      title: post.title,
      description: post.description,
      siteName: 'LearnSpark',
      images: post.image ? [{ url: post.image }] : [],
      type: 'article',
    },
  }
}

export default async function BlogPost({ params }) {
  const { slug } = await params
  const post=await getPost(slug);

  if (!post) {
    return <BlogPostClient params={params} />
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.image ? [post.image] : [],
    datePublished: post.createdAt?.toISOString(),
    dateModified: post.updatedAt?.toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${process.env.NEXT_PUBLIC_API_BASE_URL}/blog/${post.slug}`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'LearnSpark',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <BlogPostClient params={params}/>
    </>
  )
}