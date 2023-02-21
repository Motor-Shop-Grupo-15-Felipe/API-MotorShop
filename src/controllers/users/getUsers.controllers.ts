import { Request, Response } from "express"
import { instanceToPlain } from "class-transformer"
import getUsersService from "../../services/users/getUsers.services"

const getUsersControllers = async (req:Request, res:Response) => {
    const users = await getUsersService()
    return res.json(instanceToPlain(users))
}
export default getUsersControllers