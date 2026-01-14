import * as yup from "yup"

export const schema = yup.object().shape({
    email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
    password: yup.string().min(6, "A senha deve conter pelomenos 6 caracteres").required("Senha obrigatória")
})