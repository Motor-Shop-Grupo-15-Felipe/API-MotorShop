import { Express } from "express"
import { routesAnnoucements } from "./adds/announcement.routes"


export const appRoutes = (app: Express) => {
  app.use("/annoucements", routesAnnoucements())
  
}
