import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import { AppError } from "../../errors/appErros";

export const announcementsById = async(
    id: string
): Promise<Announcement> => {

    const announcementRepo = AppDataSource.getRepository(Announcement)

    const announcements = await announcementRepo.findOneBy({id})

    if (!announcements) {
        throw new AppError(404, "Announcement not found")
    }

    return announcements
}