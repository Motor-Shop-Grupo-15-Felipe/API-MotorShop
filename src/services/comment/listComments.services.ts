import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appErros";

export const listCommentsService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const findComments = await userRepository.findOne({
    where: {
      id,
    },
    relations: {
      comments: true,
    },
  });

  if (!findComments) {
    throw new AppError(404, "User not found");
  }

  if (findComments.comments.length < 1) {
    throw new AppError(404, "Comments not found");
  }

  return findComments;
};
