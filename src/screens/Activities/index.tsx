import { AppButton } from "@/components/AppButton"
import { View, Text, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { ActivityModal } from "./ActivityModal"
import { useState } from "react"
import { useBottomSheetContext } from "@/context/bottom-sheet.context"

export function Activities() {
    const [modalVisible, setModalVisible] = useState(false)

    function showModal() {
        setModalVisible(true)
    }

    function hideModal() {
        setModalVisible(false)
    }

    return (
        <View className="flex-1 bg-gray-900">
            <View className="px-6 gap-2">
                <Text className="text-gray-100 text-xl">Atividades</Text>
                <Text className="text-gray-500 text-md">Organize suas despesas divididas</Text>
            </View>

            <View className="absolute bottom-6 right-6">
                <AppButton
                    leftIcon="add"
                    width="variant"
                    onPress={showModal}
                >
                    Criar
                </AppButton>
            </View>

            <ActivityModal 
                visible={modalVisible} 
                hideModal={hideModal}
            />
        </View> 
    )
}