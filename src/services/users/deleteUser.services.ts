import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appErros";
import dataSource from "../../data-source";

const deleteUserService = async (
  idUser: string,
  idToBeDeleted: string
): Promise<void> => {
   const userRepository = dataSource.getRepository(User)
   const user = await userRepository.findOneBy({id:idToBeDeleted})

   if(!user){
    throw new AppError(404 , "User not found")
   }
   else if (idUser !== idToBeDeleted) {
    throw new AppError(401,"Unauthorized access")}

    await userRepository.delete(idToBeDeleted)

};
export default deleteUserService
