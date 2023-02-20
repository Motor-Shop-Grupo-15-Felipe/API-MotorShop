import { instanceToPlain } from "class-transformer"
import { Response, Request } from "express"
import { AppError, handleError } from "../../errors/appErros"
import { announcementsListService } from "../../services/annoucements/listAnnouncements.service"

export const announcementsListController = async (
  req: Request,
  res: Response
) => {
  try {
    const annoucements = await announcementsListService()

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
