import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text, TouchableOpacity, View } from "react-native";

import { PublicStackParamsList } from "@/routes/PublicRoutes";
import { LoginForm } from "./LoginForm";
import { AuthHeader } from "@/components/AuthHeader";
import { DismissKeyboardView } from "@/components/DismissKeyboardView";

export function Login() {

    return (
        <DismissKeyboardView>
            <View className="flex-1 w-full self-center justify-end ">
                <AuthHeader />
                <LoginForm />
            </View>
        </DismissKeyboardView>
    )
}