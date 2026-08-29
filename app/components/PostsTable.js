'use client'
import Link from "next/link";

export default function PostsTable({posts,onDelete}){
    return(
    <div className="w-full overflow-x-auto rounded shadow bg-white dark:bg-[#242424]">

        <table className="w-full">
            <thead className="bg-gray-200 dark:bg-[#303030]">

                <tr>
                    <th className="p-4 text-left text-gray-700 dark:text-[#F5F5F5]">Title</th>
                    <th className="p-4 text-left text-gray-700 dark:text-[#F5F5F5]">Date</th>
                    <th className="p-4 text-left text-gray-700 dark:text-[#F5F5F5]">Views</th>
                    <th className="p-4 text-left text-gray-700 dark:text-[#F5F5F5]">Actions</th>
                </tr>
            </thead>



            <tbody>
                {
                  posts.map((post)=>(
                    <tr key={post._id} className="border-b border-gray-200 dark:border-[#3A3A3A] hover:bg-gray-50 dark:hover:bg-[#303030]">

                        <td className="p-4 text-gray-800 dark:text-[#F5F5F5]">{post.title}</td>

                        <td className="p-4 text-gray-600 dark:text-[#BDBDBD]">{new Date(post.createdAt).toLocaleDateString('en-IN')}
                        </td>

                        <td className="p-4 text-gray-600 dark:text-[#BDBDBD]">
                            {post.views || 0}
                        </td>


                        <td className="p-4">
                          <div className="flex items-center gap-4">

                            <Link href={`/admin/posts/${post._id}`} className="text-blue-500 hover:underline dark:text-[#7FB8A0]">
                               Edit
                            </Link>

                            <button onClick={()=>onDelete(post._id)} className="text-red-500 hover:underline dark:text-red-400">
                               Delete
                            </button>
                        </div>
                        </td>

                        
                    </tr>
                  ))
                }
            </tbody>


        </table>
    </div>
    );
}