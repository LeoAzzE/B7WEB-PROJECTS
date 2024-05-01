import { useTheme } from "@/contexts/DarkModeContext";



const Titulo = () => {
    const themeCtx = useTheme()
        return (
            <div>
                <h1 className={ `text-3xl font-style: italic ${themeCtx?.theme ? 'text-white' : 'text-black'}`}>Titulo da Pagina</h1>
            </div>
        )
    }

export default Titulo;