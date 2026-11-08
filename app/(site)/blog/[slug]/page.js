import { cache } from "react";
import { connectDB } from "@/app/lib/db";
import { Post } from "@/app/models/post";
import { notFound } from "next/navigation";
import BlogPostClient from "./BlogPostClient";

export const dynamic = "force-dynamic";

// Database se published article fetch karna
const getPost = cache(async (slug) => {
  await connectDB();

  return Post.findOne({
    slug,
    status: "published",
  }).lean();
});

// Har article ke liye dynamic SEO metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const postData = await getPost(slug);

  if (!postData) {
    return {
      title: "Post Not Found",
    };
  }

  const description =
    postData.description ||
    "LearnSpark par Tech, AI aur Education se judi useful guides padhein.";

  const siteUrl = (
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://learnsparkblog.in"
).replace(/\/$/, "");

  const canonicalUrl = `${siteUrl}/blog/${postData.slug}`;

  const image = postData.image
    ? [{ url: postData.image }]
    : [];

  return {
    title: postData.title,
    description,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title: postData.title,
      description,
      url: canonicalUrl,
      siteName: "LearnSpark",
      type: "article",
      publishedTime: postData.createdAt
        ? new Date(postData.createdAt).toISOString()
        : undefined,
      images: image,
    },

    twitter: {
      card: "summary_large_image",
      title: postData.title,
      description,
      images: image,
    },
  };
}

// Article page
export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const postData = await getPost(slug);

  if (!postData) {
    notFound();
  }

  // MongoDB data ko serializable object banana
  const post = {
    title: postData.title,
    slug: postData.slug,
    content: postData.content,
    description: postData.description,
    image: postData.image,
    category: postData.category,
    createdAt: postData.createdAt
      ? new Date(postData.createdAt).toISOString()
      : null,
  };

  return <BlogPostClient post={post} />;
}