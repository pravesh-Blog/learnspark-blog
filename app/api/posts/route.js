import { connectDB } from "@/app/lib/db";
import { Post } from "@/app/models/post";
import { postSchema } from "@/app/lib/postSchema";
import { verifyToken } from "@/app/lib/verifyToken";

export async function GET() {
  try {
    await connectDB();
    const posts = await Post.find();
    return Response.json(posts);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
     //auth check (koi bhi hopcotch se nahi kar sakta)
     const isAdmin=await verifyToken(req);
     if(!isAdmin){
      return Response.json({error:'Unauthorized'},{status:401});
     }


    await connectDB();
    const body = await req.json()

    const result = postSchema.safeParse(body);
    if (!result.success) {
      return Response.json(
        { errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { title, slug, image, category, description, content } = result.data;
    const post = await Post.create({ title, slug, image, category, description, content });
    return Response.json(post, { status: 201 });

  } catch (error) {
    if (error.code === 11000) {
      return Response.json({ error: 'Slug already exists' }, { status: 409 });
    }
    return Response.json({ error: error.message }, { status: 500 });
  }
}