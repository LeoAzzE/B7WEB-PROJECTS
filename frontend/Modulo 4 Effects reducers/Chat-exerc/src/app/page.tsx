'use client'
import { NameProvider } from "@/contexts/NameContext";
import ContainerArea from "@/components/ContainerArea";
import { ChatProvider } from "@/contexts/ChatContext";

const Page = () => {
  return (
    <NameProvider>
      <ChatProvider>
        <div className="container mx-auto">
            <div>
              <h1 className="text-center text-2xl mt-2">Chat Simples</h1>
              <ContainerArea/>
            </div>
        </div>
      </ChatProvider>
    </NameProvider>
  )
}

export default Page;