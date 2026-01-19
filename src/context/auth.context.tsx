import { FormLoginParams } from "@/screens/Login/LoginForm"
import { FormRegisterParams } from "@/screens/Register/RegisterForm"
import { createContext, ReactNode, useContext, useState } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as authService from "@/shared/services/costs-divider/auth-service"
import { IUser } from "@/shared/interfaces/user-interface"
import { IAuthenticateResponse } from "@/shared/interfaces/https/authenticate-response";

export type AuthContextType = {
    user: IUser | null
    token: string | null
    handleAuthenticate: (params: FormLoginParams) => Promise<void>
    handleRegister: (params: FormRegisterParams) => Promise<void>
    handleLogout: () => void
    restoreUserSession: () => Promise<string | null>
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export function AuthContextProvider({ children}: {children: ReactNode}) {
    const [user, setUser] = useState<IUser | null>(null)
    const [token, setToken] = useState<string | null>(null)

    async function handleAuthenticate(userData: FormLoginParams) {
        const {token, ...user} = await authService.authenticate(userData)
        await AsyncStorage.setItem("costs-divider", JSON.stringify({user, token}))
        setUser(user)
        setToken(token)
    }
    
    async function handleRegister(formData: FormRegisterParams) {
        const {token, ...user} = await authService.register(formData)
        await AsyncStorage.setItem("costs-divider", JSON.stringify({user, token}))
        setUser(user)
        setToken(token)
    }
    
    async function handleLogout() {
        await AsyncStorage.clear() 
        setUser(null)
        setToken(null)
    }

    async function restoreUserSession() {
        const userData = await AsyncStorage.getItem("costs-divider")

        if(userData) {
            const {token, ...user} = JSON.parse(userData) as IAuthenticateResponse
            setUser(user)
            setToken(token)
        }   
        return userData
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                handleAuthenticate,
                handleRegister,
                handleLogout,
                restoreUserSession
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