import { instanceToPlain } from "class-transformer"
import { Response } from "express"
import { announcementsList } from "../../services/annoucements/getAnnouncements.services"

export const listAnnouncementsController = async ( res: Response) => {
    const list = await announcementsList()

    return res.status(200).send(instanceToPlain(list))
}