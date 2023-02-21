import { Router } from "express"
import { announcementCreateController } from "../../controllers/announcements/createAnnouncement.controller"
import { announcementDeleteController } from "../../controllers/announcements/deleteAnnouncement.controller"
import { announcementsListController } from "../../controllers/announcements/listAnnouncement.controller"
import { listAnnouncementByIdController } from "../../controllers/announcements/getByIdAnnouncement.controller"
import { updateAnnouncementController } from "../../controllers/announcements/updateAnnouncement.controller"
// import { authUser } from "../middlewares/authUser.middleware"


const routes = Router()

export const routesAnnoucements = () => {
  routes.post("/",  announcementCreateController)
  routes.get("/", announcementsListController)
  routes.get("/:id", listAnnouncementByIdController)
  routes.patch("/:id", updateAnnouncementController)
  routes.delete("/", announcementDeleteController)

  return routes
}
