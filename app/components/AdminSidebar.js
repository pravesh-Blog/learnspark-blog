import Link from "next/link";
import api from "../services/api";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function AdminSidebar(){
    const pathname=usePathname();
    const router=useRouter();
    
    const isActive=(href)=>{
        if(href==='/admin/posts'){
        return pathname==='/admin/posts'
    }
    return pathname===href || pathname.startsWith(href +'/');
    }

    const handleLogout=async()=>{
        await api.post('/api/admin/logout');
        router.push('/admin');
    }

    return(
        <div className="w-64 bg-gray-800 text-white p-6 ">
            <h2 className="text-3xl font-bold mb-10">Admin</h2>
            <nav className="space-y-3">

                <Link href="/admin/dashboard" 
                className={`block p-3 rounded ${isActive('/admin/dashboard')? 'bg-blue-500':'hover:bg-gray-700'}`}
                >
                Dashboard
                </Link>

                <Link href="/admin/posts"
                className={`block p-3 rounded ${isActive('/admin/posts')? 'bg-blue-500':'hover:bg-gray-700'}`}
                >
                Posts
                </Link>

                <Link href="/admin/posts/new"
                className={`block p-3 rounded ${isActive('/admin/posts/new')? 'bg-blue-500':'hover:bg-gray-700'}`}
                >
                New Post
                </Link>

                {/* logout button */}
                 <button 
                 className="block w-full text-left p-3 rounded hover:bg-red-600 transition mt-10"

                 onClick={handleLogout}
                 >
                     Logout
                 </button>

            </nav>
        </div>
    );
}