import { PostContext } from "@/contexts/postContext"
import { useContext } from "react"

export const Footer = () => {
    const postCtx = useContext(PostContext)
    return (
        <footer>
            Total de posts: {postCtx?.posts.length}
        </footer>
    )
}