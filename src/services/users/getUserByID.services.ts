import dataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appErros";

const getUserByIDService = async (id: string): Promise<User> => {
  const userRepository = dataSource.getRepository(User);
  const userToBeListed = await userRepository.findOneBy({ id });

  if (!userToBeListed) {
    throw new AppError(404, "User not found!");
  }

  return userToBeListed;
};
export default getUserByIDService;
