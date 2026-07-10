'use client'
import Link from "next/link";

export default function PostsTable({posts,onDelete}){
    return(
    <div className="bg-white rounded shadow overflow-hidden">

        <table className="w-full">
            <thead className="bg-gray-200">

                <tr>
                    <th className="p-4 text-left">Title</th>
                    <th className="p-4 text-left">Date</th>
                    <th className="p-4 text-left">Views</th>
                    <th className="p-4 text-left">Actions</th>
                </tr>
            </thead>



            <tbody>
                {
                  posts.map((post)=>(
                    <tr key={post._id} className="border-b hover:bg-gray-50">

                        <td className="p-4">{post.title}</td>

                        <td className="p-4">{new Date(post.createdAt).toLocaleDateString('en-IN')}
                        </td>

                        <td className="p-4">
                            {post.views || 0}
                        </td>


                        <td className=" p-4 space-x-2">

                            <Link href={`/admin/posts/${post._id}`} className="text-blue-500 hover:underline">
                               Edit
                            </Link>

                            <button onClick={()=>onDelete(post._id)} className="text-red-500 hover:underline">
                               Delete
                            </button>
                        </td>

                        
                    </tr>
                  ))
                }
            </tbody>


        </table>
    </div>
    );
}