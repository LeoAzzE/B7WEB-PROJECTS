import { useState } from "react"

const AskArea = ({ onStartChat } : any) => {
    const [name, setName] = useState('')

    const handleClick = () => {
        if (name !== '') {
            onStartChat()
        }
    }

    return (
        <div className="text-center flex items-center justify-center mt-20">
            <div className="flex flex-col w-[500px] h-[50px]">
                <div className="text-left text-xl mb-4">
                    Qual o seu nome ?
                </div>
                <div className="flex gap-5">        
                    <input className="bg-slate-800 flex-1 p-3 rounded-md outline-none" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <button onClick={handleClick} className="cursor-pointer border border-gray-50 p-3 rounded-md">Iniciar Chat</button>
                </div>
            </div>
        </div>
    )
}

export default AskArea