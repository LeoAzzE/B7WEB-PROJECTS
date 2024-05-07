import { createContext, ReactNode, useContext, useState } from "react";

type ModeContextType = {
    theme: boolean,
    changeTheme: (theme: boolean) => void
}

export const ModeContext = createContext<ModeContextType | null>(null)

type Props = {
    children: ReactNode;
}

export const ModeProvider = ({children}: Props) => {
    const [theme, setTheme] = useState<boolean>(false)
    const changeTheme = (theme: boolean) => {
        setTheme(theme)
    }
    return (
        <div>
            <ModeContext.Provider value={{theme, changeTheme}}>
                {children}
            </ModeContext.Provider>
        </div>
    )
}

export const useTheme = () => useContext(ModeContext)