import { MaterialIcons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ActivityIndicator, Modal, Text, TouchableOpacity, View } from "react-native";

import { AppButton } from "@/components/AppButton";
import { AppInput } from "@/components/AppInput";
import { PrivateParamsList } from "@/routes/PrivateRoutes";
import { colors } from "@/shared/colors";
import { CreateActivityInterface } from "@/shared/interfaces/https/create-activity";
import { useHandleError } from "@/shared/hooks/useHandleError";

interface ActivityModalParams {
    visible: boolean
    hideModal: () => void
}

export function ActivityModal({visible, hideModal }: ActivityModalParams) { 
    const {
        control,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<CreateActivityInterface>({
        defaultValues: {
            title: "",
            activityDate: new Date()
        }
    })

    const handleError = useHandleError()

    async function onSubmit(data: CreateActivityInterface) {
        try {
            hideModal()
        } catch (error) {
            handleError(error, "Falha ao criar nova atividade")
        }
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={hideModal}
        >
            <View className="flex-1 justify-center items-center">
                <View className="flex-col rounded-xl gap-8 bg-gray-800 h-[272px] w-[358px] self-center">
                    <View className="flex-row justify-between pt-5 px-8">
                        <Text className="text-gray-100 text-xl">Nova atividade</Text>
                        <TouchableOpacity onPress={hideModal}>
                            <MaterialIcons name="close" size={25} color={colors.gray[200]}/>
                        </TouchableOpacity>
                    </View>
                
                    <View className="flex-col gap-4">
                        <AppInput 
                            control={control}
                            name="title"
                            placeholder="Título"
                        />
                        <AppInput 
                            control={control}
                            name="activityDate"
                            placeholder="Data"
                            leftIconName="calendar-month"
                            datePicker={true}
                        />
                    </View>

                    <View className="justify-center items-center">
                        <AppButton 
                            onPress={handleSubmit(onSubmit)}
                        >
                            {
                                isSubmitting ? <ActivityIndicator /> : "Salvar"
                            }
                        </AppButton>
                    </View>
                </View>
            </View>
        </Modal>
    )
}