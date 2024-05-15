import Conteudo from "@/components/Conteudo";
import Titulo from "@/components/Titulo";
import Button from "@/components/Button"
import MudarEstado from "@/components/MudarEstado";
import { useTheme } from "@/contexts/DarkModeContext";


const Container = () => {
    const ThemeCtx = useTheme()
    return (
        <div className={`overflow-auto h-screen w-screen ${ThemeCtx?.theme ? 'bg-black' : 'bg-white'}`}>
    <div className="container mx-auto">
        <MudarEstado/>
        <Titulo/>
        <Conteudo/>
        <Button/>
    </div>
        </div>
    )
}
export default Container