import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Summary } from '@/screens/Summary';

const PrivateTab = createBottomTabNavigator()

export function PrivateRoutes() {


    return (
        <PrivateTab.Navigator>
            <PrivateTab.Screen name="Summary" component={Summary}/>
        </PrivateTab.Navigator>
    )
}