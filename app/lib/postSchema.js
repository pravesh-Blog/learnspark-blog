// Ye Zod ka use kar validation ke liye banaya gya hai
import { z } from 'zod'

export const postSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  slug: z.string().min(1, 'Slug is required'),
  description: z.string().min(1, 'Description is required').max(200, 'Description must be under 200 characters'),
  content: z.string().min(20, 'Content must be at least 20 characters long'),
  image: z.string().optional(),
  category: z.string().optional(),
})