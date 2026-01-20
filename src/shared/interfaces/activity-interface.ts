import { IExpense } from "./expense-interface"
import { IParticipant } from "./participant-interface"

export interface IActivity {
    activityDate: string
    id: string
    name: string
    createdAt: string
}

export interface IActivitySummary {
    id: string
    name: string
    participants: IParticipant[]
    participantsAmount: number
    totalAmountInCents: number
    activityDate: string
    expensesAmount: number
}

export interface IActivityDetails {
    id: string
    name: string
    activityDate: string
    participants: IParticipant[]
    expenses: IExpense[]
    totalAmountInCents: number

}