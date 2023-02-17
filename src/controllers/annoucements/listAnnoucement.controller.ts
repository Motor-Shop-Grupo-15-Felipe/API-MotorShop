import { instanceToPlain } from "class-transformer"
import { Response, Request } from "express"
import { AppError, handleError } from "../../errors/appErros"
import { annoucementListService } from "../../services/annoucements/listAnnoucement.service"

export const annoucementsListController = async (
  req: Request,
  res: Response
) => {
  try {
    const id = req.annoucement.id
    const annoucements = await annoucementListService(id)

    return res.status(200).send(instanceToPlain(annoucements))
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res)
    }
  }
}
