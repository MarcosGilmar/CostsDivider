import { IActivitySummary } from "@/shared/interfaces/activity-interface";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

import { colors } from "@/shared/colors";
import { formatDate } from "@/shared/helpers/formatDate";
import { formatValue } from "@/shared/helpers/formatValue";


export function ActivityItem({
    name,
    expensesAmount,
    activityDate,
    participantsAmount,
    totalAmountInCents
}: IActivitySummary) {
    return (
        <Pressable className="flex-1 py-4 px-8 bg-gray-800 rounded-xl justify-center gap-4 my-2">
            <View className=" flex-row justify-between">
                <Text className="text-gray-100 text-md">{name}</Text>
                <Text className="text-gray-100 text-md">{formatValue(expensesAmount)}</Text>
            </View>

            <View className="h-[0.3px] bg-gray-500"/>

            <View className="flex-row justify-between ">
                <View className="flex-row items-center gap-2">
                    <MaterialIcons name="calendar-month" color="#4b5563"/>
                    <Text className="text-gray-600">{formatDate(new Date(activityDate))}</Text>
                </View>
                <View className="flex-row items-center gap-2">
                    <MaterialIcons name="group" color="#4b5563"/>
                    <Text className="text-gray-600">{participantsAmount} {participantsAmount === 1 ? "pessoa" : "pessoas"}</Text>
                </View>
                <View className="flex-row items-center gap-2">
                    <MaterialIcons name="paid" color="#4b5563"/>
                    <Text className="text-gray-600">{expensesAmount} {expensesAmount === 1 ? "despesa" : "despesas"}</Text>
                </View>
            </View>
        </Pressable>
    )
}