import { colors } from "@/shared/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";

interface ActivityModalParams {
    visible: boolean
    hideModal: () => void
}

export function ActivityModal({visible, hideModal }: ActivityModalParams) {

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={hideModal}
        >
            <View className="flex-1 justify-center items-center">
                <View className="flex-row justify-between p-6 rounded-xl bg-gray-700 h-[272px] w-[358px] self-center justify">
                    <Text className="text-gray-100 text-xl">Nova atividade</Text>
                    <TouchableOpacity onPress={hideModal}>
                        <MaterialIcons name="close" size={25} color={colors.gray[200]}/>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}