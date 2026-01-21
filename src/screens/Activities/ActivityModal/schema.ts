import * as yup from "yup"

export const schema = yup.object().shape({
    title: yup.string().required("Campo de título obrigatório"),
    activityDate: yup.date().required("Campo de data é obrigatório")
})