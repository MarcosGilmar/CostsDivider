import { Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import { Summary } from '@/screens/Summary';
import { Activities } from '@/screens/Activities';
import { Participants } from '@/screens/Participants';
import { colors } from '@/shared/colors';
import { privateScreenOptions } from './config';

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
            screenOptions={privateScreenOptions}
        >
            <PrivateTab.Screen name="Activities" component={Activities}/>
            <PrivateTab.Screen name="Summary" component={Summary}/>
            <PrivateTab.Screen name="Participants" component={Participants}/>
        </PrivateTab.Navigator>
    )
}