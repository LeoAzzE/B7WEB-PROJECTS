import { CountContext } from "@/contexts/CountContext"
import { OnlineUsers } from "./OnlineUsers"
import { useContext } from "react"

export const Header = () => {
    const countCtx = useContext(CountContext)
    return (
        <header>
            <h1 className="text-3xl">Titulo da pagina ({countCtx?.onlineCount})</h1>
            <OnlineUsers/>
        </header>
    )
}