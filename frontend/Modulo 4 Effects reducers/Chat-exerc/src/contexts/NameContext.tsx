import { ReactNode, useContext, useState } from "react";
import { createContext } from "react";

type NameContextType = {
    name: string
    setName: (name: string) => void
}

export const NameContext = createContext<NameContextType | null>(null)

type Props = {
    children: ReactNode
}

export const NameProvider = ({children} : Props) => {
    const [name, setName] = useState('')
    return (
        <div>
            <NameContext.Provider value={{name, setName}}>
                {children}
            </NameContext.Provider>
        </div>
    )
}
export const NameCtx = () => useContext(NameContext)