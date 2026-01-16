import { useSnackBarContext } from "@/context/snackbar.context"
import { AppError } from "../helpers/AppError"

export function useHandleError() {
    const {notify} = useSnackBarContext()
    
    function handleError(error: unknown, defaultMessage?: string) {
        const isAppError = error instanceof AppError

        const message = isAppError ? error.message : defaultMessage ?? "Falha na requisição"

        notify({
            message,
            messageType: "ERROR"
        })
    }
    
    return (
        handleError
    )
}