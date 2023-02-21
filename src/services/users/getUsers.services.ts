import dataSource from "../../data-source"
import { User } from "../../entities/users.entity"

const getUsersService = async (): Promise<User[]> => {
    const userRepository = dataSource.getRepository(User)
    const usersList = await userRepository.find()

    return usersList

}
export default getUsersService