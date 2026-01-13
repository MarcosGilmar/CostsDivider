import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Pressable, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"
import { useRef, useState } from "react";
import { clsx } from "clsx";

import { colors } from "@/shared/colors";

interface AppInputParams<T extends FieldValues> extends TextInputProps {
    control: Control<T>
    name: Path<T>
    leftIconName?: keyof typeof MaterialIcons.glyphMap
}

export function AppInput<T extends FieldValues>({
    control,
    name,
    leftIconName,
    secureTextEntry,
    ...rest
}: AppInputParams<T>) {
    const [isFocused, setIsFocused] = useState(false)
    const [showText, setShowText] = useState(false)
    const inputRef = useRef<TextInput>(null)

    function CheckFocus() {
        if(inputRef.current) {
            setIsFocused(inputRef.current.isFocused())
        }
    }

    return (
        <Controller 
            control={control}
            name={name}
            render={({ field: { onChange, value }}) => {
                return (
                        <Pressable 
                            onPress={() => inputRef.current?.focus()}
                            className={clsx(
                                "flex-row items-center border border-gray-600 rounded-xl px-4 h-12 gap-3 mb-3 w-[82%]",
                                isFocused ? "border-green-400" : "bg-gray-800"
                            )
                        }>
                            {leftIconName && <MaterialIcons name={leftIconName} color={isFocused ? colors.accent["green-light"] : colors.gray[200]} size={15}/>}
                            
                            <TextInput 
                                className="flex-1 text-base"
                                style={{ color:colors.gray[400]}}
                                value={value}
                                onChangeText={onChange}
                                placeholderTextColor={colors.gray[400]}
                                onFocus={CheckFocus}
                                onEndEditing={CheckFocus}
                                secureTextEntry={secureTextEntry && !showText}
                                ref={inputRef}
                                {...rest}
                            />

                            {
                                secureTextEntry && (
                                    <TouchableOpacity onPress={() => setShowText((prev) => !prev)}>
                                        <MaterialIcons name={showText ? "visibility" : "visibility-off"} color={colors.gray[100]}/>
                                    </TouchableOpacity>
                                )
                            }
                        </Pressable>                    
                )
            }}
        />
    )
}