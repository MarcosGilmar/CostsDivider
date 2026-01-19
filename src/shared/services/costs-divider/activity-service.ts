import { costsDivider } from "@/shared/api/costs-divider";
import { IActivity } from "@/shared/interfaces/activity-interface";
import { CreateActivityInterface } from "@/shared/interfaces/https/create-activity";

export async function createActivity(ActivityData: CreateActivityInterface): Promise<IActivity> {
    const { data } = await costsDivider.post<IActivity>("/api/v1/activities", ActivityData)

    return data
}

