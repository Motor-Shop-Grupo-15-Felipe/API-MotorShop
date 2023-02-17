import { Express } from "express"
import { routesAnnoucements } from "./announcement.routes"


export const appRoutes = (app: Express) => {
  app.use("/annoucements", routesAnnoucements())
  
}
