import { FormLoginParams } from "@/screens/Login/LoginForm"
import { FormRegisterParams } from "@/screens/Register/RegisterForm"
import { createContext, ReactNode, useContext, useState } from "react"

import * as authService from "@/shared/services/costs-divider/auth.service"
import { IUser } from "@/shared/interfaces/user-interface"

export type AuthContextType = {
    user: IUser | null
    token: string | null
    handleAuthenticate: (params: FormLoginParams) => Promise<void>
    handleRegister: (params: FormRegisterParams) => Promise<void>
    handleLogout: () => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export function AuthContextProvider({ children}: {children: ReactNode}) {
    const [user, setUser] = useState<IUser | null>(null)
    const [token, setToken] = useState<string | null>(null)

    async function handleAuthenticate(userData: FormLoginParams) {
        const {token, ...user} = await authService.authenticate(userData)
        console.log(token, user)
        setUser(user)
        setToken(token)
    }
    
    async function handleRegister(formData: FormRegisterParams) {
        const {token, ...user} = await authService.register(formData)
        console.log(token, user)
        setUser(user)
        setToken(token)
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