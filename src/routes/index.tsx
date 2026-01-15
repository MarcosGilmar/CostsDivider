import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { useAuthContext } from "@/context/auth.context";

export function NavigationRoutes() {
    const { token, user} = useAuthContext()

    const Routes = useCallback(() => {
        if(!user || !token) {
            return <PublicRoutes />
        } else {
            return <PrivateRoutes />
        }
    }, [user, token]) 
    
    return (
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    )
}