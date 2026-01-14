import { FormLoginParams } from "@/screens/Login/LoginForm";
import { costsDivider } from "@/shared/api/costs-divider";
import { IAuthenticateResponse } from "@/shared/interfaces/https/authenticate.response";

export async function authenticate(userData: FormLoginParams): Promise<IAuthenticateResponse> {
    const { data } = await costsDivider.post<IAuthenticateResponse>("/users/sign-in", userData)

    return data;
}