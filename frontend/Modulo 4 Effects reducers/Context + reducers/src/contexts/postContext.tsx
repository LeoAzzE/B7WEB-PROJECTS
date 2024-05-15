import { Post } from "@/app/types/Post";
import { PostActions, PostReducer } from "@/reducers/postReducer";
import { stringify } from "querystring";
import { createContext,Dispatch,ReactNode, useContext, useEffect, useReducer } from "react";

const STORAGE_KEY = 'postContextContent'

type PostContextType = {
    posts: Post[];
    dispatch: Dispatch<PostActions>
}

export const PostContext = createContext<PostContextType | null>(null)

type Props = {
    children: ReactNode;
}

export const PostProvider = ({children}: Props) => {
    const [posts, dispatch] = useReducer(PostReducer,
        JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    )

    useEffect(()=> {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
    },[posts])

    return (
        <div>
            <PostContext.Provider value={{posts, dispatch}}>
                {children}
            </PostContext.Provider>
        </div>
    )
}

export const usePosts = () => useContext(PostContext)