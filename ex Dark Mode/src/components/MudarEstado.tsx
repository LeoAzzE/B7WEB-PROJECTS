import { useTheme } from "@/contexts/DarkModeContext"

const MudarEstado = () => {
    const themeCtx = useTheme()
    const handleClick = () => {
        themeCtx?.changeTheme(!themeCtx.theme)
    }

    return (
        <div onClick={handleClick} className={`fixed top-0 left-0 right-0 text-center cursor-pointer ${themeCtx?.theme ? 'text-white' : 'text-black'}`}>
            Mudar para {themeCtx?.theme ? 'Light' : 'Dark' }
        </div>
    )
}

export default MudarEstado