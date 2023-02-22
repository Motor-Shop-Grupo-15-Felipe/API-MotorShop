import { Express } from "express"
import { routesAnnoucements } from "./adds/announcement.routes"
import { sessionRouter } from "./sessions/sessions.routes"
import { usersRouter } from "./users/users.routes"
import { routesComments } from "./comment/comments.routes"

export const appRoutes = (app: Express) => {
  app.use("/annoucements", routesAnnoucements())
  app.use("/users", usersRouter()),
  app.use("/login", sessionRouter()),
  app.use("/comment", routesComments())
}
