import { Request, Response } from "express"
import { IAnnouncementsRequest } from "../../interfaces/announcement"
import { updateAnnouncement } from "../../services/annoucements/updateAnnouncements.services"

export const updateAnnouncementController = async (req: Request, res: Response) => {
    
    const annoucement: IAnnouncementsRequest = req.body
    
    const id: string = req.params.id

    const update = await updateAnnouncement(annoucement, id)

    return res.status(204).json(update)
}