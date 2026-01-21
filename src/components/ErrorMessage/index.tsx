import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/shared/colors";
import { PropsWithChildren } from "react";

export function ErrorMessage({ children}: PropsWithChildren) {
    return (
        <View className="flex-row w-[82%] items-center gap-3 self-center">
            <MaterialIcons name="error-outline" size={16} color={colors.feedback["danger-light"]}/>
            <Text className="text-red-500">{children}</Text>
        </View>
    )
}