import { instanceToPlain } from "class-transformer"
import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appErros"
import { annoucementCreateService } from "../../services/annoucements/createAnnoucement.service"

export const annoucementCreateController = async (
  req: Request,
  res: Response
) => {
  try {
    const { title, description, vehicleType, km, year, price, published, announcementType, images } =
      req.body

    const newAnnoucement = await annoucementCreateService({
      title,
      description,
      vehicleType,
      km,
      year,
      price,
      published,
      announcementType,
      // images
    })

    return res.status(201).send(instanceToPlain(newAnnoucement))
  } catch (err) {
    if (err instanceof AppError) {
      return handleError(err, res)
    }
  }
}
