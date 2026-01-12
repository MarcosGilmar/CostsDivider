import { useCallback, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";

export function NavigationRoutes() {
    const [user, setUser] = useState(undefined)

    const Routes = useCallback(() => {
        if(!user) {
            return <PublicRoutes />
        } else {
            return <PrivateRoutes />
        }
    }, [user]) 
    
    return (
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    )
}