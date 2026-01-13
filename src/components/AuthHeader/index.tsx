import { useKeyboardVisible } from "@/shared/hooks/useKeyboardVisible";
import { Image, View } from "react-native";

export function AuthHeader() {
    const isKeyboardVisible = useKeyboardVisible()

    if(isKeyboardVisible) return <></>

    return (
        <View className={"flex-1 justify-center items-center"}>
            <Image 
                source={require("@/assets/Logo.png")}
            />
        </View>
    )
}