import { SafeAreaView } from "react-native-safe-area-context"
import { TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, Platform } from "react-native"
import { PropsWithChildren } from "react"

export function DismissKeyboardView({ children }: PropsWithChildren) {
    return (
        <SafeAreaView className="flex-1 bg-gray-900">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView
                    className="flex-1"
                    behavior="padding"
                >
                    {children}
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}