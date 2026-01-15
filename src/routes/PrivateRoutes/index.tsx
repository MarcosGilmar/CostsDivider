import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Summary } from '@/screens/Summary';
import { Activities } from '@/screens/Activities';
import { Participants } from '@/screens/Participants';

export type PrivateParamsList = {
    Activities: undefined
    Summary: undefined
    Participants: undefined
}

const PrivateTab = createBottomTabNavigator<PrivateParamsList>()

export function PrivateRoutes() {
    return (
        <PrivateTab.Navigator
            initialRouteName='Activities'
            screenOptions={{
                headerShown: false
            }}
        >
            <PrivateTab.Screen name="Activities" component={Activities}/>
            <PrivateTab.Screen name="Summary" component={Summary}/>
            <PrivateTab.Screen name="Participants" component={Participants}/>
        </PrivateTab.Navigator>
    )
}