import { Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import { Summary } from '@/screens/Summary';
import { Activities } from '@/screens/Activities';
import { Participants } from '@/screens/Participants';
import { colors } from '@/shared/colors';
import { privateScreenOptions } from './config';

export type PrivateParamsList = {
    Atividades: undefined
    Resumo: undefined
    Participantes: undefined
}

const PrivateTab = createBottomTabNavigator<PrivateParamsList>()

export function PrivateRoutes() {
    return (
        <PrivateTab.Navigator
            initialRouteName='Atividades'
            screenOptions={privateScreenOptions}
        >
            <PrivateTab.Screen name="Atividades" component={Activities}/>
            <PrivateTab.Screen name="Resumo" component={Summary}/>
            <PrivateTab.Screen name="Participantes" component={Participants}/>
        </PrivateTab.Navigator>
    )
}