import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { PropsWithChildren } from "react";
import { clsx } from "clsx";

type AppButtonMode = "green" | "black"

interface AppButtonParams extends TouchableOpacityProps {
    mode?: AppButtonMode
    leftIcon?: keyof typeof MaterialIcons.glyphMap
}


export function AppButton({children, mode = "green", leftIcon, ...rest}: PropsWithChildren<AppButtonParams>) {
    return (
        <TouchableOpacity 
            {...rest}
            className={clsx("w-full rounded-xl",
            leftIcon && "flex-row justify-center",
            mode === "green" ? "bg-green-600 border-green-200" : "bg-gray-700"


            )}
        >
            <Text>{children}</Text>
        </TouchableOpacity>
    )
}