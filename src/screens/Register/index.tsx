import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text, TouchableOpacity, View } from "react-native";

import { PublicStackParamsList } from "@/routes/PublicRoutes";

export function Register() {
    const navigation = useNavigation<StackNavigationProp<PublicStackParamsList>>()

    return (
        <View className="flex-1 items-center justify-center">
            <Text>TELA DE REGISTRO</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>Logar</Text>
            </TouchableOpacity>
        </View>
    )
}