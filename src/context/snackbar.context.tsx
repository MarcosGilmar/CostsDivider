import { createContext, ReactNode, useContext, useState } from "react"

export type SnackBarMessageType = "ERROR" | "SUCCESS"

interface NotifyMessageParams {
    message: string
    messageType: SnackBarMessageType
}

export type SnackBarContextType = {
    message: string | null
    type: SnackBarMessageType | null
    notify: (params: NotifyMessageParams) => void
}

const SnackBarContext = createContext<SnackBarContextType>({} as SnackBarContextType)

export function SnackBarContextProvider({ children}: {children: ReactNode}) {

    const [message, setMessage] = useState<string | null>(null)
    const [type, setType] = useState<SnackBarMessageType | null>(null)

    function notify({message, messageType}: NotifyMessageParams) {
        setMessage(message);
        setType(messageType);
        setTimeout(() => {
            setMessage(null)
            setType(null)
        }, 3000)
    }

    return(
        <SnackBarContext.Provider
            value={{
                message,
                type,
                notify
            }}
        >
            {children}
        </SnackBarContext.Provider>
    )
}

export function useSnackBarContext() {
    const context = useContext(SnackBarContext)

    return context
}