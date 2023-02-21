import { AppDataSource } from "../../data-source"
import { AppError } from "../../errors/appErros"
import { Announcement } from "../../entities/announcement.entity"

export const announcementDeleteService = async (id: string) => {
  const annoucementRepository = AppDataSource.getRepository(Announcement)

  const annoucements = await annoucementRepository.findOneBy({
    id,
  })

  if (!annoucements?.isActive) {
    throw new AppError(409, "Annoucement already deactived")
  }

  annoucements!.isActive = false

  await annoucementRepository.save(annoucements!)

  return false
}
