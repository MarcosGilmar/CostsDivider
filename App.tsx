import "./src/styles/global.css";

import { NavigationRoutes } from "@/routes";
import { Login } from "./src/screens/Login";
import { AuthContextProvider } from "@/context/auth.context";
import { SnackBarContextProvider } from "@/context/snackbar.context";

export default function App() {
  return (
    <SnackBarContextProvider>
      <AuthContextProvider>
        <NavigationRoutes />
      </AuthContextProvider>
    </SnackBarContextProvider>
  );
}
