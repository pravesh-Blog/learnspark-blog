import SubcategoryPageClient from "./SubcategoryPageClient";

export async function generateMetadata({ params }) {
    const { name, subcategory } = await params;

    const categoryName = decodeURIComponent(name);
    const subcategoryName = decodeURIComponent(subcategory);

    return {
        title: subcategoryName,
        description: `Explore ${subcategoryName} articles, guides, tips and resources on LearnSpark.`,
    };
}

export default async function Page({ params }) {
    return <SubcategoryPageClient params={params} />;
}