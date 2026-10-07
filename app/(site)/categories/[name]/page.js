import CategoryPageClient from "./CategoryPageClient";

export async function generateMetadata({params}) {
  const{name}=await params;
  const categoryName=decodeURIComponent(name);
  return{
    title: categoryName,
     description: `Explore ${categoryName} articles, guides, tips and resources on LearnSpark.`,
  };
    
}

export default async function Page({params}){
    return <CategoryPageClient params={params}/>
}