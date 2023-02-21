import { Router } from "express"
import { annoucementCreateController } from "../../controllers/annoucements/createAnnoucement.controller"
import { annoucementDeleteController } from "../../controllers/annoucements/deleteAnnoucement.controller"
import { listAnnouncementsController } from "../../controllers/annoucements/getAnnouncements.controller"
import { listAnnoucementByIdController } from "../../controllers/annoucements/getByIdAnnouncement.controller"
import { updateAnnouncementController } from "../../controllers/annoucements/updateAnnouncement.controller"
// import { authUser } from "../middlewares/authUser.middleware"


const routes = Router()

export const routesAnnoucements = () => {
  routes.post("/", annoucementCreateController)
  routes.get("/", listAnnouncementsController)
  routes.get("/:id", listAnnoucementByIdController)
  routes.patch("/:id", updateAnnouncementController)
  routes.delete("/", annoucementDeleteController)

  return routes
}
