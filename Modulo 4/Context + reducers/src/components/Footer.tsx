import { usePosts } from "@/contexts/postContext"

export const Footer = () => {
    const postCtx = usePosts();
    return (
        <footer>
            Total de posts: {postCtx?.posts.length}
        </footer>
    )
}