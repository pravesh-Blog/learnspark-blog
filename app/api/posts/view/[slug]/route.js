import { connectDB } from "@/app/lib/db";
import { Post } from "@/app/models/post";

export async function POST(req,{params}){
  try{ 
    await connectDB();
    const{slug}=await params;
    const post=await Post.findOneAndUpdate(
        {slug},
        {$inc:{views:1}},
        {new:true}
    )
     return Response.json(post);
}catch(error){
    return Response.json({error:error.message},{status:500})
}
}