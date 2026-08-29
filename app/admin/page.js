'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import api from "../services/api"

export default function AdminLogin() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      const { data } = await api.post('/api/admin/login', { password })

      if (data.success) {
        router.push('/admin/dashboard')
      }
    } catch (err) {
      if (err.response?.status === 401) {
        setError('Invalid password, please try again')
      } else {
        setError('Something went wrong, please try again')
      }
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-blue-500 to-blue-700 p-4 sm:p-6 dark:from-[#111827] dark:to-[#1E293B]">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-lg bg-white p-5 shadow-xl sm:p-8 md:p-10 dark:bg-[#242424] dark:border dark:border-[#3A3A3A]"
      >

        <h1 className="mt-2 mb-6 text-center text-2xl font-bold text-gray-700 sm:text-3xl dark:text-[#F5F5F5]">
          Admin Login
        </h1>

        <input
          type="password"
          placeholder="Enter Password"
          className="mb-4 h-11 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-800 placeholder:text-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 sm:h-12 sm:text-base dark:border-[#4A4A4A] dark:bg-[#1A1A1A] dark:text-[#F5F5F5] dark:placeholder:text-[#888] dark:focus:border-[#7FB8A0] dark:focus:ring-[#7FB8A0]/20"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="mb-4 text-sm text-red-500 dark:text-red-400">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="h-11 w-full rounded-xl bg-blue-500 p-3 font-semibold text-white transition hover:bg-blue-600 active:scale-[0.99] sm:h-12 dark:bg-[#2C5F4F] dark:hover:bg-[#36745F]"
        >
          Login
        </button>

      </form>

    </div>
  )
}