import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getPost, getPosts } from "./api";

export const usePosts = (limit: number , start: number) => {
    const query = useQuery({ queryKey: ['posts', {limit, start}], 
    queryFn: () => getPosts(limit, start),
    //placeholderData: keepPreviousData (mantem os dados na tela enquanto carrega os proximos)
})
    return query
}

export const usePost = (id: number) => useQuery({
    queryKey: ['posts', id],
    queryFn: () => getPost(id),
})