import { View, Text, TouchableOpacity, FlatList, RefreshControl } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { ActivityModal } from "./ActivityModal"
import { useEffect, useState } from "react"

import { AppButton } from "@/components/AppButton"
import { useBottomSheetContext } from "@/context/bottom-sheet.context"
import { CreateActivityInterface } from "@/shared/interfaces/https/create-activity"
import { IActivitySummary } from "@/shared/interfaces/activity-interface"
import { getActivities } from "@/shared/services/costs-divider/activity-service"
import { useAuthContext } from "@/context/auth.context"
import { useHandleError } from "@/shared/hooks/useHandleError"
import { ActivityItem } from "./ActivityItem"


export function Activities() {
    const { user } = useAuthContext()

    const [modalVisible, setModalVisible] = useState(false)
    const [activities, setActivities] = useState<IActivitySummary[]>([])
    const [refresh, setRefresh] = useState<boolean>(false)

    const handleError = useHandleError()

    useEffect(() => {
        if(!user) return

        fetchActivities()
    }, [user])
    
    function showModal() {
        setModalVisible(true)
    }

    function hideModal() {
        setModalVisible(false)
    }
    
    async function onRefresh() {
        setRefresh(true)

        try {
            await fetchActivities()
        } catch (error) {
            handleError(error, "Falha ao buscar atividades")
        } finally {
            setRefresh(false)
        }
        
    }

    async function fetchActivities() {
        try {
            const activityData = await getActivities(user!.id)
    
            setActivities(activityData)
        } catch (error) {
            handleError(error, "Não foi possível acessar as atividades")
        }
    }
    
    return (
        <View className="flex-1 bg-gray-900 px-6 gap-6">
            <View className="gap-2">
                <Text className="text-gray-100 text-xl">Atividades</Text>
                <Text className="text-gray-500 text-md">Organize suas despesas divididas</Text>
            </View>

            <FlatList
                data={activities}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <ActivityItem 
                        id={item.id}
                        name={item.name}
                        activityDate={item.activityDate}
                        expensesAmount={item.expensesAmount}
                        participants={item.participants}
                        participantsAmount={item.participantsAmount}
                        totalAmountInCents={item.totalAmountInCents}
                    />
                )}
                refreshControl={(
                    <RefreshControl 
                        refreshing={refresh}
                        onRefresh={onRefresh}
                    />
                )}
                
            />

            <View className="absolute bottom-6 right-6">
                <AppButton
                    leftIcon="add"
                    width="variant"
                    onPress={showModal}
                >
                    Criar
                </AppButton>
            </View>

            <ActivityModal 
                visible={modalVisible} 
                hideModal={hideModal}
                onActivityCreated={fetchActivities}
            />
        </View> 
    )
}