import { FormLoginParams } from "@/screens/Login/LoginForm";
import { FormRegisterParams } from "@/screens/Register/RegisterForm";
import { costsDivider } from "@/shared/api/costs-divider";
import { IAuthenticateResponse } from "@/shared/interfaces/https/authenticate-response";

export async function authenticate(userData: FormLoginParams): Promise<IAuthenticateResponse> {
    const { data } = await costsDivider.post<IAuthenticateResponse>("/api/v1/users/sign-in", userData)
    
    return data;
}

export async function register(userData: FormRegisterParams): Promise<IAuthenticateResponse> {
    const { data } = await costsDivider.post<IAuthenticateResponse>("/api/v1/users/sign-up", userData)

    return data;
}