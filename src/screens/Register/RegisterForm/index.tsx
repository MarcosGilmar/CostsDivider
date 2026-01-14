import { AppButton } from "@/components/AppButton";
import { AppInput } from "@/components/AppInput";
import { PublicStackParamsList } from "@/routes/PublicRoutes";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { ScrollView, Text, View } from "react-native";
import { schema } from "./schema";

export interface RegisterFormParams {
    name: string
    email: string
    password: string
}

export function RegisterForm() {
    const {
        control,
        handleSubmit,
        formState
    } = useForm<RegisterFormParams>({
        defaultValues: {
            email: "",
            name: "",
            password: ""
        },
        resolver: yupResolver(schema)
    })

    const navigation = useNavigation<NavigationProp<PublicStackParamsList>>()

    async function onSubmit() {

    }

    return (
        <View className="bg-gray-800 items-center py-5 rounded-t-2xl">
            <ScrollView 
                className="w-full"
                contentContainerClassName="items-center gap-10"
                showsVerticalScrollIndicator={false}
            >
                <Text className="font-heading text-label-lg color-gray-300">Crie sua conta</Text>
                
                <View className="gap-3">
                <AppInput 
                    control={control}
                    name="name"
                    placeholder="Nome"
                    leftIconName="account-circle"
                />
                
                <AppInput 
                    control={control}
                    name="email"
                    placeholder="Email"
                    leftIconName="mail"
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
                Cadastrar
            </AppButton>

            <View className="border-b border-gray-600 w-[82%]" />
            
            <View className="w-full justify-center items-center gap-4">
                <Text className="text-gray-300">Já tem cadastro?</Text>
                <AppButton
                    mode="black"
                    onPress={() => navigation.navigate("Login")}
                >
                    Entrar na conta
                </AppButton>
            </View>
            </ScrollView>
        </View>        
    )
}