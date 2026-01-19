import { createContext, PropsWithChildren, ReactNode, useCallback, useContext, useRef, useState } from "react";
import BottomSheet, {BottomSheetScrollView} from "@gorhom/bottom-sheet"
import { TouchableWithoutFeedback, View } from "react-native";

export interface BottomSheetContextType {
    openBottomSheet: (content: ReactNode, index: number) => void
    closeBottomSheet: () => void
}

export const BottomSheetContext = createContext<BottomSheetContextType>({} as BottomSheetContextType)

export function BottomSheetProvider({children}: PropsWithChildren) {
    const [content, setContent] = useState<ReactNode | null>(null)
    const [index, setIndex] = useState(-1)
    const [isOpen, setIsOpen] = useState(false)
    const bottomSheetRef = useRef<BottomSheet>(null)
    const snapPoints = ["50%", "40%"]

    const openBottomSheet = useCallback(
        (newContent: ReactNode, index: number) => {
            setIndex(index)
            setContent(newContent)
            setIsOpen(true)
            requestAnimationFrame(() => {
                bottomSheetRef.current?.snapToIndex(index)
            })
    }, [])

    const closeBottomSheet = useCallback(
        () => {
            setIndex(-1)
            setContent(null)
            setIsOpen(false)
            bottomSheetRef.current?.close()
    }, [])

    const handleSheetChanges = useCallback(() => {
        if(index === -1) {
            setIsOpen(false)
        }
    }, [])
    
    return (
        <BottomSheetContext.Provider
            value={{
                closeBottomSheet,
                openBottomSheet
            }}
        >
            {children}

            {
                isOpen && (
                    <TouchableWithoutFeedback onPress={closeBottomSheet}>
                        <View className="absolute inset-0 bg-black/70 z-1"/>
                    </TouchableWithoutFeedback>
                )
            }

            <BottomSheet
                ref={bottomSheetRef}
                snapPoints={snapPoints}
                style={{ zIndex: 2 }}
                index={index}
                onChange={handleSheetChanges}
                enablePanDownToClose
                backgroundStyle={{
                    backgroundColor: "#1f2937",
                    elevation: 9
                }}
            >
                <BottomSheetScrollView>
                    {content}
                </BottomSheetScrollView>
            </BottomSheet>
        </BottomSheetContext.Provider>
    )
}

export function useBottomSheetContext() {
    const context = useContext(BottomSheetContext)

    return context
} 