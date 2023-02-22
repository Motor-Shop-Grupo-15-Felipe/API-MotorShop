import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../../errors/appErros";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import { IUserLogin } from "../../interfaces/users";

const loginUserService = async ({
  email,
  password,
}: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({
    where: {
      email: email,
    },
  });
  if (!user) {
    throw new AppError(403, "Invalid email or password");
  }

  const passwordIsAMatch = await compare(password, user.password);
  if (!passwordIsAMatch) {
    throw new AppError(403, "Invalid email or password");
  }

  const token = jwt.sign({}, process.env.SECRET_KEY as string, {
    expiresIn: "24h",
    subject: user.id,
  });
  return token;
};
export default loginUserService;
