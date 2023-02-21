import { hash } from "bcrypt";
import { User } from "../../entities/users.entity";
import { IUserCreate } from "../../interfaces/users";
import { AppError } from "../../errors/appErros";
import dataSource from "../../data-source";

const createUserService = async ({
  name,
  email,
  password,
  phone,
  cpf,
  date_of_birth,
  description,
}: IUserCreate): Promise<User> => {
  const userRepository = dataSource.getRepository(User);
  const emailAlreadyExists = await userRepository.findOne({
    where: {
      email: email,
    },
  });
  if (emailAlreadyExists) {
    throw new AppError(400, "Email already being used");
  }

  const cpfAlreadyExists = await userRepository.findOne({
    where: {
      cpf: cpf,
    },
  });

  if (cpfAlreadyExists) {
    throw new AppError(400, "Cpf already being used");
  }

  const hashedPassword = await hash(password, 10)
  
  const newUser = userRepository.create({
    name,
    email,
    phone,
    cpf,
    date_of_birth,
    description,
    password: hashedPassword,
  })

  await userRepository.save(newUser)

  return newUser

};

export default createUserService
