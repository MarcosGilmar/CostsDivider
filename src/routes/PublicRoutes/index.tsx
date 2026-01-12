import { createStackNavigator } from "@react-navigation/stack"

import { Login } from "@/screens/Login"
import { Register } from "@/screens/Register"

export type PublicStackParamsList = {
    Login: undefined,
    Register: undefined
}

const PublicStack = createStackNavigator<PublicStackParamsList>()

export function PublicRoutes() {
    return (
        <PublicStack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
            }}
        >
            <PublicStack.Screen name="Login" component={Login} />
            <PublicStack.Screen name="Register" component={Register} />
        </PublicStack.Navigator>
    )
}