import { Request, Response } from "express"
import { instanceToPlain } from "class-transformer"
import updateUserService from "../../services/users/updateUser.services"

const updateUserController = async (req:Request, res:Response) => {
    const data = req.body
    const userId = req.user.id
    const idToBeUpdated = req.params.id

    const userUpdated = await updateUserService(data, userId, idToBeUpdated)
    return res.json(instanceToPlain(userUpdated))

}
export default updateUserController