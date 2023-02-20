import { AppDataSource } from "../../data-source"
import { Announcement } from "../../entities/announcement.entity"

export const announcementsListService = async () => {
  const annoucementRepository = AppDataSource.getRepository(Announcement)

  const annoucements = await annoucementRepository.find()

  return annoucements
}
