'use client'
import { useQuery,useQueryClient,useMutation } from "@tanstack/react-query";
import api from "../services/api";

// api axcess on fronted using react-query
export function usePosts(){
    return useQuery({
        queryKey:['posts'],
        queryFn:async()=>{
            const{data}=await api.get('/api/posts');
            return data;
        }
    });
}

// add new data api call by forntend

export function useAddPost(){
    const queryClient=useQueryClient();

    return useMutation({
        mutationFn:async(newPost)=>{
            const{data}=await api.post('/api/posts',newPost);
            return data;
        },
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['posts']})
        }
    })
}

// api se upadate hit
export function useUpdatePost(){
    const queryClient=useQueryClient();
    return useMutation({
        mutationFn:async({id,...post})=>{
            const{data}=await api.put(`/api/posts/${id}`,post);
            return data
        },
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['posts']})
        }
    })
}

// delete api hit 

export function useDeletePost(){
    const queryClient=useQueryClient();
    return useMutation({
        mutationFn:async(id)=>{
            await api.delete(`/api/posts/${id}`)
        },
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['posts']});
        }
    })
}


//get singe route data/page
export function usePost(id){
    return useQuery({
        queryKey:['posts',id],
        queryFn:async()=>{
            const{data}=await api.get(`/api/posts/${id}`);
            return data;
        }
    })
}


// useHooks by slug
export function usePostBySlug(slug){
    return useQuery({
        queryKey:['post',slug],
        queryFn:async()=>{
            const{data}=await api.get("/api/posts")
            return data.find(post=>post.slug===slug);
        }
    })
}