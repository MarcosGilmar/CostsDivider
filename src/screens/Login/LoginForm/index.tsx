import { useForm } from "react-hook-form"
import { ActivityIndicator, Text, View } from "react-native"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { yupResolver } from "@hookform/resolvers/yup"
import { AxiosError } from "axios"

import { AppInput } from "@/components/AppInput"
import { AppButton } from "@/components/AppButton"
import { PublicStackParamsList } from "@/routes/PublicRoutes"
import { schema } from "./schema"
import { useAuthContext } from "@/context/auth.context"
import { AppError } from "@/shared/helpers/AppError"
import { useSnackBarContext } from "@/context/snackbar.context"
import { useHandleError } from "@/shared/hooks/useHandleError"

export interface FormLoginParams {
    email: string
    password: string
}

export function LoginForm() {
    const {
        control,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<FormLoginParams>({
        defaultValues: {
            email: "",
            password: ""
        },
        resolver: yupResolver(schema)
    })

    const navigation = useNavigation<NavigationProp<PublicStackParamsList>>()

    const {handleAuthenticate} = useAuthContext()

    const handleError = useHandleError()

    async function onSubmit(userData: FormLoginParams) {
        try {
            await handleAuthenticate(userData)
        } catch (error) {
            handleError(error, "Falha ao logar")
        }
    }

    return (
            <View className="bg-gray-800 items-center h-[479] py-8 gap-10 rounded-t-2xl">
                <Text className="font-heading text-label-lg color-gray-300">Entre no App</Text>
                <View className="gap-4 justify-start">
                    <AppInput 
                        control={control}
                        name="email"
                        placeholder="E-mail"
                        leftIconName="email"
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
                    onPress={handleSubmit(onSubmit)}
                >
                    {
                        isSubmitting ? <ActivityIndicator /> : "Entrar"
                    }
                </AppButton>

                <View className="border-b border-gray-600 w-[82%]" />
                
                <View className="w-full justify-center items-center gap-4 mb-10" >
                    <Text className="text-gray-300">Ainda não tem cadastro?</Text>
                    <AppButton
                        mode="black"
                        onPress={() => navigation.navigate("Register")}
                    >
                        Criar conta
                    </AppButton>
                </View>
            </View>
    )
}