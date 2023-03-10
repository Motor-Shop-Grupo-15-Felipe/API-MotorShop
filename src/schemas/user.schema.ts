import * as yup from "yup"
import YupPassword from "yup-password"

import { Schema } from "yup"
import { IUserRequest } from "../interfaces/user"

YupPassword(yup)

export const userSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  cpf: yup.string().min(11).max(11).required(),
  password: yup
    .string()
    .min(8, "A senha deve conter no mínimo oito caracteres!")
    // .minUppercase(1, "A senha deve conter pelo menos uma letra maiúscula!")
    // .minNumbers(1, "A senha deve conter pelo menos um número!")
    .required(),
  
  address: yup.object().shape({
    street: yup.string(),
    number: yup.string(),
    complement: yup.string(),
    cep: yup.string(),
    city: yup.string(),
    state: yup.string()
  }),

  birthDate: yup.string(),
  phone: yup.string(),
  image: yup.string(),
  bio: yup.string(),
  isActive: yup.boolean(),
  isSeller: yup.boolean(),
})
