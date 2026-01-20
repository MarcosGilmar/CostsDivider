export interface IParticipant {
    email: string
    name: string
    id: string
}

export interface IParticipantExpense extends IParticipant {
    paymentStatus: string
}