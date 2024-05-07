import {User} from "./User"

export const Header = () => {
    return (
        <header>
            <div className="flex justify-between items-center bg-slate-700">
                <div>
                    <h1 className="text-3xl">Titulo da pagina</h1>
                </div>  
                <User/>
            </div>
        </header>
    )
}