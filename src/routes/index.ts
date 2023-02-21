import { Express } from "express"
import { routesAnnoucements } from "./adds/announcement.routes"
<<<<<<< HEAD
import { sessionRouter } from "./sesssions/sessions.routes"
import { usersRouter } from "./users/users.routes"


export const appRoutes = (app: Express) => {
  app.use("/annoucements", routesAnnoucements())
  //app.use("/users", usersRouter()),
  app.use("/login",sessionRouter())
  
=======
import { usersRouter } from "./users/users.routes"

export const appRoutes = (app: Express) => {
  app.use("/announcements", routesAnnoucements())
  app.use("/user", usersRouter())

>>>>>>> 21410c4a3a7d677c2d46f3727753005ca611c9e2
}
