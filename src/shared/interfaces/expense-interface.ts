import { IParticipant, IParticipantExpense } from "./participant-interface"

export interface IExpense {
    id: string
    name: string
    payerId: string
    payerName: string
    paymentStatus: string
    amountInCents: number
    participants: IParticipantExpense[]
}