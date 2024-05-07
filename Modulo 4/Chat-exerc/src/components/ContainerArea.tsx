import { useState } from "react";
import ChatArea from "./ChatArea";
import AskArea from "./AskArea";

const ContainerArea = () => {
    const [chatActive, setChatActive] = useState<boolean>(false)

    const handleChatActive = () => {
        setChatActive(true)
    }

    return (
        <div className="flex items-center justify-center mt-5">
            {chatActive ? (
                <ChatArea />
            ) : (
                <AskArea onStartChat={handleChatActive} />
            )}
        </div>
    )
}

export default ContainerArea