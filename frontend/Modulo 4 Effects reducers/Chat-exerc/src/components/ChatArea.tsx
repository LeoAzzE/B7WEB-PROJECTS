import { NameCtx } from "@/contexts/NameContext"
import { useState } from "react"
import { InputArea } from "./InputArea"
import { ChatCtx } from "@/contexts/ChatContext"

const ChatArea = () => {
    const nameCtx = NameCtx()
    const chatCtx = ChatCtx()
    if (!nameCtx?.name) return null

    return (
        <div className="border border-white/30 rounded-md">
            <div className="h-96 p-3 overflow-y-scroll w-[500px] flex flex-col">
                {chatCtx?.chat.map(item => (
                    <div className={`${item.user === nameCtx?.name ? 'self-start' : 'self-end'} mt-3`} key={item.id}>
                        <div className="font-bold">{item.user}</div>
                        <div>{item.text}</div>
                    </div>
                ))}
            </div>
            <div className="text-3xl flex flex-col">
                <InputArea name={nameCtx?.name}/>
                <InputArea name={'bot'}/>
            </div>
        </div>
    )
    
}

export default ChatArea