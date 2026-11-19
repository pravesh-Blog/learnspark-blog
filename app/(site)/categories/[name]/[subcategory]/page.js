import { connectDB } from "@/app/lib/db";
import { Post } from "@/app/models/post";
import SubcategoryPageClient from "./SubcategoryPageClient";

export async function generateMetadata({ params }) {
    const { name, subcategory } = await params;

    const subcategoryName = decodeURIComponent(subcategory);

    return {
        title: subcategoryName,
        description: `Explore ${subcategoryName} articles, guides, tips and resources on LearnSpark.`,
    };
}

export default async function Page({ params }) {
    const { name, subcategory } = await params;

    const categoryName = decodeURIComponent(name);
    const subcategoryName = decodeURIComponent(subcategory);

    await connectDB();

    const posts = await Post.find({
        status: "published",
        category: { $regex: `^${categoryName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, $options: "i" },
        subcategory: { $regex: `^${subcategoryName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, $options: "i" },
    })
        .sort({ createdAt: -1 })
        .lean();

    const serializedPosts = posts.map(post => ({
        ...post,
        _id: post._id.toString(),
    }));

    return (
        <SubcategoryPageClient
            categoryName={categoryName}
            subcategoryName={subcategoryName}
            posts={serializedPosts}
        />
    );
}