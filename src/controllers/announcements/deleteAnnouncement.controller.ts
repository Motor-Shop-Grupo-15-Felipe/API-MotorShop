import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appErros"
import { announcementDeleteService } from "../../services/annoucements/deleteAnnouncement.service"

export const announcementDeleteController = async (
  req: Request,
  res: Response
) => {
  try {

    const id = req.params.id
    const annoucements = await announcementDeleteService(id)

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
