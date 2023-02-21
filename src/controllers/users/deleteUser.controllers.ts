import { Request, Response } from "express"
import deleteUserService from "../../services/users/deleteUser.services"

const deleteUserController = async (req: Request, res: Response) => {
    const idUser = req.user.id
    const idToBeDeleted = req.params.id
    await deleteUserService(idToBeDeleted,idUser)

    return res.status(204).send()

}

export default deleteUserController