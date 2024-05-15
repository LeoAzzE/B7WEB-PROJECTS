import { createContext, useState, ReactNode } from "react";

type CountContextType = {
    onlineCount: number;
    setOnlineCount: (n: number) => void
}
export const CountContext = createContext<CountContextType | null>(null);

type Props = { children: ReactNode; }

export const CountProvider = ({ children }: Props) => {
    const [onlineCount, setOnlineCount] = useState(45)
    return (
        <div>
            <CountContext.Provider value={{onlineCount, setOnlineCount}}>
                {children}
            </CountContext.Provider>
        </div>
    )
}