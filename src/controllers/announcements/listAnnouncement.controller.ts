import { instanceToPlain } from "class-transformer"
import { Response, Request } from "express"
import { AppError, handleError } from "../../errors/appErros"
import { annoucementListService} from "../../services/annoucements/listAnnoucement.services"

export const announcementsListController = async (
  req: Request,
  res: Response
) => {
  try {
    const annoucements = await annoucementListService()

    const title = annoucements.map((announcement) => {
      return { id: announcement.id, title: announcement.title }
    })

    return res.status(200).send(title)
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res)
    }
  }
}
