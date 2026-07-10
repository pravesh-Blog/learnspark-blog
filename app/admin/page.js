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
    } catch(err) {
      if (err.response?.status === 401) {
        setError('Invalid password, please try again')
      } else {
        setError('Something went wrong, please try again')
      }
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-blue-500 to-blue-700 p-4">

      <form className="bg-white sm:p-8 md:p-10 rounded-lg shadow-lg w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl sm:text-3xl font-bold mb-6 text-center text-gray-500 mt-3">
          Admin Login
        </h1>

        <input
          type="password"
          placeholder="Enter Password"
          className="border border-gray-300 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-10 text-gray-500 ps-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="text-red-500 text-sm mb-4">{error}</p>
        )}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 w-full rounded-2xl font-semibold transition h-12"
        >
          Login
        </button>
      </form>
    </div>
  )
}