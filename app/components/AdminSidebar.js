import Link from "next/link";
import api from "../services/api";
import { usePathname, useRouter } from "next/navigation";

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (href) => {
    if (href === '/admin/posts') {
      return pathname === '/admin/posts'
    }

    return pathname === href || pathname.startsWith(href + '/')
  }

  const handleLogout = async () => {
    await api.post('/api/admin/logout')
    router.push('/admin')
  }

  return (
    <aside className="w-full bg-gray-800 p-4 text-white sm:p-5 md:min-h-screen md:w-64 md:p-6 dark:bg-[#242424] dark:border-r dark:border-[#3A3A3A]">

      <h2 className="mb-5 text-2xl font-bold sm:mb-7 sm:text-3xl md:mb-10">
        Admin
      </h2>

      <nav className="flex flex-col gap-2 md:space-y-3">

        <Link
          href="/admin/dashboard"
          className={`block rounded p-3 transition-colors ${
            isActive('/admin/dashboard')
              ? 'bg-blue-500'
              : 'hover:bg-gray-700 dark:hover:bg-[#303030]'
          }`}
        >
          Dashboard
        </Link>

        <Link
          href="/admin/posts"
          className={`block rounded p-3 transition-colors ${
            isActive('/admin/posts')
              ? 'bg-blue-500'
              : 'hover:bg-gray-700 dark:hover:bg-[#303030]'
          }`}
        >
          Posts
        </Link>

        <Link
          href="/admin/posts/new"
          className={`block rounded p-3 transition-colors ${
            isActive('/admin/posts/new')
              ? 'bg-blue-500'
              : 'hover:bg-gray-700 dark:hover:bg-[#303030]'
          }`}
        >
          New Post
        </Link>

        <button
          onClick={handleLogout}
          className="mt-5 block w-full rounded p-3 text-left transition-colors hover:bg-red-600 md:mt-10"
        >
          Logout
        </button>

      </nav>

    </aside>
  )
}