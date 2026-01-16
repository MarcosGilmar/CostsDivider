import axios from "axios"
import { Platform } from "react-native"
import { AppError } from "../helpers/AppError";

const baseURL = Platform.select({
    ios: "http://localhost:8080",
    android: "http://10.0.2.2:8080",
});

export const costsDivider = axios.create({
    baseURL,
})

costsDivider.interceptors.request.use((config) => config, (error) => {
    if(error.response && error.response.data) {
        return Promise.reject(new AppError(error.response.data.message))
    } else {
        return Promise.reject(new AppError("Falha na requisição"))
    }
})

costsDivider.interceptors.response.use((response) => response, (error) => {
    if(error.response && error.response.data) {
        return Promise.reject(new AppError(error.response.data.reason || "Erro na resposta do servidor"))
    } else {
        return Promise.reject(new AppError("Falha na requisição"))
    }
})