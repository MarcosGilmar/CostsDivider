import { MaterialIcons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ActivityIndicator, Modal, Pressable, Text, TouchableOpacity, View } from "react-native";

import { AppButton } from "@/components/AppButton";
import { AppInput } from "@/components/AppInput";
import { PrivateParamsList } from "@/routes/PrivateRoutes";
import { colors } from "@/shared/colors";
import { CreateActivityInterface } from "@/shared/interfaces/https/create-activity";
import { useHandleError } from "@/shared/hooks/useHandleError";
import { createActivity } from "@/shared/services/costs-divider/activity-service";
import { useSnackBarContext } from "@/context/snackbar.context";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";

interface ActivityModalParams {
    visible: boolean
    hideModal: () => void
    onActivityCreated: () => void
}

export function ActivityModal({visible, hideModal, onActivityCreated }: ActivityModalParams) { 
    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
        reset
    } = useForm<CreateActivityInterface>({
        defaultValues: {
            title: "",
            activityDate: new Date()
        },
        resolver: yupResolver(schema),
        mode: "onSubmit"
    })

    const handleError = useHandleError()

    const {notify} = useSnackBarContext()
    

    async function onSubmit(data: CreateActivityInterface) {
        try {
            await createActivity(data)

            notify({
                message: "Atividade criada com sucesso", 
                messageType: "SUCCESS"
            })

            reset()
            hideModal()
            onActivityCreated?.()
        } catch (error) {
            handleError(error, "Falha ao criar nova atividade")
        }
    }

    useEffect(() => {
        if(visible) {
            reset()
        }
    }, [visible, reset])
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={hideModal}
        >
            <Pressable 
                className="flex-1 justify-center items-center"
                onPress={hideModal}
            >
                <Pressable
                    className="flex-col rounded-xl gap-8 bg-gray-800 h-[272px] w-[358px] self-center"
                    onPress={() => {}}
                >
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
                </Pressable>
            </Pressable>
        </Modal>
    )
}