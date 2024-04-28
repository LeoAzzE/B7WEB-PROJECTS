import { Post } from "@/app/types/Post";
import { PostActions, PostReducer } from "@/reducers/postReducer";
import { createContext,Dispatch,ReactNode, useReducer } from "react";

type PostContextType = {
    posts: Post[];
    dispatch: Dispatch<PostActions>
}

export const PostContext = createContext<PostContextType | null>(null)

type Props = {
    children: ReactNode;
}

export const PostProvider = ({children}: Props) => {
    const [posts, dispatch] = useReducer(PostReducer, [])

    return (
        <div>
            <PostContext.Provider value={{posts, dispatch}}>
                {children}
            </PostContext.Provider>
        </div>
    )
}