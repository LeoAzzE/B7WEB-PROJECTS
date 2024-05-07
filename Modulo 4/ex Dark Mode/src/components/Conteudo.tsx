import { useTheme } from "@/contexts/DarkModeContext"

const Conteudo = () => {
    const ThemeCtx = useTheme()
    return (
        <div className="mt-7">
            <h1 className={`${ThemeCtx?.theme ? 'text-white' : 'text-black'}`}>Conteudo da Pagina</h1>
        </div>
    )
}

export default Conteudo