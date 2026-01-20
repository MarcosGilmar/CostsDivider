import { costsDivider } from "@/shared/api/costs-divider";
import { IActivity, IActivityDetails, IActivitySummary } from "@/shared/interfaces/activity-interface";
import { CreateActivityInterface } from "@/shared/interfaces/https/create-activity";
import { ReadActivities } from "@/shared/interfaces/https/read-activities";

export async function createActivity(ActivityData: CreateActivityInterface): Promise<IActivity> {
    const { data } = await costsDivider.post<IActivity>("/api/v1/activities", ActivityData)

    return data
}

export async function getActivities(userId: string): Promise<IActivitySummary[]>  {
    const { data } = await costsDivider.get<ReadActivities>(`/api/v1/users/${userId}/activities`)

    return data.activities
}

export async function getActivityById(id: string): Promise<IActivityDetails> {
    const { data } = await costsDivider.get<IActivityDetails>(`/api/v1/activities/${id}`)

    return data
}

export async function removeActivity(activityId: string): Promise<void> {
    await costsDivider.delete(`/api/v1/activities/${activityId}`)
}

export async function updateActivity(activityId: string, ActivityData: CreateActivityInterface): Promise<IActivity> {
    const { data } = await costsDivider.put(`/api/v1/activities/${activityId}`, ActivityData)

    return data
}

