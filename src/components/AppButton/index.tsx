import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { PropsWithChildren } from "react";
import { clsx } from "clsx";

type AppButtonMode = "green" | "black"

interface AppButtonParams extends TouchableOpacityProps {
    mode?: AppButtonMode
    leftIcon?: keyof typeof MaterialIcons.glyphMap
    width?: "default" | "variant" 
}

export function AppButton({children, mode = "green", leftIcon, width = "default", ...rest}: PropsWithChildren<AppButtonParams>) {
    return (
        <TouchableOpacity 
            {...rest}
            className={clsx("rounded-3xl h-12 items-center justify-center",
            leftIcon && "flex-row justify-center gap-2 items-start",
            mode === "green" ? "bg-green-600 border-green-200" : "bg-gray-700 border border-gray-600",
            width === "default" ? "w-[82%]" : "w-full"
            )}
        >   
            {leftIcon && (
                <MaterialIcons name={leftIcon} size={25} />
            )}
            <Text className={clsx(mode === "black" ? "text-white" : "")}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}