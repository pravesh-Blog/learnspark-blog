// Ye Zod ka use kar validation ke liye banaya gya hai without draft
// import { z } from 'zod'

// export const postSchema = z.object({
//   title: z.string().min(5, 'Title must be at least 5 characters'),
//   slug: z.string().min(1, 'Slug is required'),
//   description: z.string().min(1, 'Description is required').max(200, 'Description must be under 200 characters'),
//   content: z.string().min(20, 'Content must be at least 20 characters long'),
//   image: z.string().optional(),
//   category: z.string().optional(),
//   status:z.enum(['draft','published']).optional()
// })

// agar draft me save ho to koi condition nahi

import { z } from 'zod'

export const postSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  slug: z.string().min(1, 'Slug is required'),
  description: z.string().optional(),
  content: z.string().optional(),
  image: z.string().optional(),
  category: z.string().optional(),
  status: z.enum(['draft', 'published']).optional(),
}).refine((data) => {
  // Agar published hai, tabhi strict validation
  if (data.status === 'published') {
    return data.description && data.description.length >= 1 && data.description.length <= 200
  }
  return true
}, {
  message: 'Description is required for published posts',
  path: ['description'],
}).refine((data) => {
  if (data.status === 'published') {
    return data.content && data.content.length >= 20
  }
  return true
}, {
  message: 'Content must be at least 20 characters for published posts',
  path: ['content'],
})