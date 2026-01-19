import { IUser } from "../user-interface";

export interface IAuthenticateResponse extends IUser {
    token: string
}