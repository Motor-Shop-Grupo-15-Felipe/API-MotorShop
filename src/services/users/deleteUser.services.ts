import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appErros";
import {AppDataSource} from "../../data-source";

const deleteUserService = async (
  idUser: string,
  idToBeDeleted: string
): Promise<void> => {
   const userRepository = AppDataSource.getRepository(User)
   const user = await userRepository.findOneBy({id:idToBeDeleted})

   if(!user){
    throw new AppError(404 , "User not found")
   }
   else if (idUser !== idToBeDeleted) {
    throw new AppError(401,"Unauthorized access")}

    await userRepository.delete(idToBeDeleted)

};
export default deleteUserService
