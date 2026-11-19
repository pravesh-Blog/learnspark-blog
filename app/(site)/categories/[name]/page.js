
import { connectDB } from "@/app/lib/db";
import { Post } from "@/app/models/post";
import CategoryPageClient from "./CategoryPageClient";

export async function generateMetadata({params}) {
  const{name}=await params;
  const categoryName=decodeURIComponent(name);
  return{
    title: categoryName,
     description: `Explore ${categoryName} articles, guides, tips and resources on LearnSpark.`,
  };
    
}

export default async function Page({ params }) {
    const { name } = await params;
    const categoryName = decodeURIComponent(name);

    await connectDB();

    const posts = await Post.find({
        status: "published",
        category: { $regex: `^${categoryName}$`, $options: "i" }
    })
        .sort({ createdAt: -1 })
        .lean();

    const serializedPosts = posts.map(post => ({
        ...post,
        _id: post._id.toString(),
    }));

    return (
        <CategoryPageClient
            categoryName={categoryName}
            posts={serializedPosts}
        />
    );
}