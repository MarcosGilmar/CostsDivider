import axios from "axios"
import { Platform } from "react-native"
import { AppError } from "../helpers/AppError";
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = Platform.select({
    ios: "http://localhost:8080",
    android: "http://10.0.2.2:8080",
});

export const costsDivider = axios.create({
    baseURL,
})

costsDivider.interceptors.request.use(async (config) => {
    const getData = await AsyncStorage.getItem("costs-divider")

    if(getData) {
        const { token } = JSON.parse(getData)

        if(token) {
            config.headers.Authorization = `Beared ${token}`
        }
    }
    
    return config
}, (error) => {
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