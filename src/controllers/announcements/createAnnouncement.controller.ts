import { instanceToPlain } from "class-transformer"
import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appErros"
import { announcementCreateService } from "../../services/annoucements/createAnnoucement.services"

export const announcementCreateController = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      title,
      description,
      vehicleType,
      km,
      year,
      price,
      plate,
      published,
      announcementType,
      images
    } = req.body

    const newAnnoucement = await announcementCreateService({
      title,
      description,
      vehicleType,
      km,
      year,
      price,
      plate,
      published,
      announcementType,
      images
    })

    return res.status(201).send(instanceToPlain(newAnnoucement))
  } catch (err) {
    if (err instanceof AppError) {
      return handleError(err, res)
    }
  }
}
