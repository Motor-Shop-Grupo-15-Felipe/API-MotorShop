import { Express } from "express"
import { routesAnnoucements } from "./adds/announcement.routes"
import { sessionRouter } from "./sesssions/sessions.routes"
import { usersRouter } from "./users/users.routes"


export const appRoutes = (app: Express) => {
  app.use("/annoucements", routesAnnoucements())
  //app.use("/users", usersRouter()),
  app.use("/login",sessionRouter())
  
}
