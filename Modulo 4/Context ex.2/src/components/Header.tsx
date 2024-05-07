import { PostContext } from "@/contexts/postContext"
import { useContext, useState } from "react"

export const Header = () => {
    const postCtx = useContext(PostContext)
    const [titleInput, setTitleInput] = useState('')
    const [bodyInput, setBodyInput] = useState('')

    const handleAddButton = () => {
        if (titleInput && bodyInput) {
            postCtx?.addPost(titleInput, bodyInput)
            setTitleInput('')
            setBodyInput('')
        }
    }
    return (
        <header>
            <h1 className="text-3xl text-center">Titulo da pagina</h1>
            <div className="max-w-xl flex flex-col gap-3 border border-dotted border-gray-400 p-3 my-4">
                <input value={titleInput} onChange={e => setTitleInput(e.target.value)} className="border border-gray-300 p-2 text-black text-xl" type="text" placeholder="Digite um titulo" />
                <textarea value={bodyInput} onChange={e => setBodyInput(e.target.value)} className="h-24 border border-gray-300 p-2 text-black text-xl" placeholder="Digite um corpo">
                </textarea>
                <button onClick={handleAddButton} className="bg-blue-500 p-3 text-white rounded-md">Adicionar</button>
            </div>
        </header>
    )
}