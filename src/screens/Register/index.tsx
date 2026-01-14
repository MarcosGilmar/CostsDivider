import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text, TouchableOpacity, View } from "react-native";

import { PublicStackParamsList } from "@/routes/PublicRoutes";
import { DismissKeyboardView } from "@/components/DismissKeyboardView";
import { AuthHeader } from "@/components/AuthHeader";
import { RegisterForm } from "./RegisterForm";

export function Register() {
    const navigation = useNavigation<StackNavigationProp<PublicStackParamsList>>()

    return (
        <DismissKeyboardView>
            <View className="flex-1 w-full justify-end">
                <AuthHeader />
                <RegisterForm />
            </View>
        </DismissKeyboardView>
    
    )
}