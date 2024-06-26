import { Post } from "@/app/types/Post";
import { createContext, useState, ReactNode } from "react";

type PostContextType = {
    posts: Post[];
    addPost: (title: string, body: string) => void
}

export const PostContext = createContext<PostContextType | null>(null)

type Props = {
    children: ReactNode;
}

export const PostProvider = ({children}: Props) => {
    const [posts, setPosts] = useState<Post[]>([])
    
    const addPost = (title: string, body: string) => {
        setPosts([...posts,{ id: posts.length, title, body }])
    }

    return (
        <div>
            <PostContext.Provider value={{posts, addPost}}>
                {children}
            </PostContext.Provider>
        </div>
    )
}