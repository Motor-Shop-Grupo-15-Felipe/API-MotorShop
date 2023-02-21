import { Router } from "express"
import logInUserController from "../../controllers/sessions/logInUser.controllers"

const routes = Router()

export const sessionRouter = () => {
    routes.post("/", logInUserController)
  
    return routes
  }