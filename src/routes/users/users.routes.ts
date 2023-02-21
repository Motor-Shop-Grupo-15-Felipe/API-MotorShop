import { Router } from "express"

import createUserController from "../../controllers/users/createUser.controllers"
import deleteUserController from "../../controllers/users/deleteUser.controllers"
import getUserByIDController from "../../controllers/users/getUserByID.controllers"
import getUsersControllers from "../../controllers/users/getUsers.controllers"
import updateUserController from "../../controllers/users/updateUser.controllers"


const routes = Router()

export const usersRouter = () => {
    routes.post("/", createUserController),
    routes.get("/", getUsersControllers),
    routes.get("/:id", getUserByIDController),
    routes.patch("/:id", updateUserController ),
    routes.delete("/:id", deleteUserController)

    return routes

}