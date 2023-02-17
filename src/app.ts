import "reflect-metadata"

import "express-async-errors"
import express, { Response, Request, NextFunction } from "express"
import { AppError } from "./errors/appErros"

const app = express()
app.use(express.json())
/*appRoutes(app)*/
app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    })
  }
  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  })
})

export default app

/*app.listen(3000)*/
