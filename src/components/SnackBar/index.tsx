import { useSnackBarContext } from "@/context/snackbar.context";
import { Text, View } from "react-native";

export function SnackBar() {
    const {message, type} = useSnackBarContext()

    if(!message || !type) {
        return <></>
    }

    const bgColor = `${
        type === "SUCCESS"
            ? "bg-green-600"
            : "bg-red-600"
    }`
        
    return (
        <View style={{zIndex: 9999, elevation: 9999}} className={`absolute justify-center items-center bottom-14 self-center w-[90%] rounded-2xl h-[50px] ${bgColor}`}>
            <Text className="text-white text-base font-bold">{message}</Text>
        </View>
    )
}