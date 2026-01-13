import { useForm } from "react-hook-form"
import { Text, View } from "react-native"

import { AppInput } from "@/components/AppInput"
import { AppButton } from "@/components/AppButton"

export interface FormLoginParams {
    email: string
    password: string
}

export function LoginForm() {
    const {
        control,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<FormLoginParams>()

    return (
        <>
            <View className="bg-gray-800 items-center h-[390] py-10 gap-8 rounded-t-2xl">
                <Text className="font-heading text-label-lg color-gray-100">Entre no App</Text>
                <View>
                    <AppInput 
                        control={control}
                        name="email"
                        placeholder="E-mail"
                        leftIconName="email"
                        keyboardType="default"
                    />
                    <AppInput 
                        control={control}
                        name="password"
                        placeholder="Senha"
                        leftIconName="password"
                        secureTextEntry={true}
                    />
                </View>

                <AppButton
                    leftIcon="10k"
                >
                    Entrar
                </AppButton>
            </View>
        </>
    )
}