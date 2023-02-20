import { instanceToPlain } from "class-transformer";
import { Request, response, Response } from "express";
import { announcementsById } from "../../services/annoucements/getByIdAnnouncements.service";


export const listAnnouncementByIdController = async (req: Request, res: Response) => {
    
    const id: string = req.params.id
    const listAnnoucement = await announcementsById(id)

    return res.status(200).json(instanceToPlain(listAnnoucement))
}