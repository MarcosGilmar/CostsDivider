import { FormLoginParams } from "@/screens/Login/LoginForm"
import { FormRegisterParams } from "@/screens/Register/RegisterForm"
import { createContext, ReactNode, useContext, useState } from "react"

export type AuthContextType = {
    user: null
    token: string | null
    handleAuthenticate: (params: FormLoginParams) => Promise<void>
    handleRegister: (params: FormRegisterParams) => Promise<void>
    handleLogout: () => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export function AuthContextProvider({ children}: {children: ReactNode}) {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)

    async function handleAuthenticate({email, password}: FormLoginParams) {

    }
    
    async function handleRegister({email, name, password}: FormRegisterParams) {

    }
    
    function handleLogout() {

    }
    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                handleAuthenticate,
                handleRegister,
                handleLogout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthContext() {
    const context = useContext(AuthContext)

    return context
}