import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getPost, getPosts, getUsers } from "./api";
import { postsInitialData } from "@/data/postsInitialData";
import { queryClient } from "./queryClient";

export const usePosts = (limit: number , start: number) => {
    const query = useQuery({ queryKey: ['posts', {limit, start}], 
    queryFn: () => getPosts(limit, start),
    placeholderData: postsInitialData
    //initialData: postsInitialData
    //placeholderData: keepPreviousData (mantem os dados na tela enquanto carrega os proximos)
})
    return query
}

export const usePost = (id: number) => useQuery({
    queryKey: ['posts', id],
    queryFn: () => getPost(id),
})

export const useUsersPrefetch = () => {
    queryClient.prefetchQuery({
    queryKey: ['users'],
    queryFn: () => getUsers,
    })
}