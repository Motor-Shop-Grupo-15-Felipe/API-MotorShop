import { hash } from "bcrypt";
import {AppDataSource} from "../../data-source";
import { User } from "../../entities/users.entity";
import { IUserUpdate } from "../../interfaces/users";
import { AppError } from "../../errors/appErros";

const updateUserService = async (
  data: IUserUpdate,
  idUser: string,
  idToBeUpdated: string
): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const userToUpdate = await userRepository.findOne({
    where: {
      id: idToBeUpdated,
    },
  });
  if (!userToUpdate) {
    throw new AppError(404, "User not found!");
  } else if (idUser !== idToBeUpdated) {
    throw new AppError(401, "Unauthorized access!");
  } else if (
    Object.keys(data).includes("id") ||
    Object.keys(data).includes("email")
  ) {
    throw new AppError(
      401,
      "You can not update the user's informations such as: id and/or email"
    );
  }

  await userRepository.update(idToBeUpdated, {
    ...userToUpdate,
    ...data,
    password: data.password
      ? await hash(data.password, 10)
      : userToUpdate.password,
  });
  const userUpdated = await userRepository.findOne({
    where: {
      id: idToBeUpdated,
    },
  });
  return userUpdated!;
};
export default updateUserService;
