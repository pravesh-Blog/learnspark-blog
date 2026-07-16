import { connectDB } from "@/app/lib/db";
import { Post } from "@/app/models/post";
import { postSchema } from "@/app/lib/postSchema";
import { verifyToken } from "@/app/lib/verifyToken";

// single post api
export async function GET(req, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const post = await Post.findById(id);
    if (!post) {
      return Response.json({ error: 'Post not found' }, { status: 404 })
    }
    return Response.json(post);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}

// update api for post
export async function PUT(req,{params}){
    try{

    // auth phle
    const isAdmin=await verifyToken(req);
    if(!isAdmin){
      return Response.json({error:'Unauthorized'},{status:401});
     }

    await connectDB();
    const{id}=await params;

    const body=await req.json();
    const result=postSchema.safeParse(body);

    if(!result.success){
      return Response.json(
        {errors:result.error.flatten().fieldErrors},
        {status:400}
      );
    }


    const{title,slug,content,description,image,category,status}=result.data;

    const post=await Post.findByIdAndUpdate(id,{title,slug,image,category,status,content,description},{new:true});

    if(!post){
      return Response.json(
        {error:"post not found"},
        {status:404}
         );
    }
    return Response.json(post);
    }catch(error){
       if (error.code === 11000) {
          return Response.json(
            { error: 'Slug already exists' },
            { status: 409 }
          )
        }
        return Response.json({error: error.message},{status:500});
    }
} 

// delete api for post

export async function DELETE(req,{params}){
  try{

    const isAdmin=await verifyToken(req);
    if(!isAdmin){
      return Response.json({error:'Unauthorized'},{status:401});
     }

  await connectDB();
  const{id}=await params;
  await Post.findByIdAndDelete(id);
  return Response.json({message:"Deleted"})
  }catch(error){
    return Response.json({message:error.message},{status:500});
  }
}