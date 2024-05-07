import { UserContext } from "@/contexts/userContext"
import { useContext } from "react"

export const User = () => {
    const userName = useContext(UserContext)
    const handleClickUser = () => {
       (userName?.user === 'Leonardo' ? userName.setUser('Marcos') : userName?.setUser('Leonardo'))
    }
    return (
        <div className="flex">
            <div className="my-auto mr-5">
                <h5>{userName?.user}</h5>
            </div>
            <button onClick={handleClickUser} className="w-[70px] cursor-pointer bg-red-600 rounded-lg">Trocar usuário</button>
        </div>
    )
}
