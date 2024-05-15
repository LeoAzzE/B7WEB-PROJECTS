
import { useState } from "react"
import { ChatCtx } from "@/contexts/ChatContext"
type Props = {
    name: string
}

export const InputArea = ( { name }: Props) => {
    const chatCtx = ChatCtx()

    const [textInput, setTextInput] = useState('')
    const handleKeyUp = (event: KeyboardEvent<HTMLInputElement> ) => {
        if (event.code.toLowerCase() === 'enter') {
            if (textInput.trim() !== '') {
                chatCtx?.addMessage(name, textInput)
                setTextInput('')
            }
        }
    }
    return (
        <div>
            <input onKeyUp={handleKeyUp} onChange={(e) => setTextInput(e.target.value)} placeholder={`${name}, Digite uma mensagem(e aperte enter)`}className="outline-none p-3.5 text-sm bg-black w-full h-full border" type="text" value={textInput} />
        </div>
    )
}