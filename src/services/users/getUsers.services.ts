import AppDataSource from "../../data-source"
import { User } from "../../entities/users.entity"

const getUsersService = async (): Promise<User[]> => {
    const userRepository = AppDataSource.getRepository(User)
    const usersList = await userRepository.find()

    return usersList

}
export default getUsersService