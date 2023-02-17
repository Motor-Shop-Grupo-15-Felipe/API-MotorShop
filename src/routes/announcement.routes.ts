import { Router } from "express"
import { annoucementCreateController } from "../controllers/annoucements/createAnnoucement.controller"
import { annoucementDeleteController } from "../controllers/annoucements/deleteAnnoucement.controller"
import { authUser } from "../middlewares/authUser.middleware"
import { annoucementListService } from "../services/annoucements/listAnnoucement.service"


const routes = Router()

export const routesAnnoucements = () => {
  routes.post("/", annoucementCreateController)
  routes.get("/", authUser, annoucementListService)
  routes.delete("/", authUser, annoucementDeleteController)

  return routes
}
