import { colors } from "@/shared/colors"
import { MaterialIcons } from "@expo/vector-icons"
import { Image, TouchableOpacity } from "react-native"
import { PrivateParamsList } from "."
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs"
import { useAuthContext } from "@/context/auth.context"

type RouteConfig = {
    route: {name: keyof PrivateParamsList}
}

export function Logout() {
    const {handleLogout} = useAuthContext()

    return (
        <TouchableOpacity 
            className='mx-5'
            onPress={handleLogout}
        >
            <MaterialIcons 
                name="logout" 
                color={colors.feedback['danger-light']}
                size={25}    
            />
        </TouchableOpacity>
    )
}


export const privateScreenOptions = ({route}: RouteConfig): BottomTabNavigationOptions => ({
    headerStyle: {
        backgroundColor: "#111827"             
    },
    tabBarStyle: {
        height: 97,
        borderTopWidth: 0,
    },
    tabBarIconStyle: {
        marginBottom: 0,
    },
    tabBarLabelStyle: {
        marginTop: 5,
        fontSize: 14,
    },
    tabBarActiveBackgroundColor: "#1f2937",
    tabBarInactiveBackgroundColor: "#1f2937",
    tabBarActiveTintColor: colors.gray[100],
    tabBarInactiveTintColor: colors.gray[400],
    tabBarIcon: ({focused}) => {
        let iconName: keyof typeof MaterialIcons.glyphMap
        
        if(route.name === "Resumo") {
            iconName = "pie-chart"
        } else if (route.name === "Participantes"){
            iconName = "supervised-user-circle"
        } else {
            iconName = "format-list-bulleted"
        }
        return (
            <MaterialIcons
                name={iconName}
                color={focused ? colors.accent['green-base'] : colors.gray[400] } 
                size={30}
            />   
        )
    },
    headerTitle: () => <Image source={require("@/assets/Header-Logo.png")}/>,
    headerRight: () => (
        <Logout />
    )
})              