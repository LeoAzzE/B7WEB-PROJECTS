import { ReactNode, useState } from "react";
import { createContext } from "react";

type UserContextType = {
    user: string;
    setUser: (name: string) => void
}

export const UserContext = createContext<UserContextType | null>(null)

type Props = {
    children: ReactNode;
}
export const UserProvider = ({ children }: Props) => {
    const [user, setUser] = useState<string>('Marcos')
    return (
        <div>
            <UserContext.Provider value={{user, setUser}}>
                {children}
            </UserContext.Provider>
        </div>
    )
}