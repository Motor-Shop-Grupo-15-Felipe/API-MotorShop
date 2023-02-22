import { AppDataSource } from "../../data-source"
import { AppError } from "../../errors/appErros"

import { User } from "../../entities/users.entity"
import { IUserCreate } from "../../interfaces/users"

import { hash } from "bcrypt"

import { Address } from "../../entities/address.entity"
import getAddress from "../../utils/viaCep"

const createUserService = async ({
  name,
  email,
  password,
  phone,
  cpf,
  address,
  date_of_birth,
  description,
}: IUserCreate): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User)

  const emailAlreadyExists = await userRepository.findOne({
    where: {
      email: email,
    },
  })
  if (emailAlreadyExists) {
    throw new AppError(400, "Email already being used")
  }

  const cpfAlreadyExists = await userRepository.findOne({
    where: {
      cpf: cpf,
    },
  })

  if (cpfAlreadyExists) {
    throw new AppError(400, "CPF already being used")
  }

  const hashedPassword = await hash(password, 10)

  const addressRepository = AppDataSource.getRepository(Address)

  const findAddress = await addressRepository.findOneBy({
    zipCode: address?.zipCode,
    number: address?.number,
  })

  const addressData = await getAddress(address.zipCode)

  const newAddress = findAddress
    ? findAddress
    : await addressRepository.save({
        zipCode: addressData.cep,
        city: addressData.localidade,
        state: addressData.uf,
        district: addressData.bairro,
        number: address.number,
        complement: address.complement || addressData.complemento,
      })

  const newUser = userRepository.create({
    name,
    email,
    phone,
    cpf,
    address: newAddress,
    date_of_birth,
    description,
    password: hashedPassword,
  })

  await userRepository.save(newUser)

  return newUser
}

export default createUserService
