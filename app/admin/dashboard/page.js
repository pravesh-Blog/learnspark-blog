'use client'
import { usePosts } from "@/app/hooks/usePost";
import Link from "next/link";
import AdminSidebar from "@/app/components/AdminSidebar";

export default function AdminDashboard(){
    const{data:posts=[]}=usePosts();

    return(
      <div className="flex min-h-screen bg-green-800">

        <AdminSidebar/>

{/* Main Content */}
    <div className="flex-1 p-8 bg-gray-100">
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-2 lg:grid-3 gap-4 mb-8">

            <div className="bg-white p-6 rounded shadow">
                <p className="text-gray-600">Total Posts</p>
                <p className="text-3xl font-bold">{posts.length}</p>
            </div>


            <div className="bg-white p-6 rounded shadow">
               <p className="text-gray-600">Total views</p>
               <p className="text-3xl font-bold">
                {posts.reduce((sum,p)=>sum+(p.views || 0),0)}
               </p>
            </div>
            

            <div className="bg-white p-6 rounded shadow">
                <p className="text-gray-600">Last Post</p>
                <p className="text-3xl font-bold">
                    {posts.length>0 ? new Date(posts[0].createdAt).toLocaleDateString('en-IN'):'N/A'}
                </p>

            </div>



        </div>
    </div>
{/* End main content */}

      </div>
    );
}