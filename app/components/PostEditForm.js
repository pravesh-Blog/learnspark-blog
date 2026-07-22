'use client'
import { useUpdatePost} from "@/app/hooks/usePost";
import { useRouter } from "next/navigation";
import { useState } from "react";
//for validation with zod
import { postSchema } from "@/app/lib/postSchema";

export default function PostEditForm({post}){
   const[title,setTitle]=useState(post?.title || '');
   const[slug,setSlug]=useState(post?.slug || '');
   const[image,setImage]=useState(post?.image || '');
   const[category,setCategory]=useState(post?.category || '');
   const[status,setStatus]=useState(post?.status || 'draft');
   const[description,setDescription]=useState(post?.description ||'');
   const[content,setContent]=useState(post?.content || '');

   const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(post?.image || '');
    const [uploading, setUploading] = useState(false);

   // for validation
    const[errors,setErrors]=useState({});
   
   const updatePost=useUpdatePost();
   const router=useRouter();

   const handleAutoSlug=(title)=>{
        setTitle(title);
        const cleanSlug=title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
        setSlug(cleanSlug);
      }
// after submit
  const handleSubmit = async (e) => {
  e.preventDefault()

  const result = postSchema.safeParse({ title, slug, image, category,status, description, content })

  if (!result.success) {
    setErrors(result.error.flatten().fieldErrors)
    return;
  }

  setErrors({})

  try {
    let imageUrl = image

    // Agar naya image file select kiya hai
    if (imageFile) {
      setUploading(true)
      const formData = new FormData()
      formData.append('file', imageFile)

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      })

      const data = await res.json()
      imageUrl = data.url
      setUploading(false)
    }

    await updatePost.mutateAsync({ id: post._id, title, slug, image: imageUrl, category,status, description, content })
    router.push('/admin/posts');

  } catch (error) {
    setUploading(false)
    if (error.response?.status === 409) {
      setErrors({ slug: ['Slug already exists, please change the title'] })
    } else {
      setErrors({ general: ['Something went wrong, please try again'] })
    }
  }
}

  
  return(
     <form className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8" onSubmit={handleSubmit}>

                <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">
                        Title
                </label>

                    <input
                      type="text"
                      required 
                      className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={title}
                      onChange={(e)=>handleAutoSlug(e.target.value)}
                      suppressHydrationWarning={true}
                    />

                    {
                    errors.title &&<p className="text-red-500 text-sm mt-1">{errors.title[0]}</p>
                    }
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2">Slug</label>

                    <input
                      type="text"
                      required 
                      className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={slug}
                      onChange={(e)=>setSlug(e.target.value)}
                      suppressHydrationWarning={true}
                    />

                    {
                    errors.slug &&<p className="text-red-500 text-sm mt-1">{errors.slug[0]}</p>
                    }
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2">Image</label>
                  
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {const file = e.target.files[0]
                      setImageFile(file)
                      setImagePreview(URL.createObjectURL(file))
                    }}
                    className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  {imagePreview && (
                    <img src={imagePreview} alt="Preview" className="mt-2 h-40 object-cover rounded" />
                  )}

                  {errors.image && (
                    <p className="text-red-500 text-sm mt-1">{errors.image[0]}</p>
                  )}
                </div>
                

                <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="General">General</option>
                  <option value="AI">AI</option>
                  <option value="Career Tips">Career Tips</option>
                  <option value="Tech">Tech</option>
                  <option value="Tutorials">Tutorials</option>
                </select>
              </div>


              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="draft">Draft (Save privately)</option>
                  <option value="published">Published (Live on blog)</option>
                </select>
              </div>

                
                <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2">Description</label>

                    <textarea 
                    rows="3" 
                    className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                    suppressHydrationWarning={true}
                    >
                  </textarea>

                  {
                    errors.description &&<p className="text-red-500 text-sm mt-1">{errors.description[0]}</p>
                  }

                </div>

                <div>
                    <label className="block text-sm font-semibold mb-2">Content
                    </label>

                    <textarea 
                    rows="10" 
                    className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={content}
                    onChange={(e)=>setContent(e.target.value)}
                    suppressHydrationWarning={true}
                    >
                  </textarea>

                   {
                    errors.content &&<p className="text-red-500 text-sm mt-1">{errors.content[0]}</p>
                    }

                </div>
              {
                errors.general && (
                    <p className="text-red-500 text-sm mb-4">{errors.general[0]}</p>
                  )
               }

                <button
                    type="submit"
                    disabled={uploading}
                    className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white p-3 rounded font-semibold transition disabled:opacity-50"
                  >
                    {uploading ? 'Uploading...' : 'Update Post'}
                  </button>

              </form>

 );
}