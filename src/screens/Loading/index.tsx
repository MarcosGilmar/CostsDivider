import { useAuthContext } from "@/context/auth.context";
import { useEffect } from "react";
import { ActivityIndicator, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
    setLoading: (value: boolean) => void
}

export function Loading({ setLoading }:Props) {
    
    const {restoreUserSession, handleLogout} = useAuthContext()

    useEffect(() => {
        (async () => {
            try {
                const user = await restoreUserSession()

                if(!user) {
                    await handleLogout()
                }
            } catch (error) {
                await handleLogout()
            } finally {
                setLoading(false)
            }
        })()
    }, [])
    
    return (
        <SafeAreaView className="flex-1 justify-center items-center gap-5 bg-gray-900">
            <Image
                source={require("@/assets/Logo.png")}
            />
            <ActivityIndicator />
        </SafeAreaView>
    )
}