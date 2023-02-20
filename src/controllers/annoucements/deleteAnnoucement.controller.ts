import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appErros"
import { annoucementDeleteService } from "../../services/annoucements/deleteAnnoucement.service"

export const annoucementDeleteController = async (
  req: Request,
  res: Response
) => {
  try {

    const id = req.params.id
    const annoucements = await annoucementDeleteService(id)

    return res.status(204).send({
      message: "Annoucement deleted with success!",
      annoucements,
    })
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res)
    }
  }
}
