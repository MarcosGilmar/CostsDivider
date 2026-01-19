import "./src/styles/global.css";

import { NavigationRoutes } from "@/routes";
import { Login } from "./src/screens/Login";
import { AuthContextProvider } from "@/context/auth.context";
import { SnackBarContextProvider } from "@/context/snackbar.context";
import { BottomSheetProvider } from "@/context/bottom-sheet.context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView className="flex-1">
      <SnackBarContextProvider>
        <AuthContextProvider>
          <BottomSheetProvider>
            <NavigationRoutes />
          </BottomSheetProvider>
        </AuthContextProvider>
      </SnackBarContextProvider>
    </GestureHandlerRootView>
  );
}
