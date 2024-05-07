import { ModeContext } from "@/contexts/DarkModeContext";
import { useContext } from "react";
const Button = () => {
    const ThemeCtx = useContext(ModeContext)

    return (
        <div className={`mt-5 w-[120px] h-[50px] flex items-center justify-center
         ${ThemeCtx?.theme ? 'bg-white' : 'bg-black'} rounded-lg p-5 cursor-pointer`}>
            <button className={`text-sm ${ThemeCtx?.theme ? 'text-black font-bold' : 'text-white'}`}>Clique aqui</button>
        </div>
    )
}

export default Button;