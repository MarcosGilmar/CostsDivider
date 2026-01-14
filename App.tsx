import "./src/styles/global.css";

import { NavigationRoutes } from "@/routes";
import { Login } from "./src/screens/Login";
import { AuthContextProvider } from "@/context/auth.context";

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationRoutes />
    </AuthContextProvider>
  );
}
