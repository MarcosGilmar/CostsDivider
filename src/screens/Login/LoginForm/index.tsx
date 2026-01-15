import { useForm } from "react-hook-form"
import { Text, View } from "react-native"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { yupResolver } from "@hookform/resolvers/yup"

import { AppInput } from "@/components/AppInput"
import { AppButton } from "@/components/AppButton"
import { PublicStackParamsList } from "@/routes/PublicRoutes"
import { schema } from "./schema"
import { useAuthContext } from "@/context/auth.context"
import { AxiosError } from "axios"

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

    async function onSubmit(userData: FormLoginParams) {
        try {
            await handleAuthenticate(userData)
        } catch (error) {
            if(error instanceof AxiosError) {
                console.log(error.response?.data)
            }
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
                    Entrar
                </AppButton>

                <View className="border-b border-gray-600 w-[82%]" />
                
                <View className="w-full justify-center items-center gap-4">
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