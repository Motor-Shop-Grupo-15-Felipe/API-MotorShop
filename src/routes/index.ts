import { Express } from "express"
import { routesAnnoucements } from "./adds/announcement.routes"
import { usersRouter } from "./users/users.routes"

export const appRoutes = (app: Express) => {
  app.use("/announcements", routesAnnoucements())
  app.use("/user", usersRouter())

}
