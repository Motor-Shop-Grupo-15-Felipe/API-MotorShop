import AppDataSource from "../../data-source"
import { Announcement } from "../../entities/announcement.entity"
import {
  IAnnouncement
} from "../../interfaces/announcement"
import { AppError } from "../../errors/appErros"

export const annoucementCreateService = async ({
  announcementType,
  title,
  year,
  km,
  price,
  description,
  vehicleType,
  published,
  images,
}: IAnnouncement): Promise<IAnnouncement> => {
  const annoucementRepository = AppDataSource.getRepository(Announcement)

  const newAnnoucement = new Announcement()
  newAnnoucement.title = title
  newAnnoucement.description = description
  newAnnoucement.announcementType = announcementType
  newAnnoucement.km = km
  newAnnoucement.year = year
  newAnnoucement.price = price
  newAnnoucement.vehicleType = vehicleType
  newAnnoucement.published = published
  // newAnnoucement.images.push(images)

  const annoucementExist = await annoucementRepository.findOne({
    where: { title },
  })

  if (annoucementExist) {
    throw new AppError(400, "Annoucement already exists")
  }

  annoucementRepository.create(newAnnoucement)
  await annoucementRepository.save(newAnnoucement)

  return newAnnoucement
}
